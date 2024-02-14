# `monitor` Submodule <a name="`monitor` Submodule" id="@cdktf/provider-datadog.monitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Monitor <a name="Monitor" id="@cdktf/provider-datadog.monitor.Monitor"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor datadog_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.Monitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new Monitor(Construct Scope, string Id, MonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig">MonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorConfig">MonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds">PutMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholdWindows">PutMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.putSchedulingOptions">PutSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.putVariables">PutVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetEnableLogsSample">ResetEnableLogsSample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetEscalationMessage">ResetEscalationMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetEvaluationDelay">ResetEvaluationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetGroupbySimpleMonitor">ResetGroupbySimpleMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetGroupRetentionDuration">ResetGroupRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetIncludeTags">ResetIncludeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetLocked">ResetLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetMonitorThresholds">ResetMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetMonitorThresholdWindows">ResetMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNewGroupDelay">ResetNewGroupDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNewHostDelay">ResetNewHostDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNoDataTimeframe">ResetNoDataTimeframe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNotificationPresetName">ResetNotificationPresetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNotifyAudit">ResetNotifyAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNotifyBy">ResetNotifyBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNotifyNoData">ResetNotifyNoData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetOnMissingData">ResetOnMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRenotifyInterval">ResetRenotifyInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRenotifyOccurrences">ResetRenotifyOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRenotifyStatuses">ResetRenotifyStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRequireFullWindow">ResetRequireFullWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRestrictedRoles">ResetRestrictedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetSchedulingOptions">ResetSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetTimeoutH">ResetTimeoutH</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetValidate">ResetValidate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.Monitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.monitor.Monitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.monitor.Monitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.Monitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.monitor.Monitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.monitor.Monitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.monitor.Monitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.monitor.Monitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.monitor.Monitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.monitor.Monitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.monitor.Monitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.monitor.Monitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.monitor.Monitor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.monitor.Monitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.monitor.Monitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.monitor.Monitor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.Monitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.monitor.Monitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.monitor.Monitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.monitor.Monitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.monitor.Monitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.monitor.Monitor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.monitor.Monitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.monitor.Monitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMonitorThresholds` <a name="PutMonitorThresholds" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds"></a>

```csharp
private void PutMonitorThresholds(MonitorMonitorThresholds Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---

##### `PutMonitorThresholdWindows` <a name="PutMonitorThresholdWindows" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholdWindows"></a>

```csharp
private void PutMonitorThresholdWindows(MonitorMonitorThresholdWindows Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholdWindows.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---

##### `PutSchedulingOptions` <a name="PutSchedulingOptions" id="@cdktf/provider-datadog.monitor.Monitor.putSchedulingOptions"></a>

```csharp
private void PutSchedulingOptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.Monitor.putSchedulingOptions.parameter.value"></a>

- *Type:* object

---

##### `PutVariables` <a name="PutVariables" id="@cdktf/provider-datadog.monitor.Monitor.putVariables"></a>

```csharp
private void PutVariables(MonitorVariables Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.Monitor.putVariables.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---

##### `ResetEnableLogsSample` <a name="ResetEnableLogsSample" id="@cdktf/provider-datadog.monitor.Monitor.resetEnableLogsSample"></a>

```csharp
private void ResetEnableLogsSample()
```

##### `ResetEscalationMessage` <a name="ResetEscalationMessage" id="@cdktf/provider-datadog.monitor.Monitor.resetEscalationMessage"></a>

```csharp
private void ResetEscalationMessage()
```

##### `ResetEvaluationDelay` <a name="ResetEvaluationDelay" id="@cdktf/provider-datadog.monitor.Monitor.resetEvaluationDelay"></a>

```csharp
private void ResetEvaluationDelay()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-datadog.monitor.Monitor.resetForceDelete"></a>

```csharp
private void ResetForceDelete()
```

##### `ResetGroupbySimpleMonitor` <a name="ResetGroupbySimpleMonitor" id="@cdktf/provider-datadog.monitor.Monitor.resetGroupbySimpleMonitor"></a>

```csharp
private void ResetGroupbySimpleMonitor()
```

##### `ResetGroupRetentionDuration` <a name="ResetGroupRetentionDuration" id="@cdktf/provider-datadog.monitor.Monitor.resetGroupRetentionDuration"></a>

```csharp
private void ResetGroupRetentionDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.monitor.Monitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeTags` <a name="ResetIncludeTags" id="@cdktf/provider-datadog.monitor.Monitor.resetIncludeTags"></a>

```csharp
private void ResetIncludeTags()
```

##### `ResetLocked` <a name="ResetLocked" id="@cdktf/provider-datadog.monitor.Monitor.resetLocked"></a>

```csharp
private void ResetLocked()
```

##### `ResetMonitorThresholds` <a name="ResetMonitorThresholds" id="@cdktf/provider-datadog.monitor.Monitor.resetMonitorThresholds"></a>

```csharp
private void ResetMonitorThresholds()
```

##### `ResetMonitorThresholdWindows` <a name="ResetMonitorThresholdWindows" id="@cdktf/provider-datadog.monitor.Monitor.resetMonitorThresholdWindows"></a>

```csharp
private void ResetMonitorThresholdWindows()
```

##### `ResetNewGroupDelay` <a name="ResetNewGroupDelay" id="@cdktf/provider-datadog.monitor.Monitor.resetNewGroupDelay"></a>

```csharp
private void ResetNewGroupDelay()
```

##### `ResetNewHostDelay` <a name="ResetNewHostDelay" id="@cdktf/provider-datadog.monitor.Monitor.resetNewHostDelay"></a>

```csharp
private void ResetNewHostDelay()
```

##### `ResetNoDataTimeframe` <a name="ResetNoDataTimeframe" id="@cdktf/provider-datadog.monitor.Monitor.resetNoDataTimeframe"></a>

```csharp
private void ResetNoDataTimeframe()
```

##### `ResetNotificationPresetName` <a name="ResetNotificationPresetName" id="@cdktf/provider-datadog.monitor.Monitor.resetNotificationPresetName"></a>

```csharp
private void ResetNotificationPresetName()
```

##### `ResetNotifyAudit` <a name="ResetNotifyAudit" id="@cdktf/provider-datadog.monitor.Monitor.resetNotifyAudit"></a>

```csharp
private void ResetNotifyAudit()
```

##### `ResetNotifyBy` <a name="ResetNotifyBy" id="@cdktf/provider-datadog.monitor.Monitor.resetNotifyBy"></a>

```csharp
private void ResetNotifyBy()
```

##### `ResetNotifyNoData` <a name="ResetNotifyNoData" id="@cdktf/provider-datadog.monitor.Monitor.resetNotifyNoData"></a>

```csharp
private void ResetNotifyNoData()
```

##### `ResetOnMissingData` <a name="ResetOnMissingData" id="@cdktf/provider-datadog.monitor.Monitor.resetOnMissingData"></a>

```csharp
private void ResetOnMissingData()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-datadog.monitor.Monitor.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetRenotifyInterval` <a name="ResetRenotifyInterval" id="@cdktf/provider-datadog.monitor.Monitor.resetRenotifyInterval"></a>

```csharp
private void ResetRenotifyInterval()
```

##### `ResetRenotifyOccurrences` <a name="ResetRenotifyOccurrences" id="@cdktf/provider-datadog.monitor.Monitor.resetRenotifyOccurrences"></a>

```csharp
private void ResetRenotifyOccurrences()
```

##### `ResetRenotifyStatuses` <a name="ResetRenotifyStatuses" id="@cdktf/provider-datadog.monitor.Monitor.resetRenotifyStatuses"></a>

```csharp
private void ResetRenotifyStatuses()
```

##### `ResetRequireFullWindow` <a name="ResetRequireFullWindow" id="@cdktf/provider-datadog.monitor.Monitor.resetRequireFullWindow"></a>

```csharp
private void ResetRequireFullWindow()
```

##### `ResetRestrictedRoles` <a name="ResetRestrictedRoles" id="@cdktf/provider-datadog.monitor.Monitor.resetRestrictedRoles"></a>

```csharp
private void ResetRestrictedRoles()
```

##### `ResetSchedulingOptions` <a name="ResetSchedulingOptions" id="@cdktf/provider-datadog.monitor.Monitor.resetSchedulingOptions"></a>

```csharp
private void ResetSchedulingOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.monitor.Monitor.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeoutH` <a name="ResetTimeoutH" id="@cdktf/provider-datadog.monitor.Monitor.resetTimeoutH"></a>

```csharp
private void ResetTimeoutH()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktf/provider-datadog.monitor.Monitor.resetValidate"></a>

```csharp
private void ResetValidate()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktf/provider-datadog.monitor.Monitor.resetVariables"></a>

```csharp
private void ResetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Monitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.monitor.Monitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

Monitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.monitor.Monitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.monitor.Monitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

Monitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.monitor.Monitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.monitor.Monitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

Monitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.monitor.Monitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

Monitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Monitor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Monitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Monitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Monitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.enableSamples">EnableSamples</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholds">MonitorThresholds</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference">MonitorMonitorThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdWindows">MonitorThresholdWindows</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference">MonitorMonitorThresholdWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.schedulingOptions">SchedulingOptions</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList">MonitorSchedulingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.variables">Variables</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference">MonitorVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.enableLogsSampleInput">EnableLogsSampleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.escalationMessageInput">EscalationMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.evaluationDelayInput">EvaluationDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.groupbySimpleMonitorInput">GroupbySimpleMonitorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.groupRetentionDurationInput">GroupRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.includeTagsInput">IncludeTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.lockedInput">LockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdsInput">MonitorThresholdsInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdWindowsInput">MonitorThresholdWindowsInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.newGroupDelayInput">NewGroupDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.newHostDelayInput">NewHostDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.noDataTimeframeInput">NoDataTimeframeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notificationPresetNameInput">NotificationPresetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyAuditInput">NotifyAuditInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyByInput">NotifyByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyNoDataInput">NotifyNoDataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.onMissingDataInput">OnMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyIntervalInput">RenotifyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyOccurrencesInput">RenotifyOccurrencesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyStatusesInput">RenotifyStatusesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.requireFullWindowInput">RequireFullWindowInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.restrictedRolesInput">RestrictedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.schedulingOptionsInput">SchedulingOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.timeoutHInput">TimeoutHInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.validateInput">ValidateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.variablesInput">VariablesInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.enableLogsSample">EnableLogsSample</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.escalationMessage">EscalationMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.evaluationDelay">EvaluationDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.forceDelete">ForceDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.groupbySimpleMonitor">GroupbySimpleMonitor</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.groupRetentionDuration">GroupRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.includeTags">IncludeTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.locked">Locked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.newGroupDelay">NewGroupDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.newHostDelay">NewHostDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.noDataTimeframe">NoDataTimeframe</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notificationPresetName">NotificationPresetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyAudit">NotifyAudit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyBy">NotifyBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyNoData">NotifyNoData</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.onMissingData">OnMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyInterval">RenotifyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyOccurrences">RenotifyOccurrences</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyStatuses">RenotifyStatuses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.requireFullWindow">RequireFullWindow</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.restrictedRoles">RestrictedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.timeoutH">TimeoutH</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.validate">Validate</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.monitor.Monitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.monitor.Monitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.Monitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.monitor.Monitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.monitor.Monitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.monitor.Monitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.monitor.Monitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.monitor.Monitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.monitor.Monitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.monitor.Monitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.monitor.Monitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.monitor.Monitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.monitor.Monitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.monitor.Monitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EnableSamples`<sup>Required</sup> <a name="EnableSamples" id="@cdktf/provider-datadog.monitor.Monitor.property.enableSamples"></a>

```csharp
public IResolvable EnableSamples { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MonitorThresholds`<sup>Required</sup> <a name="MonitorThresholds" id="@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholds"></a>

```csharp
public MonitorMonitorThresholdsOutputReference MonitorThresholds { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference">MonitorMonitorThresholdsOutputReference</a>

---

##### `MonitorThresholdWindows`<sup>Required</sup> <a name="MonitorThresholdWindows" id="@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdWindows"></a>

```csharp
public MonitorMonitorThresholdWindowsOutputReference MonitorThresholdWindows { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference">MonitorMonitorThresholdWindowsOutputReference</a>

---

##### `SchedulingOptions`<sup>Required</sup> <a name="SchedulingOptions" id="@cdktf/provider-datadog.monitor.Monitor.property.schedulingOptions"></a>

```csharp
public MonitorSchedulingOptionsList SchedulingOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList">MonitorSchedulingOptionsList</a>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-datadog.monitor.Monitor.property.variables"></a>

```csharp
public MonitorVariablesOutputReference Variables { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference">MonitorVariablesOutputReference</a>

---

##### `EnableLogsSampleInput`<sup>Optional</sup> <a name="EnableLogsSampleInput" id="@cdktf/provider-datadog.monitor.Monitor.property.enableLogsSampleInput"></a>

```csharp
public object EnableLogsSampleInput { get; }
```

- *Type:* object

---

##### `EscalationMessageInput`<sup>Optional</sup> <a name="EscalationMessageInput" id="@cdktf/provider-datadog.monitor.Monitor.property.escalationMessageInput"></a>

```csharp
public string EscalationMessageInput { get; }
```

- *Type:* string

---

##### `EvaluationDelayInput`<sup>Optional</sup> <a name="EvaluationDelayInput" id="@cdktf/provider-datadog.monitor.Monitor.property.evaluationDelayInput"></a>

```csharp
public double EvaluationDelayInput { get; }
```

- *Type:* double

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-datadog.monitor.Monitor.property.forceDeleteInput"></a>

```csharp
public object ForceDeleteInput { get; }
```

- *Type:* object

---

##### `GroupbySimpleMonitorInput`<sup>Optional</sup> <a name="GroupbySimpleMonitorInput" id="@cdktf/provider-datadog.monitor.Monitor.property.groupbySimpleMonitorInput"></a>

```csharp
public object GroupbySimpleMonitorInput { get; }
```

- *Type:* object

---

##### `GroupRetentionDurationInput`<sup>Optional</sup> <a name="GroupRetentionDurationInput" id="@cdktf/provider-datadog.monitor.Monitor.property.groupRetentionDurationInput"></a>

```csharp
public string GroupRetentionDurationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.monitor.Monitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeTagsInput`<sup>Optional</sup> <a name="IncludeTagsInput" id="@cdktf/provider-datadog.monitor.Monitor.property.includeTagsInput"></a>

```csharp
public object IncludeTagsInput { get; }
```

- *Type:* object

---

##### `LockedInput`<sup>Optional</sup> <a name="LockedInput" id="@cdktf/provider-datadog.monitor.Monitor.property.lockedInput"></a>

```csharp
public object LockedInput { get; }
```

- *Type:* object

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.monitor.Monitor.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `MonitorThresholdsInput`<sup>Optional</sup> <a name="MonitorThresholdsInput" id="@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdsInput"></a>

```csharp
public MonitorMonitorThresholds MonitorThresholdsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---

##### `MonitorThresholdWindowsInput`<sup>Optional</sup> <a name="MonitorThresholdWindowsInput" id="@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdWindowsInput"></a>

```csharp
public MonitorMonitorThresholdWindows MonitorThresholdWindowsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.monitor.Monitor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NewGroupDelayInput`<sup>Optional</sup> <a name="NewGroupDelayInput" id="@cdktf/provider-datadog.monitor.Monitor.property.newGroupDelayInput"></a>

```csharp
public double NewGroupDelayInput { get; }
```

- *Type:* double

---

##### `NewHostDelayInput`<sup>Optional</sup> <a name="NewHostDelayInput" id="@cdktf/provider-datadog.monitor.Monitor.property.newHostDelayInput"></a>

```csharp
public double NewHostDelayInput { get; }
```

- *Type:* double

---

##### `NoDataTimeframeInput`<sup>Optional</sup> <a name="NoDataTimeframeInput" id="@cdktf/provider-datadog.monitor.Monitor.property.noDataTimeframeInput"></a>

```csharp
public double NoDataTimeframeInput { get; }
```

- *Type:* double

---

##### `NotificationPresetNameInput`<sup>Optional</sup> <a name="NotificationPresetNameInput" id="@cdktf/provider-datadog.monitor.Monitor.property.notificationPresetNameInput"></a>

```csharp
public string NotificationPresetNameInput { get; }
```

- *Type:* string

---

##### `NotifyAuditInput`<sup>Optional</sup> <a name="NotifyAuditInput" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyAuditInput"></a>

```csharp
public object NotifyAuditInput { get; }
```

- *Type:* object

---

##### `NotifyByInput`<sup>Optional</sup> <a name="NotifyByInput" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyByInput"></a>

```csharp
public string[] NotifyByInput { get; }
```

- *Type:* string[]

---

##### `NotifyNoDataInput`<sup>Optional</sup> <a name="NotifyNoDataInput" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyNoDataInput"></a>

```csharp
public object NotifyNoDataInput { get; }
```

- *Type:* object

---

##### `OnMissingDataInput`<sup>Optional</sup> <a name="OnMissingDataInput" id="@cdktf/provider-datadog.monitor.Monitor.property.onMissingDataInput"></a>

```csharp
public string OnMissingDataInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-datadog.monitor.Monitor.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.monitor.Monitor.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RenotifyIntervalInput`<sup>Optional</sup> <a name="RenotifyIntervalInput" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyIntervalInput"></a>

```csharp
public double RenotifyIntervalInput { get; }
```

- *Type:* double

---

##### `RenotifyOccurrencesInput`<sup>Optional</sup> <a name="RenotifyOccurrencesInput" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyOccurrencesInput"></a>

```csharp
public double RenotifyOccurrencesInput { get; }
```

- *Type:* double

---

##### `RenotifyStatusesInput`<sup>Optional</sup> <a name="RenotifyStatusesInput" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyStatusesInput"></a>

```csharp
public string[] RenotifyStatusesInput { get; }
```

- *Type:* string[]

---

##### `RequireFullWindowInput`<sup>Optional</sup> <a name="RequireFullWindowInput" id="@cdktf/provider-datadog.monitor.Monitor.property.requireFullWindowInput"></a>

```csharp
public object RequireFullWindowInput { get; }
```

- *Type:* object

---

##### `RestrictedRolesInput`<sup>Optional</sup> <a name="RestrictedRolesInput" id="@cdktf/provider-datadog.monitor.Monitor.property.restrictedRolesInput"></a>

```csharp
public string[] RestrictedRolesInput { get; }
```

- *Type:* string[]

---

##### `SchedulingOptionsInput`<sup>Optional</sup> <a name="SchedulingOptionsInput" id="@cdktf/provider-datadog.monitor.Monitor.property.schedulingOptionsInput"></a>

```csharp
public object SchedulingOptionsInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.monitor.Monitor.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutHInput`<sup>Optional</sup> <a name="TimeoutHInput" id="@cdktf/provider-datadog.monitor.Monitor.property.timeoutHInput"></a>

```csharp
public double TimeoutHInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.monitor.Monitor.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktf/provider-datadog.monitor.Monitor.property.validateInput"></a>

```csharp
public object ValidateInput { get; }
```

- *Type:* object

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktf/provider-datadog.monitor.Monitor.property.variablesInput"></a>

```csharp
public MonitorVariables VariablesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---

##### `EnableLogsSample`<sup>Required</sup> <a name="EnableLogsSample" id="@cdktf/provider-datadog.monitor.Monitor.property.enableLogsSample"></a>

```csharp
public object EnableLogsSample { get; }
```

- *Type:* object

---

##### `EscalationMessage`<sup>Required</sup> <a name="EscalationMessage" id="@cdktf/provider-datadog.monitor.Monitor.property.escalationMessage"></a>

```csharp
public string EscalationMessage { get; }
```

- *Type:* string

---

##### `EvaluationDelay`<sup>Required</sup> <a name="EvaluationDelay" id="@cdktf/provider-datadog.monitor.Monitor.property.evaluationDelay"></a>

```csharp
public double EvaluationDelay { get; }
```

- *Type:* double

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-datadog.monitor.Monitor.property.forceDelete"></a>

```csharp
public object ForceDelete { get; }
```

- *Type:* object

---

##### `GroupbySimpleMonitor`<sup>Required</sup> <a name="GroupbySimpleMonitor" id="@cdktf/provider-datadog.monitor.Monitor.property.groupbySimpleMonitor"></a>

```csharp
public object GroupbySimpleMonitor { get; }
```

- *Type:* object

---

##### `GroupRetentionDuration`<sup>Required</sup> <a name="GroupRetentionDuration" id="@cdktf/provider-datadog.monitor.Monitor.property.groupRetentionDuration"></a>

```csharp
public string GroupRetentionDuration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.monitor.Monitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeTags`<sup>Required</sup> <a name="IncludeTags" id="@cdktf/provider-datadog.monitor.Monitor.property.includeTags"></a>

```csharp
public object IncludeTags { get; }
```

- *Type:* object

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-datadog.monitor.Monitor.property.locked"></a>

```csharp
public object Locked { get; }
```

- *Type:* object

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.monitor.Monitor.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.monitor.Monitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NewGroupDelay`<sup>Required</sup> <a name="NewGroupDelay" id="@cdktf/provider-datadog.monitor.Monitor.property.newGroupDelay"></a>

```csharp
public double NewGroupDelay { get; }
```

- *Type:* double

---

##### `NewHostDelay`<sup>Required</sup> <a name="NewHostDelay" id="@cdktf/provider-datadog.monitor.Monitor.property.newHostDelay"></a>

```csharp
public double NewHostDelay { get; }
```

- *Type:* double

---

##### `NoDataTimeframe`<sup>Required</sup> <a name="NoDataTimeframe" id="@cdktf/provider-datadog.monitor.Monitor.property.noDataTimeframe"></a>

```csharp
public double NoDataTimeframe { get; }
```

- *Type:* double

---

##### `NotificationPresetName`<sup>Required</sup> <a name="NotificationPresetName" id="@cdktf/provider-datadog.monitor.Monitor.property.notificationPresetName"></a>

```csharp
public string NotificationPresetName { get; }
```

- *Type:* string

---

##### `NotifyAudit`<sup>Required</sup> <a name="NotifyAudit" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyAudit"></a>

```csharp
public object NotifyAudit { get; }
```

- *Type:* object

---

##### `NotifyBy`<sup>Required</sup> <a name="NotifyBy" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyBy"></a>

```csharp
public string[] NotifyBy { get; }
```

- *Type:* string[]

---

##### `NotifyNoData`<sup>Required</sup> <a name="NotifyNoData" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyNoData"></a>

```csharp
public object NotifyNoData { get; }
```

- *Type:* object

---

##### `OnMissingData`<sup>Required</sup> <a name="OnMissingData" id="@cdktf/provider-datadog.monitor.Monitor.property.onMissingData"></a>

```csharp
public string OnMissingData { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-datadog.monitor.Monitor.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.monitor.Monitor.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RenotifyInterval`<sup>Required</sup> <a name="RenotifyInterval" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyInterval"></a>

```csharp
public double RenotifyInterval { get; }
```

- *Type:* double

---

##### `RenotifyOccurrences`<sup>Required</sup> <a name="RenotifyOccurrences" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyOccurrences"></a>

```csharp
public double RenotifyOccurrences { get; }
```

- *Type:* double

---

##### `RenotifyStatuses`<sup>Required</sup> <a name="RenotifyStatuses" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyStatuses"></a>

```csharp
public string[] RenotifyStatuses { get; }
```

- *Type:* string[]

---

##### `RequireFullWindow`<sup>Required</sup> <a name="RequireFullWindow" id="@cdktf/provider-datadog.monitor.Monitor.property.requireFullWindow"></a>

```csharp
public object RequireFullWindow { get; }
```

- *Type:* object

---

##### `RestrictedRoles`<sup>Required</sup> <a name="RestrictedRoles" id="@cdktf/provider-datadog.monitor.Monitor.property.restrictedRoles"></a>

```csharp
public string[] RestrictedRoles { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.monitor.Monitor.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `TimeoutH`<sup>Required</sup> <a name="TimeoutH" id="@cdktf/provider-datadog.monitor.Monitor.property.timeoutH"></a>

```csharp
public double TimeoutH { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.monitor.Monitor.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktf/provider-datadog.monitor.Monitor.property.validate"></a>

```csharp
public object Validate { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.monitor.Monitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorConfig <a name="MonitorConfig" id="@cdktf/provider-datadog.monitor.MonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Message,
    string Name,
    string Query,
    string Type,
    object EnableLogsSample = null,
    string EscalationMessage = null,
    double EvaluationDelay = null,
    object ForceDelete = null,
    object GroupbySimpleMonitor = null,
    string GroupRetentionDuration = null,
    string Id = null,
    object IncludeTags = null,
    object Locked = null,
    MonitorMonitorThresholds MonitorThresholds = null,
    MonitorMonitorThresholdWindows MonitorThresholdWindows = null,
    double NewGroupDelay = null,
    double NewHostDelay = null,
    double NoDataTimeframe = null,
    string NotificationPresetName = null,
    object NotifyAudit = null,
    string[] NotifyBy = null,
    object NotifyNoData = null,
    string OnMissingData = null,
    double Priority = null,
    double RenotifyInterval = null,
    double RenotifyOccurrences = null,
    string[] RenotifyStatuses = null,
    object RequireFullWindow = null,
    string[] RestrictedRoles = null,
    object SchedulingOptions = null,
    string[] Tags = null,
    double TimeoutH = null,
    object Validate = null,
    MonitorVariables Variables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.message">Message</a></code> | <code>string</code> | A message to include with notifications for this monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.name">Name</a></code> | <code>string</code> | Name of Datadog monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.query">Query</a></code> | <code>string</code> | The monitor query to notify on. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.type">Type</a></code> | <code>string</code> | The type of the monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.enableLogsSample">EnableLogsSample</a></code> | <code>object</code> | A boolean indicating whether or not to include a list of log values which triggered the alert. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.escalationMessage">EscalationMessage</a></code> | <code>string</code> | A message to include with a re-notification. Supports the `@username` notification allowed elsewhere. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.evaluationDelay">EvaluationDelay</a></code> | <code>double</code> | (Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.forceDelete">ForceDelete</a></code> | <code>object</code> | A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor). |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.groupbySimpleMonitor">GroupbySimpleMonitor</a></code> | <code>object</code> | Whether or not to trigger one alert if any source breaches a threshold. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.groupRetentionDuration">GroupRetentionDuration</a></code> | <code>string</code> | The time span after which groups with missing data are dropped from the monitor state. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#id Monitor#id}. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.includeTags">IncludeTags</a></code> | <code>object</code> | A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.locked">Locked</a></code> | <code>object</code> | A boolean indicating whether changes to this monitor should be restricted to the creator or admins. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.monitorThresholds">MonitorThresholds</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | monitor_thresholds block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.monitorThresholdWindows">MonitorThresholdWindows</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | monitor_threshold_windows block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.newGroupDelay">NewGroupDelay</a></code> | <code>double</code> | The time (in seconds) to skip evaluations for new groups. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.newHostDelay">NewHostDelay</a></code> | <code>double</code> | **Deprecated**. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.noDataTimeframe">NoDataTimeframe</a></code> | <code>double</code> | The number of minutes before a monitor will notify when data stops reporting. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.notificationPresetName">NotificationPresetName</a></code> | <code>string</code> | Toggles the display of additional content sent in the monitor notification. Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyAudit">NotifyAudit</a></code> | <code>object</code> | A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyBy">NotifyBy</a></code> | <code>string[]</code> | Controls what granularity a monitor alerts on. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyNoData">NotifyNoData</a></code> | <code>object</code> | A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.onMissingData">OnMissingData</a></code> | <code>string</code> | Controls how groups or monitors are treated if an evaluation does not return any data points. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.priority">Priority</a></code> | <code>double</code> | Integer from 1 (high) to 5 (low) indicating alert severity. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyInterval">RenotifyInterval</a></code> | <code>double</code> | The number of minutes after the last notification before a monitor will re-notify on the current status. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyOccurrences">RenotifyOccurrences</a></code> | <code>double</code> | The number of re-notification messages that should be sent on the current status. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyStatuses">RenotifyStatuses</a></code> | <code>string[]</code> | The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.requireFullWindow">RequireFullWindow</a></code> | <code>object</code> | A boolean indicating whether this monitor needs a full window of data before it's evaluated. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.restrictedRoles">RestrictedRoles</a></code> | <code>string[]</code> | A list of unique role identifiers to define which roles are allowed to edit the monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.schedulingOptions">SchedulingOptions</a></code> | <code>object</code> | scheduling_options block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tags to associate with your monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.timeoutH">TimeoutH</a></code> | <code>double</code> | The number of hours of the monitor not reporting data before it automatically resolves from a triggered state. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.validate">Validate</a></code> | <code>object</code> | If set to `false`, skip the validation call done during plan. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.variables">Variables</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | variables block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

A message to include with notifications for this monitor.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#message Monitor#message}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of Datadog monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#name Monitor#name}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The monitor query to notify on.

Note this is not the same query you see in the UI and the syntax is different depending on the monitor type, please see the [API Reference](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor) for details. `terraform plan` will validate query contents unless `validate` is set to `false`.

**Note:** APM latency data is now available as Distribution Metrics. Existing monitors have been migrated automatically but all terraformed monitors can still use the existing metrics. We strongly recommend updating monitor definitions to query the new metrics. To learn more, or to see examples of how to update your terraform definitions to utilize the new distribution metrics, see the [detailed doc](https://docs.datadoghq.com/tracing/guide/ddsketch_trace_metrics/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#query Monitor#query}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the monitor.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor). Note: The monitor type cannot be changed after a monitor is created. Valid values are `composite`, `event alert`, `log alert`, `metric alert`, `process alert`, `query alert`, `rum alert`, `service check`, `synthetics alert`, `trace-analytics alert`, `slo alert`, `event-v2 alert`, `audit alert`, `ci-pipelines alert`, `ci-tests alert`, `error-tracking alert`, `database-monitoring alert`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#type Monitor#type}

---

##### `EnableLogsSample`<sup>Optional</sup> <a name="EnableLogsSample" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.enableLogsSample"></a>

```csharp
public object EnableLogsSample { get; set; }
```

- *Type:* object

A boolean indicating whether or not to include a list of log values which triggered the alert.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#enable_logs_sample Monitor#enable_logs_sample}

---

##### `EscalationMessage`<sup>Optional</sup> <a name="EscalationMessage" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.escalationMessage"></a>

```csharp
public string EscalationMessage { get; set; }
```

- *Type:* string

A message to include with a re-notification. Supports the `@username` notification allowed elsewhere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#escalation_message Monitor#escalation_message}

---

##### `EvaluationDelay`<sup>Optional</sup> <a name="EvaluationDelay" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.evaluationDelay"></a>

```csharp
public double EvaluationDelay { get; set; }
```

- *Type:* double

(Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer.

For example, if the value is set to `300` (5min), the `timeframe` is set to `last_5m` and the time is 7:00, the monitor will evaluate data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor will always have data during evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#evaluation_delay Monitor#evaluation_delay}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.forceDelete"></a>

```csharp
public object ForceDelete { get; set; }
```

- *Type:* object

A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#force_delete Monitor#force_delete}

---

##### `GroupbySimpleMonitor`<sup>Optional</sup> <a name="GroupbySimpleMonitor" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.groupbySimpleMonitor"></a>

```csharp
public object GroupbySimpleMonitor { get; set; }
```

- *Type:* object

Whether or not to trigger one alert if any source breaches a threshold.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#groupby_simple_monitor Monitor#groupby_simple_monitor}

---

##### `GroupRetentionDuration`<sup>Optional</sup> <a name="GroupRetentionDuration" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.groupRetentionDuration"></a>

```csharp
public string GroupRetentionDuration { get; set; }
```

- *Type:* string

The time span after which groups with missing data are dropped from the monitor state.

The minimum value is one hour, and the maximum value is 72 hours. Example values are: 60m, 1h, and 2d. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#group_retention_duration Monitor#group_retention_duration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#id Monitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeTags`<sup>Optional</sup> <a name="IncludeTags" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.includeTags"></a>

```csharp
public object IncludeTags { get; set; }
```

- *Type:* object

A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#include_tags Monitor#include_tags}

---

##### `Locked`<sup>Optional</sup> <a name="Locked" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.locked"></a>

```csharp
public object Locked { get; set; }
```

- *Type:* object

A boolean indicating whether changes to this monitor should be restricted to the creator or admins.

Defaults to `false`. **Deprecated.** Use `restricted_roles`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#locked Monitor#locked}

---

##### `MonitorThresholds`<sup>Optional</sup> <a name="MonitorThresholds" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.monitorThresholds"></a>

```csharp
public MonitorMonitorThresholds MonitorThresholds { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

monitor_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#monitor_thresholds Monitor#monitor_thresholds}

---

##### `MonitorThresholdWindows`<sup>Optional</sup> <a name="MonitorThresholdWindows" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.monitorThresholdWindows"></a>

```csharp
public MonitorMonitorThresholdWindows MonitorThresholdWindows { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

monitor_threshold_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#monitor_threshold_windows Monitor#monitor_threshold_windows}

---

##### `NewGroupDelay`<sup>Optional</sup> <a name="NewGroupDelay" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.newGroupDelay"></a>

```csharp
public double NewGroupDelay { get; set; }
```

- *Type:* double

The time (in seconds) to skip evaluations for new groups.

`new_group_delay` overrides `new_host_delay` if it is set to a nonzero value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#new_group_delay Monitor#new_group_delay}

---

##### `NewHostDelay`<sup>Optional</sup> <a name="NewHostDelay" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.newHostDelay"></a>

```csharp
public double NewHostDelay { get; set; }
```

- *Type:* double

**Deprecated**.

See `new_group_delay`. Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non-negative integer. This value is ignored for simple monitors and monitors not grouped by host. The only case when this should be used is to override the default and set `new_host_delay` to zero for monitors grouped by host. **Deprecated.** Use `new_group_delay` except when setting `new_host_delay` to zero. Defaults to `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#new_host_delay Monitor#new_host_delay}

---

##### `NoDataTimeframe`<sup>Optional</sup> <a name="NoDataTimeframe" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.noDataTimeframe"></a>

```csharp
public double NoDataTimeframe { get; set; }
```

- *Type:* double

The number of minutes before a monitor will notify when data stops reporting.

We recommend at least 2x the monitor timeframe for metric alerts or 2 minutes for service checks. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#no_data_timeframe Monitor#no_data_timeframe}

---

##### `NotificationPresetName`<sup>Optional</sup> <a name="NotificationPresetName" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.notificationPresetName"></a>

```csharp
public string NotificationPresetName { get; set; }
```

- *Type:* string

Toggles the display of additional content sent in the monitor notification. Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#notification_preset_name Monitor#notification_preset_name}

---

##### `NotifyAudit`<sup>Optional</sup> <a name="NotifyAudit" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyAudit"></a>

```csharp
public object NotifyAudit { get; set; }
```

- *Type:* object

A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#notify_audit Monitor#notify_audit}

---

##### `NotifyBy`<sup>Optional</sup> <a name="NotifyBy" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyBy"></a>

```csharp
public string[] NotifyBy { get; set; }
```

- *Type:* string[]

Controls what granularity a monitor alerts on.

Only available for monitors with groupings. For instance, a monitor grouped by `cluster`, `namespace`, and `pod` can be configured to only notify on each new `cluster` violating the alert conditions by setting `notify_by` to `['cluster']`. Tags mentioned in `notify_by` must be a subset of the grouping tags in the query. For example, a query grouped by `cluster` and `namespace` cannot notify on `region`. Setting `notify_by` to `[*]` configures the monitor to notify as a simple-alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#notify_by Monitor#notify_by}

---

##### `NotifyNoData`<sup>Optional</sup> <a name="NotifyNoData" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyNoData"></a>

```csharp
public object NotifyNoData { get; set; }
```

- *Type:* object

A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#notify_no_data Monitor#notify_no_data}

---

##### `OnMissingData`<sup>Optional</sup> <a name="OnMissingData" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.onMissingData"></a>

```csharp
public string OnMissingData { get; set; }
```

- *Type:* string

Controls how groups or monitors are treated if an evaluation does not return any data points.

The default option results in different behavior depending on the monitor query type. For monitors using `Count` queries, an empty monitor evaluation is treated as 0 and is compared to the threshold conditions. For monitors using any query type other than `Count`, for example `Gauge`, `Measure`, or `Rate`, the monitor shows the last known status. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors. Valid values are: `show_no_data`, `show_and_notify_no_data`, `resolve`, and `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#on_missing_data Monitor#on_missing_data}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Integer from 1 (high) to 5 (low) indicating alert severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#priority Monitor#priority}

---

##### `RenotifyInterval`<sup>Optional</sup> <a name="RenotifyInterval" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyInterval"></a>

```csharp
public double RenotifyInterval { get; set; }
```

- *Type:* double

The number of minutes after the last notification before a monitor will re-notify on the current status.

It will only re-notify if it's not resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#renotify_interval Monitor#renotify_interval}

---

##### `RenotifyOccurrences`<sup>Optional</sup> <a name="RenotifyOccurrences" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyOccurrences"></a>

```csharp
public double RenotifyOccurrences { get; set; }
```

- *Type:* double

The number of re-notification messages that should be sent on the current status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#renotify_occurrences Monitor#renotify_occurrences}

---

##### `RenotifyStatuses`<sup>Optional</sup> <a name="RenotifyStatuses" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyStatuses"></a>

```csharp
public string[] RenotifyStatuses { get; set; }
```

- *Type:* string[]

The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#renotify_statuses Monitor#renotify_statuses}

---

##### `RequireFullWindow`<sup>Optional</sup> <a name="RequireFullWindow" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.requireFullWindow"></a>

```csharp
public object RequireFullWindow { get; set; }
```

- *Type:* object

A boolean indicating whether this monitor needs a full window of data before it's evaluated.

Datadog strongly recommends you set this to `false` for sparse metrics, otherwise some evaluations may be skipped. If there's a custom_schedule set, `require_full_window` must be false and will be ignored. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#require_full_window Monitor#require_full_window}

---

##### `RestrictedRoles`<sup>Optional</sup> <a name="RestrictedRoles" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.restrictedRoles"></a>

```csharp
public string[] RestrictedRoles { get; set; }
```

- *Type:* string[]

A list of unique role identifiers to define which roles are allowed to edit the monitor.

Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. Roles unique identifiers can be pulled from the [Roles API](https://docs.datadoghq.com/api/latest/roles/#list-roles) in the `data.id` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#restricted_roles Monitor#restricted_roles}

---

##### `SchedulingOptions`<sup>Optional</sup> <a name="SchedulingOptions" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.schedulingOptions"></a>

```csharp
public object SchedulingOptions { get; set; }
```

- *Type:* object

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#scheduling_options Monitor#scheduling_options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tags to associate with your monitor.

This can help you categorize and filter monitors in the manage monitors page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#tags Monitor#tags}

---

##### `TimeoutH`<sup>Optional</sup> <a name="TimeoutH" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.timeoutH"></a>

```csharp
public double TimeoutH { get; set; }
```

- *Type:* double

The number of hours of the monitor not reporting data before it automatically resolves from a triggered state.

The minimum allowed value is 0 hours. The maximum allowed value is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#timeout_h Monitor#timeout_h}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.validate"></a>

```csharp
public object Validate { get; set; }
```

- *Type:* object

If set to `false`, skip the validation call done during plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#validate Monitor#validate}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.variables"></a>

```csharp
public MonitorVariables Variables { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#variables Monitor#variables}

---

### MonitorMonitorThresholds <a name="MonitorMonitorThresholds" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorMonitorThresholds {
    string Critical = null,
    string CriticalRecovery = null,
    string Ok = null,
    string Unknown = null,
    string Warning = null,
    string WarningRecovery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.critical">Critical</a></code> | <code>string</code> | The monitor `CRITICAL` threshold. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.criticalRecovery">CriticalRecovery</a></code> | <code>string</code> | The monitor `CRITICAL` recovery threshold. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.ok">Ok</a></code> | <code>string</code> | The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.unknown">Unknown</a></code> | <code>string</code> | The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.warning">Warning</a></code> | <code>string</code> | The monitor `WARNING` threshold. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.warningRecovery">WarningRecovery</a></code> | <code>string</code> | The monitor `WARNING` recovery threshold. Must be a number. |

---

##### `Critical`<sup>Optional</sup> <a name="Critical" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.critical"></a>

```csharp
public string Critical { get; set; }
```

- *Type:* string

The monitor `CRITICAL` threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#critical Monitor#critical}

---

##### `CriticalRecovery`<sup>Optional</sup> <a name="CriticalRecovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.criticalRecovery"></a>

```csharp
public string CriticalRecovery { get; set; }
```

- *Type:* string

The monitor `CRITICAL` recovery threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#critical_recovery Monitor#critical_recovery}

---

##### `Ok`<sup>Optional</sup> <a name="Ok" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.ok"></a>

```csharp
public string Ok { get; set; }
```

- *Type:* string

The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#ok Monitor#ok}

---

##### `Unknown`<sup>Optional</sup> <a name="Unknown" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.unknown"></a>

```csharp
public string Unknown { get; set; }
```

- *Type:* string

The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#unknown Monitor#unknown}

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.warning"></a>

```csharp
public string Warning { get; set; }
```

- *Type:* string

The monitor `WARNING` threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#warning Monitor#warning}

---

##### `WarningRecovery`<sup>Optional</sup> <a name="WarningRecovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.warningRecovery"></a>

```csharp
public string WarningRecovery { get; set; }
```

- *Type:* string

The monitor `WARNING` recovery threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#warning_recovery Monitor#warning_recovery}

---

### MonitorMonitorThresholdWindows <a name="MonitorMonitorThresholdWindows" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorMonitorThresholdWindows {
    string RecoveryWindow = null,
    string TriggerWindow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.recoveryWindow">RecoveryWindow</a></code> | <code>string</code> | Describes how long an anomalous metric must be normal before the alert recovers. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.triggerWindow">TriggerWindow</a></code> | <code>string</code> | Describes how long a metric must be anomalous before an alert triggers. |

---

##### `RecoveryWindow`<sup>Optional</sup> <a name="RecoveryWindow" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.recoveryWindow"></a>

```csharp
public string RecoveryWindow { get; set; }
```

- *Type:* string

Describes how long an anomalous metric must be normal before the alert recovers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#recovery_window Monitor#recovery_window}

---

##### `TriggerWindow`<sup>Optional</sup> <a name="TriggerWindow" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.triggerWindow"></a>

```csharp
public string TriggerWindow { get; set; }
```

- *Type:* string

Describes how long a metric must be anomalous before an alert triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#trigger_window Monitor#trigger_window}

---

### MonitorSchedulingOptions <a name="MonitorSchedulingOptions" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorSchedulingOptions {
    object CustomSchedule = null,
    object EvaluationWindow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.property.customSchedule">CustomSchedule</a></code> | <code>object</code> | custom_schedule block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.property.evaluationWindow">EvaluationWindow</a></code> | <code>object</code> | evaluation_window block. |

---

##### `CustomSchedule`<sup>Optional</sup> <a name="CustomSchedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.property.customSchedule"></a>

```csharp
public object CustomSchedule { get; set; }
```

- *Type:* object

custom_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#custom_schedule Monitor#custom_schedule}

---

##### `EvaluationWindow`<sup>Optional</sup> <a name="EvaluationWindow" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.property.evaluationWindow"></a>

```csharp
public object EvaluationWindow { get; set; }
```

- *Type:* object

evaluation_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#evaluation_window Monitor#evaluation_window}

---

### MonitorSchedulingOptionsCustomSchedule <a name="MonitorSchedulingOptionsCustomSchedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorSchedulingOptionsCustomSchedule {
    MonitorSchedulingOptionsCustomScheduleRecurrence Recurrence
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | recurrence block. |

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.property.recurrence"></a>

```csharp
public MonitorSchedulingOptionsCustomScheduleRecurrence Recurrence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#recurrence Monitor#recurrence}

---

### MonitorSchedulingOptionsCustomScheduleRecurrence <a name="MonitorSchedulingOptionsCustomScheduleRecurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorSchedulingOptionsCustomScheduleRecurrence {
    string Rrule,
    string Timezone,
    string Start = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.rrule">Rrule</a></code> | <code>string</code> | Must be a valid `rrule`. See API docs for supported fields. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.timezone">Timezone</a></code> | <code>string</code> | 'tz database' format. Example: `America/New_York` or `UTC`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.start">Start</a></code> | <code>string</code> | Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'. |

---

##### `Rrule`<sup>Required</sup> <a name="Rrule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.rrule"></a>

```csharp
public string Rrule { get; set; }
```

- *Type:* string

Must be a valid `rrule`. See API docs for supported fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#rrule Monitor#rrule}

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

'tz database' format. Example: `America/New_York` or `UTC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#timezone Monitor#timezone}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#start Monitor#start}

---

### MonitorSchedulingOptionsEvaluationWindow <a name="MonitorSchedulingOptionsEvaluationWindow" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorSchedulingOptionsEvaluationWindow {
    string DayStarts = null,
    double HourStarts = null,
    double MonthStarts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.dayStarts">DayStarts</a></code> | <code>string</code> | The time of the day at which a one day cumulative evaluation window starts. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.hourStarts">HourStarts</a></code> | <code>double</code> | The minute of the hour at which a one hour cumulative evaluation window starts. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.monthStarts">MonthStarts</a></code> | <code>double</code> | The day of the month at which a one month cumulative evaluation window starts. |

---

##### `DayStarts`<sup>Optional</sup> <a name="DayStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.dayStarts"></a>

```csharp
public string DayStarts { get; set; }
```

- *Type:* string

The time of the day at which a one day cumulative evaluation window starts.

Must be defined in UTC time in `HH:mm` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#day_starts Monitor#day_starts}

---

##### `HourStarts`<sup>Optional</sup> <a name="HourStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.hourStarts"></a>

```csharp
public double HourStarts { get; set; }
```

- *Type:* double

The minute of the hour at which a one hour cumulative evaluation window starts.

Must be between 0 and 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#hour_starts Monitor#hour_starts}

---

##### `MonthStarts`<sup>Optional</sup> <a name="MonthStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.monthStarts"></a>

```csharp
public double MonthStarts { get; set; }
```

- *Type:* double

The day of the month at which a one month cumulative evaluation window starts.

Must be a value of 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#month_starts Monitor#month_starts}

---

### MonitorVariables <a name="MonitorVariables" id="@cdktf/provider-datadog.monitor.MonitorVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariables {
    object EventQuery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables.property.eventQuery">EventQuery</a></code> | <code>object</code> | event_query block. |

---

##### `EventQuery`<sup>Optional</sup> <a name="EventQuery" id="@cdktf/provider-datadog.monitor.MonitorVariables.property.eventQuery"></a>

```csharp
public object EventQuery { get; set; }
```

- *Type:* object

event_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#event_query Monitor#event_query}

---

### MonitorVariablesEventQuery <a name="MonitorVariablesEventQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQuery {
    object Compute,
    string DataSource,
    string Name,
    MonitorVariablesEventQuerySearch Search,
    object GroupBy = null,
    string[] Indexes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.compute">Compute</a></code> | <code>object</code> | compute block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.dataSource">DataSource</a></code> | <code>string</code> | The data source for event platform-based queries. Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.name">Name</a></code> | <code>string</code> | The name of query for use in formulas. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.search">Search</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | search block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.groupBy">GroupBy</a></code> | <code>object</code> | group_by block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.indexes">Indexes</a></code> | <code>string[]</code> | An array of index names to query in the stream. |

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.compute"></a>

```csharp
public object Compute { get; set; }
```

- *Type:* object

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#compute Monitor#compute}

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.dataSource"></a>

```csharp
public string DataSource { get; set; }
```

- *Type:* string

The data source for event platform-based queries. Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#data_source Monitor#data_source}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#name Monitor#name}

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.search"></a>

```csharp
public MonitorVariablesEventQuerySearch Search { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#search Monitor#search}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.groupBy"></a>

```csharp
public object GroupBy { get; set; }
```

- *Type:* object

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#group_by Monitor#group_by}

---

##### `Indexes`<sup>Optional</sup> <a name="Indexes" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.indexes"></a>

```csharp
public string[] Indexes { get; set; }
```

- *Type:* string[]

An array of index names to query in the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#indexes Monitor#indexes}

---

### MonitorVariablesEventQueryCompute <a name="MonitorVariablesEventQueryCompute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQueryCompute {
    string Aggregation,
    double Interval = null,
    string Metric = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.aggregation">Aggregation</a></code> | <code>string</code> | The aggregation methods for event platform queries. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.interval">Interval</a></code> | <code>double</code> | A time interval in milliseconds. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.metric">Metric</a></code> | <code>string</code> | The measurable attribute to compute. |

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.aggregation"></a>

```csharp
public string Aggregation { get; set; }
```

- *Type:* string

The aggregation methods for event platform queries.

Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#aggregation Monitor#aggregation}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

A time interval in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#interval Monitor#interval}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.metric"></a>

```csharp
public string Metric { get; set; }
```

- *Type:* string

The measurable attribute to compute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#metric Monitor#metric}

---

### MonitorVariablesEventQueryGroupBy <a name="MonitorVariablesEventQueryGroupBy" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQueryGroupBy {
    string Facet,
    double Limit = null,
    MonitorVariablesEventQueryGroupBySort Sort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.facet">Facet</a></code> | <code>string</code> | The event facet. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.limit">Limit</a></code> | <code>double</code> | The number of groups to return. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.sort">Sort</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | sort block. |

---

##### `Facet`<sup>Required</sup> <a name="Facet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.facet"></a>

```csharp
public string Facet { get; set; }
```

- *Type:* string

The event facet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#facet Monitor#facet}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

The number of groups to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#limit Monitor#limit}

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.sort"></a>

```csharp
public MonitorVariablesEventQueryGroupBySort Sort { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#sort Monitor#sort}

---

### MonitorVariablesEventQueryGroupBySort <a name="MonitorVariablesEventQueryGroupBySort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQueryGroupBySort {
    string Aggregation,
    string Metric = null,
    string Order = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.aggregation">Aggregation</a></code> | <code>string</code> | The aggregation methods for the event platform queries. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.metric">Metric</a></code> | <code>string</code> | The metric used for sorting group by results. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.order">Order</a></code> | <code>string</code> | Direction of sort. Valid values are `asc`, `desc`. |

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.aggregation"></a>

```csharp
public string Aggregation { get; set; }
```

- *Type:* string

The aggregation methods for the event platform queries.

Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#aggregation Monitor#aggregation}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.metric"></a>

```csharp
public string Metric { get; set; }
```

- *Type:* string

The metric used for sorting group by results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#metric Monitor#metric}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Direction of sort. Valid values are `asc`, `desc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#order Monitor#order}

---

### MonitorVariablesEventQuerySearch <a name="MonitorVariablesEventQuerySearch" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQuerySearch {
    string Query
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch.property.query">Query</a></code> | <code>string</code> | The events search string. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The events search string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/monitor#query Monitor#query}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorMonitorThresholdsOutputReference <a name="MonitorMonitorThresholdsOutputReference" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorMonitorThresholdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCritical">ResetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCriticalRecovery">ResetCriticalRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetOk">ResetOk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetUnknown">ResetUnknown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarning">ResetWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarningRecovery">ResetWarningRecovery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCritical` <a name="ResetCritical" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCritical"></a>

```csharp
private void ResetCritical()
```

##### `ResetCriticalRecovery` <a name="ResetCriticalRecovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCriticalRecovery"></a>

```csharp
private void ResetCriticalRecovery()
```

##### `ResetOk` <a name="ResetOk" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetOk"></a>

```csharp
private void ResetOk()
```

##### `ResetUnknown` <a name="ResetUnknown" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetUnknown"></a>

```csharp
private void ResetUnknown()
```

##### `ResetWarning` <a name="ResetWarning" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarning"></a>

```csharp
private void ResetWarning()
```

##### `ResetWarningRecovery` <a name="ResetWarningRecovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarningRecovery"></a>

```csharp
private void ResetWarningRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalInput">CriticalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecoveryInput">CriticalRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.okInput">OkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknownInput">UnknownInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningInput">WarningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecoveryInput">WarningRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.critical">Critical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecovery">CriticalRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.ok">Ok</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknown">Unknown</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warning">Warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecovery">WarningRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalInput"></a>

```csharp
public string CriticalInput { get; }
```

- *Type:* string

---

##### `CriticalRecoveryInput`<sup>Optional</sup> <a name="CriticalRecoveryInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecoveryInput"></a>

```csharp
public string CriticalRecoveryInput { get; }
```

- *Type:* string

---

##### `OkInput`<sup>Optional</sup> <a name="OkInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.okInput"></a>

```csharp
public string OkInput { get; }
```

- *Type:* string

---

##### `UnknownInput`<sup>Optional</sup> <a name="UnknownInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknownInput"></a>

```csharp
public string UnknownInput { get; }
```

- *Type:* string

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningInput"></a>

```csharp
public string WarningInput { get; }
```

- *Type:* string

---

##### `WarningRecoveryInput`<sup>Optional</sup> <a name="WarningRecoveryInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecoveryInput"></a>

```csharp
public string WarningRecoveryInput { get; }
```

- *Type:* string

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.critical"></a>

```csharp
public string Critical { get; }
```

- *Type:* string

---

##### `CriticalRecovery`<sup>Required</sup> <a name="CriticalRecovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecovery"></a>

```csharp
public string CriticalRecovery { get; }
```

- *Type:* string

---

##### `Ok`<sup>Required</sup> <a name="Ok" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.ok"></a>

```csharp
public string Ok { get; }
```

- *Type:* string

---

##### `Unknown`<sup>Required</sup> <a name="Unknown" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknown"></a>

```csharp
public string Unknown { get; }
```

- *Type:* string

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warning"></a>

```csharp
public string Warning { get; }
```

- *Type:* string

---

##### `WarningRecovery`<sup>Required</sup> <a name="WarningRecovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecovery"></a>

```csharp
public string WarningRecovery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.internalValue"></a>

```csharp
public MonitorMonitorThresholds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---


### MonitorMonitorThresholdWindowsOutputReference <a name="MonitorMonitorThresholdWindowsOutputReference" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorMonitorThresholdWindowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetRecoveryWindow">ResetRecoveryWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetTriggerWindow">ResetTriggerWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRecoveryWindow` <a name="ResetRecoveryWindow" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetRecoveryWindow"></a>

```csharp
private void ResetRecoveryWindow()
```

##### `ResetTriggerWindow` <a name="ResetTriggerWindow" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetTriggerWindow"></a>

```csharp
private void ResetTriggerWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindowInput">RecoveryWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindowInput">TriggerWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindow">RecoveryWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindow">TriggerWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecoveryWindowInput`<sup>Optional</sup> <a name="RecoveryWindowInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindowInput"></a>

```csharp
public string RecoveryWindowInput { get; }
```

- *Type:* string

---

##### `TriggerWindowInput`<sup>Optional</sup> <a name="TriggerWindowInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindowInput"></a>

```csharp
public string TriggerWindowInput { get; }
```

- *Type:* string

---

##### `RecoveryWindow`<sup>Required</sup> <a name="RecoveryWindow" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindow"></a>

```csharp
public string RecoveryWindow { get; }
```

- *Type:* string

---

##### `TriggerWindow`<sup>Required</sup> <a name="TriggerWindow" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindow"></a>

```csharp
public string TriggerWindow { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.internalValue"></a>

```csharp
public MonitorMonitorThresholdWindows InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---


### MonitorSchedulingOptionsCustomScheduleList <a name="MonitorSchedulingOptionsCustomScheduleList" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorSchedulingOptionsCustomScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.get"></a>

```csharp
private MonitorSchedulingOptionsCustomScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorSchedulingOptionsCustomScheduleOutputReference <a name="MonitorSchedulingOptionsCustomScheduleOutputReference" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorSchedulingOptionsCustomScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence">PutRecurrence</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence"></a>

```csharp
private void PutRecurrence(MonitorSchedulingOptionsCustomScheduleRecurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference">MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrence"></a>

```csharp
public MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference Recurrence { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference">MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference</a>

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrenceInput"></a>

```csharp
public MonitorSchedulingOptionsCustomScheduleRecurrence RecurrenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference <a name="MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resetStart"></a>

```csharp
private void ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rruleInput">RruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rrule">Rrule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RruleInput`<sup>Optional</sup> <a name="RruleInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rruleInput"></a>

```csharp
public string RruleInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `Rrule`<sup>Required</sup> <a name="Rrule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rrule"></a>

```csharp
public string Rrule { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.internalValue"></a>

```csharp
public MonitorSchedulingOptionsCustomScheduleRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---


### MonitorSchedulingOptionsEvaluationWindowList <a name="MonitorSchedulingOptionsEvaluationWindowList" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorSchedulingOptionsEvaluationWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.get"></a>

```csharp
private MonitorSchedulingOptionsEvaluationWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorSchedulingOptionsEvaluationWindowOutputReference <a name="MonitorSchedulingOptionsEvaluationWindowOutputReference" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorSchedulingOptionsEvaluationWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetDayStarts">ResetDayStarts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetHourStarts">ResetHourStarts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetMonthStarts">ResetMonthStarts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayStarts` <a name="ResetDayStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetDayStarts"></a>

```csharp
private void ResetDayStarts()
```

##### `ResetHourStarts` <a name="ResetHourStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetHourStarts"></a>

```csharp
private void ResetHourStarts()
```

##### `ResetMonthStarts` <a name="ResetMonthStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetMonthStarts"></a>

```csharp
private void ResetMonthStarts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStartsInput">DayStartsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStartsInput">HourStartsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStartsInput">MonthStartsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStarts">DayStarts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStarts">HourStarts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStarts">MonthStarts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayStartsInput`<sup>Optional</sup> <a name="DayStartsInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStartsInput"></a>

```csharp
public string DayStartsInput { get; }
```

- *Type:* string

---

##### `HourStartsInput`<sup>Optional</sup> <a name="HourStartsInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStartsInput"></a>

```csharp
public double HourStartsInput { get; }
```

- *Type:* double

---

##### `MonthStartsInput`<sup>Optional</sup> <a name="MonthStartsInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStartsInput"></a>

```csharp
public double MonthStartsInput { get; }
```

- *Type:* double

---

##### `DayStarts`<sup>Required</sup> <a name="DayStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStarts"></a>

```csharp
public string DayStarts { get; }
```

- *Type:* string

---

##### `HourStarts`<sup>Required</sup> <a name="HourStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStarts"></a>

```csharp
public double HourStarts { get; }
```

- *Type:* double

---

##### `MonthStarts`<sup>Required</sup> <a name="MonthStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStarts"></a>

```csharp
public double MonthStarts { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorSchedulingOptionsList <a name="MonitorSchedulingOptionsList" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorSchedulingOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.get"></a>

```csharp
private MonitorSchedulingOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorSchedulingOptionsOutputReference <a name="MonitorSchedulingOptionsOutputReference" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorSchedulingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule">PutCustomSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow">PutEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetCustomSchedule">ResetCustomSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetEvaluationWindow">ResetEvaluationWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomSchedule` <a name="PutCustomSchedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule"></a>

```csharp
private void PutCustomSchedule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule.parameter.value"></a>

- *Type:* object

---

##### `PutEvaluationWindow` <a name="PutEvaluationWindow" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow"></a>

```csharp
private void PutEvaluationWindow(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomSchedule` <a name="ResetCustomSchedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetCustomSchedule"></a>

```csharp
private void ResetCustomSchedule()
```

##### `ResetEvaluationWindow` <a name="ResetEvaluationWindow" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetEvaluationWindow"></a>

```csharp
private void ResetEvaluationWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customSchedule">CustomSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList">MonitorSchedulingOptionsCustomScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindow">EvaluationWindow</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList">MonitorSchedulingOptionsEvaluationWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customScheduleInput">CustomScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindowInput">EvaluationWindowInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomSchedule`<sup>Required</sup> <a name="CustomSchedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customSchedule"></a>

```csharp
public MonitorSchedulingOptionsCustomScheduleList CustomSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleList">MonitorSchedulingOptionsCustomScheduleList</a>

---

##### `EvaluationWindow`<sup>Required</sup> <a name="EvaluationWindow" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindow"></a>

```csharp
public MonitorSchedulingOptionsEvaluationWindowList EvaluationWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowList">MonitorSchedulingOptionsEvaluationWindowList</a>

---

##### `CustomScheduleInput`<sup>Optional</sup> <a name="CustomScheduleInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customScheduleInput"></a>

```csharp
public object CustomScheduleInput { get; }
```

- *Type:* object

---

##### `EvaluationWindowInput`<sup>Optional</sup> <a name="EvaluationWindowInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindowInput"></a>

```csharp
public object EvaluationWindowInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorVariablesEventQueryComputeList <a name="MonitorVariablesEventQueryComputeList" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQueryComputeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get"></a>

```csharp
private MonitorVariablesEventQueryComputeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorVariablesEventQueryComputeOutputReference <a name="MonitorVariablesEventQueryComputeOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQueryComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetMetric"></a>

```csharp
private void ResetMetric()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metricInput">MetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregationInput"></a>

```csharp
public string AggregationInput { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metricInput"></a>

```csharp
public string MetricInput { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorVariablesEventQueryGroupByList <a name="MonitorVariablesEventQueryGroupByList" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQueryGroupByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get"></a>

```csharp
private MonitorVariablesEventQueryGroupByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorVariablesEventQueryGroupByOutputReference <a name="MonitorVariablesEventQueryGroupByOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQueryGroupByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort">PutSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetSort">ResetSort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSort` <a name="PutSort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort"></a>

```csharp
private void PutSort(MonitorVariablesEventQueryGroupBySort Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetSort` <a name="ResetSort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetSort"></a>

```csharp
private void ResetSort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sort">Sort</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference">MonitorVariablesEventQueryGroupBySortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facetInput">FacetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sortInput">SortInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facet">Facet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sort"></a>

```csharp
public MonitorVariablesEventQueryGroupBySortOutputReference Sort { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference">MonitorVariablesEventQueryGroupBySortOutputReference</a>

---

##### `FacetInput`<sup>Optional</sup> <a name="FacetInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facetInput"></a>

```csharp
public string FacetInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sortInput"></a>

```csharp
public MonitorVariablesEventQueryGroupBySort SortInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---

##### `Facet`<sup>Required</sup> <a name="Facet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facet"></a>

```csharp
public string Facet { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorVariablesEventQueryGroupBySortOutputReference <a name="MonitorVariablesEventQueryGroupBySortOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQueryGroupBySortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metricInput">MetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregationInput"></a>

```csharp
public string AggregationInput { get; }
```

- *Type:* string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metricInput"></a>

```csharp
public string MetricInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.internalValue"></a>

```csharp
public MonitorVariablesEventQueryGroupBySort InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---


### MonitorVariablesEventQueryList <a name="MonitorVariablesEventQueryList" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.get"></a>

```csharp
private MonitorVariablesEventQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorVariablesEventQueryOutputReference <a name="MonitorVariablesEventQueryOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute">PutCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy">PutGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch">PutSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetIndexes">ResetIndexes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompute` <a name="PutCompute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute"></a>

```csharp
private void PutCompute(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute.parameter.value"></a>

- *Type:* object

---

##### `PutGroupBy` <a name="PutGroupBy" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy"></a>

```csharp
private void PutGroupBy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy.parameter.value"></a>

- *Type:* object

---

##### `PutSearch` <a name="PutSearch" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch"></a>

```csharp
private void PutSearch(MonitorVariablesEventQuerySearch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---

##### `ResetGroupBy` <a name="ResetGroupBy" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

##### `ResetIndexes` <a name="ResetIndexes" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetIndexes"></a>

```csharp
private void ResetIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.compute">Compute</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList">MonitorVariablesEventQueryComputeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupBy">GroupBy</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList">MonitorVariablesEventQueryGroupByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.search">Search</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference">MonitorVariablesEventQuerySearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.computeInput">ComputeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupByInput">GroupByInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexesInput">IndexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.searchInput">SearchInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexes">Indexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.compute"></a>

```csharp
public MonitorVariablesEventQueryComputeList Compute { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList">MonitorVariablesEventQueryComputeList</a>

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupBy"></a>

```csharp
public MonitorVariablesEventQueryGroupByList GroupBy { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList">MonitorVariablesEventQueryGroupByList</a>

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.search"></a>

```csharp
public MonitorVariablesEventQuerySearchOutputReference Search { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference">MonitorVariablesEventQuerySearchOutputReference</a>

---

##### `ComputeInput`<sup>Optional</sup> <a name="ComputeInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.computeInput"></a>

```csharp
public object ComputeInput { get; }
```

- *Type:* object

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSourceInput"></a>

```csharp
public string DataSourceInput { get; }
```

- *Type:* string

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupByInput"></a>

```csharp
public object GroupByInput { get; }
```

- *Type:* object

---

##### `IndexesInput`<sup>Optional</sup> <a name="IndexesInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexesInput"></a>

```csharp
public string[] IndexesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.searchInput"></a>

```csharp
public MonitorVariablesEventQuerySearch SearchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `Indexes`<sup>Required</sup> <a name="Indexes" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexes"></a>

```csharp
public string[] Indexes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorVariablesEventQuerySearchOutputReference <a name="MonitorVariablesEventQuerySearchOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesEventQuerySearchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.internalValue"></a>

```csharp
public MonitorVariablesEventQuerySearch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---


### MonitorVariablesOutputReference <a name="MonitorVariablesOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery">PutEventQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resetEventQuery">ResetEventQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEventQuery` <a name="PutEventQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery"></a>

```csharp
private void PutEventQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetEventQuery` <a name="ResetEventQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resetEventQuery"></a>

```csharp
private void ResetEventQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQuery">EventQuery</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList">MonitorVariablesEventQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQueryInput">EventQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventQuery`<sup>Required</sup> <a name="EventQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQuery"></a>

```csharp
public MonitorVariablesEventQueryList EventQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList">MonitorVariablesEventQueryList</a>

---

##### `EventQueryInput`<sup>Optional</sup> <a name="EventQueryInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQueryInput"></a>

```csharp
public object EventQueryInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.internalValue"></a>

```csharp
public MonitorVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---



