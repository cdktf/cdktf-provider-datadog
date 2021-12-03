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
  readonly display: IntegrationSlackChannelDisplay;
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

export function integrationSlackChannelDisplayToTerraform(struct?: IntegrationSlackChannelDisplayOutputReference | IntegrationSlackChannelDisplay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.booleanToTerraform(struct!.message),
    notified: cdktf.booleanToTerraform(struct!.notified),
    snapshot: cdktf.booleanToTerraform(struct!.snapshot),
    tags: cdktf.booleanToTerraform(struct!.tags),
  }
}

export class IntegrationSlackChannelDisplayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IntegrationSlackChannelDisplay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._notified) {
      hasAnyValues = true;
      internalValueResult.notified = this._notified;
    }
    if (this._snapshot) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    if (this._tags) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSlackChannelDisplay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._notified = undefined;
      this._snapshot = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._notified = value.notified;
      this._snapshot = value.snapshot;
      this._tags = value.tags;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: boolean | cdktf.IResolvable; 
  public get message() {
    return this.getBooleanAttribute('message') as any;
  }
  public set message(value: boolean | cdktf.IResolvable) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // notified - computed: false, optional: true, required: false
  private _notified?: boolean | cdktf.IResolvable; 
  public get notified() {
    return this.getBooleanAttribute('notified') as any;
  }
  public set notified(value: boolean | cdktf.IResolvable) {
    this._notified = value;
  }
  public resetNotified() {
    this._notified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifiedInput() {
    return this._notified;
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: boolean | cdktf.IResolvable; 
  public get snapshot() {
    return this.getBooleanAttribute('snapshot') as any;
  }
  public set snapshot(value: boolean | cdktf.IResolvable) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: boolean | cdktf.IResolvable; 
  public get tags() {
    return this.getBooleanAttribute('tags') as any;
  }
  public set tags(value: boolean | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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
    this._display.internalValue = config.display;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // display - computed: false, optional: false, required: true
  private _display = new IntegrationSlackChannelDisplayOutputReference(this as any, "display", true);
  public get display() {
    return this._display;
  }
  public putDisplay(value: IntegrationSlackChannelDisplay) {
    this._display.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      channel_name: cdktf.stringToTerraform(this._channelName),
      display: integrationSlackChannelDisplayToTerraform(this._display.internalValue),
    };
  }
}
