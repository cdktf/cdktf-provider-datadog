/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OnCallTeamRoutingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the team to associate the routing rules with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#id OnCallTeamRoutingRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#rule OnCallTeamRoutingRules#rule}
  */
  readonly rule?: OnCallTeamRoutingRulesRule[] | cdktf.IResolvable;
}
export interface OnCallTeamRoutingRulesRuleActionSendSlackMessage {
  /**
  * Slack channel ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#channel OnCallTeamRoutingRules#channel}
  */
  readonly channel?: string;
  /**
  * Slack workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#workspace OnCallTeamRoutingRules#workspace}
  */
  readonly workspace?: string;
}

export function onCallTeamRoutingRulesRuleActionSendSlackMessageToTerraform(struct?: OnCallTeamRoutingRulesRuleActionSendSlackMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    workspace: cdktf.stringToTerraform(struct!.workspace),
  }
}


export function onCallTeamRoutingRulesRuleActionSendSlackMessageToHclTerraform(struct?: OnCallTeamRoutingRulesRuleActionSendSlackMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace: {
      value: cdktf.stringToHclTerraform(struct!.workspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OnCallTeamRoutingRulesRuleActionSendSlackMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnCallTeamRoutingRulesRuleActionSendSlackMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._workspace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._workspace = value.workspace;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  public resetWorkspace() {
    this._workspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }
}
export interface OnCallTeamRoutingRulesRuleActionSendTeamsMessage {
  /**
  * Teams channel ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#channel OnCallTeamRoutingRules#channel}
  */
  readonly channel?: string;
  /**
  * Teams team ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#team OnCallTeamRoutingRules#team}
  */
  readonly team?: string;
  /**
  * Teams tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#tenant OnCallTeamRoutingRules#tenant}
  */
  readonly tenant?: string;
}

export function onCallTeamRoutingRulesRuleActionSendTeamsMessageToTerraform(struct?: OnCallTeamRoutingRulesRuleActionSendTeamsMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    team: cdktf.stringToTerraform(struct!.team),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function onCallTeamRoutingRulesRuleActionSendTeamsMessageToHclTerraform(struct?: OnCallTeamRoutingRulesRuleActionSendTeamsMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OnCallTeamRoutingRulesRuleActionSendTeamsMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnCallTeamRoutingRulesRuleActionSendTeamsMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._team = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._team = value.team;
      this._tenant = value.tenant;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface OnCallTeamRoutingRulesRuleAction {
  /**
  * send_slack_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#send_slack_message OnCallTeamRoutingRules#send_slack_message}
  */
  readonly sendSlackMessage?: OnCallTeamRoutingRulesRuleActionSendSlackMessage;
  /**
  * send_teams_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#send_teams_message OnCallTeamRoutingRules#send_teams_message}
  */
  readonly sendTeamsMessage?: OnCallTeamRoutingRulesRuleActionSendTeamsMessage;
}

export function onCallTeamRoutingRulesRuleActionToTerraform(struct?: OnCallTeamRoutingRulesRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send_slack_message: onCallTeamRoutingRulesRuleActionSendSlackMessageToTerraform(struct!.sendSlackMessage),
    send_teams_message: onCallTeamRoutingRulesRuleActionSendTeamsMessageToTerraform(struct!.sendTeamsMessage),
  }
}


export function onCallTeamRoutingRulesRuleActionToHclTerraform(struct?: OnCallTeamRoutingRulesRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    send_slack_message: {
      value: onCallTeamRoutingRulesRuleActionSendSlackMessageToHclTerraform(struct!.sendSlackMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "OnCallTeamRoutingRulesRuleActionSendSlackMessage",
    },
    send_teams_message: {
      value: onCallTeamRoutingRulesRuleActionSendTeamsMessageToHclTerraform(struct!.sendTeamsMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "OnCallTeamRoutingRulesRuleActionSendTeamsMessage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OnCallTeamRoutingRulesRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OnCallTeamRoutingRulesRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendSlackMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendSlackMessage = this._sendSlackMessage?.internalValue;
    }
    if (this._sendTeamsMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTeamsMessage = this._sendTeamsMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnCallTeamRoutingRulesRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sendSlackMessage.internalValue = undefined;
      this._sendTeamsMessage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sendSlackMessage.internalValue = value.sendSlackMessage;
      this._sendTeamsMessage.internalValue = value.sendTeamsMessage;
    }
  }

  // send_slack_message - computed: false, optional: true, required: false
  private _sendSlackMessage = new OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference(this, "send_slack_message");
  public get sendSlackMessage() {
    return this._sendSlackMessage;
  }
  public putSendSlackMessage(value: OnCallTeamRoutingRulesRuleActionSendSlackMessage) {
    this._sendSlackMessage.internalValue = value;
  }
  public resetSendSlackMessage() {
    this._sendSlackMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSlackMessageInput() {
    return this._sendSlackMessage.internalValue;
  }

  // send_teams_message - computed: false, optional: true, required: false
  private _sendTeamsMessage = new OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference(this, "send_teams_message");
  public get sendTeamsMessage() {
    return this._sendTeamsMessage;
  }
  public putSendTeamsMessage(value: OnCallTeamRoutingRulesRuleActionSendTeamsMessage) {
    this._sendTeamsMessage.internalValue = value;
  }
  public resetSendTeamsMessage() {
    this._sendTeamsMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTeamsMessageInput() {
    return this._sendTeamsMessage.internalValue;
  }
}

export class OnCallTeamRoutingRulesRuleActionList extends cdktf.ComplexList {
  public internalValue? : OnCallTeamRoutingRulesRuleAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OnCallTeamRoutingRulesRuleActionOutputReference {
    return new OnCallTeamRoutingRulesRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction {
  /**
  * The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#end_day OnCallTeamRoutingRules#end_day}
  */
  readonly endDay?: string;
  /**
  * The time of day when the restriction ends (hh:mm:ss).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#end_time OnCallTeamRoutingRules#end_time}
  */
  readonly endTime?: string;
  /**
  * The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#start_day OnCallTeamRoutingRules#start_day}
  */
  readonly startDay?: string;
  /**
  * The time of day when the restriction begins (hh:mm:ss).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#start_time OnCallTeamRoutingRules#start_time}
  */
  readonly startTime?: string;
}

export function onCallTeamRoutingRulesRuleTimeRestrictionsRestrictionToTerraform(struct?: OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_day: cdktf.stringToTerraform(struct!.endDay),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_day: cdktf.stringToTerraform(struct!.startDay),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function onCallTeamRoutingRulesRuleTimeRestrictionsRestrictionToHclTerraform(struct?: OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_day: {
      value: cdktf.stringToHclTerraform(struct!.endDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_day: {
      value: cdktf.stringToHclTerraform(struct!.startDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDay = this._endDay;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDay = this._startDay;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDay = undefined;
      this._endTime = undefined;
      this._startDay = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDay = value.endDay;
      this._endTime = value.endTime;
      this._startDay = value.startDay;
      this._startTime = value.startTime;
    }
  }

  // end_day - computed: false, optional: true, required: false
  private _endDay?: string; 
  public get endDay() {
    return this.getStringAttribute('end_day');
  }
  public set endDay(value: string) {
    this._endDay = value;
  }
  public resetEndDay() {
    this._endDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDayInput() {
    return this._endDay;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_day - computed: false, optional: true, required: false
  private _startDay?: string; 
  public get startDay() {
    return this.getStringAttribute('start_day');
  }
  public set startDay(value: string) {
    this._startDay = value;
  }
  public resetStartDay() {
    this._startDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDayInput() {
    return this._startDay;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList extends cdktf.ComplexList {
  public internalValue? : OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference {
    return new OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OnCallTeamRoutingRulesRuleTimeRestrictions {
  /**
  * Specifies the time zone applicable to the restrictions, e.g. `America/New_York`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#time_zone OnCallTeamRoutingRules#time_zone}
  */
  readonly timeZone?: string;
  /**
  * restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#restriction OnCallTeamRoutingRules#restriction}
  */
  readonly restriction?: OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction[] | cdktf.IResolvable;
}

export function onCallTeamRoutingRulesRuleTimeRestrictionsToTerraform(struct?: OnCallTeamRoutingRulesRuleTimeRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    restriction: cdktf.listMapper(onCallTeamRoutingRulesRuleTimeRestrictionsRestrictionToTerraform, true)(struct!.restriction),
  }
}


export function onCallTeamRoutingRulesRuleTimeRestrictionsToHclTerraform(struct?: OnCallTeamRoutingRulesRuleTimeRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restriction: {
      value: cdktf.listMapperHcl(onCallTeamRoutingRulesRuleTimeRestrictionsRestrictionToHclTerraform, true)(struct!.restriction),
      isBlock: true,
      type: "list",
      storageClassType: "OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OnCallTeamRoutingRulesRuleTimeRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._restriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restriction = this._restriction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnCallTeamRoutingRulesRuleTimeRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeZone = undefined;
      this._restriction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeZone = value.timeZone;
      this._restriction.internalValue = value.restriction;
    }
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // restriction - computed: false, optional: true, required: false
  private _restriction = new OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList(this, "restriction", false);
  public get restriction() {
    return this._restriction;
  }
  public putRestriction(value: OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction[] | cdktf.IResolvable) {
    this._restriction.internalValue = value;
  }
  public resetRestriction() {
    this._restriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionInput() {
    return this._restriction.internalValue;
  }
}
export interface OnCallTeamRoutingRulesRule {
  /**
  * ID of the policy to be applied when this routing rule matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#escalation_policy OnCallTeamRoutingRules#escalation_policy}
  */
  readonly escalationPolicy?: string;
  /**
  * Defines the query or condition that triggers this routing rule. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#query OnCallTeamRoutingRules#query}
  */
  readonly query?: string;
  /**
  * Defines the urgency for pages created via this rule. Only valid if `escalation_policy` is set. Valid values are `high`, `low`, `dynamic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#urgency OnCallTeamRoutingRules#urgency}
  */
  readonly urgency?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#action OnCallTeamRoutingRules#action}
  */
  readonly action?: OnCallTeamRoutingRulesRuleAction[] | cdktf.IResolvable;
  /**
  * time_restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#time_restrictions OnCallTeamRoutingRules#time_restrictions}
  */
  readonly timeRestrictions?: OnCallTeamRoutingRulesRuleTimeRestrictions;
}

export function onCallTeamRoutingRulesRuleToTerraform(struct?: OnCallTeamRoutingRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_policy: cdktf.stringToTerraform(struct!.escalationPolicy),
    query: cdktf.stringToTerraform(struct!.query),
    urgency: cdktf.stringToTerraform(struct!.urgency),
    action: cdktf.listMapper(onCallTeamRoutingRulesRuleActionToTerraform, true)(struct!.action),
    time_restrictions: onCallTeamRoutingRulesRuleTimeRestrictionsToTerraform(struct!.timeRestrictions),
  }
}


export function onCallTeamRoutingRulesRuleToHclTerraform(struct?: OnCallTeamRoutingRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalation_policy: {
      value: cdktf.stringToHclTerraform(struct!.escalationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(onCallTeamRoutingRulesRuleActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "OnCallTeamRoutingRulesRuleActionList",
    },
    time_restrictions: {
      value: onCallTeamRoutingRulesRuleTimeRestrictionsToHclTerraform(struct!.timeRestrictions),
      isBlock: true,
      type: "struct",
      storageClassType: "OnCallTeamRoutingRulesRuleTimeRestrictions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OnCallTeamRoutingRulesRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OnCallTeamRoutingRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationPolicy = this._escalationPolicy;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._timeRestrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRestrictions = this._timeRestrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnCallTeamRoutingRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._escalationPolicy = undefined;
      this._query = undefined;
      this._urgency = undefined;
      this._action.internalValue = undefined;
      this._timeRestrictions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._escalationPolicy = value.escalationPolicy;
      this._query = value.query;
      this._urgency = value.urgency;
      this._action.internalValue = value.action;
      this._timeRestrictions.internalValue = value.timeRestrictions;
    }
  }

  // escalation_policy - computed: false, optional: true, required: false
  private _escalationPolicy?: string; 
  public get escalationPolicy() {
    return this.getStringAttribute('escalation_policy');
  }
  public set escalationPolicy(value: string) {
    this._escalationPolicy = value;
  }
  public resetEscalationPolicy() {
    this._escalationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyInput() {
    return this._escalationPolicy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // urgency - computed: false, optional: true, required: false
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }

  // action - computed: false, optional: true, required: false
  private _action = new OnCallTeamRoutingRulesRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: OnCallTeamRoutingRulesRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // time_restrictions - computed: false, optional: true, required: false
  private _timeRestrictions = new OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference(this, "time_restrictions");
  public get timeRestrictions() {
    return this._timeRestrictions;
  }
  public putTimeRestrictions(value: OnCallTeamRoutingRulesRuleTimeRestrictions) {
    this._timeRestrictions.internalValue = value;
  }
  public resetTimeRestrictions() {
    this._timeRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRestrictionsInput() {
    return this._timeRestrictions.internalValue;
  }
}

export class OnCallTeamRoutingRulesRuleList extends cdktf.ComplexList {
  public internalValue? : OnCallTeamRoutingRulesRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OnCallTeamRoutingRulesRuleOutputReference {
    return new OnCallTeamRoutingRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules datadog_on_call_team_routing_rules}
*/
export class OnCallTeamRoutingRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_on_call_team_routing_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OnCallTeamRoutingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OnCallTeamRoutingRules to import
  * @param importFromId The id of the existing OnCallTeamRoutingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OnCallTeamRoutingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_on_call_team_routing_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/on_call_team_routing_rules datadog_on_call_team_routing_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OnCallTeamRoutingRulesConfig
  */
  public constructor(scope: Construct, id: string, config: OnCallTeamRoutingRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_on_call_team_routing_rules',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.72.0',
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
    this._id = config.id;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new OnCallTeamRoutingRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: OnCallTeamRoutingRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rule: cdktf.listMapper(onCallTeamRoutingRulesRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(onCallTeamRoutingRulesRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OnCallTeamRoutingRulesRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
