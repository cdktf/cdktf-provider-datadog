# `datadog_sensitive_data_scanner_group`

Refer to the Terraform Registory for docs: [`datadog_sensitive_data_scanner_group`](https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group).

# `sensitiveDataScannerGroup` Submodule <a name="`sensitiveDataScannerGroup` Submodule" id="@cdktf/provider-datadog.sensitiveDataScannerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SensitiveDataScannerGroup <a name="SensitiveDataScannerGroup" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group datadog_sensitive_data_scanner_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.sensitive_data_scanner_group.SensitiveDataScannerGroup;

SensitiveDataScannerGroup.Builder.create(Construct scope, java.lang.String id)
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
    .filter(SensitiveDataScannerGroupFilter)
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .name(java.lang.String)
    .productList(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the scanning group is enabled. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Datadog scanning group. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.productList">productList</a></code> | <code>java.util.List<java.lang.String></code> | List of products the scanning group applies. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the Datadog scanning group. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#id SensitiveDataScannerGroup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#filter SensitiveDataScannerGroup#filter}

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.isEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the scanning group is enabled.

If the group doesn't contain any rule or if all the rules in it are disabled, the group is force-disabled by our backend

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#is_enabled SensitiveDataScannerGroup#is_enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Datadog scanning group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#name SensitiveDataScannerGroup#name}

---

##### `productList`<sup>Required</sup> <a name="productList" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.productList"></a>

- *Type:* java.util.List<java.lang.String>

List of products the scanning group applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#product_list SensitiveDataScannerGroup#product_list}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the Datadog scanning group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#description SensitiveDataScannerGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#id SensitiveDataScannerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.putFilter"></a>

```java
public void putFilter(SensitiveDataScannerGroupFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.sensitive_data_scanner_group.SensitiveDataScannerGroup;

SensitiveDataScannerGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.sensitive_data_scanner_group.SensitiveDataScannerGroup;

SensitiveDataScannerGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.sensitive_data_scanner_group.SensitiveDataScannerGroup;

SensitiveDataScannerGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference">SensitiveDataScannerGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.productListInput">productListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.productList">productList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.filter"></a>

```java
public SensitiveDataScannerGroupFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference">SensitiveDataScannerGroupFilterOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.filterInput"></a>

```java
public SensitiveDataScannerGroupFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productListInput`<sup>Optional</sup> <a name="productListInput" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.productListInput"></a>

```java
public java.util.List<java.lang.String> getProductListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `productList`<sup>Required</sup> <a name="productList" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.productList"></a>

```java
public java.util.List<java.lang.String> getProductList();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SensitiveDataScannerGroupConfig <a name="SensitiveDataScannerGroupConfig" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.sensitive_data_scanner_group.SensitiveDataScannerGroupConfig;

SensitiveDataScannerGroupConfig.builder()
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
    .filter(SensitiveDataScannerGroupFilter)
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .name(java.lang.String)
    .productList(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the scanning group is enabled. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Datadog scanning group. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.productList">productList</a></code> | <code>java.util.List<java.lang.String></code> | List of products the scanning group applies. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the Datadog scanning group. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#id SensitiveDataScannerGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.filter"></a>

```java
public SensitiveDataScannerGroupFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#filter SensitiveDataScannerGroup#filter}

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the scanning group is enabled.

If the group doesn't contain any rule or if all the rules in it are disabled, the group is force-disabled by our backend

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#is_enabled SensitiveDataScannerGroup#is_enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Datadog scanning group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#name SensitiveDataScannerGroup#name}

---

##### `productList`<sup>Required</sup> <a name="productList" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.productList"></a>

```java
public java.util.List<java.lang.String> getProductList();
```

- *Type:* java.util.List<java.lang.String>

List of products the scanning group applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#product_list SensitiveDataScannerGroup#product_list}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the Datadog scanning group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#description SensitiveDataScannerGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#id SensitiveDataScannerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SensitiveDataScannerGroupFilter <a name="SensitiveDataScannerGroupFilter" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.sensitive_data_scanner_group.SensitiveDataScannerGroupFilter;

SensitiveDataScannerGroupFilter.builder()
    .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter.property.query">query</a></code> | <code>java.lang.String</code> | Query to filter the events. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Query to filter the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/sensitive_data_scanner_group#query SensitiveDataScannerGroup#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SensitiveDataScannerGroupFilterOutputReference <a name="SensitiveDataScannerGroupFilterOutputReference" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.sensitive_data_scanner_group.SensitiveDataScannerGroupFilterOutputReference;

new SensitiveDataScannerGroupFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.internalValue"></a>

```java
public SensitiveDataScannerGroupFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a>

---



