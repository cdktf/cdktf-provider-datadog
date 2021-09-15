// https://www.terraform.io/docs/providers/datadog/r/integration_slack_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationSlackChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Slack account name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_slack_channel.html#account_name IntegrationSlackChannel#account_name}
  */
  readonly accountName: string;
  /**
  * Slack channel name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_slack_channel.html#channel_name IntegrationSlackChannel#channel_name}
  */
  readonly channelName: string;
  /**
  * display block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_slack_channel.html#display IntegrationSlackChannel#display}
  */
  readonly display: IntegrationSlackChannelDisplay[];
}
export interface IntegrationSlackChannelDisplay {
  /**
  * Show the main body of the alert event.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_slack_channel.html#message IntegrationSlackChannel#message}
  */
  readonly message?: boolean | cdktf.IResolvable;
  /**
  * Show the list of @-handles in the alert event.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_slack_channel.html#notified IntegrationSlackChannel#notified}
  */
  readonly notified?: boolean | cdktf.IResolvable;
  /**
  * Show the alert event's snapshot image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_slack_channel.html#snapshot IntegrationSlackChannel#snapshot}
  */
  readonly snapshot?: boolean | cdktf.IResolvable;
  /**
  * Show the scopes on which the monitor alerted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_slack_channel.html#tags IntegrationSlackChannel#tags}
  */
  readonly tags?: boolean | cdktf.IResolvable;
}

function integrationSlackChannelDisplayToTerraform(struct?: IntegrationSlackChannelDisplay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message: cdktf.booleanToTerraform(struct!.message),
    notified: cdktf.booleanToTerraform(struct!.notified),
    snapshot: cdktf.booleanToTerraform(struct!.snapshot),
    tags: cdktf.booleanToTerraform(struct!.tags),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/integration_slack_channel.html datadog_integration_slack_channel}
*/
export class IntegrationSlackChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_integration_slack_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/integration_slack_channel.html datadog_integration_slack_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationSlackChannelConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationSlackChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_slack_channel',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._channelName = config.channelName;
    this._display = config.display;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName: string;
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // display - computed: false, optional: false, required: true
  private _display: IntegrationSlackChannelDisplay[];
  public get display() {
    return this.interpolationForAttribute('display') as any;
  }
  public set display(value: IntegrationSlackChannelDisplay[]) {
    this._display = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      channel_name: cdktf.stringToTerraform(this._channelName),
      display: cdktf.listMapper(integrationSlackChannelDisplayToTerraform)(this._display),
    };
  }
}
