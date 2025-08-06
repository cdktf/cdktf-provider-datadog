/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OnCallEscalationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable name for the escalation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy#name OnCallEscalationPolicy#name}
  */
  readonly name: string;
  /**
  * If true, pages will be automatically resolved if unacknowledged after the final step. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy#resolve_page_on_policy_end OnCallEscalationPolicy#resolve_page_on_policy_end}
  */
  readonly resolvePageOnPolicyEnd?: boolean | cdktf.IResolvable;
  /**
  * If set, policy will be retried this many times after the final step. Must be in the range 0-10. Value must be between 0 and 10. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy#retries OnCallEscalationPolicy#retries}
  */
  readonly retries?: number;
  /**
  * A list of team ids associated with the escalation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy#teams OnCallEscalationPolicy#teams}
  */
  readonly teams?: string[];
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy#step OnCallEscalationPolicy#step}
  */
  readonly step?: OnCallEscalationPolicyStep[] | cdktf.IResolvable;
}
export interface OnCallEscalationPolicyStepTarget {
  /**
  * Targeted schedule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy#schedule OnCallEscalationPolicy#schedule}
  */
  readonly schedule?: string;
  /**
  * Targeted team ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy#team OnCallEscalationPolicy#team}
  */
  readonly team?: string;
  /**
  * Targeted user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy#user OnCallEscalationPolicy#user}
  */
  readonly user?: string;
}

export function onCallEscalationPolicyStepTargetToTerraform(struct?: OnCallEscalationPolicyStepTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.stringToTerraform(struct!.schedule),
    team: cdktf.stringToTerraform(struct!.team),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function onCallEscalationPolicyStepTargetToHclTerraform(struct?: OnCallEscalationPolicyStepTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OnCallEscalationPolicyStepTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OnCallEscalationPolicyStepTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnCallEscalationPolicyStepTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schedule = undefined;
      this._team = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schedule = value.schedule;
      this._team = value.team;
      this._user = value.user;
    }
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class OnCallEscalationPolicyStepTargetList extends cdktf.ComplexList {
  public internalValue? : OnCallEscalationPolicyStepTarget[] | cdktf.IResolvable

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
  public get(index: number): OnCallEscalationPolicyStepTargetOutputReference {
    return new OnCallEscalationPolicyStepTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OnCallEscalationPolicyStep {
  /**
  * Specifies how this escalation step will assign targets. Can be `default` (page all targets at once) or `round-robin`. Valid values are `default`, `round-robin`. Defaults to `"default"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy#assignment OnCallEscalationPolicy#assignment}
  */
  readonly assignment?: string;
  /**
  * Defines how many seconds to wait before escalating to the next step. Value must be between 60 and 36000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy#escalate_after_seconds OnCallEscalationPolicy#escalate_after_seconds}
  */
  readonly escalateAfterSeconds: number;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy#target OnCallEscalationPolicy#target}
  */
  readonly target?: OnCallEscalationPolicyStepTarget[] | cdktf.IResolvable;
}

export function onCallEscalationPolicyStepToTerraform(struct?: OnCallEscalationPolicyStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignment: cdktf.stringToTerraform(struct!.assignment),
    escalate_after_seconds: cdktf.numberToTerraform(struct!.escalateAfterSeconds),
    target: cdktf.listMapper(onCallEscalationPolicyStepTargetToTerraform, true)(struct!.target),
  }
}


export function onCallEscalationPolicyStepToHclTerraform(struct?: OnCallEscalationPolicyStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignment: {
      value: cdktf.stringToHclTerraform(struct!.assignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escalate_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.escalateAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.listMapperHcl(onCallEscalationPolicyStepTargetToHclTerraform, true)(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "OnCallEscalationPolicyStepTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OnCallEscalationPolicyStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OnCallEscalationPolicyStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignment = this._assignment;
    }
    if (this._escalateAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalateAfterSeconds = this._escalateAfterSeconds;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnCallEscalationPolicyStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignment = undefined;
      this._escalateAfterSeconds = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignment = value.assignment;
      this._escalateAfterSeconds = value.escalateAfterSeconds;
      this._target.internalValue = value.target;
    }
  }

  // assignment - computed: true, optional: true, required: false
  private _assignment?: string; 
  public get assignment() {
    return this.getStringAttribute('assignment');
  }
  public set assignment(value: string) {
    this._assignment = value;
  }
  public resetAssignment() {
    this._assignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentInput() {
    return this._assignment;
  }

  // escalate_after_seconds - computed: false, optional: false, required: true
  private _escalateAfterSeconds?: number; 
  public get escalateAfterSeconds() {
    return this.getNumberAttribute('escalate_after_seconds');
  }
  public set escalateAfterSeconds(value: number) {
    this._escalateAfterSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalateAfterSecondsInput() {
    return this._escalateAfterSeconds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // target - computed: false, optional: true, required: false
  private _target = new OnCallEscalationPolicyStepTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: OnCallEscalationPolicyStepTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class OnCallEscalationPolicyStepList extends cdktf.ComplexList {
  public internalValue? : OnCallEscalationPolicyStep[] | cdktf.IResolvable

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
  public get(index: number): OnCallEscalationPolicyStepOutputReference {
    return new OnCallEscalationPolicyStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy datadog_on_call_escalation_policy}
*/
export class OnCallEscalationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_on_call_escalation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OnCallEscalationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OnCallEscalationPolicy to import
  * @param importFromId The id of the existing OnCallEscalationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OnCallEscalationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_on_call_escalation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/on_call_escalation_policy datadog_on_call_escalation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OnCallEscalationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OnCallEscalationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_on_call_escalation_policy',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.70.0',
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
    this._name = config.name;
    this._resolvePageOnPolicyEnd = config.resolvePageOnPolicyEnd;
    this._retries = config.retries;
    this._teams = config.teams;
    this._step.internalValue = config.step;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // resolve_page_on_policy_end - computed: true, optional: true, required: false
  private _resolvePageOnPolicyEnd?: boolean | cdktf.IResolvable; 
  public get resolvePageOnPolicyEnd() {
    return this.getBooleanAttribute('resolve_page_on_policy_end');
  }
  public set resolvePageOnPolicyEnd(value: boolean | cdktf.IResolvable) {
    this._resolvePageOnPolicyEnd = value;
  }
  public resetResolvePageOnPolicyEnd() {
    this._resolvePageOnPolicyEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvePageOnPolicyEndInput() {
    return this._resolvePageOnPolicyEnd;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // teams - computed: true, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return this.getListAttribute('teams');
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // step - computed: false, optional: true, required: false
  private _step = new OnCallEscalationPolicyStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: OnCallEscalationPolicyStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  public resetStep() {
    this._step.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      resolve_page_on_policy_end: cdktf.booleanToTerraform(this._resolvePageOnPolicyEnd),
      retries: cdktf.numberToTerraform(this._retries),
      teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teams),
      step: cdktf.listMapper(onCallEscalationPolicyStepToTerraform, true)(this._step.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_page_on_policy_end: {
        value: cdktf.booleanToHclTerraform(this._resolvePageOnPolicyEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      step: {
        value: cdktf.listMapperHcl(onCallEscalationPolicyStepToHclTerraform, true)(this._step.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OnCallEscalationPolicyStepList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
