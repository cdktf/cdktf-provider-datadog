# `dataDatadogSoftwareCatalog` Submodule <a name="`dataDatadogSoftwareCatalog` Submodule" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSoftwareCatalog <a name="DataDatadogSoftwareCatalog" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog datadog_software_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_software_catalog.DataDatadogSoftwareCatalog;

DataDatadogSoftwareCatalog.Builder.create(Construct scope, java.lang.String id)
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
//  .filterExcludeSnapshot(java.lang.String)
//  .filterId(java.lang.String)
//  .filterKind(java.lang.String)
//  .filterName(java.lang.String)
//  .filterOwner(java.lang.String)
//  .filterRef(java.lang.String)
//  .filterRelationType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterExcludeSnapshot">filterExcludeSnapshot</a></code> | <code>java.lang.String</code> | Filter entities by excluding snapshotted entities. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterId">filterId</a></code> | <code>java.lang.String</code> | Filter entities by UUID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterKind">filterKind</a></code> | <code>java.lang.String</code> | Filter entities by kind. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterName">filterName</a></code> | <code>java.lang.String</code> | Filter entities by name. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterOwner">filterOwner</a></code> | <code>java.lang.String</code> | Filter entities by owner. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterRef">filterRef</a></code> | <code>java.lang.String</code> | Filter entities by reference. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterRelationType">filterRelationType</a></code> | <code>java.lang.String</code> | Filter entities by relation type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filterExcludeSnapshot`<sup>Optional</sup> <a name="filterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterExcludeSnapshot"></a>

- *Type:* java.lang.String

Filter entities by excluding snapshotted entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_exclude_snapshot DataDatadogSoftwareCatalog#filter_exclude_snapshot}

---

##### `filterId`<sup>Optional</sup> <a name="filterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterId"></a>

- *Type:* java.lang.String

Filter entities by UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_id DataDatadogSoftwareCatalog#filter_id}

---

##### `filterKind`<sup>Optional</sup> <a name="filterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterKind"></a>

- *Type:* java.lang.String

Filter entities by kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_kind DataDatadogSoftwareCatalog#filter_kind}

---

##### `filterName`<sup>Optional</sup> <a name="filterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterName"></a>

- *Type:* java.lang.String

Filter entities by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_name DataDatadogSoftwareCatalog#filter_name}

---

##### `filterOwner`<sup>Optional</sup> <a name="filterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterOwner"></a>

- *Type:* java.lang.String

Filter entities by owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_owner DataDatadogSoftwareCatalog#filter_owner}

---

##### `filterRef`<sup>Optional</sup> <a name="filterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterRef"></a>

- *Type:* java.lang.String

Filter entities by reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_ref DataDatadogSoftwareCatalog#filter_ref}

---

##### `filterRelationType`<sup>Optional</sup> <a name="filterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.filterRelationType"></a>

- *Type:* java.lang.String

Filter entities by relation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_relation_type DataDatadogSoftwareCatalog#filter_relation_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterExcludeSnapshot">resetFilterExcludeSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterId">resetFilterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterKind">resetFilterKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterName">resetFilterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterOwner">resetFilterOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRef">resetFilterRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRelationType">resetFilterRelationType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilterExcludeSnapshot` <a name="resetFilterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterExcludeSnapshot"></a>

```java
public void resetFilterExcludeSnapshot()
```

##### `resetFilterId` <a name="resetFilterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterId"></a>

```java
public void resetFilterId()
```

##### `resetFilterKind` <a name="resetFilterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterKind"></a>

```java
public void resetFilterKind()
```

##### `resetFilterName` <a name="resetFilterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterName"></a>

```java
public void resetFilterName()
```

##### `resetFilterOwner` <a name="resetFilterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterOwner"></a>

```java
public void resetFilterOwner()
```

##### `resetFilterRef` <a name="resetFilterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRef"></a>

```java
public void resetFilterRef()
```

##### `resetFilterRelationType` <a name="resetFilterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRelationType"></a>

```java
public void resetFilterRelationType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogSoftwareCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_software_catalog.DataDatadogSoftwareCatalog;

DataDatadogSoftwareCatalog.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_software_catalog.DataDatadogSoftwareCatalog;

DataDatadogSoftwareCatalog.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_software_catalog.DataDatadogSoftwareCatalog;

DataDatadogSoftwareCatalog.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_software_catalog.DataDatadogSoftwareCatalog;

DataDatadogSoftwareCatalog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogSoftwareCatalog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogSoftwareCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogSoftwareCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogSoftwareCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogSoftwareCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.entities">entities</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList">DataDatadogSoftwareCatalogEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshotInput">filterExcludeSnapshotInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterIdInput">filterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKindInput">filterKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterNameInput">filterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwnerInput">filterOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRefInput">filterRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationTypeInput">filterRelationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshot">filterExcludeSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterId">filterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKind">filterKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterName">filterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwner">filterOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRef">filterRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationType">filterRelationType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.entities"></a>

```java
public DataDatadogSoftwareCatalogEntitiesList getEntities();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList">DataDatadogSoftwareCatalogEntitiesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `filterExcludeSnapshotInput`<sup>Optional</sup> <a name="filterExcludeSnapshotInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshotInput"></a>

```java
public java.lang.String getFilterExcludeSnapshotInput();
```

- *Type:* java.lang.String

---

##### `filterIdInput`<sup>Optional</sup> <a name="filterIdInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterIdInput"></a>

```java
public java.lang.String getFilterIdInput();
```

- *Type:* java.lang.String

---

##### `filterKindInput`<sup>Optional</sup> <a name="filterKindInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKindInput"></a>

```java
public java.lang.String getFilterKindInput();
```

- *Type:* java.lang.String

---

##### `filterNameInput`<sup>Optional</sup> <a name="filterNameInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterNameInput"></a>

```java
public java.lang.String getFilterNameInput();
```

- *Type:* java.lang.String

---

##### `filterOwnerInput`<sup>Optional</sup> <a name="filterOwnerInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwnerInput"></a>

```java
public java.lang.String getFilterOwnerInput();
```

- *Type:* java.lang.String

---

##### `filterRefInput`<sup>Optional</sup> <a name="filterRefInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRefInput"></a>

```java
public java.lang.String getFilterRefInput();
```

- *Type:* java.lang.String

---

##### `filterRelationTypeInput`<sup>Optional</sup> <a name="filterRelationTypeInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationTypeInput"></a>

```java
public java.lang.String getFilterRelationTypeInput();
```

- *Type:* java.lang.String

---

##### `filterExcludeSnapshot`<sup>Required</sup> <a name="filterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshot"></a>

```java
public java.lang.String getFilterExcludeSnapshot();
```

- *Type:* java.lang.String

---

##### `filterId`<sup>Required</sup> <a name="filterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterId"></a>

```java
public java.lang.String getFilterId();
```

- *Type:* java.lang.String

---

##### `filterKind`<sup>Required</sup> <a name="filterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKind"></a>

```java
public java.lang.String getFilterKind();
```

- *Type:* java.lang.String

---

##### `filterName`<sup>Required</sup> <a name="filterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterName"></a>

```java
public java.lang.String getFilterName();
```

- *Type:* java.lang.String

---

##### `filterOwner`<sup>Required</sup> <a name="filterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwner"></a>

```java
public java.lang.String getFilterOwner();
```

- *Type:* java.lang.String

---

##### `filterRef`<sup>Required</sup> <a name="filterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRef"></a>

```java
public java.lang.String getFilterRef();
```

- *Type:* java.lang.String

---

##### `filterRelationType`<sup>Required</sup> <a name="filterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationType"></a>

```java
public java.lang.String getFilterRelationType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSoftwareCatalogConfig <a name="DataDatadogSoftwareCatalogConfig" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_software_catalog.DataDatadogSoftwareCatalogConfig;

DataDatadogSoftwareCatalogConfig.builder()
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
//  .filterExcludeSnapshot(java.lang.String)
//  .filterId(java.lang.String)
//  .filterKind(java.lang.String)
//  .filterName(java.lang.String)
//  .filterOwner(java.lang.String)
//  .filterRef(java.lang.String)
//  .filterRelationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterExcludeSnapshot">filterExcludeSnapshot</a></code> | <code>java.lang.String</code> | Filter entities by excluding snapshotted entities. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterId">filterId</a></code> | <code>java.lang.String</code> | Filter entities by UUID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterKind">filterKind</a></code> | <code>java.lang.String</code> | Filter entities by kind. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterName">filterName</a></code> | <code>java.lang.String</code> | Filter entities by name. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterOwner">filterOwner</a></code> | <code>java.lang.String</code> | Filter entities by owner. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRef">filterRef</a></code> | <code>java.lang.String</code> | Filter entities by reference. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRelationType">filterRelationType</a></code> | <code>java.lang.String</code> | Filter entities by relation type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filterExcludeSnapshot`<sup>Optional</sup> <a name="filterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterExcludeSnapshot"></a>

```java
public java.lang.String getFilterExcludeSnapshot();
```

- *Type:* java.lang.String

Filter entities by excluding snapshotted entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_exclude_snapshot DataDatadogSoftwareCatalog#filter_exclude_snapshot}

---

##### `filterId`<sup>Optional</sup> <a name="filterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterId"></a>

```java
public java.lang.String getFilterId();
```

- *Type:* java.lang.String

Filter entities by UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_id DataDatadogSoftwareCatalog#filter_id}

---

##### `filterKind`<sup>Optional</sup> <a name="filterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterKind"></a>

```java
public java.lang.String getFilterKind();
```

- *Type:* java.lang.String

Filter entities by kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_kind DataDatadogSoftwareCatalog#filter_kind}

---

##### `filterName`<sup>Optional</sup> <a name="filterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterName"></a>

```java
public java.lang.String getFilterName();
```

- *Type:* java.lang.String

Filter entities by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_name DataDatadogSoftwareCatalog#filter_name}

---

##### `filterOwner`<sup>Optional</sup> <a name="filterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterOwner"></a>

```java
public java.lang.String getFilterOwner();
```

- *Type:* java.lang.String

Filter entities by owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_owner DataDatadogSoftwareCatalog#filter_owner}

---

##### `filterRef`<sup>Optional</sup> <a name="filterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRef"></a>

```java
public java.lang.String getFilterRef();
```

- *Type:* java.lang.String

Filter entities by reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_ref DataDatadogSoftwareCatalog#filter_ref}

---

##### `filterRelationType`<sup>Optional</sup> <a name="filterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRelationType"></a>

```java
public java.lang.String getFilterRelationType();
```

- *Type:* java.lang.String

Filter entities by relation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/software_catalog#filter_relation_type DataDatadogSoftwareCatalog#filter_relation_type}

---

### DataDatadogSoftwareCatalogEntities <a name="DataDatadogSoftwareCatalogEntities" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_software_catalog.DataDatadogSoftwareCatalogEntities;

DataDatadogSoftwareCatalogEntities.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSoftwareCatalogEntitiesList <a name="DataDatadogSoftwareCatalogEntitiesList" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_software_catalog.DataDatadogSoftwareCatalogEntitiesList;

new DataDatadogSoftwareCatalogEntitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.get"></a>

```java
public DataDatadogSoftwareCatalogEntitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSoftwareCatalogEntitiesOutputReference <a name="DataDatadogSoftwareCatalogEntitiesOutputReference" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_software_catalog.DataDatadogSoftwareCatalogEntitiesOutputReference;

new DataDatadogSoftwareCatalogEntitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities">DataDatadogSoftwareCatalogEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.internalValue"></a>

```java
public DataDatadogSoftwareCatalogEntities getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities">DataDatadogSoftwareCatalogEntities</a>

---



