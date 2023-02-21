# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-datadog.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogProvider <a name="DatadogProvider" id="@cdktf/provider-datadog.provider.DatadogProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog datadog}.

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
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAppKey">ResetAppKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryEnabled">ResetHttpClientRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryTimeout">ResetHttpClientRetryTimeout</a></code> | *No description.* |
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

##### `ResetHttpClientRetryEnabled` <a name="ResetHttpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryEnabled"></a>

```csharp
private void ResetHttpClientRetryEnabled()
```

##### `ResetHttpClientRetryTimeout` <a name="ResetHttpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryTimeout"></a>

```csharp
private void ResetHttpClientRetryTimeout()
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
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabledInput">HttpClientRetryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeoutInput">HttpClientRetryTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.validateInput">ValidateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrl">ApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.appKey">AppKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabled">HttpClientRetryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeout">HttpClientRetryTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.validate">Validate</a></code> | <code>object</code> | *No description.* |

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

##### `HttpClientRetryEnabledInput`<sup>Optional</sup> <a name="HttpClientRetryEnabledInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabledInput"></a>

```csharp
public object HttpClientRetryEnabledInput { get; }
```

- *Type:* object

---

##### `HttpClientRetryTimeoutInput`<sup>Optional</sup> <a name="HttpClientRetryTimeoutInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeoutInput"></a>

```csharp
public double HttpClientRetryTimeoutInput { get; }
```

- *Type:* double

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.validateInput"></a>

```csharp
public object ValidateInput { get; }
```

- *Type:* object

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

##### `HttpClientRetryEnabled`<sup>Optional</sup> <a name="HttpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabled"></a>

```csharp
public object HttpClientRetryEnabled { get; }
```

- *Type:* object

---

##### `HttpClientRetryTimeout`<sup>Optional</sup> <a name="HttpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeout"></a>

```csharp
public double HttpClientRetryTimeout { get; }
```

- *Type:* double

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktf/provider-datadog.provider.DatadogProvider.property.validate"></a>

```csharp
public object Validate { get; }
```

- *Type:* object

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
    object HttpClientRetryEnabled = null,
    double HttpClientRetryTimeout = null,
    object Validate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | (Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiUrl">ApiUrl</a></code> | <code>string</code> | The API URL. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.appKey">AppKey</a></code> | <code>string</code> | (Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryEnabled">HttpClientRetryEnabled</a></code> | <code>object</code> | Enables request retries on HTTP status codes 429 and 5xx. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryTimeout">HttpClientRetryTimeout</a></code> | <code>double</code> | The HTTP request retry timeout period. Defaults to 60 seconds. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.validate">Validate</a></code> | <code>object</code> | Enables validation of the provided API and APP keys during provider initialization. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog#alias DatadogProvider#alias}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

(Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog#api_key DatadogProvider#api_key}

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiUrl"></a>

```csharp
public string ApiUrl { get; set; }
```

- *Type:* string

The API URL.

This can also be set via the DD_HOST environment variable. Note that this URL must not end with the `/api/` path. For example, `https://api.datadoghq.com/` is a correct value, while `https://api.datadoghq.com/api/` is not. And if you're working with "EU" version of Datadog, use `https://api.datadoghq.eu/`. Other Datadog region examples: `https://api.us5.datadoghq.com/`, `https://api.us3.datadoghq.com/` and `https://api.ddog-gov.com/`. See https://docs.datadoghq.com/getting_started/site/ for all available regions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog#api_url DatadogProvider#api_url}

---

##### `AppKey`<sup>Optional</sup> <a name="AppKey" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.appKey"></a>

```csharp
public string AppKey { get; set; }
```

- *Type:* string

(Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog#app_key DatadogProvider#app_key}

---

##### `HttpClientRetryEnabled`<sup>Optional</sup> <a name="HttpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryEnabled"></a>

```csharp
public object HttpClientRetryEnabled { get; set; }
```

- *Type:* object

Enables request retries on HTTP status codes 429 and 5xx. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog#http_client_retry_enabled DatadogProvider#http_client_retry_enabled}

---

##### `HttpClientRetryTimeout`<sup>Optional</sup> <a name="HttpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryTimeout"></a>

```csharp
public double HttpClientRetryTimeout { get; set; }
```

- *Type:* double

The HTTP request retry timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog#http_client_retry_timeout DatadogProvider#http_client_retry_timeout}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.validate"></a>

```csharp
public object Validate { get; set; }
```

- *Type:* object

Enables validation of the provided API and APP keys during provider initialization.

Default is true. When false, api_key and app_key won't be checked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog#validate DatadogProvider#validate}

---



