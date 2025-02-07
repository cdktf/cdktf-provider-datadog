# `dataDatadogTeamMemberships` Submodule <a name="`dataDatadogTeamMemberships` Submodule" id="@cdktf/provider-datadog.dataDatadogTeamMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeamMemberships <a name="DataDatadogTeamMemberships" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/team_memberships datadog_team_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_memberships.DataDatadogTeamMemberships;

DataDatadogTeamMemberships.Builder.create(Construct scope, java.lang.String id)
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
    .teamId(java.lang.String)
//  .exactMatch(java.lang.Boolean)
//  .exactMatch(IResolvable)
//  .filterKeyword(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | The team's identifier. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.exactMatch">exactMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, `filter_keyword` string is exact matched against the user's `email`, followed by `name`. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.filterKeyword">filterKeyword</a></code> | <code>java.lang.String</code> | Search query, can be user email or name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

The team's identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/team_memberships#team_id DataDatadogTeamMemberships#team_id}

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.exactMatch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, `filter_keyword` string is exact matched against the user's `email`, followed by `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/team_memberships#exact_match DataDatadogTeamMemberships#exact_match}

---

##### `filterKeyword`<sup>Optional</sup> <a name="filterKeyword" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.filterKeyword"></a>

- *Type:* java.lang.String

Search query, can be user email or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/team_memberships#filter_keyword DataDatadogTeamMemberships#filter_keyword}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetFilterKeyword">resetFilterKeyword</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetExactMatch"></a>

```java
public void resetExactMatch()
```

##### `resetFilterKeyword` <a name="resetFilterKeyword" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetFilterKeyword"></a>

```java
public void resetFilterKeyword()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogTeamMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_memberships.DataDatadogTeamMemberships;

DataDatadogTeamMemberships.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_memberships.DataDatadogTeamMemberships;

DataDatadogTeamMemberships.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_memberships.DataDatadogTeamMemberships;

DataDatadogTeamMemberships.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_memberships.DataDatadogTeamMemberships;

DataDatadogTeamMemberships.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogTeamMemberships.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogTeamMemberships resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogTeamMemberships to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogTeamMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/team_memberships#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogTeamMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamMemberships">teamMemberships</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList">DataDatadogTeamMembershipsTeamMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.exactMatchInput">exactMatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.filterKeywordInput">filterKeywordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.exactMatch">exactMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.filterKeyword">filterKeyword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `teamMemberships`<sup>Required</sup> <a name="teamMemberships" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamMemberships"></a>

```java
public DataDatadogTeamMembershipsTeamMembershipsList getTeamMemberships();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList">DataDatadogTeamMembershipsTeamMembershipsList</a>

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.exactMatchInput"></a>

```java
public java.lang.Object getExactMatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterKeywordInput`<sup>Optional</sup> <a name="filterKeywordInput" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.filterKeywordInput"></a>

```java
public java.lang.String getFilterKeywordInput();
```

- *Type:* java.lang.String

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.exactMatch"></a>

```java
public java.lang.Object getExactMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterKeyword`<sup>Required</sup> <a name="filterKeyword" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.filterKeyword"></a>

```java
public java.lang.String getFilterKeyword();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamMembershipsConfig <a name="DataDatadogTeamMembershipsConfig" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_memberships.DataDatadogTeamMembershipsConfig;

DataDatadogTeamMembershipsConfig.builder()
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
    .teamId(java.lang.String)
//  .exactMatch(java.lang.Boolean)
//  .exactMatch(IResolvable)
//  .filterKeyword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | The team's identifier. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.exactMatch">exactMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, `filter_keyword` string is exact matched against the user's `email`, followed by `name`. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.filterKeyword">filterKeyword</a></code> | <code>java.lang.String</code> | Search query, can be user email or name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

The team's identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/team_memberships#team_id DataDatadogTeamMemberships#team_id}

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.exactMatch"></a>

```java
public java.lang.Object getExactMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, `filter_keyword` string is exact matched against the user's `email`, followed by `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/team_memberships#exact_match DataDatadogTeamMemberships#exact_match}

---

##### `filterKeyword`<sup>Optional</sup> <a name="filterKeyword" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.filterKeyword"></a>

```java
public java.lang.String getFilterKeyword();
```

- *Type:* java.lang.String

Search query, can be user email or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/team_memberships#filter_keyword DataDatadogTeamMemberships#filter_keyword}

---

### DataDatadogTeamMembershipsTeamMemberships <a name="DataDatadogTeamMembershipsTeamMemberships" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMemberships.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_memberships.DataDatadogTeamMembershipsTeamMemberships;

DataDatadogTeamMembershipsTeamMemberships.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogTeamMembershipsTeamMembershipsList <a name="DataDatadogTeamMembershipsTeamMembershipsList" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_memberships.DataDatadogTeamMembershipsTeamMembershipsList;

new DataDatadogTeamMembershipsTeamMembershipsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.get"></a>

```java
public DataDatadogTeamMembershipsTeamMembershipsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogTeamMembershipsTeamMembershipsOutputReference <a name="DataDatadogTeamMembershipsTeamMembershipsOutputReference" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_team_memberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference;

new DataDatadogTeamMembershipsTeamMembershipsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMemberships">DataDatadogTeamMembershipsTeamMemberships</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.internalValue"></a>

```java
public DataDatadogTeamMembershipsTeamMemberships getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMemberships">DataDatadogTeamMembershipsTeamMemberships</a>

---



