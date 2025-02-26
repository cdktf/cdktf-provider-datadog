// https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityMonitoringRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the rule is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#enabled SecurityMonitoringRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the notifications include the triggering group-by values in their title. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#has_extended_title SecurityMonitoringRule#has_extended_title}
  */
  readonly hasExtendedTitle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Message for generated signals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#message SecurityMonitoringRule#message}
  */
  readonly message: string;
  /**
  * The name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name: string;
  /**
  * Tags for generated signals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#tags SecurityMonitoringRule#tags}
  */
  readonly tags?: string[];
  /**
  * The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}
  */
  readonly type?: string;
  /**
  * Whether or not to validate the Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#validate SecurityMonitoringRule#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * case block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#case SecurityMonitoringRule#case}
  */
  readonly case?: SecurityMonitoringRuleCase[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#filter SecurityMonitoringRule#filter}
  */
  readonly filter?: SecurityMonitoringRuleFilter[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}
  */
  readonly options?: SecurityMonitoringRuleOptions;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}
  */
  readonly query?: SecurityMonitoringRuleQuery[] | cdktf.IResolvable;
  /**
  * reference_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#reference_tables SecurityMonitoringRule#reference_tables}
  */
  readonly referenceTables?: SecurityMonitoringRuleReferenceTables[] | cdktf.IResolvable;
  /**
  * signal_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#signal_query SecurityMonitoringRule#signal_query}
  */
  readonly signalQuery?: SecurityMonitoringRuleSignalQuery[] | cdktf.IResolvable;
  /**
  * third_party_case block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#third_party_case SecurityMonitoringRule#third_party_case}
  */
  readonly thirdPartyCase?: SecurityMonitoringRuleThirdPartyCase[] | cdktf.IResolvable;
}
export interface SecurityMonitoringRuleCase {
  /**
  * A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated based on the event counts in the previously defined queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#condition SecurityMonitoringRule#condition}
  */
  readonly condition?: string;
  /**
  * Name of the case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Notification targets for each rule case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}
  */
  readonly notifications?: string[];
  /**
  * Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}
  */
  readonly status: string;
}

export function securityMonitoringRuleCaseToTerraform(struct?: SecurityMonitoringRuleCase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    name: cdktf.stringToTerraform(struct!.name),
    notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifications),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function securityMonitoringRuleCaseToHclTerraform(struct?: SecurityMonitoringRuleCase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notifications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleCaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleCase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleCase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._name = undefined;
      this._notifications = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._name = value.name;
      this._notifications = value.notifications;
      this._status = value.status;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: string[]; 
  public get notifications() {
    return this.getListAttribute('notifications');
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SecurityMonitoringRuleCaseList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringRuleCase[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringRuleCaseOutputReference {
    return new SecurityMonitoringRuleCaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleFilter {
  /**
  * The type of filtering action. Valid values are `require`, `suppress`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#action SecurityMonitoringRule#action}
  */
  readonly action: string;
  /**
  * Query for selecting logs to apply the filtering action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}
  */
  readonly query: string;
}

export function securityMonitoringRuleFilterToTerraform(struct?: SecurityMonitoringRuleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function securityMonitoringRuleFilterToHclTerraform(struct?: SecurityMonitoringRuleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._query = value.query;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SecurityMonitoringRuleFilterList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringRuleFilter[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringRuleFilterOutputReference {
    return new SecurityMonitoringRuleFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleOptionsImpossibleTravelOptions {
  /**
  * If true, signals are suppressed for the first 24 hours. During that time, Datadog learns the user's regular access locations. This can be helpful to reduce noise and infer VPN usage or credentialed API access. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#baseline_user_locations SecurityMonitoringRule#baseline_user_locations}
  */
  readonly baselineUserLocations?: boolean | cdktf.IResolvable;
}

export function securityMonitoringRuleOptionsImpossibleTravelOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference | SecurityMonitoringRuleOptionsImpossibleTravelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_user_locations: cdktf.booleanToTerraform(struct!.baselineUserLocations),
  }
}


export function securityMonitoringRuleOptionsImpossibleTravelOptionsToHclTerraform(struct?: SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference | SecurityMonitoringRuleOptionsImpossibleTravelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline_user_locations: {
      value: cdktf.booleanToHclTerraform(struct!.baselineUserLocations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityMonitoringRuleOptionsImpossibleTravelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineUserLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineUserLocations = this._baselineUserLocations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsImpossibleTravelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineUserLocations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineUserLocations = value.baselineUserLocations;
    }
  }

  // baseline_user_locations - computed: false, optional: true, required: false
  private _baselineUserLocations?: boolean | cdktf.IResolvable; 
  public get baselineUserLocations() {
    return this.getBooleanAttribute('baseline_user_locations');
  }
  public set baselineUserLocations(value: boolean | cdktf.IResolvable) {
    this._baselineUserLocations = value;
  }
  public resetBaselineUserLocations() {
    this._baselineUserLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineUserLocationsInput() {
    return this._baselineUserLocations;
  }
}
export interface SecurityMonitoringRuleOptionsNewValueOptions {
  /**
  * The duration in days after which a learned value is forgotten. Valid values are `1`, `2`, `7`, `14`, `21`, `28`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#forget_after SecurityMonitoringRule#forget_after}
  */
  readonly forgetAfter: number;
  /**
  * The duration in days during which values are learned, and after which signals will be generated for values that weren't learned. If set to 0, a signal will be generated for all new values after the first value is learned. Valid values are `0`, `1`, `7`. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#learning_duration SecurityMonitoringRule#learning_duration}
  */
  readonly learningDuration?: number;
  /**
  * The learning method used to determine when signals should be generated for values that weren't learned. Valid values are `duration`, `threshold`. Defaults to `"duration"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#learning_method SecurityMonitoringRule#learning_method}
  */
  readonly learningMethod?: string;
  /**
  * A number of occurrences after which signals are generated for values that weren't learned. Valid values are `0`, `1`. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#learning_threshold SecurityMonitoringRule#learning_threshold}
  */
  readonly learningThreshold?: number;
}

export function securityMonitoringRuleOptionsNewValueOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsNewValueOptionsOutputReference | SecurityMonitoringRuleOptionsNewValueOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forget_after: cdktf.numberToTerraform(struct!.forgetAfter),
    learning_duration: cdktf.numberToTerraform(struct!.learningDuration),
    learning_method: cdktf.stringToTerraform(struct!.learningMethod),
    learning_threshold: cdktf.numberToTerraform(struct!.learningThreshold),
  }
}


export function securityMonitoringRuleOptionsNewValueOptionsToHclTerraform(struct?: SecurityMonitoringRuleOptionsNewValueOptionsOutputReference | SecurityMonitoringRuleOptionsNewValueOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forget_after: {
      value: cdktf.numberToHclTerraform(struct!.forgetAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    learning_duration: {
      value: cdktf.numberToHclTerraform(struct!.learningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    learning_method: {
      value: cdktf.stringToHclTerraform(struct!.learningMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learning_threshold: {
      value: cdktf.numberToHclTerraform(struct!.learningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleOptionsNewValueOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityMonitoringRuleOptionsNewValueOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forgetAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.forgetAfter = this._forgetAfter;
    }
    if (this._learningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningDuration = this._learningDuration;
    }
    if (this._learningMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningMethod = this._learningMethod;
    }
    if (this._learningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningThreshold = this._learningThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsNewValueOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forgetAfter = undefined;
      this._learningDuration = undefined;
      this._learningMethod = undefined;
      this._learningThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forgetAfter = value.forgetAfter;
      this._learningDuration = value.learningDuration;
      this._learningMethod = value.learningMethod;
      this._learningThreshold = value.learningThreshold;
    }
  }

  // forget_after - computed: false, optional: false, required: true
  private _forgetAfter?: number; 
  public get forgetAfter() {
    return this.getNumberAttribute('forget_after');
  }
  public set forgetAfter(value: number) {
    this._forgetAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forgetAfterInput() {
    return this._forgetAfter;
  }

  // learning_duration - computed: false, optional: true, required: false
  private _learningDuration?: number; 
  public get learningDuration() {
    return this.getNumberAttribute('learning_duration');
  }
  public set learningDuration(value: number) {
    this._learningDuration = value;
  }
  public resetLearningDuration() {
    this._learningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningDurationInput() {
    return this._learningDuration;
  }

  // learning_method - computed: false, optional: true, required: false
  private _learningMethod?: string; 
  public get learningMethod() {
    return this.getStringAttribute('learning_method');
  }
  public set learningMethod(value: string) {
    this._learningMethod = value;
  }
  public resetLearningMethod() {
    this._learningMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningMethodInput() {
    return this._learningMethod;
  }

  // learning_threshold - computed: false, optional: true, required: false
  private _learningThreshold?: number; 
  public get learningThreshold() {
    return this.getNumberAttribute('learning_threshold');
  }
  public set learningThreshold(value: number) {
    this._learningThreshold = value;
  }
  public resetLearningThreshold() {
    this._learningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningThresholdInput() {
    return this._learningThreshold;
  }
}
export interface SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery {
  /**
  * Fields to group by. If empty, each log triggers a signal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * Query to filter logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}
  */
  readonly query: string;
}

export function securityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryToTerraform(struct?: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByFields),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function securityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryToHclTerraform(struct?: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_by_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupByFields = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupByFields = value.groupByFields;
      this._query = value.query;
    }
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference {
    return new SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleOptionsThirdPartyRuleOptions {
  /**
  * Notification targets for the default rule case, when none of the third-party cases match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#default_notifications SecurityMonitoringRule#default_notifications}
  */
  readonly defaultNotifications?: string[];
  /**
  * Severity of the default rule case, when none of the third-party cases match. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#default_status SecurityMonitoringRule#default_status}
  */
  readonly defaultStatus: string;
  /**
  * A template for the signal title; if omitted, the title is generated based on the case name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#signal_title_template SecurityMonitoringRule#signal_title_template}
  */
  readonly signalTitleTemplate?: string;
  /**
  * root_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#root_query SecurityMonitoringRule#root_query}
  */
  readonly rootQuery: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery[] | cdktf.IResolvable;
}

export function securityMonitoringRuleOptionsThirdPartyRuleOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference | SecurityMonitoringRuleOptionsThirdPartyRuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultNotifications),
    default_status: cdktf.stringToTerraform(struct!.defaultStatus),
    signal_title_template: cdktf.stringToTerraform(struct!.signalTitleTemplate),
    root_query: cdktf.listMapper(securityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryToTerraform, true)(struct!.rootQuery),
  }
}


export function securityMonitoringRuleOptionsThirdPartyRuleOptionsToHclTerraform(struct?: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference | SecurityMonitoringRuleOptionsThirdPartyRuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_notifications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultNotifications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_status: {
      value: cdktf.stringToHclTerraform(struct!.defaultStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal_title_template: {
      value: cdktf.stringToHclTerraform(struct!.signalTitleTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_query: {
      value: cdktf.listMapperHcl(securityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryToHclTerraform, true)(struct!.rootQuery),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityMonitoringRuleOptionsThirdPartyRuleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultNotifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNotifications = this._defaultNotifications;
    }
    if (this._defaultStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStatus = this._defaultStatus;
    }
    if (this._signalTitleTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalTitleTemplate = this._signalTitleTemplate;
    }
    if (this._rootQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootQuery = this._rootQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsThirdPartyRuleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultNotifications = undefined;
      this._defaultStatus = undefined;
      this._signalTitleTemplate = undefined;
      this._rootQuery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultNotifications = value.defaultNotifications;
      this._defaultStatus = value.defaultStatus;
      this._signalTitleTemplate = value.signalTitleTemplate;
      this._rootQuery.internalValue = value.rootQuery;
    }
  }

  // default_notifications - computed: false, optional: true, required: false
  private _defaultNotifications?: string[]; 
  public get defaultNotifications() {
    return this.getListAttribute('default_notifications');
  }
  public set defaultNotifications(value: string[]) {
    this._defaultNotifications = value;
  }
  public resetDefaultNotifications() {
    this._defaultNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNotificationsInput() {
    return this._defaultNotifications;
  }

  // default_status - computed: false, optional: false, required: true
  private _defaultStatus?: string; 
  public get defaultStatus() {
    return this.getStringAttribute('default_status');
  }
  public set defaultStatus(value: string) {
    this._defaultStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStatusInput() {
    return this._defaultStatus;
  }

  // signal_title_template - computed: false, optional: true, required: false
  private _signalTitleTemplate?: string; 
  public get signalTitleTemplate() {
    return this.getStringAttribute('signal_title_template');
  }
  public set signalTitleTemplate(value: string) {
    this._signalTitleTemplate = value;
  }
  public resetSignalTitleTemplate() {
    this._signalTitleTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalTitleTemplateInput() {
    return this._signalTitleTemplate;
  }

  // root_query - computed: false, optional: false, required: true
  private _rootQuery = new SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList(this, "root_query", false);
  public get rootQuery() {
    return this._rootQuery;
  }
  public putRootQuery(value: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery[] | cdktf.IResolvable) {
    this._rootQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootQueryInput() {
    return this._rootQuery.internalValue;
  }
}
export interface SecurityMonitoringRuleOptions {
  /**
  * If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#decrease_criticality_based_on_env SecurityMonitoringRule#decrease_criticality_based_on_env}
  */
  readonly decreaseCriticalityBasedOnEnv?: boolean | cdktf.IResolvable;
  /**
  * The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`, `anomaly_threshold`. Defaults to `"threshold"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#detection_method SecurityMonitoringRule#detection_method}
  */
  readonly detectionMethod?: string;
  /**
  * A time window is specified to match when at least one of the cases matches true. This is a sliding window and evaluates in real time. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}
  */
  readonly evaluationWindow?: number;
  /**
  * Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window (in seconds). Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#keep_alive SecurityMonitoringRule#keep_alive}
  */
  readonly keepAlive?: number;
  /**
  * A signal will “close” regardless of the query being matched once the time exceeds the maximum duration (in seconds). This time is calculated from the first seen timestamp. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#max_signal_duration SecurityMonitoringRule#max_signal_duration}
  */
  readonly maxSignalDuration?: number;
  /**
  * impossible_travel_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#impossible_travel_options SecurityMonitoringRule#impossible_travel_options}
  */
  readonly impossibleTravelOptions?: SecurityMonitoringRuleOptionsImpossibleTravelOptions;
  /**
  * new_value_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#new_value_options SecurityMonitoringRule#new_value_options}
  */
  readonly newValueOptions?: SecurityMonitoringRuleOptionsNewValueOptions;
  /**
  * third_party_rule_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#third_party_rule_options SecurityMonitoringRule#third_party_rule_options}
  */
  readonly thirdPartyRuleOptions?: SecurityMonitoringRuleOptionsThirdPartyRuleOptions;
}

export function securityMonitoringRuleOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsOutputReference | SecurityMonitoringRuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decrease_criticality_based_on_env: cdktf.booleanToTerraform(struct!.decreaseCriticalityBasedOnEnv),
    detection_method: cdktf.stringToTerraform(struct!.detectionMethod),
    evaluation_window: cdktf.numberToTerraform(struct!.evaluationWindow),
    keep_alive: cdktf.numberToTerraform(struct!.keepAlive),
    max_signal_duration: cdktf.numberToTerraform(struct!.maxSignalDuration),
    impossible_travel_options: securityMonitoringRuleOptionsImpossibleTravelOptionsToTerraform(struct!.impossibleTravelOptions),
    new_value_options: securityMonitoringRuleOptionsNewValueOptionsToTerraform(struct!.newValueOptions),
    third_party_rule_options: securityMonitoringRuleOptionsThirdPartyRuleOptionsToTerraform(struct!.thirdPartyRuleOptions),
  }
}


export function securityMonitoringRuleOptionsToHclTerraform(struct?: SecurityMonitoringRuleOptionsOutputReference | SecurityMonitoringRuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decrease_criticality_based_on_env: {
      value: cdktf.booleanToHclTerraform(struct!.decreaseCriticalityBasedOnEnv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detection_method: {
      value: cdktf.stringToHclTerraform(struct!.detectionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_window: {
      value: cdktf.numberToHclTerraform(struct!.evaluationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_alive: {
      value: cdktf.numberToHclTerraform(struct!.keepAlive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_signal_duration: {
      value: cdktf.numberToHclTerraform(struct!.maxSignalDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    impossible_travel_options: {
      value: securityMonitoringRuleOptionsImpossibleTravelOptionsToHclTerraform(struct!.impossibleTravelOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleOptionsImpossibleTravelOptionsList",
    },
    new_value_options: {
      value: securityMonitoringRuleOptionsNewValueOptionsToHclTerraform(struct!.newValueOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleOptionsNewValueOptionsList",
    },
    third_party_rule_options: {
      value: securityMonitoringRuleOptionsThirdPartyRuleOptionsToHclTerraform(struct!.thirdPartyRuleOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityMonitoringRuleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decreaseCriticalityBasedOnEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.decreaseCriticalityBasedOnEnv = this._decreaseCriticalityBasedOnEnv;
    }
    if (this._detectionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMethod = this._detectionMethod;
    }
    if (this._evaluationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationWindow = this._evaluationWindow;
    }
    if (this._keepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlive = this._keepAlive;
    }
    if (this._maxSignalDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSignalDuration = this._maxSignalDuration;
    }
    if (this._impossibleTravelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.impossibleTravelOptions = this._impossibleTravelOptions?.internalValue;
    }
    if (this._newValueOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newValueOptions = this._newValueOptions?.internalValue;
    }
    if (this._thirdPartyRuleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyRuleOptions = this._thirdPartyRuleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decreaseCriticalityBasedOnEnv = undefined;
      this._detectionMethod = undefined;
      this._evaluationWindow = undefined;
      this._keepAlive = undefined;
      this._maxSignalDuration = undefined;
      this._impossibleTravelOptions.internalValue = undefined;
      this._newValueOptions.internalValue = undefined;
      this._thirdPartyRuleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decreaseCriticalityBasedOnEnv = value.decreaseCriticalityBasedOnEnv;
      this._detectionMethod = value.detectionMethod;
      this._evaluationWindow = value.evaluationWindow;
      this._keepAlive = value.keepAlive;
      this._maxSignalDuration = value.maxSignalDuration;
      this._impossibleTravelOptions.internalValue = value.impossibleTravelOptions;
      this._newValueOptions.internalValue = value.newValueOptions;
      this._thirdPartyRuleOptions.internalValue = value.thirdPartyRuleOptions;
    }
  }

  // decrease_criticality_based_on_env - computed: false, optional: true, required: false
  private _decreaseCriticalityBasedOnEnv?: boolean | cdktf.IResolvable; 
  public get decreaseCriticalityBasedOnEnv() {
    return this.getBooleanAttribute('decrease_criticality_based_on_env');
  }
  public set decreaseCriticalityBasedOnEnv(value: boolean | cdktf.IResolvable) {
    this._decreaseCriticalityBasedOnEnv = value;
  }
  public resetDecreaseCriticalityBasedOnEnv() {
    this._decreaseCriticalityBasedOnEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decreaseCriticalityBasedOnEnvInput() {
    return this._decreaseCriticalityBasedOnEnv;
  }

  // detection_method - computed: false, optional: true, required: false
  private _detectionMethod?: string; 
  public get detectionMethod() {
    return this.getStringAttribute('detection_method');
  }
  public set detectionMethod(value: string) {
    this._detectionMethod = value;
  }
  public resetDetectionMethod() {
    this._detectionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionMethodInput() {
    return this._detectionMethod;
  }

  // evaluation_window - computed: false, optional: true, required: false
  private _evaluationWindow?: number; 
  public get evaluationWindow() {
    return this.getNumberAttribute('evaluation_window');
  }
  public set evaluationWindow(value: number) {
    this._evaluationWindow = value;
  }
  public resetEvaluationWindow() {
    this._evaluationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationWindowInput() {
    return this._evaluationWindow;
  }

  // keep_alive - computed: false, optional: true, required: false
  private _keepAlive?: number; 
  public get keepAlive() {
    return this.getNumberAttribute('keep_alive');
  }
  public set keepAlive(value: number) {
    this._keepAlive = value;
  }
  public resetKeepAlive() {
    this._keepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveInput() {
    return this._keepAlive;
  }

  // max_signal_duration - computed: false, optional: true, required: false
  private _maxSignalDuration?: number; 
  public get maxSignalDuration() {
    return this.getNumberAttribute('max_signal_duration');
  }
  public set maxSignalDuration(value: number) {
    this._maxSignalDuration = value;
  }
  public resetMaxSignalDuration() {
    this._maxSignalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSignalDurationInput() {
    return this._maxSignalDuration;
  }

  // impossible_travel_options - computed: false, optional: true, required: false
  private _impossibleTravelOptions = new SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference(this, "impossible_travel_options");
  public get impossibleTravelOptions() {
    return this._impossibleTravelOptions;
  }
  public putImpossibleTravelOptions(value: SecurityMonitoringRuleOptionsImpossibleTravelOptions) {
    this._impossibleTravelOptions.internalValue = value;
  }
  public resetImpossibleTravelOptions() {
    this._impossibleTravelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impossibleTravelOptionsInput() {
    return this._impossibleTravelOptions.internalValue;
  }

  // new_value_options - computed: false, optional: true, required: false
  private _newValueOptions = new SecurityMonitoringRuleOptionsNewValueOptionsOutputReference(this, "new_value_options");
  public get newValueOptions() {
    return this._newValueOptions;
  }
  public putNewValueOptions(value: SecurityMonitoringRuleOptionsNewValueOptions) {
    this._newValueOptions.internalValue = value;
  }
  public resetNewValueOptions() {
    this._newValueOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newValueOptionsInput() {
    return this._newValueOptions.internalValue;
  }

  // third_party_rule_options - computed: false, optional: true, required: false
  private _thirdPartyRuleOptions = new SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference(this, "third_party_rule_options");
  public get thirdPartyRuleOptions() {
    return this._thirdPartyRuleOptions;
  }
  public putThirdPartyRuleOptions(value: SecurityMonitoringRuleOptionsThirdPartyRuleOptions) {
    this._thirdPartyRuleOptions.internalValue = value;
  }
  public resetThirdPartyRuleOptions() {
    this._thirdPartyRuleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyRuleOptionsInput() {
    return this._thirdPartyRuleOptions.internalValue;
  }
}
export interface SecurityMonitoringRuleQueryAgentRule {
  /**
  * **Deprecated**. It won't be applied anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#agent_rule_id SecurityMonitoringRule#agent_rule_id}
  */
  readonly agentRuleId: string;
  /**
  * **Deprecated**. It won't be applied anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#expression SecurityMonitoringRule#expression}
  */
  readonly expression: string;
}

export function securityMonitoringRuleQueryAgentRuleToTerraform(struct?: SecurityMonitoringRuleQueryAgentRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_rule_id: cdktf.stringToTerraform(struct!.agentRuleId),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function securityMonitoringRuleQueryAgentRuleToHclTerraform(struct?: SecurityMonitoringRuleQueryAgentRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.agentRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleQueryAgentRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleQueryAgentRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentRuleId = this._agentRuleId;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleQueryAgentRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentRuleId = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentRuleId = value.agentRuleId;
      this._expression = value.expression;
    }
  }

  // agent_rule_id - computed: false, optional: false, required: true
  private _agentRuleId?: string; 
  public get agentRuleId() {
    return this.getStringAttribute('agent_rule_id');
  }
  public set agentRuleId(value: string) {
    this._agentRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentRuleIdInput() {
    return this._agentRuleId;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class SecurityMonitoringRuleQueryAgentRuleList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringRuleQueryAgentRule[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringRuleQueryAgentRuleOutputReference {
    return new SecurityMonitoringRuleQueryAgentRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleQuery {
  /**
  * The aggregation type. For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`. Defaults to `"count"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Field for which the cardinality is measured. Sent as an array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#distinct_fields SecurityMonitoringRule#distinct_fields}
  */
  readonly distinctFields?: string[];
  /**
  * Fields to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations. **Deprecated.** Configure `metrics` instead. This attribute will be removed in the next major version of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#metric SecurityMonitoringRule#metric}
  */
  readonly metric?: string;
  /**
  * Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations. The `sum`, `max`, and `geo_data` aggregations only accept one value in this list, whereas the `new_value` aggregation accepts up to five values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#metrics SecurityMonitoringRule#metrics}
  */
  readonly metrics?: string[];
  /**
  * Name of the query. Not compatible with `new_value` aggregations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Query to run on logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}
  */
  readonly query: string;
  /**
  * agent_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#agent_rule SecurityMonitoringRule#agent_rule}
  */
  readonly agentRule?: SecurityMonitoringRuleQueryAgentRule[] | cdktf.IResolvable;
}

export function securityMonitoringRuleQueryToTerraform(struct?: SecurityMonitoringRuleQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    distinct_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distinctFields),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByFields),
    metric: cdktf.stringToTerraform(struct!.metric),
    metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metrics),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
    agent_rule: cdktf.listMapper(securityMonitoringRuleQueryAgentRuleToTerraform, true)(struct!.agentRule),
  }
}


export function securityMonitoringRuleQueryToHclTerraform(struct?: SecurityMonitoringRuleQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distinct_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distinctFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_by_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    agent_rule: {
      value: cdktf.listMapperHcl(securityMonitoringRuleQueryAgentRuleToHclTerraform, true)(struct!.agentRule),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringRuleQueryAgentRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._distinctFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinctFields = this._distinctFields;
    }
    if (this._groupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._agentRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentRule = this._agentRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._distinctFields = undefined;
      this._groupByFields = undefined;
      this._metric = undefined;
      this._metrics = undefined;
      this._name = undefined;
      this._query = undefined;
      this._agentRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._distinctFields = value.distinctFields;
      this._groupByFields = value.groupByFields;
      this._metric = value.metric;
      this._metrics = value.metrics;
      this._name = value.name;
      this._query = value.query;
      this._agentRule.internalValue = value.agentRule;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // distinct_fields - computed: false, optional: true, required: false
  private _distinctFields?: string[]; 
  public get distinctFields() {
    return this.getListAttribute('distinct_fields');
  }
  public set distinctFields(value: string[]) {
    this._distinctFields = value;
  }
  public resetDistinctFields() {
    this._distinctFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinctFieldsInput() {
    return this._distinctFields;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metrics - computed: true, optional: true, required: false
  private _metrics?: string[]; 
  public get metrics() {
    return this.getListAttribute('metrics');
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // agent_rule - computed: false, optional: true, required: false
  private _agentRule = new SecurityMonitoringRuleQueryAgentRuleList(this, "agent_rule", false);
  public get agentRule() {
    return this._agentRule;
  }
  public putAgentRule(value: SecurityMonitoringRuleQueryAgentRule[] | cdktf.IResolvable) {
    this._agentRule.internalValue = value;
  }
  public resetAgentRule() {
    this._agentRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentRuleInput() {
    return this._agentRule.internalValue;
  }
}

export class SecurityMonitoringRuleQueryList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringRuleQuery[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringRuleQueryOutputReference {
    return new SecurityMonitoringRuleQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleReferenceTables {
  /**
  * Whether to include or exclude logs that match the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#check_presence SecurityMonitoringRule#check_presence}
  */
  readonly checkPresence: boolean | cdktf.IResolvable;
  /**
  * The name of the column in the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#column_name SecurityMonitoringRule#column_name}
  */
  readonly columnName: string;
  /**
  * The field in the log that should be matched against the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#log_field_path SecurityMonitoringRule#log_field_path}
  */
  readonly logFieldPath: string;
  /**
  * The name of the query to filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#rule_query_name SecurityMonitoringRule#rule_query_name}
  */
  readonly ruleQueryName: string;
  /**
  * The name of the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#table_name SecurityMonitoringRule#table_name}
  */
  readonly tableName: string;
}

export function securityMonitoringRuleReferenceTablesToTerraform(struct?: SecurityMonitoringRuleReferenceTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_presence: cdktf.booleanToTerraform(struct!.checkPresence),
    column_name: cdktf.stringToTerraform(struct!.columnName),
    log_field_path: cdktf.stringToTerraform(struct!.logFieldPath),
    rule_query_name: cdktf.stringToTerraform(struct!.ruleQueryName),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function securityMonitoringRuleReferenceTablesToHclTerraform(struct?: SecurityMonitoringRuleReferenceTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_presence: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_field_path: {
      value: cdktf.stringToHclTerraform(struct!.logFieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_query_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleQueryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleReferenceTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleReferenceTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkPresence !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresence = this._checkPresence;
    }
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._logFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFieldPath = this._logFieldPath;
    }
    if (this._ruleQueryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleQueryName = this._ruleQueryName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleReferenceTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkPresence = undefined;
      this._columnName = undefined;
      this._logFieldPath = undefined;
      this._ruleQueryName = undefined;
      this._tableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkPresence = value.checkPresence;
      this._columnName = value.columnName;
      this._logFieldPath = value.logFieldPath;
      this._ruleQueryName = value.ruleQueryName;
      this._tableName = value.tableName;
    }
  }

  // check_presence - computed: false, optional: false, required: true
  private _checkPresence?: boolean | cdktf.IResolvable; 
  public get checkPresence() {
    return this.getBooleanAttribute('check_presence');
  }
  public set checkPresence(value: boolean | cdktf.IResolvable) {
    this._checkPresence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresenceInput() {
    return this._checkPresence;
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // log_field_path - computed: false, optional: false, required: true
  private _logFieldPath?: string; 
  public get logFieldPath() {
    return this.getStringAttribute('log_field_path');
  }
  public set logFieldPath(value: string) {
    this._logFieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldPathInput() {
    return this._logFieldPath;
  }

  // rule_query_name - computed: false, optional: false, required: true
  private _ruleQueryName?: string; 
  public get ruleQueryName() {
    return this.getStringAttribute('rule_query_name');
  }
  public set ruleQueryName(value: string) {
    this._ruleQueryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleQueryNameInput() {
    return this._ruleQueryName;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}

export class SecurityMonitoringRuleReferenceTablesList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringRuleReferenceTables[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringRuleReferenceTablesOutputReference {
    return new SecurityMonitoringRuleReferenceTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleSignalQuery {
  /**
  * The aggregation type. For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`. Defaults to `"event_count"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Fields to correlate by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#correlated_by_fields SecurityMonitoringRule#correlated_by_fields}
  */
  readonly correlatedByFields?: string[];
  /**
  * Index of the rule query used to retrieve the correlated field. An empty string applies correlation on the non-projected per query attributes of the rule. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#correlated_query_index SecurityMonitoringRule#correlated_query_index}
  */
  readonly correlatedQueryIndex?: string;
  /**
  * Default Rule ID of the signal to correlate. This value is READ-ONLY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#default_rule_id SecurityMonitoringRule#default_rule_id}
  */
  readonly defaultRuleId?: string;
  /**
  * Name of the query. Not compatible with `new_value` aggregations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Rule ID of the signal to correlate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#rule_id SecurityMonitoringRule#rule_id}
  */
  readonly ruleId: string;
}

export function securityMonitoringRuleSignalQueryToTerraform(struct?: SecurityMonitoringRuleSignalQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    correlated_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.correlatedByFields),
    correlated_query_index: cdktf.stringToTerraform(struct!.correlatedQueryIndex),
    default_rule_id: cdktf.stringToTerraform(struct!.defaultRuleId),
    name: cdktf.stringToTerraform(struct!.name),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
  }
}


export function securityMonitoringRuleSignalQueryToHclTerraform(struct?: SecurityMonitoringRuleSignalQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    correlated_by_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.correlatedByFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    correlated_query_index: {
      value: cdktf.stringToHclTerraform(struct!.correlatedQueryIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleSignalQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleSignalQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._correlatedByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlatedByFields = this._correlatedByFields;
    }
    if (this._correlatedQueryIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlatedQueryIndex = this._correlatedQueryIndex;
    }
    if (this._defaultRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRuleId = this._defaultRuleId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleSignalQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._correlatedByFields = undefined;
      this._correlatedQueryIndex = undefined;
      this._defaultRuleId = undefined;
      this._name = undefined;
      this._ruleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._correlatedByFields = value.correlatedByFields;
      this._correlatedQueryIndex = value.correlatedQueryIndex;
      this._defaultRuleId = value.defaultRuleId;
      this._name = value.name;
      this._ruleId = value.ruleId;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // correlated_by_fields - computed: false, optional: true, required: false
  private _correlatedByFields?: string[]; 
  public get correlatedByFields() {
    return this.getListAttribute('correlated_by_fields');
  }
  public set correlatedByFields(value: string[]) {
    this._correlatedByFields = value;
  }
  public resetCorrelatedByFields() {
    this._correlatedByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlatedByFieldsInput() {
    return this._correlatedByFields;
  }

  // correlated_query_index - computed: false, optional: true, required: false
  private _correlatedQueryIndex?: string; 
  public get correlatedQueryIndex() {
    return this.getStringAttribute('correlated_query_index');
  }
  public set correlatedQueryIndex(value: string) {
    this._correlatedQueryIndex = value;
  }
  public resetCorrelatedQueryIndex() {
    this._correlatedQueryIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlatedQueryIndexInput() {
    return this._correlatedQueryIndex;
  }

  // default_rule_id - computed: false, optional: true, required: false
  private _defaultRuleId?: string; 
  public get defaultRuleId() {
    return this.getStringAttribute('default_rule_id');
  }
  public set defaultRuleId(value: string) {
    this._defaultRuleId = value;
  }
  public resetDefaultRuleId() {
    this._defaultRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRuleIdInput() {
    return this._defaultRuleId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }
}

export class SecurityMonitoringRuleSignalQueryList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringRuleSignalQuery[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringRuleSignalQueryOutputReference {
    return new SecurityMonitoringRuleSignalQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringRuleThirdPartyCase {
  /**
  * Name of the case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Notification targets for each rule case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}
  */
  readonly notifications?: string[];
  /**
  * A query to associate a third-party event to this case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}
  */
  readonly query?: string;
  /**
  * Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}
  */
  readonly status: string;
}

export function securityMonitoringRuleThirdPartyCaseToTerraform(struct?: SecurityMonitoringRuleThirdPartyCase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifications),
    query: cdktf.stringToTerraform(struct!.query),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function securityMonitoringRuleThirdPartyCaseToHclTerraform(struct?: SecurityMonitoringRuleThirdPartyCase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notifications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringRuleThirdPartyCaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringRuleThirdPartyCase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleThirdPartyCase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._notifications = undefined;
      this._query = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._notifications = value.notifications;
      this._query = value.query;
      this._status = value.status;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: string[]; 
  public get notifications() {
    return this.getListAttribute('notifications');
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
  }

  // query - computed: false, optional: true, required: false
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SecurityMonitoringRuleThirdPartyCaseList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringRuleThirdPartyCase[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringRuleThirdPartyCaseOutputReference {
    return new SecurityMonitoringRuleThirdPartyCaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule datadog_security_monitoring_rule}
*/
export class SecurityMonitoringRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityMonitoringRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityMonitoringRule to import
  * @param importFromId The id of the existing SecurityMonitoringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityMonitoringRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_monitoring_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/security_monitoring_rule datadog_security_monitoring_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityMonitoringRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityMonitoringRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.56.0',
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
    this._enabled = config.enabled;
    this._hasExtendedTitle = config.hasExtendedTitle;
    this._id = config.id;
    this._message = config.message;
    this._name = config.name;
    this._tags = config.tags;
    this._type = config.type;
    this._validate = config.validate;
    this._case.internalValue = config.case;
    this._filter.internalValue = config.filter;
    this._options.internalValue = config.options;
    this._query.internalValue = config.query;
    this._referenceTables.internalValue = config.referenceTables;
    this._signalQuery.internalValue = config.signalQuery;
    this._thirdPartyCase.internalValue = config.thirdPartyCase;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // has_extended_title - computed: false, optional: true, required: false
  private _hasExtendedTitle?: boolean | cdktf.IResolvable; 
  public get hasExtendedTitle() {
    return this.getBooleanAttribute('has_extended_title');
  }
  public set hasExtendedTitle(value: boolean | cdktf.IResolvable) {
    this._hasExtendedTitle = value;
  }
  public resetHasExtendedTitle() {
    this._hasExtendedTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasExtendedTitleInput() {
    return this._hasExtendedTitle;
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

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktf.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // case - computed: false, optional: true, required: false
  private _case = new SecurityMonitoringRuleCaseList(this, "case", false);
  public get case() {
    return this._case;
  }
  public putCase(value: SecurityMonitoringRuleCase[] | cdktf.IResolvable) {
    this._case.internalValue = value;
  }
  public resetCase() {
    this._case.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInput() {
    return this._case.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new SecurityMonitoringRuleFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SecurityMonitoringRuleFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new SecurityMonitoringRuleOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: SecurityMonitoringRuleOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new SecurityMonitoringRuleQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: SecurityMonitoringRuleQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // reference_tables - computed: false, optional: true, required: false
  private _referenceTables = new SecurityMonitoringRuleReferenceTablesList(this, "reference_tables", false);
  public get referenceTables() {
    return this._referenceTables;
  }
  public putReferenceTables(value: SecurityMonitoringRuleReferenceTables[] | cdktf.IResolvable) {
    this._referenceTables.internalValue = value;
  }
  public resetReferenceTables() {
    this._referenceTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTablesInput() {
    return this._referenceTables.internalValue;
  }

  // signal_query - computed: false, optional: true, required: false
  private _signalQuery = new SecurityMonitoringRuleSignalQueryList(this, "signal_query", false);
  public get signalQuery() {
    return this._signalQuery;
  }
  public putSignalQuery(value: SecurityMonitoringRuleSignalQuery[] | cdktf.IResolvable) {
    this._signalQuery.internalValue = value;
  }
  public resetSignalQuery() {
    this._signalQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalQueryInput() {
    return this._signalQuery.internalValue;
  }

  // third_party_case - computed: false, optional: true, required: false
  private _thirdPartyCase = new SecurityMonitoringRuleThirdPartyCaseList(this, "third_party_case", false);
  public get thirdPartyCase() {
    return this._thirdPartyCase;
  }
  public putThirdPartyCase(value: SecurityMonitoringRuleThirdPartyCase[] | cdktf.IResolvable) {
    this._thirdPartyCase.internalValue = value;
  }
  public resetThirdPartyCase() {
    this._thirdPartyCase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyCaseInput() {
    return this._thirdPartyCase.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      has_extended_title: cdktf.booleanToTerraform(this._hasExtendedTitle),
      id: cdktf.stringToTerraform(this._id),
      message: cdktf.stringToTerraform(this._message),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      validate: cdktf.booleanToTerraform(this._validate),
      case: cdktf.listMapper(securityMonitoringRuleCaseToTerraform, true)(this._case.internalValue),
      filter: cdktf.listMapper(securityMonitoringRuleFilterToTerraform, true)(this._filter.internalValue),
      options: securityMonitoringRuleOptionsToTerraform(this._options.internalValue),
      query: cdktf.listMapper(securityMonitoringRuleQueryToTerraform, true)(this._query.internalValue),
      reference_tables: cdktf.listMapper(securityMonitoringRuleReferenceTablesToTerraform, true)(this._referenceTables.internalValue),
      signal_query: cdktf.listMapper(securityMonitoringRuleSignalQueryToTerraform, true)(this._signalQuery.internalValue),
      third_party_case: cdktf.listMapper(securityMonitoringRuleThirdPartyCaseToTerraform, true)(this._thirdPartyCase.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_extended_title: {
        value: cdktf.booleanToHclTerraform(this._hasExtendedTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message: {
        value: cdktf.stringToHclTerraform(this._message),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate: {
        value: cdktf.booleanToHclTerraform(this._validate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      case: {
        value: cdktf.listMapperHcl(securityMonitoringRuleCaseToHclTerraform, true)(this._case.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleCaseList",
      },
      filter: {
        value: cdktf.listMapperHcl(securityMonitoringRuleFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleFilterList",
      },
      options: {
        value: securityMonitoringRuleOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleOptionsList",
      },
      query: {
        value: cdktf.listMapperHcl(securityMonitoringRuleQueryToHclTerraform, true)(this._query.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleQueryList",
      },
      reference_tables: {
        value: cdktf.listMapperHcl(securityMonitoringRuleReferenceTablesToHclTerraform, true)(this._referenceTables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleReferenceTablesList",
      },
      signal_query: {
        value: cdktf.listMapperHcl(securityMonitoringRuleSignalQueryToHclTerraform, true)(this._signalQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleSignalQueryList",
      },
      third_party_case: {
        value: cdktf.listMapperHcl(securityMonitoringRuleThirdPartyCaseToHclTerraform, true)(this._thirdPartyCase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringRuleThirdPartyCaseList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
