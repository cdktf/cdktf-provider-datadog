# `dataDatadogTeamHierarchyLinks` Submodule <a name="`dataDatadogTeamHierarchyLinks` Submodule" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeamHierarchyLinks <a name="DataDatadogTeamHierarchyLinks" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links datadog_team_hierarchy_links}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_hierarchy_links.DataDatadogTeamHierarchyLinks;

DataDatadogTeamHierarchyLinks.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filterParentTeam(java.lang.String)
//  .filterSubTeam(java.lang.String)
//  .linkId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.filterParentTeam">filterParentTeam</a></code> | <code>java.lang.String</code> | Filter by parent team ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.filterSubTeam">filterSubTeam</a></code> | <code>java.lang.String</code> | Filter by sub team ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.linkId">linkId</a></code> | <code>java.lang.String</code> | The team hierarchy link’s identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filterParentTeam`<sup>Optional</sup> <a name="filterParentTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.filterParentTeam"></a>

- *Type:* java.lang.String

Filter by parent team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_parent_team DataDatadogTeamHierarchyLinks#filter_parent_team}

---

##### `filterSubTeam`<sup>Optional</sup> <a name="filterSubTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.filterSubTeam"></a>

- *Type:* java.lang.String

Filter by sub team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_sub_team DataDatadogTeamHierarchyLinks#filter_sub_team}

---

##### `linkId`<sup>Optional</sup> <a name="linkId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.linkId"></a>

- *Type:* java.lang.String

The team hierarchy link’s identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#link_id DataDatadogTeamHierarchyLinks#link_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterParentTeam">resetFilterParentTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterSubTeam">resetFilterSubTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetLinkId">resetLinkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilterParentTeam` <a name="resetFilterParentTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterParentTeam"></a>

```java
public void resetFilterParentTeam()
```

##### `resetFilterSubTeam` <a name="resetFilterSubTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterSubTeam"></a>

```java
public void resetFilterSubTeam()
```

##### `resetLinkId` <a name="resetLinkId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetLinkId"></a>

```java
public void resetLinkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogTeamHierarchyLinks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_hierarchy_links.DataDatadogTeamHierarchyLinks;

DataDatadogTeamHierarchyLinks.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_hierarchy_links.DataDatadogTeamHierarchyLinks;

DataDatadogTeamHierarchyLinks.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_hierarchy_links.DataDatadogTeamHierarchyLinks;

DataDatadogTeamHierarchyLinks.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_hierarchy_links.DataDatadogTeamHierarchyLinks;

DataDatadogTeamHierarchyLinks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogTeamHierarchyLinks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogTeamHierarchyLinks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogTeamHierarchyLinks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogTeamHierarchyLinks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogTeamHierarchyLinks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provisionedBy">provisionedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeamInput">filterParentTeamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeamInput">filterSubTeamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkIdInput">linkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeam">filterParentTeam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeam">filterSubTeam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkId">linkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `provisionedBy`<sup>Required</sup> <a name="provisionedBy" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provisionedBy"></a>

```java
public java.lang.String getProvisionedBy();
```

- *Type:* java.lang.String

---

##### `filterParentTeamInput`<sup>Optional</sup> <a name="filterParentTeamInput" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeamInput"></a>

```java
public java.lang.String getFilterParentTeamInput();
```

- *Type:* java.lang.String

---

##### `filterSubTeamInput`<sup>Optional</sup> <a name="filterSubTeamInput" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeamInput"></a>

```java
public java.lang.String getFilterSubTeamInput();
```

- *Type:* java.lang.String

---

##### `linkIdInput`<sup>Optional</sup> <a name="linkIdInput" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkIdInput"></a>

```java
public java.lang.String getLinkIdInput();
```

- *Type:* java.lang.String

---

##### `filterParentTeam`<sup>Required</sup> <a name="filterParentTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeam"></a>

```java
public java.lang.String getFilterParentTeam();
```

- *Type:* java.lang.String

---

##### `filterSubTeam`<sup>Required</sup> <a name="filterSubTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeam"></a>

```java
public java.lang.String getFilterSubTeam();
```

- *Type:* java.lang.String

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkId"></a>

```java
public java.lang.String getLinkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamHierarchyLinksConfig <a name="DataDatadogTeamHierarchyLinksConfig" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_hierarchy_links.DataDatadogTeamHierarchyLinksConfig;

DataDatadogTeamHierarchyLinksConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filterParentTeam(java.lang.String)
//  .filterSubTeam(java.lang.String)
//  .linkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterParentTeam">filterParentTeam</a></code> | <code>java.lang.String</code> | Filter by parent team ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterSubTeam">filterSubTeam</a></code> | <code>java.lang.String</code> | Filter by sub team ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.linkId">linkId</a></code> | <code>java.lang.String</code> | The team hierarchy link’s identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filterParentTeam`<sup>Optional</sup> <a name="filterParentTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterParentTeam"></a>

```java
public java.lang.String getFilterParentTeam();
```

- *Type:* java.lang.String

Filter by parent team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_parent_team DataDatadogTeamHierarchyLinks#filter_parent_team}

---

##### `filterSubTeam`<sup>Optional</sup> <a name="filterSubTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterSubTeam"></a>

```java
public java.lang.String getFilterSubTeam();
```

- *Type:* java.lang.String

Filter by sub team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_sub_team DataDatadogTeamHierarchyLinks#filter_sub_team}

---

##### `linkId`<sup>Optional</sup> <a name="linkId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.linkId"></a>

```java
public java.lang.String getLinkId();
```

- *Type:* java.lang.String

The team hierarchy link’s identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#link_id DataDatadogTeamHierarchyLinks#link_id}

---



