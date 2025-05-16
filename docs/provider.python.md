# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-datadog.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogProvider <a name="DatadogProvider" id="@cdktf/provider-datadog.provider.DatadogProvider"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs datadog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import provider

provider.DatadogProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  api_key: str = None,
  api_url: str = None,
  app_key: str = None,
  default_tags: DatadogProviderDefaultTags = None,
  http_client_retry_backoff_base: typing.Union[int, float] = None,
  http_client_retry_backoff_multiplier: typing.Union[int, float] = None,
  http_client_retry_enabled: str = None,
  http_client_retry_max_retries: typing.Union[int, float] = None,
  http_client_retry_timeout: typing.Union[int, float] = None,
  validate: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.apiKey">api_key</a></code> | <code>str</code> | (Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.apiUrl">api_url</a></code> | <code>str</code> | The API URL. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.appKey">app_key</a></code> | <code>str</code> | (Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.defaultTags">default_tags</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | default_tags block. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryBackoffBase">http_client_retry_backoff_base</a></code> | <code>typing.Union[int, float]</code> | The HTTP request retry back off base. Defaults to 2. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryBackoffMultiplier">http_client_retry_backoff_multiplier</a></code> | <code>typing.Union[int, float]</code> | The HTTP request retry back off multiplier. Defaults to 2. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryEnabled">http_client_retry_enabled</a></code> | <code>str</code> | Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryMaxRetries">http_client_retry_max_retries</a></code> | <code>typing.Union[int, float]</code> | The HTTP request maximum retry number. Defaults to 3. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryTimeout">http_client_retry_timeout</a></code> | <code>typing.Union[int, float]</code> | The HTTP request retry timeout period. Defaults to 60 seconds. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.validate">validate</a></code> | <code>str</code> | Enables validation of the provided API key during provider initialization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#alias DatadogProvider#alias}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.apiKey"></a>

- *Type:* str

(Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#api_key DatadogProvider#api_key}

---

##### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.apiUrl"></a>

- *Type:* str

The API URL.

This can also be set via the DD_HOST environment variable, and defaults to `https://api.datadoghq.com`. Note that this URL must not end with the `/api/` path. For example, `https://api.datadoghq.com/` is a correct value, while `https://api.datadoghq.com/api/` is not. And if you're working with "EU" version of Datadog, use `https://api.datadoghq.eu/`. Other Datadog region examples: `https://api.us5.datadoghq.com/`, `https://api.us3.datadoghq.com/` and `https://api.ddog-gov.com/`. See https://docs.datadoghq.com/getting_started/site/ for all available regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#api_url DatadogProvider#api_url}

---

##### `app_key`<sup>Optional</sup> <a name="app_key" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.appKey"></a>

- *Type:* str

(Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#app_key DatadogProvider#app_key}

---

##### `default_tags`<sup>Optional</sup> <a name="default_tags" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.defaultTags"></a>

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

default_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#default_tags DatadogProvider#default_tags}

---

##### `http_client_retry_backoff_base`<sup>Optional</sup> <a name="http_client_retry_backoff_base" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryBackoffBase"></a>

- *Type:* typing.Union[int, float]

The HTTP request retry back off base. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#http_client_retry_backoff_base DatadogProvider#http_client_retry_backoff_base}

---

##### `http_client_retry_backoff_multiplier`<sup>Optional</sup> <a name="http_client_retry_backoff_multiplier" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryBackoffMultiplier"></a>

- *Type:* typing.Union[int, float]

The HTTP request retry back off multiplier. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#http_client_retry_backoff_multiplier DatadogProvider#http_client_retry_backoff_multiplier}

---

##### `http_client_retry_enabled`<sup>Optional</sup> <a name="http_client_retry_enabled" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryEnabled"></a>

- *Type:* str

Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#http_client_retry_enabled DatadogProvider#http_client_retry_enabled}

---

##### `http_client_retry_max_retries`<sup>Optional</sup> <a name="http_client_retry_max_retries" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryMaxRetries"></a>

- *Type:* typing.Union[int, float]

The HTTP request maximum retry number. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#http_client_retry_max_retries DatadogProvider#http_client_retry_max_retries}

---

##### `http_client_retry_timeout`<sup>Optional</sup> <a name="http_client_retry_timeout" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.httpClientRetryTimeout"></a>

- *Type:* typing.Union[int, float]

The HTTP request retry timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#http_client_retry_timeout DatadogProvider#http_client_retry_timeout}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.validate"></a>

- *Type:* str

Enables validation of the provided API key during provider initialization.

Valid values are [`true`, `false`]. Default is true. When false, api_key won't be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#validate DatadogProvider#validate}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetApiUrl">reset_api_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAppKey">reset_app_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetDefaultTags">reset_default_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffBase">reset_http_client_retry_backoff_base</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffMultiplier">reset_http_client_retry_backoff_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryEnabled">reset_http_client_retry_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryMaxRetries">reset_http_client_retry_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryTimeout">reset_http_client_retry_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetValidate">reset_validate</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.provider.DatadogProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.provider.DatadogProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.provider.DatadogProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.provider.DatadogProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.provider.DatadogProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.provider.DatadogProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.provider.DatadogProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.provider.DatadogProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.provider.DatadogProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.provider.DatadogProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_api_key` <a name="reset_api_key" id="@cdktf/provider-datadog.provider.DatadogProvider.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_api_url` <a name="reset_api_url" id="@cdktf/provider-datadog.provider.DatadogProvider.resetApiUrl"></a>

```python
def reset_api_url() -> None
```

##### `reset_app_key` <a name="reset_app_key" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAppKey"></a>

```python
def reset_app_key() -> None
```

##### `reset_default_tags` <a name="reset_default_tags" id="@cdktf/provider-datadog.provider.DatadogProvider.resetDefaultTags"></a>

```python
def reset_default_tags() -> None
```

##### `reset_http_client_retry_backoff_base` <a name="reset_http_client_retry_backoff_base" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffBase"></a>

```python
def reset_http_client_retry_backoff_base() -> None
```

##### `reset_http_client_retry_backoff_multiplier` <a name="reset_http_client_retry_backoff_multiplier" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffMultiplier"></a>

```python
def reset_http_client_retry_backoff_multiplier() -> None
```

##### `reset_http_client_retry_enabled` <a name="reset_http_client_retry_enabled" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryEnabled"></a>

```python
def reset_http_client_retry_enabled() -> None
```

##### `reset_http_client_retry_max_retries` <a name="reset_http_client_retry_max_retries" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryMaxRetries"></a>

```python
def reset_http_client_retry_max_retries() -> None
```

##### `reset_http_client_retry_timeout` <a name="reset_http_client_retry_timeout" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryTimeout"></a>

```python
def reset_http_client_retry_timeout() -> None
```

##### `reset_validate` <a name="reset_validate" id="@cdktf/provider-datadog.provider.DatadogProvider.resetValidate"></a>

```python
def reset_validate() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatadogProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.provider.DatadogProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import provider

provider.DatadogProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import provider

provider.DatadogProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_datadog import provider

provider.DatadogProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import provider

provider.DatadogProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatadogProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatadogProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatadogProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatadogProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrlInput">api_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.appKeyInput">app_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.defaultTagsInput">default_tags_input</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBaseInput">http_client_retry_backoff_base_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplierInput">http_client_retry_backoff_multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabledInput">http_client_retry_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetriesInput">http_client_retry_max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeoutInput">http_client_retry_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.validateInput">validate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrl">api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.appKey">app_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.defaultTags">default_tags</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBase">http_client_retry_backoff_base</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplier">http_client_retry_backoff_multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabled">http_client_retry_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetries">http_client_retry_max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeout">http_client_retry_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.validate">validate</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.provider.DatadogProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.provider.DatadogProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.provider.DatadogProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.provider.DatadogProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-datadog.provider.DatadogProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.provider.DatadogProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.provider.DatadogProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-datadog.provider.DatadogProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-datadog.provider.DatadogProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-datadog.provider.DatadogProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `api_url_input`<sup>Optional</sup> <a name="api_url_input" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrlInput"></a>

```python
api_url_input: str
```

- *Type:* str

---

##### `app_key_input`<sup>Optional</sup> <a name="app_key_input" id="@cdktf/provider-datadog.provider.DatadogProvider.property.appKeyInput"></a>

```python
app_key_input: str
```

- *Type:* str

---

##### `default_tags_input`<sup>Optional</sup> <a name="default_tags_input" id="@cdktf/provider-datadog.provider.DatadogProvider.property.defaultTagsInput"></a>

```python
default_tags_input: DatadogProviderDefaultTags
```

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

---

##### `http_client_retry_backoff_base_input`<sup>Optional</sup> <a name="http_client_retry_backoff_base_input" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBaseInput"></a>

```python
http_client_retry_backoff_base_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_client_retry_backoff_multiplier_input`<sup>Optional</sup> <a name="http_client_retry_backoff_multiplier_input" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplierInput"></a>

```python
http_client_retry_backoff_multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_client_retry_enabled_input`<sup>Optional</sup> <a name="http_client_retry_enabled_input" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabledInput"></a>

```python
http_client_retry_enabled_input: str
```

- *Type:* str

---

##### `http_client_retry_max_retries_input`<sup>Optional</sup> <a name="http_client_retry_max_retries_input" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetriesInput"></a>

```python
http_client_retry_max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_client_retry_timeout_input`<sup>Optional</sup> <a name="http_client_retry_timeout_input" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeoutInput"></a>

```python
http_client_retry_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validate_input`<sup>Optional</sup> <a name="validate_input" id="@cdktf/provider-datadog.provider.DatadogProvider.property.validateInput"></a>

```python
validate_input: str
```

- *Type:* str

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

---

##### `app_key`<sup>Optional</sup> <a name="app_key" id="@cdktf/provider-datadog.provider.DatadogProvider.property.appKey"></a>

```python
app_key: str
```

- *Type:* str

---

##### `default_tags`<sup>Optional</sup> <a name="default_tags" id="@cdktf/provider-datadog.provider.DatadogProvider.property.defaultTags"></a>

```python
default_tags: DatadogProviderDefaultTags
```

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

---

##### `http_client_retry_backoff_base`<sup>Optional</sup> <a name="http_client_retry_backoff_base" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBase"></a>

```python
http_client_retry_backoff_base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_client_retry_backoff_multiplier`<sup>Optional</sup> <a name="http_client_retry_backoff_multiplier" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplier"></a>

```python
http_client_retry_backoff_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_client_retry_enabled`<sup>Optional</sup> <a name="http_client_retry_enabled" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabled"></a>

```python
http_client_retry_enabled: str
```

- *Type:* str

---

##### `http_client_retry_max_retries`<sup>Optional</sup> <a name="http_client_retry_max_retries" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetries"></a>

```python
http_client_retry_max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_client_retry_timeout`<sup>Optional</sup> <a name="http_client_retry_timeout" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeout"></a>

```python
http_client_retry_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.provider.DatadogProvider.property.validate"></a>

```python
validate: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.provider.DatadogProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogProviderConfig <a name="DatadogProviderConfig" id="@cdktf/provider-datadog.provider.DatadogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import provider

provider.DatadogProviderConfig(
  alias: str = None,
  api_key: str = None,
  api_url: str = None,
  app_key: str = None,
  default_tags: DatadogProviderDefaultTags = None,
  http_client_retry_backoff_base: typing.Union[int, float] = None,
  http_client_retry_backoff_multiplier: typing.Union[int, float] = None,
  http_client_retry_enabled: str = None,
  http_client_retry_max_retries: typing.Union[int, float] = None,
  http_client_retry_timeout: typing.Union[int, float] = None,
  validate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiKey">api_key</a></code> | <code>str</code> | (Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiUrl">api_url</a></code> | <code>str</code> | The API URL. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.appKey">app_key</a></code> | <code>str</code> | (Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.defaultTags">default_tags</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | default_tags block. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffBase">http_client_retry_backoff_base</a></code> | <code>typing.Union[int, float]</code> | The HTTP request retry back off base. Defaults to 2. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffMultiplier">http_client_retry_backoff_multiplier</a></code> | <code>typing.Union[int, float]</code> | The HTTP request retry back off multiplier. Defaults to 2. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryEnabled">http_client_retry_enabled</a></code> | <code>str</code> | Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryMaxRetries">http_client_retry_max_retries</a></code> | <code>typing.Union[int, float]</code> | The HTTP request maximum retry number. Defaults to 3. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryTimeout">http_client_retry_timeout</a></code> | <code>typing.Union[int, float]</code> | The HTTP request retry timeout period. Defaults to 60 seconds. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.validate">validate</a></code> | <code>str</code> | Enables validation of the provided API key during provider initialization. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#alias DatadogProvider#alias}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

(Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#api_key DatadogProvider#api_key}

---

##### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

The API URL.

This can also be set via the DD_HOST environment variable, and defaults to `https://api.datadoghq.com`. Note that this URL must not end with the `/api/` path. For example, `https://api.datadoghq.com/` is a correct value, while `https://api.datadoghq.com/api/` is not. And if you're working with "EU" version of Datadog, use `https://api.datadoghq.eu/`. Other Datadog region examples: `https://api.us5.datadoghq.com/`, `https://api.us3.datadoghq.com/` and `https://api.ddog-gov.com/`. See https://docs.datadoghq.com/getting_started/site/ for all available regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#api_url DatadogProvider#api_url}

---

##### `app_key`<sup>Optional</sup> <a name="app_key" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.appKey"></a>

```python
app_key: str
```

- *Type:* str

(Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#app_key DatadogProvider#app_key}

---

##### `default_tags`<sup>Optional</sup> <a name="default_tags" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.defaultTags"></a>

```python
default_tags: DatadogProviderDefaultTags
```

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

default_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#default_tags DatadogProvider#default_tags}

---

##### `http_client_retry_backoff_base`<sup>Optional</sup> <a name="http_client_retry_backoff_base" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffBase"></a>

```python
http_client_retry_backoff_base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTP request retry back off base. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#http_client_retry_backoff_base DatadogProvider#http_client_retry_backoff_base}

---

##### `http_client_retry_backoff_multiplier`<sup>Optional</sup> <a name="http_client_retry_backoff_multiplier" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffMultiplier"></a>

```python
http_client_retry_backoff_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTP request retry back off multiplier. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#http_client_retry_backoff_multiplier DatadogProvider#http_client_retry_backoff_multiplier}

---

##### `http_client_retry_enabled`<sup>Optional</sup> <a name="http_client_retry_enabled" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryEnabled"></a>

```python
http_client_retry_enabled: str
```

- *Type:* str

Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#http_client_retry_enabled DatadogProvider#http_client_retry_enabled}

---

##### `http_client_retry_max_retries`<sup>Optional</sup> <a name="http_client_retry_max_retries" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryMaxRetries"></a>

```python
http_client_retry_max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTP request maximum retry number. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#http_client_retry_max_retries DatadogProvider#http_client_retry_max_retries}

---

##### `http_client_retry_timeout`<sup>Optional</sup> <a name="http_client_retry_timeout" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryTimeout"></a>

```python
http_client_retry_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTP request retry timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#http_client_retry_timeout DatadogProvider#http_client_retry_timeout}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.validate"></a>

```python
validate: str
```

- *Type:* str

Enables validation of the provided API key during provider initialization.

Valid values are [`true`, `false`]. Default is true. When false, api_key won't be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#validate DatadogProvider#validate}

---

### DatadogProviderDefaultTags <a name="DatadogProviderDefaultTags" id="@cdktf/provider-datadog.provider.DatadogProviderDefaultTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.provider.DatadogProviderDefaultTags.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import provider

provider.DatadogProviderDefaultTags(
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderDefaultTags.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | [Experimental - Logs Pipelines, Monitors and Security Monitoring Rules only] Resource tags to be applied by default across all resources. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.provider.DatadogProviderDefaultTags.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

[Experimental - Logs Pipelines, Monitors and Security Monitoring Rules only] Resource tags to be applied by default across all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs#tags DatadogProvider#tags}

---



