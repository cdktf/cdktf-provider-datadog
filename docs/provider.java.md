# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-datadog.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogProvider <a name="DatadogProvider" id="@cdktf/provider-datadog.provider.DatadogProvider"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs datadog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.provider.DatadogProvider;

DatadogProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .apiKey(java.lang.String)
//  .apiUrl(java.lang.String)
//  .appKey(java.lang.String)
//  .awsAccessKeyId(java.lang.String)
//  .awsSecretAccessKey(java.lang.String)
//  .awsSessionToken(java.lang.String)
//  .cloudProviderRegion(java.lang.String)
//  .cloudProviderType(java.lang.String)
//  .defaultTags(DatadogProviderDefaultTags)
//  .httpClientRetryBackoffBase(java.lang.Number)
//  .httpClientRetryBackoffMultiplier(java.lang.Number)
//  .httpClientRetryEnabled(java.lang.String)
//  .httpClientRetryMaxRetries(java.lang.Number)
//  .httpClientRetryTimeout(java.lang.Number)
//  .orgUuid(java.lang.String)
//  .validate(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.apiKey">apiKey</a></code> | <code>java.lang.String</code> | (Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | The API URL. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.appKey">appKey</a></code> | <code>java.lang.String</code> | (Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | The AWS access key ID; |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>java.lang.String</code> | The AWS secret access key; |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.awsSessionToken">awsSessionToken</a></code> | <code>java.lang.String</code> | The AWS session token; |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.cloudProviderRegion">cloudProviderRegion</a></code> | <code>java.lang.String</code> | The cloud provider region specifier; used for cloud-provider-based authentication. For example, `us-east-1` for AWS. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.cloudProviderType">cloudProviderType</a></code> | <code>java.lang.String</code> | Specifies the cloud provider used for cloud-provider-based authentication, enabling keyless access without API or app keys. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.defaultTags">defaultTags</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | default_tags block. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryBackoffBase">httpClientRetryBackoffBase</a></code> | <code>java.lang.Number</code> | The HTTP request retry back off base. Defaults to 2. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryBackoffMultiplier">httpClientRetryBackoffMultiplier</a></code> | <code>java.lang.Number</code> | The HTTP request retry back off multiplier. Defaults to 2. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryEnabled">httpClientRetryEnabled</a></code> | <code>java.lang.String</code> | Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryMaxRetries">httpClientRetryMaxRetries</a></code> | <code>java.lang.Number</code> | The HTTP request maximum retry number. Defaults to 3. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryTimeout">httpClientRetryTimeout</a></code> | <code>java.lang.Number</code> | The HTTP request retry timeout period. Defaults to 60 seconds. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.orgUuid">orgUuid</a></code> | <code>java.lang.String</code> | The organization UUID; used for cloud-provider-based authentication. See the [Datadog API documentation](https://docs.datadoghq.com/api/v1/organizations/) for more information. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.validate">validate</a></code> | <code>java.lang.String</code> | Enables validation of the provided API key during provider initialization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#alias DatadogProvider#alias}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.apiKey"></a>

- *Type:* java.lang.String

(Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#api_key DatadogProvider#api_key}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.apiUrl"></a>

- *Type:* java.lang.String

The API URL.

This can also be set via the DD_HOST environment variable, and defaults to `https://api.datadoghq.com`. Note that this URL must not end with the `/api/` path. For example, `https://api.datadoghq.com/` is a correct value, while `https://api.datadoghq.com/api/` is not. And if you're working with "EU" version of Datadog, use `https://api.datadoghq.eu/`. Other Datadog region examples: `https://api.us5.datadoghq.com/`, `https://api.us3.datadoghq.com/` and `https://api.ddog-gov.com/`. See https://docs.datadoghq.com/getting_started/site/ for all available regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#api_url DatadogProvider#api_url}

---

##### `appKey`<sup>Optional</sup> <a name="appKey" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.appKey"></a>

- *Type:* java.lang.String

(Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#app_key DatadogProvider#app_key}

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.awsAccessKeyId"></a>

- *Type:* java.lang.String

The AWS access key ID;

used for cloud-provider-based authentication. This can also be set using the `AWS_ACCESS_KEY_ID` environment variable. Required when using `cloud_provider_type` set to `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#aws_access_key_id DatadogProvider#aws_access_key_id}

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.awsSecretAccessKey"></a>

- *Type:* java.lang.String

The AWS secret access key;

used for cloud-provider-based authentication. This can also be set using the `AWS_SECRET_ACCESS_KEY` environment variable. Required when using `cloud_provider_type` set to `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#aws_secret_access_key DatadogProvider#aws_secret_access_key}

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.awsSessionToken"></a>

- *Type:* java.lang.String

The AWS session token;

used for cloud-provider-based authentication. This can also be set using the `AWS_SESSION_TOKEN` environment variable. Required when using `cloud_provider_type` set to `aws` and using temporary credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#aws_session_token DatadogProvider#aws_session_token}

---

##### `cloudProviderRegion`<sup>Optional</sup> <a name="cloudProviderRegion" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.cloudProviderRegion"></a>

- *Type:* java.lang.String

The cloud provider region specifier; used for cloud-provider-based authentication. For example, `us-east-1` for AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#cloud_provider_region DatadogProvider#cloud_provider_region}

---

##### `cloudProviderType`<sup>Optional</sup> <a name="cloudProviderType" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.cloudProviderType"></a>

- *Type:* java.lang.String

Specifies the cloud provider used for cloud-provider-based authentication, enabling keyless access without API or app keys.

Only [`aws`] is supported. This feature is in Preview. If you'd like to enable it for your organization, contact [support](https://docs.datadoghq.com/help/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#cloud_provider_type DatadogProvider#cloud_provider_type}

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.defaultTags"></a>

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

default_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#default_tags DatadogProvider#default_tags}

---

##### `httpClientRetryBackoffBase`<sup>Optional</sup> <a name="httpClientRetryBackoffBase" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryBackoffBase"></a>

- *Type:* java.lang.Number

The HTTP request retry back off base. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#http_client_retry_backoff_base DatadogProvider#http_client_retry_backoff_base}

---

##### `httpClientRetryBackoffMultiplier`<sup>Optional</sup> <a name="httpClientRetryBackoffMultiplier" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryBackoffMultiplier"></a>

- *Type:* java.lang.Number

The HTTP request retry back off multiplier. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#http_client_retry_backoff_multiplier DatadogProvider#http_client_retry_backoff_multiplier}

---

##### `httpClientRetryEnabled`<sup>Optional</sup> <a name="httpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryEnabled"></a>

- *Type:* java.lang.String

Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#http_client_retry_enabled DatadogProvider#http_client_retry_enabled}

---

##### `httpClientRetryMaxRetries`<sup>Optional</sup> <a name="httpClientRetryMaxRetries" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryMaxRetries"></a>

- *Type:* java.lang.Number

The HTTP request maximum retry number. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#http_client_retry_max_retries DatadogProvider#http_client_retry_max_retries}

---

##### `httpClientRetryTimeout`<sup>Optional</sup> <a name="httpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryTimeout"></a>

- *Type:* java.lang.Number

The HTTP request retry timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#http_client_retry_timeout DatadogProvider#http_client_retry_timeout}

---

##### `orgUuid`<sup>Optional</sup> <a name="orgUuid" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.orgUuid"></a>

- *Type:* java.lang.String

The organization UUID; used for cloud-provider-based authentication. See the [Datadog API documentation](https://docs.datadoghq.com/api/v1/organizations/) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#org_uuid DatadogProvider#org_uuid}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.validate"></a>

- *Type:* java.lang.String

Enables validation of the provided API key during provider initialization.

Valid values are [`true`, `false`]. Default is true. When false, api_key won't be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#validate DatadogProvider#validate}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAppKey">resetAppKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAwsAccessKeyId">resetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAwsSecretAccessKey">resetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAwsSessionToken">resetAwsSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetCloudProviderRegion">resetCloudProviderRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetCloudProviderType">resetCloudProviderType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetDefaultTags">resetDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffBase">resetHttpClientRetryBackoffBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffMultiplier">resetHttpClientRetryBackoffMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryEnabled">resetHttpClientRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryMaxRetries">resetHttpClientRetryMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryTimeout">resetHttpClientRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetOrgUuid">resetOrgUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetValidate">resetValidate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.provider.DatadogProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.provider.DatadogProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.provider.DatadogProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.provider.DatadogProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.provider.DatadogProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.provider.DatadogProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.provider.DatadogProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.provider.DatadogProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.provider.DatadogProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.provider.DatadogProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-datadog.provider.DatadogProvider.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetApiUrl` <a name="resetApiUrl" id="@cdktf/provider-datadog.provider.DatadogProvider.resetApiUrl"></a>

```java
public void resetApiUrl()
```

##### `resetAppKey` <a name="resetAppKey" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAppKey"></a>

```java
public void resetAppKey()
```

##### `resetAwsAccessKeyId` <a name="resetAwsAccessKeyId" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAwsAccessKeyId"></a>

```java
public void resetAwsAccessKeyId()
```

##### `resetAwsSecretAccessKey` <a name="resetAwsSecretAccessKey" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAwsSecretAccessKey"></a>

```java
public void resetAwsSecretAccessKey()
```

##### `resetAwsSessionToken` <a name="resetAwsSessionToken" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAwsSessionToken"></a>

```java
public void resetAwsSessionToken()
```

##### `resetCloudProviderRegion` <a name="resetCloudProviderRegion" id="@cdktf/provider-datadog.provider.DatadogProvider.resetCloudProviderRegion"></a>

```java
public void resetCloudProviderRegion()
```

##### `resetCloudProviderType` <a name="resetCloudProviderType" id="@cdktf/provider-datadog.provider.DatadogProvider.resetCloudProviderType"></a>

```java
public void resetCloudProviderType()
```

##### `resetDefaultTags` <a name="resetDefaultTags" id="@cdktf/provider-datadog.provider.DatadogProvider.resetDefaultTags"></a>

```java
public void resetDefaultTags()
```

##### `resetHttpClientRetryBackoffBase` <a name="resetHttpClientRetryBackoffBase" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffBase"></a>

```java
public void resetHttpClientRetryBackoffBase()
```

##### `resetHttpClientRetryBackoffMultiplier` <a name="resetHttpClientRetryBackoffMultiplier" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffMultiplier"></a>

```java
public void resetHttpClientRetryBackoffMultiplier()
```

##### `resetHttpClientRetryEnabled` <a name="resetHttpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryEnabled"></a>

```java
public void resetHttpClientRetryEnabled()
```

##### `resetHttpClientRetryMaxRetries` <a name="resetHttpClientRetryMaxRetries" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryMaxRetries"></a>

```java
public void resetHttpClientRetryMaxRetries()
```

##### `resetHttpClientRetryTimeout` <a name="resetHttpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryTimeout"></a>

```java
public void resetHttpClientRetryTimeout()
```

##### `resetOrgUuid` <a name="resetOrgUuid" id="@cdktf/provider-datadog.provider.DatadogProvider.resetOrgUuid"></a>

```java
public void resetOrgUuid()
```

##### `resetValidate` <a name="resetValidate" id="@cdktf/provider-datadog.provider.DatadogProvider.resetValidate"></a>

```java
public void resetValidate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatadogProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.provider.DatadogProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.provider.DatadogProvider;

DatadogProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.provider.DatadogProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.provider.DatadogProvider;

DatadogProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.datadog.provider.DatadogProvider;

DatadogProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.provider.DatadogProvider;

DatadogProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatadogProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatadogProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatadogProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatadogProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatadogProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrlInput">apiUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.appKeyInput">appKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.awsAccessKeyIdInput">awsAccessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.awsSecretAccessKeyInput">awsSecretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.awsSessionTokenInput">awsSessionTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderRegionInput">cloudProviderRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderTypeInput">cloudProviderTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.defaultTagsInput">defaultTagsInput</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBaseInput">httpClientRetryBackoffBaseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplierInput">httpClientRetryBackoffMultiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabledInput">httpClientRetryEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetriesInput">httpClientRetryMaxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeoutInput">httpClientRetryTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.orgUuidInput">orgUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.validateInput">validateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.appKey">appKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.awsSessionToken">awsSessionToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderRegion">cloudProviderRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderType">cloudProviderType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.defaultTags">defaultTags</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBase">httpClientRetryBackoffBase</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplier">httpClientRetryBackoffMultiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabled">httpClientRetryEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetries">httpClientRetryMaxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeout">httpClientRetryTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.orgUuid">orgUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.validate">validate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.provider.DatadogProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.provider.DatadogProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.provider.DatadogProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.provider.DatadogProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-datadog.provider.DatadogProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.provider.DatadogProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.provider.DatadogProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-datadog.provider.DatadogProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-datadog.provider.DatadogProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrlInput"></a>

```java
public java.lang.String getApiUrlInput();
```

- *Type:* java.lang.String

---

##### `appKeyInput`<sup>Optional</sup> <a name="appKeyInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.appKeyInput"></a>

```java
public java.lang.String getAppKeyInput();
```

- *Type:* java.lang.String

---

##### `awsAccessKeyIdInput`<sup>Optional</sup> <a name="awsAccessKeyIdInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.awsAccessKeyIdInput"></a>

```java
public java.lang.String getAwsAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `awsSecretAccessKeyInput`<sup>Optional</sup> <a name="awsSecretAccessKeyInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.awsSecretAccessKeyInput"></a>

```java
public java.lang.String getAwsSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `awsSessionTokenInput`<sup>Optional</sup> <a name="awsSessionTokenInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.awsSessionTokenInput"></a>

```java
public java.lang.String getAwsSessionTokenInput();
```

- *Type:* java.lang.String

---

##### `cloudProviderRegionInput`<sup>Optional</sup> <a name="cloudProviderRegionInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderRegionInput"></a>

```java
public java.lang.String getCloudProviderRegionInput();
```

- *Type:* java.lang.String

---

##### `cloudProviderTypeInput`<sup>Optional</sup> <a name="cloudProviderTypeInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderTypeInput"></a>

```java
public java.lang.String getCloudProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `defaultTagsInput`<sup>Optional</sup> <a name="defaultTagsInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.defaultTagsInput"></a>

```java
public DatadogProviderDefaultTags getDefaultTagsInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

---

##### `httpClientRetryBackoffBaseInput`<sup>Optional</sup> <a name="httpClientRetryBackoffBaseInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBaseInput"></a>

```java
public java.lang.Number getHttpClientRetryBackoffBaseInput();
```

- *Type:* java.lang.Number

---

##### `httpClientRetryBackoffMultiplierInput`<sup>Optional</sup> <a name="httpClientRetryBackoffMultiplierInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplierInput"></a>

```java
public java.lang.Number getHttpClientRetryBackoffMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `httpClientRetryEnabledInput`<sup>Optional</sup> <a name="httpClientRetryEnabledInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabledInput"></a>

```java
public java.lang.String getHttpClientRetryEnabledInput();
```

- *Type:* java.lang.String

---

##### `httpClientRetryMaxRetriesInput`<sup>Optional</sup> <a name="httpClientRetryMaxRetriesInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetriesInput"></a>

```java
public java.lang.Number getHttpClientRetryMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `httpClientRetryTimeoutInput`<sup>Optional</sup> <a name="httpClientRetryTimeoutInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeoutInput"></a>

```java
public java.lang.Number getHttpClientRetryTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `orgUuidInput`<sup>Optional</sup> <a name="orgUuidInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.orgUuidInput"></a>

```java
public java.lang.String getOrgUuidInput();
```

- *Type:* java.lang.String

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.validateInput"></a>

```java
public java.lang.String getValidateInput();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

---

##### `appKey`<sup>Optional</sup> <a name="appKey" id="@cdktf/provider-datadog.provider.DatadogProvider.property.appKey"></a>

```java
public java.lang.String getAppKey();
```

- *Type:* java.lang.String

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-datadog.provider.DatadogProvider.property.awsAccessKeyId"></a>

```java
public java.lang.String getAwsAccessKeyId();
```

- *Type:* java.lang.String

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-datadog.provider.DatadogProvider.property.awsSecretAccessKey"></a>

```java
public java.lang.String getAwsSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-datadog.provider.DatadogProvider.property.awsSessionToken"></a>

```java
public java.lang.String getAwsSessionToken();
```

- *Type:* java.lang.String

---

##### `cloudProviderRegion`<sup>Optional</sup> <a name="cloudProviderRegion" id="@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderRegion"></a>

```java
public java.lang.String getCloudProviderRegion();
```

- *Type:* java.lang.String

---

##### `cloudProviderType`<sup>Optional</sup> <a name="cloudProviderType" id="@cdktf/provider-datadog.provider.DatadogProvider.property.cloudProviderType"></a>

```java
public java.lang.String getCloudProviderType();
```

- *Type:* java.lang.String

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktf/provider-datadog.provider.DatadogProvider.property.defaultTags"></a>

```java
public DatadogProviderDefaultTags getDefaultTags();
```

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

---

##### `httpClientRetryBackoffBase`<sup>Optional</sup> <a name="httpClientRetryBackoffBase" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBase"></a>

```java
public java.lang.Number getHttpClientRetryBackoffBase();
```

- *Type:* java.lang.Number

---

##### `httpClientRetryBackoffMultiplier`<sup>Optional</sup> <a name="httpClientRetryBackoffMultiplier" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplier"></a>

```java
public java.lang.Number getHttpClientRetryBackoffMultiplier();
```

- *Type:* java.lang.Number

---

##### `httpClientRetryEnabled`<sup>Optional</sup> <a name="httpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabled"></a>

```java
public java.lang.String getHttpClientRetryEnabled();
```

- *Type:* java.lang.String

---

##### `httpClientRetryMaxRetries`<sup>Optional</sup> <a name="httpClientRetryMaxRetries" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetries"></a>

```java
public java.lang.Number getHttpClientRetryMaxRetries();
```

- *Type:* java.lang.Number

---

##### `httpClientRetryTimeout`<sup>Optional</sup> <a name="httpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeout"></a>

```java
public java.lang.Number getHttpClientRetryTimeout();
```

- *Type:* java.lang.Number

---

##### `orgUuid`<sup>Optional</sup> <a name="orgUuid" id="@cdktf/provider-datadog.provider.DatadogProvider.property.orgUuid"></a>

```java
public java.lang.String getOrgUuid();
```

- *Type:* java.lang.String

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.provider.DatadogProvider.property.validate"></a>

```java
public java.lang.String getValidate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.provider.DatadogProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogProviderConfig <a name="DatadogProviderConfig" id="@cdktf/provider-datadog.provider.DatadogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.provider.DatadogProviderConfig;

DatadogProviderConfig.builder()
//  .alias(java.lang.String)
//  .apiKey(java.lang.String)
//  .apiUrl(java.lang.String)
//  .appKey(java.lang.String)
//  .awsAccessKeyId(java.lang.String)
//  .awsSecretAccessKey(java.lang.String)
//  .awsSessionToken(java.lang.String)
//  .cloudProviderRegion(java.lang.String)
//  .cloudProviderType(java.lang.String)
//  .defaultTags(DatadogProviderDefaultTags)
//  .httpClientRetryBackoffBase(java.lang.Number)
//  .httpClientRetryBackoffMultiplier(java.lang.Number)
//  .httpClientRetryEnabled(java.lang.String)
//  .httpClientRetryMaxRetries(java.lang.Number)
//  .httpClientRetryTimeout(java.lang.Number)
//  .orgUuid(java.lang.String)
//  .validate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | (Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | The API URL. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.appKey">appKey</a></code> | <code>java.lang.String</code> | (Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | The AWS access key ID; |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>java.lang.String</code> | The AWS secret access key; |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.awsSessionToken">awsSessionToken</a></code> | <code>java.lang.String</code> | The AWS session token; |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.cloudProviderRegion">cloudProviderRegion</a></code> | <code>java.lang.String</code> | The cloud provider region specifier; used for cloud-provider-based authentication. For example, `us-east-1` for AWS. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.cloudProviderType">cloudProviderType</a></code> | <code>java.lang.String</code> | Specifies the cloud provider used for cloud-provider-based authentication, enabling keyless access without API or app keys. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.defaultTags">defaultTags</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | default_tags block. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffBase">httpClientRetryBackoffBase</a></code> | <code>java.lang.Number</code> | The HTTP request retry back off base. Defaults to 2. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffMultiplier">httpClientRetryBackoffMultiplier</a></code> | <code>java.lang.Number</code> | The HTTP request retry back off multiplier. Defaults to 2. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryEnabled">httpClientRetryEnabled</a></code> | <code>java.lang.String</code> | Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryMaxRetries">httpClientRetryMaxRetries</a></code> | <code>java.lang.Number</code> | The HTTP request maximum retry number. Defaults to 3. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryTimeout">httpClientRetryTimeout</a></code> | <code>java.lang.Number</code> | The HTTP request retry timeout period. Defaults to 60 seconds. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.orgUuid">orgUuid</a></code> | <code>java.lang.String</code> | The organization UUID; used for cloud-provider-based authentication. See the [Datadog API documentation](https://docs.datadoghq.com/api/v1/organizations/) for more information. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.validate">validate</a></code> | <code>java.lang.String</code> | Enables validation of the provided API key during provider initialization. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#alias DatadogProvider#alias}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

(Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#api_key DatadogProvider#api_key}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

The API URL.

This can also be set via the DD_HOST environment variable, and defaults to `https://api.datadoghq.com`. Note that this URL must not end with the `/api/` path. For example, `https://api.datadoghq.com/` is a correct value, while `https://api.datadoghq.com/api/` is not. And if you're working with "EU" version of Datadog, use `https://api.datadoghq.eu/`. Other Datadog region examples: `https://api.us5.datadoghq.com/`, `https://api.us3.datadoghq.com/` and `https://api.ddog-gov.com/`. See https://docs.datadoghq.com/getting_started/site/ for all available regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#api_url DatadogProvider#api_url}

---

##### `appKey`<sup>Optional</sup> <a name="appKey" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.appKey"></a>

```java
public java.lang.String getAppKey();
```

- *Type:* java.lang.String

(Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#app_key DatadogProvider#app_key}

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.awsAccessKeyId"></a>

```java
public java.lang.String getAwsAccessKeyId();
```

- *Type:* java.lang.String

The AWS access key ID;

used for cloud-provider-based authentication. This can also be set using the `AWS_ACCESS_KEY_ID` environment variable. Required when using `cloud_provider_type` set to `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#aws_access_key_id DatadogProvider#aws_access_key_id}

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.awsSecretAccessKey"></a>

```java
public java.lang.String getAwsSecretAccessKey();
```

- *Type:* java.lang.String

The AWS secret access key;

used for cloud-provider-based authentication. This can also be set using the `AWS_SECRET_ACCESS_KEY` environment variable. Required when using `cloud_provider_type` set to `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#aws_secret_access_key DatadogProvider#aws_secret_access_key}

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.awsSessionToken"></a>

```java
public java.lang.String getAwsSessionToken();
```

- *Type:* java.lang.String

The AWS session token;

used for cloud-provider-based authentication. This can also be set using the `AWS_SESSION_TOKEN` environment variable. Required when using `cloud_provider_type` set to `aws` and using temporary credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#aws_session_token DatadogProvider#aws_session_token}

---

##### `cloudProviderRegion`<sup>Optional</sup> <a name="cloudProviderRegion" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.cloudProviderRegion"></a>

```java
public java.lang.String getCloudProviderRegion();
```

- *Type:* java.lang.String

The cloud provider region specifier; used for cloud-provider-based authentication. For example, `us-east-1` for AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#cloud_provider_region DatadogProvider#cloud_provider_region}

---

##### `cloudProviderType`<sup>Optional</sup> <a name="cloudProviderType" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.cloudProviderType"></a>

```java
public java.lang.String getCloudProviderType();
```

- *Type:* java.lang.String

Specifies the cloud provider used for cloud-provider-based authentication, enabling keyless access without API or app keys.

Only [`aws`] is supported. This feature is in Preview. If you'd like to enable it for your organization, contact [support](https://docs.datadoghq.com/help/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#cloud_provider_type DatadogProvider#cloud_provider_type}

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.defaultTags"></a>

```java
public DatadogProviderDefaultTags getDefaultTags();
```

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

default_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#default_tags DatadogProvider#default_tags}

---

##### `httpClientRetryBackoffBase`<sup>Optional</sup> <a name="httpClientRetryBackoffBase" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffBase"></a>

```java
public java.lang.Number getHttpClientRetryBackoffBase();
```

- *Type:* java.lang.Number

The HTTP request retry back off base. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#http_client_retry_backoff_base DatadogProvider#http_client_retry_backoff_base}

---

##### `httpClientRetryBackoffMultiplier`<sup>Optional</sup> <a name="httpClientRetryBackoffMultiplier" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffMultiplier"></a>

```java
public java.lang.Number getHttpClientRetryBackoffMultiplier();
```

- *Type:* java.lang.Number

The HTTP request retry back off multiplier. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#http_client_retry_backoff_multiplier DatadogProvider#http_client_retry_backoff_multiplier}

---

##### `httpClientRetryEnabled`<sup>Optional</sup> <a name="httpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryEnabled"></a>

```java
public java.lang.String getHttpClientRetryEnabled();
```

- *Type:* java.lang.String

Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#http_client_retry_enabled DatadogProvider#http_client_retry_enabled}

---

##### `httpClientRetryMaxRetries`<sup>Optional</sup> <a name="httpClientRetryMaxRetries" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryMaxRetries"></a>

```java
public java.lang.Number getHttpClientRetryMaxRetries();
```

- *Type:* java.lang.Number

The HTTP request maximum retry number. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#http_client_retry_max_retries DatadogProvider#http_client_retry_max_retries}

---

##### `httpClientRetryTimeout`<sup>Optional</sup> <a name="httpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryTimeout"></a>

```java
public java.lang.Number getHttpClientRetryTimeout();
```

- *Type:* java.lang.Number

The HTTP request retry timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#http_client_retry_timeout DatadogProvider#http_client_retry_timeout}

---

##### `orgUuid`<sup>Optional</sup> <a name="orgUuid" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.orgUuid"></a>

```java
public java.lang.String getOrgUuid();
```

- *Type:* java.lang.String

The organization UUID; used for cloud-provider-based authentication. See the [Datadog API documentation](https://docs.datadoghq.com/api/v1/organizations/) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#org_uuid DatadogProvider#org_uuid}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.validate"></a>

```java
public java.lang.String getValidate();
```

- *Type:* java.lang.String

Enables validation of the provided API key during provider initialization.

Valid values are [`true`, `false`]. Default is true. When false, api_key won't be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#validate DatadogProvider#validate}

---

### DatadogProviderDefaultTags <a name="DatadogProviderDefaultTags" id="@cdktf/provider-datadog.provider.DatadogProviderDefaultTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.provider.DatadogProviderDefaultTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.provider.DatadogProviderDefaultTags;

DatadogProviderDefaultTags.builder()
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | [Experimental - Logs Pipelines, Monitors Security Monitoring Rules, and Service Level Objectives only] Resource tags to be applied by default across all resources. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.provider.DatadogProviderDefaultTags.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

[Experimental - Logs Pipelines, Monitors Security Monitoring Rules, and Service Level Objectives only] Resource tags to be applied by default across all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs#tags DatadogProvider#tags}

---



