// https://www.terraform.io/docs/providers/datadog/r/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The headers attached to the webhook.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/webhook#custom_headers Webhook#custom_headers}
  */
  readonly customHeaders?: string;
  /**
  * Encoding type. Valid values are `json`, `form`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/webhook#encode_as Webhook#encode_as}
  */
  readonly encodeAs?: string;
  /**
  * The name of the webhook. It corresponds with `<WEBHOOK_NAME>`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/webhook#name Webhook#name}
  */
  readonly name: string;
  /**
  * The payload of the webhook.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/webhook#payload Webhook#payload}
  */
  readonly payload?: string;
  /**
  * The URL of the webhook.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/webhook#url Webhook#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/webhook datadog_webhook}
*/
export class Webhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_webhook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/webhook datadog_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_webhook',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customHeaders = config.customHeaders;
    this._encodeAs = config.encodeAs;
    this._name = config.name;
    this._payload = config.payload;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: string; 
  public get customHeaders() {
    return this.getStringAttribute('custom_headers');
  }
  public set customHeaders(value: string) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
  }

  // encode_as - computed: true, optional: true, required: false
  private _encodeAs?: string; 
  public get encodeAs() {
    return this.getStringAttribute('encode_as');
  }
  public set encodeAs(value: string) {
    this._encodeAs = value;
  }
  public resetEncodeAs() {
    this._encodeAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeAsInput() {
    return this._encodeAs;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // payload - computed: true, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_headers: cdktf.stringToTerraform(this._customHeaders),
      encode_as: cdktf.stringToTerraform(this._encodeAs),
      name: cdktf.stringToTerraform(this._name),
      payload: cdktf.stringToTerraform(this._payload),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}
