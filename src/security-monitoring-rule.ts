// https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityMonitoringRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the rule is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#enabled SecurityMonitoringRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the notifications include the triggering group-by values in their title.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#has_extended_title SecurityMonitoringRule#has_extended_title}
  */
  readonly hasExtendedTitle?: boolean | cdktf.IResolvable;
  /**
  * Message for generated signals.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#message SecurityMonitoringRule#message}
  */
  readonly message: string;
  /**
  * The name of the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name: string;
  /**
  * Tags for generated signals.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#tags SecurityMonitoringRule#tags}
  */
  readonly tags?: string[];
  /**
  * The rule type. Valid values are `log_detection`, `infrastructure_configuration`, `workload_security`, `cloud_configuration`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#type SecurityMonitoringRule#type}
  */
  readonly type?: string;
  /**
  * case block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#case SecurityMonitoringRule#case}
  */
  readonly case: SecurityMonitoringRuleCase[] | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#filter SecurityMonitoringRule#filter}
  */
  readonly filter?: SecurityMonitoringRuleFilter[] | cdktf.IResolvable;
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#options SecurityMonitoringRule#options}
  */
  readonly options?: SecurityMonitoringRuleOptions;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#query SecurityMonitoringRule#query}
  */
  readonly query: SecurityMonitoringRuleQuery[] | cdktf.IResolvable;
}
export interface SecurityMonitoringRuleCase {
  /**
  * A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated based on the event counts in the previously defined queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#condition SecurityMonitoringRule#condition}
  */
  readonly condition?: string;
  /**
  * Name of the case.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Notification targets for each rule case.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}
  */
  readonly notifications?: string[];
  /**
  * Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#status SecurityMonitoringRule#status}
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
    notifications: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notifications),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export interface SecurityMonitoringRuleFilter {
  /**
  * The type of filtering action. Valid values are `require`, `suppress`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#action SecurityMonitoringRule#action}
  */
  readonly action: string;
  /**
  * Query for selecting logs to apply the filtering action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#query SecurityMonitoringRule#query}
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

export interface SecurityMonitoringRuleOptionsImpossibleTravelOptions {
  /**
  * If true, signals are suppressed for the first 24 hours. In that time, Datadog learns the user's regular access locations. This can be helpful to reduce noise and infer VPN usage or credentialed API access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#baseline_user_locations SecurityMonitoringRule#baseline_user_locations}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#forget_after SecurityMonitoringRule#forget_after}
  */
  readonly forgetAfter: number;
  /**
  * The duration in days during which values are learned, and after which signals will be generated for values that weren't learned. If set to 0, a signal will be generated for all new values after the first value is learned. Valid values are `0`, `1`, `7`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#learning_duration SecurityMonitoringRule#learning_duration}
  */
  readonly learningDuration: number;
}

export function securityMonitoringRuleOptionsNewValueOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsNewValueOptionsOutputReference | SecurityMonitoringRuleOptionsNewValueOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forget_after: cdktf.numberToTerraform(struct!.forgetAfter),
    learning_duration: cdktf.numberToTerraform(struct!.learningDuration),
  }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptionsNewValueOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forgetAfter = undefined;
      this._learningDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forgetAfter = value.forgetAfter;
      this._learningDuration = value.learningDuration;
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

  // learning_duration - computed: false, optional: false, required: true
  private _learningDuration?: number; 
  public get learningDuration() {
    return this.getNumberAttribute('learning_duration');
  }
  public set learningDuration(value: number) {
    this._learningDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get learningDurationInput() {
    return this._learningDuration;
  }
}
export interface SecurityMonitoringRuleOptions {
  /**
  * The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#detection_method SecurityMonitoringRule#detection_method}
  */
  readonly detectionMethod?: string;
  /**
  * A time window is specified to match when at least one of the cases matches true. This is a sliding window and evaluates in real time. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}
  */
  readonly evaluationWindow?: number;
  /**
  * Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#keep_alive SecurityMonitoringRule#keep_alive}
  */
  readonly keepAlive: number;
  /**
  * A signal will “close” regardless of the query being matched once the time exceeds the maximum duration. This time is calculated from the first seen timestamp. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#max_signal_duration SecurityMonitoringRule#max_signal_duration}
  */
  readonly maxSignalDuration: number;
  /**
  * impossible_travel_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#impossible_travel_options SecurityMonitoringRule#impossible_travel_options}
  */
  readonly impossibleTravelOptions?: SecurityMonitoringRuleOptionsImpossibleTravelOptions;
  /**
  * new_value_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#new_value_options SecurityMonitoringRule#new_value_options}
  */
  readonly newValueOptions?: SecurityMonitoringRuleOptionsNewValueOptions;
}

export function securityMonitoringRuleOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsOutputReference | SecurityMonitoringRuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_method: cdktf.stringToTerraform(struct!.detectionMethod),
    evaluation_window: cdktf.numberToTerraform(struct!.evaluationWindow),
    keep_alive: cdktf.numberToTerraform(struct!.keepAlive),
    max_signal_duration: cdktf.numberToTerraform(struct!.maxSignalDuration),
    impossible_travel_options: securityMonitoringRuleOptionsImpossibleTravelOptionsToTerraform(struct!.impossibleTravelOptions),
    new_value_options: securityMonitoringRuleOptionsNewValueOptionsToTerraform(struct!.newValueOptions),
  }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringRuleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionMethod = undefined;
      this._evaluationWindow = undefined;
      this._keepAlive = undefined;
      this._maxSignalDuration = undefined;
      this._impossibleTravelOptions.internalValue = undefined;
      this._newValueOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionMethod = value.detectionMethod;
      this._evaluationWindow = value.evaluationWindow;
      this._keepAlive = value.keepAlive;
      this._maxSignalDuration = value.maxSignalDuration;
      this._impossibleTravelOptions.internalValue = value.impossibleTravelOptions;
      this._newValueOptions.internalValue = value.newValueOptions;
    }
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

  // keep_alive - computed: false, optional: false, required: true
  private _keepAlive?: number; 
  public get keepAlive() {
    return this.getNumberAttribute('keep_alive');
  }
  public set keepAlive(value: number) {
    this._keepAlive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveInput() {
    return this._keepAlive;
  }

  // max_signal_duration - computed: false, optional: false, required: true
  private _maxSignalDuration?: number; 
  public get maxSignalDuration() {
    return this.getNumberAttribute('max_signal_duration');
  }
  public set maxSignalDuration(value: number) {
    this._maxSignalDuration = value;
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
}
export interface SecurityMonitoringRuleQueryAgentRule {
  /**
  * **Deprecated**. It won't be applied anymore.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#agent_rule_id SecurityMonitoringRule#agent_rule_id}
  */
  readonly agentRuleId: string;
  /**
  * **Deprecated**. It won't be applied anymore.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#expression SecurityMonitoringRule#expression}
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

export interface SecurityMonitoringRuleQuery {
  /**
  * The aggregation type. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Field for which the cardinality is measured. Sent as an array.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#distinct_fields SecurityMonitoringRule#distinct_fields}
  */
  readonly distinctFields?: string[];
  /**
  * Fields to group by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The target field to aggregate over when using the sum or max aggregations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#metric SecurityMonitoringRule#metric}
  */
  readonly metric?: string;
  /**
  * Name of the query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Query to run on logs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#query SecurityMonitoringRule#query}
  */
  readonly query: string;
  /**
  * agent_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule#agent_rule SecurityMonitoringRule#agent_rule}
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
    distinct_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.distinctFields),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groupByFields),
    metric: cdktf.stringToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
    agent_rule: cdktf.listMapper(securityMonitoringRuleQueryAgentRuleToTerraform)(struct!.agentRule),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule datadog_security_monitoring_rule}
*/
export class SecurityMonitoringRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule datadog_security_monitoring_rule} Resource
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
        providerVersion: '3.11.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._hasExtendedTitle = config.hasExtendedTitle;
    this._message = config.message;
    this._name = config.name;
    this._tags = config.tags;
    this._type = config.type;
    this._case = config.case;
    this._filter = config.filter;
    this._options.internalValue = config.options;
    this._query = config.query;
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
  public get id() {
    return this.getStringAttribute('id');
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
    return this.getListAttribute('tags');
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

  // case - computed: false, optional: false, required: true
  private _case?: SecurityMonitoringRuleCase[] | cdktf.IResolvable; 
  public get case() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('case');
  }
  public set case(value: SecurityMonitoringRuleCase[] | cdktf.IResolvable) {
    this._case = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInput() {
    return this._case;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: SecurityMonitoringRuleFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter');
  }
  public set filter(value: SecurityMonitoringRuleFilter[] | cdktf.IResolvable) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // query - computed: false, optional: false, required: true
  private _query?: SecurityMonitoringRuleQuery[] | cdktf.IResolvable; 
  public get query() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query');
  }
  public set query(value: SecurityMonitoringRuleQuery[] | cdktf.IResolvable) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      has_extended_title: cdktf.booleanToTerraform(this._hasExtendedTitle),
      message: cdktf.stringToTerraform(this._message),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      case: cdktf.listMapper(securityMonitoringRuleCaseToTerraform)(this._case),
      filter: cdktf.listMapper(securityMonitoringRuleFilterToTerraform)(this._filter),
      options: securityMonitoringRuleOptionsToTerraform(this._options.internalValue),
      query: cdktf.listMapper(securityMonitoringRuleQueryToTerraform)(this._query),
    };
  }
}
