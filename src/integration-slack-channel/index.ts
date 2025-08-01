/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationSlackChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Slack account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel#account_name IntegrationSlackChannel#account_name}
  */
  readonly accountName: string;
  /**
  * Slack channel name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel#channel_name IntegrationSlackChannel#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * display block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel#display IntegrationSlackChannel#display}
  */
  readonly display: IntegrationSlackChannelDisplay;
}
export interface IntegrationSlackChannelDisplay {
  /**
  * Show the main body of the alert event. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel#message IntegrationSlackChannel#message}
  */
  readonly message?: boolean | cdktf.IResolvable;
  /**
  * Show interactive buttons to mute the alerting monitor. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel#mute_buttons IntegrationSlackChannel#mute_buttons}
  */
  readonly muteButtons?: boolean | cdktf.IResolvable;
  /**
  * Show the list of @-handles in the alert event. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel#notified IntegrationSlackChannel#notified}
  */
  readonly notified?: boolean | cdktf.IResolvable;
  /**
  * Show the alert event's snapshot image. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel#snapshot IntegrationSlackChannel#snapshot}
  */
  readonly snapshot?: boolean | cdktf.IResolvable;
  /**
  * Show the scopes on which the monitor alerted. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel#tags IntegrationSlackChannel#tags}
  */
  readonly tags?: boolean | cdktf.IResolvable;
}

export function integrationSlackChannelDisplayToTerraform(struct?: IntegrationSlackChannelDisplayOutputReference | IntegrationSlackChannelDisplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.booleanToTerraform(struct!.message),
    mute_buttons: cdktf.booleanToTerraform(struct!.muteButtons),
    notified: cdktf.booleanToTerraform(struct!.notified),
    snapshot: cdktf.booleanToTerraform(struct!.snapshot),
    tags: cdktf.booleanToTerraform(struct!.tags),
  }
}


export function integrationSlackChannelDisplayToHclTerraform(struct?: IntegrationSlackChannelDisplayOutputReference | IntegrationSlackChannelDisplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.booleanToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mute_buttons: {
      value: cdktf.booleanToHclTerraform(struct!.muteButtons),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notified: {
      value: cdktf.booleanToHclTerraform(struct!.notified),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.snapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.booleanToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSlackChannelDisplayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationSlackChannelDisplay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._muteButtons !== undefined) {
      hasAnyValues = true;
      internalValueResult.muteButtons = this._muteButtons;
    }
    if (this._notified !== undefined) {
      hasAnyValues = true;
      internalValueResult.notified = this._notified;
    }
    if (this._snapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSlackChannelDisplay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._muteButtons = undefined;
      this._notified = undefined;
      this._snapshot = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._muteButtons = value.muteButtons;
      this._notified = value.notified;
      this._snapshot = value.snapshot;
      this._tags = value.tags;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: boolean | cdktf.IResolvable; 
  public get message() {
    return this.getBooleanAttribute('message');
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

  // mute_buttons - computed: false, optional: true, required: false
  private _muteButtons?: boolean | cdktf.IResolvable; 
  public get muteButtons() {
    return this.getBooleanAttribute('mute_buttons');
  }
  public set muteButtons(value: boolean | cdktf.IResolvable) {
    this._muteButtons = value;
  }
  public resetMuteButtons() {
    this._muteButtons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteButtonsInput() {
    return this._muteButtons;
  }

  // notified - computed: false, optional: true, required: false
  private _notified?: boolean | cdktf.IResolvable; 
  public get notified() {
    return this.getBooleanAttribute('notified');
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
    return this.getBooleanAttribute('snapshot');
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
    return this.getBooleanAttribute('tags');
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
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel datadog_integration_slack_channel}
*/
export class IntegrationSlackChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_slack_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationSlackChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationSlackChannel to import
  * @param importFromId The id of the existing IntegrationSlackChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationSlackChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_slack_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_slack_channel datadog_integration_slack_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationSlackChannelConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationSlackChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_slack_channel',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.69.0',
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
    this._accountName = config.accountName;
    this._channelName = config.channelName;
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // display - computed: false, optional: false, required: true
  private _display = new IntegrationSlackChannelDisplayOutputReference(this, "display");
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
      id: cdktf.stringToTerraform(this._id),
      display: integrationSlackChannelDisplayToTerraform(this._display.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_name: {
        value: cdktf.stringToHclTerraform(this._channelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display: {
        value: integrationSlackChannelDisplayToHclTerraform(this._display.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationSlackChannelDisplayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
