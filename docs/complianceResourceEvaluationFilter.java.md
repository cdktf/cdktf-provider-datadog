# `complianceResourceEvaluationFilter` Submodule <a name="`complianceResourceEvaluationFilter` Submodule" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceResourceEvaluationFilter <a name="ComplianceResourceEvaluationFilter" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/compliance_resource_evaluation_filter datadog_compliance_resource_evaluation_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_resource_evaluation_filter.ComplianceResourceEvaluationFilter;

ComplianceResourceEvaluationFilter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cloudProvider(java.lang.String)
    .resourceId(java.lang.String)
    .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | The cloud provider of the filter's targeted resource. Only `aws`, `gcp`, or `azure` are considered valid cloud providers. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of the of the filter's targeted resource. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | List of tags to filter misconfiguration detections. Each entry should follow the format: "key":"value". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.cloudProvider"></a>

- *Type:* java.lang.String

The cloud provider of the filter's targeted resource. Only `aws`, `gcp`, or `azure` are considered valid cloud providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/compliance_resource_evaluation_filter#cloud_provider ComplianceResourceEvaluationFilter#cloud_provider}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

The ID of the of the filter's targeted resource.

Different cloud providers target different resource IDs:

* `aws`: account ID
* `gcp`: project ID
* `azure`: subscription ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/compliance_resource_evaluation_filter#resource_id ComplianceResourceEvaluationFilter#resource_id}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

List of tags to filter misconfiguration detections. Each entry should follow the format: "key":"value".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/compliance_resource_evaluation_filter#tags ComplianceResourceEvaluationFilter#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComplianceResourceEvaluationFilter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_resource_evaluation_filter.ComplianceResourceEvaluationFilter;

ComplianceResourceEvaluationFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_resource_evaluation_filter.ComplianceResourceEvaluationFilter;

ComplianceResourceEvaluationFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_resource_evaluation_filter.ComplianceResourceEvaluationFilter;

ComplianceResourceEvaluationFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_resource_evaluation_filter.ComplianceResourceEvaluationFilter;

ComplianceResourceEvaluationFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComplianceResourceEvaluationFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComplianceResourceEvaluationFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComplianceResourceEvaluationFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComplianceResourceEvaluationFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/compliance_resource_evaluation_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComplianceResourceEvaluationFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cloudProviderInput">cloudProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cloudProviderInput"></a>

```java
public java.lang.String getCloudProviderInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceResourceEvaluationFilterConfig <a name="ComplianceResourceEvaluationFilterConfig" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_resource_evaluation_filter.ComplianceResourceEvaluationFilterConfig;

ComplianceResourceEvaluationFilterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cloudProvider(java.lang.String)
    .resourceId(java.lang.String)
    .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | The cloud provider of the filter's targeted resource. Only `aws`, `gcp`, or `azure` are considered valid cloud providers. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of the of the filter's targeted resource. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | List of tags to filter misconfiguration detections. Each entry should follow the format: "key":"value". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

The cloud provider of the filter's targeted resource. Only `aws`, `gcp`, or `azure` are considered valid cloud providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/compliance_resource_evaluation_filter#cloud_provider ComplianceResourceEvaluationFilter#cloud_provider}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

The ID of the of the filter's targeted resource.

Different cloud providers target different resource IDs:

* `aws`: account ID
* `gcp`: project ID
* `azure`: subscription ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/compliance_resource_evaluation_filter#resource_id ComplianceResourceEvaluationFilter#resource_id}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

List of tags to filter misconfiguration detections. Each entry should follow the format: "key":"value".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/compliance_resource_evaluation_filter#tags ComplianceResourceEvaluationFilter#tags}

---



