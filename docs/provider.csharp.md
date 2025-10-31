# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-datadog.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogProvider <a name="DatadogProvider" id="@cdktf/provider-datadog.provider.DatadogProvider"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs datadog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DatadogProvider(Construct Scope, string Id, DatadogProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig">DatadogProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig">DatadogProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAppKey">ResetAppKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAwsAccessKeyId">ResetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAwsSecretAccessKey">ResetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAwsSessionToken">ResetAwsSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetCloudProviderRegion">ResetCloudProviderRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetCloudProviderType">ResetCloudProviderType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetDefaultTags">ResetDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffBase">ResetHttpClientRetryBackoffBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffMultiplier">ResetHttpClientRetryBackoffMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryEnabled">ResetHttpClientRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryMaxRetries">ResetHttpClientRetryMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryTimeout">ResetHttpClientRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetOrgUuid">ResetOrgUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetValidate">ResetValidate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.provider.DatadogProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.provider.DatadogProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.provider.DatadogProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.provider.DatadogProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.provider.DatadogProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.provider.DatadogProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.provider.DatadogProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.provider.DatadogProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.provider.DatadogProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.provider.DatadogProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktf/provider-datadog.provider.DatadogProvider.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktf/provider-datadog.provider.DatadogProvider.resetApiUrl"></a>

```csharp
private void ResetApiUrl()
```

##### `ResetAppKey` <a name="ResetAppKey" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAppKey"></a>

```csharp
private void ResetAppKey()
```

##### `ResetAwsAccessKeyId` <a name="ResetAwsAccessKeyId" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAwsAccessKeyId"></a>

```csharp
private void ResetAwsAccessKeyId()
```

##### `ResetAwsSecretAccessKey` <a name="ResetAwsSecretAccessKey" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAwsSecretAccessKey"></a>

```csharp
private void ResetAwsSecretAccessKey()
```

##### `ResetAwsSessionToken` <a name="ResetAwsSessionToken" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAwsSessionToken"></a>

```csharp
private void ResetAwsSessionToken()
```

##### `ResetCloudProviderRegion` <a name="ResetCloudProviderRegion" id="@cdktf/provider-datadog.provider.DatadogProvider.resetCloudProviderRegion"></a>

```csharp
private void ResetCloudProviderRegion()
```

##### `ResetCloudProviderType` <a name="ResetCloudProviderType" id="@cdktf/provider-datadog.provider.DatadogProvider.resetCloudProviderType"></a>

```csharp
private void ResetCloudProviderType()
```

##### `ResetDefaultTags` <a name="ResetDefaultTags" id="@cdktf/provider-datadog.provider.DatadogProvider.resetDefaultTags"></a>

```csharp
private void ResetDefaultTags()
```

##### `ResetHttpClientRetryBackoffBase` <a name="ResetHttpClientRetryBackoffBase" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffBase"></a>

```csharp
private void ResetHttpClientRetryBackoffBase()
```

##### `ResetHttpClientRetryBackoffMultiplier` <a name="ResetHttpClientRetryBackoffMultiplier" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffMultiplier"></a>

```csharp
private void ResetHttpClientRetryBackoffMultiplier()
```

##### `ResetHttpClientRetryEnabled` <a name="ResetHttpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryEnabled"></a>

```csharp
private void ResetHttpClientRetryEnabled()
```

##### `ResetHttpClientRetryMaxRetries` <a name="ResetHttpClientRetryMaxRetries" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryMaxRetries"></a>

```csharp
private void ResetHttpClientRetryMaxRetries()
```

##### `ResetHttpClientRetryTimeout` <a name="ResetHttpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryTimeout"></a>

```csharp
private void ResetHttpClientRetryTimeout()
```

##### `ResetOrgUuid` <a name="ResetOrgUuid" id="@cdktf/provider-datadog.provider.DatadogProvider.resetOrgUuid"></a>

```csharp
private void ResetOrgUuid()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktf/provider-datadog.provider.DatadogProvider.resetValidate"></a>

```csharp
private void ResetValidate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatadogProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.provider.DatadogProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DatadogProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.provider.DatadogProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DatadogProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DatadogProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DatadogProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatadogProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatadogProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatadogProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatadogProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrlInput">ApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.appKeyInput">AppKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.awsAccessKeyIdInput">AwsAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.awsSecretAccessKeyInput">AwsSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.awsSessionTokenInput">AwsSessionTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderRegionInput">CloudProviderRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderTypeInput">CloudProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.defaultTagsInput">DefaultTagsInput</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBaseInput">HttpClientRetryBackoffBaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplierInput">HttpClientRetryBackoffMultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabledInput">HttpClientRetryEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetriesInput">HttpClientRetryMaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeoutInput">HttpClientRetryTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.orgUuidInput">OrgUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.validateInput">ValidateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrl">ApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.appKey">AppKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.awsSessionToken">AwsSessionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderRegion">CloudProviderRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderType">CloudProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.defaultTags">DefaultTags</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBase">HttpClientRetryBackoffBase</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplier">HttpClientRetryBackoffMultiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabled">HttpClientRetryEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetries">HttpClientRetryMaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeout">HttpClientRetryTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.orgUuid">OrgUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.validate">Validate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.provider.DatadogProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.provider.DatadogProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.provider.DatadogProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.provider.DatadogProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-datadog.provider.DatadogProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.provider.DatadogProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.provider.DatadogProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-datadog.provider.DatadogProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-datadog.provider.DatadogProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrlInput"></a>

```csharp
public string ApiUrlInput { get; }
```

- *Type:* string

---

##### `AppKeyInput`<sup>Optional</sup> <a name="AppKeyInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.appKeyInput"></a>

```csharp
public string AppKeyInput { get; }
```

- *Type:* string

---

##### `AwsAccessKeyIdInput`<sup>Optional</sup> <a name="AwsAccessKeyIdInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.awsAccessKeyIdInput"></a>

```csharp
public string AwsAccessKeyIdInput { get; }
```

- *Type:* string

---

##### `AwsSecretAccessKeyInput`<sup>Optional</sup> <a name="AwsSecretAccessKeyInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.awsSecretAccessKeyInput"></a>

```csharp
public string AwsSecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AwsSessionTokenInput`<sup>Optional</sup> <a name="AwsSessionTokenInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.awsSessionTokenInput"></a>

```csharp
public string AwsSessionTokenInput { get; }
```

- *Type:* string

---

##### `CloudProviderRegionInput`<sup>Optional</sup> <a name="CloudProviderRegionInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderRegionInput"></a>

```csharp
public string CloudProviderRegionInput { get; }
```

- *Type:* string

---

##### `CloudProviderTypeInput`<sup>Optional</sup> <a name="CloudProviderTypeInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderTypeInput"></a>

```csharp
public string CloudProviderTypeInput { get; }
```

- *Type:* string

---

##### `DefaultTagsInput`<sup>Optional</sup> <a name="DefaultTagsInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.defaultTagsInput"></a>

```csharp
public DatadogProviderDefaultTags DefaultTagsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

---

##### `HttpClientRetryBackoffBaseInput`<sup>Optional</sup> <a name="HttpClientRetryBackoffBaseInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBaseInput"></a>

```csharp
public double HttpClientRetryBackoffBaseInput { get; }
```

- *Type:* double

---

##### `HttpClientRetryBackoffMultiplierInput`<sup>Optional</sup> <a name="HttpClientRetryBackoffMultiplierInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplierInput"></a>

```csharp
public double HttpClientRetryBackoffMultiplierInput { get; }
```

- *Type:* double

---

##### `HttpClientRetryEnabledInput`<sup>Optional</sup> <a name="HttpClientRetryEnabledInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabledInput"></a>

```csharp
public string HttpClientRetryEnabledInput { get; }
```

- *Type:* string

---

##### `HttpClientRetryMaxRetriesInput`<sup>Optional</sup> <a name="HttpClientRetryMaxRetriesInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetriesInput"></a>

```csharp
public double HttpClientRetryMaxRetriesInput { get; }
```

- *Type:* double

---

##### `HttpClientRetryTimeoutInput`<sup>Optional</sup> <a name="HttpClientRetryTimeoutInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeoutInput"></a>

```csharp
public double HttpClientRetryTimeoutInput { get; }
```

- *Type:* double

---

##### `OrgUuidInput`<sup>Optional</sup> <a name="OrgUuidInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.orgUuidInput"></a>

```csharp
public string OrgUuidInput { get; }
```

- *Type:* string

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.validateInput"></a>

```csharp
public string ValidateInput { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrl"></a>

```csharp
public string ApiUrl { get; }
```

- *Type:* string

---

##### `AppKey`<sup>Optional</sup> <a name="AppKey" id="@cdktf/provider-datadog.provider.DatadogProvider.property.appKey"></a>

```csharp
public string AppKey { get; }
```

- *Type:* string

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktf/provider-datadog.provider.DatadogProvider.property.awsAccessKeyId"></a>

```csharp
public string AwsAccessKeyId { get; }
```

- *Type:* string

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktf/provider-datadog.provider.DatadogProvider.property.awsSecretAccessKey"></a>

```csharp
public string AwsSecretAccessKey { get; }
```

- *Type:* string

---

##### `AwsSessionToken`<sup>Optional</sup> <a name="AwsSessionToken" id="@cdktf/provider-datadog.provider.DatadogProvider.property.awsSessionToken"></a>

```csharp
public string AwsSessionToken { get; }
```

- *Type:* string

---

##### `CloudProviderRegion`<sup>Optional</sup> <a name="CloudProviderRegion" id="@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderRegion"></a>

```csharp
public string CloudProviderRegion { get; }
```

- *Type:* string

---

##### `CloudProviderType`<sup>Optional</sup> <a name="CloudProviderType" id="@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderType"></a>

```csharp
public string CloudProviderType { get; }
```

- *Type:* string

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktf/provider-datadog.provider.DatadogProvider.property.defaultTags"></a>

```csharp
public DatadogProviderDefaultTags DefaultTags { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

---

##### `HttpClientRetryBackoffBase`<sup>Optional</sup> <a name="HttpClientRetryBackoffBase" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBase"></a>

```csharp
public double HttpClientRetryBackoffBase { get; }
```

- *Type:* double

---

##### `HttpClientRetryBackoffMultiplier`<sup>Optional</sup> <a name="HttpClientRetryBackoffMultiplier" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplier"></a>

```csharp
public double HttpClientRetryBackoffMultiplier { get; }
```

- *Type:* double

---

##### `HttpClientRetryEnabled`<sup>Optional</sup> <a name="HttpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabled"></a>

```csharp
public string HttpClientRetryEnabled { get; }
```

- *Type:* string

---

##### `HttpClientRetryMaxRetries`<sup>Optional</sup> <a name="HttpClientRetryMaxRetries" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetries"></a>

```csharp
public double HttpClientRetryMaxRetries { get; }
```

- *Type:* double

---

##### `HttpClientRetryTimeout`<sup>Optional</sup> <a name="HttpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeout"></a>

```csharp
public double HttpClientRetryTimeout { get; }
```

- *Type:* double

---

##### `OrgUuid`<sup>Optional</sup> <a name="OrgUuid" id="@cdktf/provider-datadog.provider.DatadogProvider.property.orgUuid"></a>

```csharp
public string OrgUuid { get; }
```

- *Type:* string

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktf/provider-datadog.provider.DatadogProvider.property.validate"></a>

```csharp
public string Validate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.provider.DatadogProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogProviderConfig <a name="DatadogProviderConfig" id="@cdktf/provider-datadog.provider.DatadogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DatadogProviderConfig {
    string Alias = null,
    string ApiKey = null,
    string ApiUrl = null,
    string AppKey = null,
    string AwsAccessKeyId = null,
    string AwsSecretAccessKey = null,
    string AwsSessionToken = null,
    string CloudProviderRegion = null,
    string CloudProviderType = null,
    DatadogProviderDefaultTags DefaultTags = null,
    double HttpClientRetryBackoffBase = null,
    double HttpClientRetryBackoffMultiplier = null,
    string HttpClientRetryEnabled = null,
    double HttpClientRetryMaxRetries = null,
    double HttpClientRetryTimeout = null,
    string OrgUuid = null,
    string Validate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | (Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiUrl">ApiUrl</a></code> | <code>string</code> | The API URL. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.appKey">AppKey</a></code> | <code>string</code> | (Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>string</code> | The AWS access key ID; |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>string</code> | The AWS secret access key; |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.awsSessionToken">AwsSessionToken</a></code> | <code>string</code> | The AWS session token; |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.cloudProviderRegion">CloudProviderRegion</a></code> | <code>string</code> | The cloud provider region specifier; used for cloud-provider-based authentication. For example, `us-east-1` for AWS. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.cloudProviderType">CloudProviderType</a></code> | <code>string</code> | Specifies the cloud provider used for cloud-provider-based authentication, enabling keyless access without API or app keys. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.defaultTags">DefaultTags</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | default_tags block. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffBase">HttpClientRetryBackoffBase</a></code> | <code>double</code> | The HTTP request retry back off base. Defaults to 2. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffMultiplier">HttpClientRetryBackoffMultiplier</a></code> | <code>double</code> | The HTTP request retry back off multiplier. Defaults to 2. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryEnabled">HttpClientRetryEnabled</a></code> | <code>string</code> | Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryMaxRetries">HttpClientRetryMaxRetries</a></code> | <code>double</code> | The HTTP request maximum retry number. Defaults to 3. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryTimeout">HttpClientRetryTimeout</a></code> | <code>double</code> | The HTTP request retry timeout period. Defaults to 60 seconds. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.orgUuid">OrgUuid</a></code> | <code>string</code> | The organization UUID; used for cloud-provider-based authentication. See the [Datadog API documentation](https://docs.datadoghq.com/api/v1/organizations/) for more information. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.validate">Validate</a></code> | <code>string</code> | Enables validation of the provided API key during provider initialization. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#alias DatadogProvider#alias}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

(Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#api_key DatadogProvider#api_key}

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiUrl"></a>

```csharp
public string ApiUrl { get; set; }
```

- *Type:* string

The API URL.

This can also be set via the DD_HOST environment variable, and defaults to `https://api.datadoghq.com`. Note that this URL must not end with the `/api/` path. For example, `https://api.datadoghq.com/` is a correct value, while `https://api.datadoghq.com/api/` is not. And if you're working with "EU" version of Datadog, use `https://api.datadoghq.eu/`. Other Datadog region examples: `https://api.us5.datadoghq.com/`, `https://api.us3.datadoghq.com/` and `https://api.ddog-gov.com/`. See https://docs.datadoghq.com/getting_started/site/ for all available regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#api_url DatadogProvider#api_url}

---

##### `AppKey`<sup>Optional</sup> <a name="AppKey" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.appKey"></a>

```csharp
public string AppKey { get; set; }
```

- *Type:* string

(Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#app_key DatadogProvider#app_key}

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.awsAccessKeyId"></a>

```csharp
public string AwsAccessKeyId { get; set; }
```

- *Type:* string

The AWS access key ID;

used for cloud-provider-based authentication. This can also be set using the `AWS_ACCESS_KEY_ID` environment variable. Required when using `cloud_provider_type` set to `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#aws_access_key_id DatadogProvider#aws_access_key_id}

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.awsSecretAccessKey"></a>

```csharp
public string AwsSecretAccessKey { get; set; }
```

- *Type:* string

The AWS secret access key;

used for cloud-provider-based authentication. This can also be set using the `AWS_SECRET_ACCESS_KEY` environment variable. Required when using `cloud_provider_type` set to `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#aws_secret_access_key DatadogProvider#aws_secret_access_key}

---

##### `AwsSessionToken`<sup>Optional</sup> <a name="AwsSessionToken" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.awsSessionToken"></a>

```csharp
public string AwsSessionToken { get; set; }
```

- *Type:* string

The AWS session token;

used for cloud-provider-based authentication. This can also be set using the `AWS_SESSION_TOKEN` environment variable. Required when using `cloud_provider_type` set to `aws` and using temporary credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#aws_session_token DatadogProvider#aws_session_token}

---

##### `CloudProviderRegion`<sup>Optional</sup> <a name="CloudProviderRegion" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.cloudProviderRegion"></a>

```csharp
public string CloudProviderRegion { get; set; }
```

- *Type:* string

The cloud provider region specifier; used for cloud-provider-based authentication. For example, `us-east-1` for AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#cloud_provider_region DatadogProvider#cloud_provider_region}

---

##### `CloudProviderType`<sup>Optional</sup> <a name="CloudProviderType" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.cloudProviderType"></a>

```csharp
public string CloudProviderType { get; set; }
```

- *Type:* string

Specifies the cloud provider used for cloud-provider-based authentication, enabling keyless access without API or app keys.

Only [`aws`] is supported. This feature is in Preview. If you'd like to enable it for your organization, contact [support](https://docs.datadoghq.com/help/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#cloud_provider_type DatadogProvider#cloud_provider_type}

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.defaultTags"></a>

```csharp
public DatadogProviderDefaultTags DefaultTags { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

default_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#default_tags DatadogProvider#default_tags}

---

##### `HttpClientRetryBackoffBase`<sup>Optional</sup> <a name="HttpClientRetryBackoffBase" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffBase"></a>

```csharp
public double HttpClientRetryBackoffBase { get; set; }
```

- *Type:* double

The HTTP request retry back off base. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#http_client_retry_backoff_base DatadogProvider#http_client_retry_backoff_base}

---

##### `HttpClientRetryBackoffMultiplier`<sup>Optional</sup> <a name="HttpClientRetryBackoffMultiplier" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffMultiplier"></a>

```csharp
public double HttpClientRetryBackoffMultiplier { get; set; }
```

- *Type:* double

The HTTP request retry back off multiplier. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#http_client_retry_backoff_multiplier DatadogProvider#http_client_retry_backoff_multiplier}

---

##### `HttpClientRetryEnabled`<sup>Optional</sup> <a name="HttpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryEnabled"></a>

```csharp
public string HttpClientRetryEnabled { get; set; }
```

- *Type:* string

Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#http_client_retry_enabled DatadogProvider#http_client_retry_enabled}

---

##### `HttpClientRetryMaxRetries`<sup>Optional</sup> <a name="HttpClientRetryMaxRetries" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryMaxRetries"></a>

```csharp
public double HttpClientRetryMaxRetries { get; set; }
```

- *Type:* double

The HTTP request maximum retry number. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#http_client_retry_max_retries DatadogProvider#http_client_retry_max_retries}

---

##### `HttpClientRetryTimeout`<sup>Optional</sup> <a name="HttpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryTimeout"></a>

```csharp
public double HttpClientRetryTimeout { get; set; }
```

- *Type:* double

The HTTP request retry timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#http_client_retry_timeout DatadogProvider#http_client_retry_timeout}

---

##### `OrgUuid`<sup>Optional</sup> <a name="OrgUuid" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.orgUuid"></a>

```csharp
public string OrgUuid { get; set; }
```

- *Type:* string

The organization UUID; used for cloud-provider-based authentication. See the [Datadog API documentation](https://docs.datadoghq.com/api/v1/organizations/) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#org_uuid DatadogProvider#org_uuid}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.validate"></a>

```csharp
public string Validate { get; set; }
```

- *Type:* string

Enables validation of the provided API key during provider initialization.

Valid values are [`true`, `false`]. Default is true. When false, api_key won't be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#validate DatadogProvider#validate}

---

### DatadogProviderDefaultTags <a name="DatadogProviderDefaultTags" id="@cdktf/provider-datadog.provider.DatadogProviderDefaultTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.provider.DatadogProviderDefaultTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DatadogProviderDefaultTags {
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | [Experimental - Logs Pipelines, Monitors Security Monitoring Rules, and Service Level Objectives only] Resource tags to be applied by default across all resources. |

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.provider.DatadogProviderDefaultTags.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

[Experimental - Logs Pipelines, Monitors Security Monitoring Rules, and Service Level Objectives only] Resource tags to be applied by default across all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs#tags DatadogProvider#tags}

---



