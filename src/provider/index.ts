// https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatadogProviderConfig {
  /**
  * (Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#api_key DatadogProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The API URL. This can also be set via the DD_HOST environment variable, and defaults to `https://api.datadoghq.com`. Note that this URL must not end with the `/api/` path. For example, `https://api.datadoghq.com/` is a correct value, while `https://api.datadoghq.com/api/` is not. And if you're working with "EU" version of Datadog, use `https://api.datadoghq.eu/`. Other Datadog region examples: `https://api.us5.datadoghq.com/`, `https://api.us3.datadoghq.com/` and `https://api.ddog-gov.com/`. See https://docs.datadoghq.com/getting_started/site/ for all available regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#api_url DatadogProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * (Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#app_key DatadogProvider#app_key}
  */
  readonly appKey?: string;
  /**
  * The HTTP request retry back off base. Defaults to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#http_client_retry_backoff_base DatadogProvider#http_client_retry_backoff_base}
  */
  readonly httpClientRetryBackoffBase?: number;
  /**
  * The HTTP request retry back off multiplier. Defaults to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#http_client_retry_backoff_multiplier DatadogProvider#http_client_retry_backoff_multiplier}
  */
  readonly httpClientRetryBackoffMultiplier?: number;
  /**
  * Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#http_client_retry_enabled DatadogProvider#http_client_retry_enabled}
  */
  readonly httpClientRetryEnabled?: string;
  /**
  * The HTTP request maximum retry number. Defaults to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#http_client_retry_max_retries DatadogProvider#http_client_retry_max_retries}
  */
  readonly httpClientRetryMaxRetries?: number;
  /**
  * The HTTP request retry timeout period. Defaults to 60 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#http_client_retry_timeout DatadogProvider#http_client_retry_timeout}
  */
  readonly httpClientRetryTimeout?: number;
  /**
  * Enables validation of the provided API key during provider initialization. Valid values are [`true`, `false`]. Default is true. When false, api_key won't be checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#validate DatadogProvider#validate}
  */
  readonly validate?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#alias DatadogProvider#alias}
  */
  readonly alias?: string;
  /**
  * default_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#default_tags DatadogProvider#default_tags}
  */
  readonly defaultTags?: DatadogProviderDefaultTags;
}
export interface DatadogProviderDefaultTags {
  /**
  * [Experimental - Monitors only] Resource tags to be applied by default across all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#tags DatadogProvider#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function datadogProviderDefaultTagsToTerraform(struct?: DatadogProviderDefaultTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function datadogProviderDefaultTagsToHclTerraform(struct?: DatadogProviderDefaultTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs datadog}
*/
export class DatadogProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatadogProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatadogProvider to import
  * @param importFromId The id of the existing DatadogProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatadogProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs datadog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatadogProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DatadogProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.51.0',
        providerVersionConstraint: '~> 3.0'
      },
      terraformProviderSource: 'DataDog/datadog'
    });
    this._apiKey = config.apiKey;
    this._apiUrl = config.apiUrl;
    this._appKey = config.appKey;
    this._httpClientRetryBackoffBase = config.httpClientRetryBackoffBase;
    this._httpClientRetryBackoffMultiplier = config.httpClientRetryBackoffMultiplier;
    this._httpClientRetryEnabled = config.httpClientRetryEnabled;
    this._httpClientRetryMaxRetries = config.httpClientRetryMaxRetries;
    this._httpClientRetryTimeout = config.httpClientRetryTimeout;
    this._validate = config.validate;
    this._alias = config.alias;
    this._defaultTags = config.defaultTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // app_key - computed: false, optional: true, required: false
  private _appKey?: string; 
  public get appKey() {
    return this._appKey;
  }
  public set appKey(value: string | undefined) {
    this._appKey = value;
  }
  public resetAppKey() {
    this._appKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyInput() {
    return this._appKey;
  }

  // http_client_retry_backoff_base - computed: false, optional: true, required: false
  private _httpClientRetryBackoffBase?: number; 
  public get httpClientRetryBackoffBase() {
    return this._httpClientRetryBackoffBase;
  }
  public set httpClientRetryBackoffBase(value: number | undefined) {
    this._httpClientRetryBackoffBase = value;
  }
  public resetHttpClientRetryBackoffBase() {
    this._httpClientRetryBackoffBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryBackoffBaseInput() {
    return this._httpClientRetryBackoffBase;
  }

  // http_client_retry_backoff_multiplier - computed: false, optional: true, required: false
  private _httpClientRetryBackoffMultiplier?: number; 
  public get httpClientRetryBackoffMultiplier() {
    return this._httpClientRetryBackoffMultiplier;
  }
  public set httpClientRetryBackoffMultiplier(value: number | undefined) {
    this._httpClientRetryBackoffMultiplier = value;
  }
  public resetHttpClientRetryBackoffMultiplier() {
    this._httpClientRetryBackoffMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryBackoffMultiplierInput() {
    return this._httpClientRetryBackoffMultiplier;
  }

  // http_client_retry_enabled - computed: false, optional: true, required: false
  private _httpClientRetryEnabled?: string; 
  public get httpClientRetryEnabled() {
    return this._httpClientRetryEnabled;
  }
  public set httpClientRetryEnabled(value: string | undefined) {
    this._httpClientRetryEnabled = value;
  }
  public resetHttpClientRetryEnabled() {
    this._httpClientRetryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryEnabledInput() {
    return this._httpClientRetryEnabled;
  }

  // http_client_retry_max_retries - computed: false, optional: true, required: false
  private _httpClientRetryMaxRetries?: number; 
  public get httpClientRetryMaxRetries() {
    return this._httpClientRetryMaxRetries;
  }
  public set httpClientRetryMaxRetries(value: number | undefined) {
    this._httpClientRetryMaxRetries = value;
  }
  public resetHttpClientRetryMaxRetries() {
    this._httpClientRetryMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryMaxRetriesInput() {
    return this._httpClientRetryMaxRetries;
  }

  // http_client_retry_timeout - computed: false, optional: true, required: false
  private _httpClientRetryTimeout?: number; 
  public get httpClientRetryTimeout() {
    return this._httpClientRetryTimeout;
  }
  public set httpClientRetryTimeout(value: number | undefined) {
    this._httpClientRetryTimeout = value;
  }
  public resetHttpClientRetryTimeout() {
    this._httpClientRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryTimeoutInput() {
    return this._httpClientRetryTimeout;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: string; 
  public get validate() {
    return this._validate;
  }
  public set validate(value: string | undefined) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags?: DatadogProviderDefaultTags; 
  public get defaultTags() {
    return this._defaultTags;
  }
  public set defaultTags(value: DatadogProviderDefaultTags | undefined) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      app_key: cdktf.stringToTerraform(this._appKey),
      http_client_retry_backoff_base: cdktf.numberToTerraform(this._httpClientRetryBackoffBase),
      http_client_retry_backoff_multiplier: cdktf.numberToTerraform(this._httpClientRetryBackoffMultiplier),
      http_client_retry_enabled: cdktf.stringToTerraform(this._httpClientRetryEnabled),
      http_client_retry_max_retries: cdktf.numberToTerraform(this._httpClientRetryMaxRetries),
      http_client_retry_timeout: cdktf.numberToTerraform(this._httpClientRetryTimeout),
      validate: cdktf.stringToTerraform(this._validate),
      alias: cdktf.stringToTerraform(this._alias),
      default_tags: datadogProviderDefaultTagsToTerraform(this._defaultTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_key: {
        value: cdktf.stringToHclTerraform(this._appKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_client_retry_backoff_base: {
        value: cdktf.numberToHclTerraform(this._httpClientRetryBackoffBase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_client_retry_backoff_multiplier: {
        value: cdktf.numberToHclTerraform(this._httpClientRetryBackoffMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_client_retry_enabled: {
        value: cdktf.stringToHclTerraform(this._httpClientRetryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_client_retry_max_retries: {
        value: cdktf.numberToHclTerraform(this._httpClientRetryMaxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_client_retry_timeout: {
        value: cdktf.numberToHclTerraform(this._httpClientRetryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      validate: {
        value: cdktf.stringToHclTerraform(this._validate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_tags: {
        value: datadogProviderDefaultTagsToHclTerraform(this._defaultTags),
        isBlock: true,
        type: "list",
        storageClassType: "DatadogProviderDefaultTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
