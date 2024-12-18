// https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The headers attached to the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/webhook#custom_headers Webhook#custom_headers}
  */
  readonly customHeaders?: string;
  /**
  * Encoding type. Valid values are `json`, `form`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/webhook#encode_as Webhook#encode_as}
  */
  readonly encodeAs?: string;
  /**
  * The name of the webhook. It corresponds with `<WEBHOOK_NAME>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/webhook#name Webhook#name}
  */
  readonly name: string;
  /**
  * The payload of the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/webhook#payload Webhook#payload}
  */
  readonly payload?: string;
  /**
  * The URL of the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/webhook#url Webhook#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/webhook datadog_webhook}
*/
export class Webhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Webhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Webhook to import
  * @param importFromId The id of the existing Webhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Webhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/webhook datadog_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_webhook',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.50.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
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

  // id - computed: true, optional: false, required: false
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_headers: {
        value: cdktf.stringToHclTerraform(this._customHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encode_as: {
        value: cdktf.stringToHclTerraform(this._encodeAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload: {
        value: cdktf.stringToHclTerraform(this._payload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
