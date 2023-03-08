// https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogSecurityMonitoringRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Limit the search to default rules
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules#default_only_filter DataDatadogSecurityMonitoringRules#default_only_filter}
  */
  readonly defaultOnlyFilter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules#id DataDatadogSecurityMonitoringRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A rule name to limit the search
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules#name_filter DataDatadogSecurityMonitoringRules#name_filter}
  */
  readonly nameFilter?: string;
  /**
  * A list of tags to limit the search
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules#tags_filter DataDatadogSecurityMonitoringRules#tags_filter}
  */
  readonly tagsFilter?: string[];
  /**
  * Limit the search to user rules
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules#user_only_filter DataDatadogSecurityMonitoringRules#user_only_filter}
  */
  readonly userOnlyFilter?: boolean | cdktf.IResolvable;
}
export interface DataDatadogSecurityMonitoringRulesRulesCase {
}

export function dataDatadogSecurityMonitoringRulesRulesCaseToTerraform(struct?: DataDatadogSecurityMonitoringRulesRulesCase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogSecurityMonitoringRulesRulesCaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSecurityMonitoringRulesRulesCase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSecurityMonitoringRulesRulesCase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return this.getListAttribute('notifications');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataDatadogSecurityMonitoringRulesRulesCaseList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogSecurityMonitoringRulesRulesCaseOutputReference {
    return new DataDatadogSecurityMonitoringRulesRulesCaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSecurityMonitoringRulesRulesFilter {
}

export function dataDatadogSecurityMonitoringRulesRulesFilterToTerraform(struct?: DataDatadogSecurityMonitoringRulesRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogSecurityMonitoringRulesRulesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSecurityMonitoringRulesRulesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSecurityMonitoringRulesRulesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}

export class DataDatadogSecurityMonitoringRulesRulesFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogSecurityMonitoringRulesRulesFilterOutputReference {
    return new DataDatadogSecurityMonitoringRulesRulesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions {
}

export function dataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsToTerraform(struct?: DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_user_locations - computed: true, optional: false, required: false
  public get baselineUserLocations() {
    return this.getBooleanAttribute('baseline_user_locations');
  }
}

export class DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference {
    return new DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions {
}

export function dataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsToTerraform(struct?: DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forget_after - computed: true, optional: false, required: false
  public get forgetAfter() {
    return this.getNumberAttribute('forget_after');
  }

  // learning_duration - computed: true, optional: false, required: false
  public get learningDuration() {
    return this.getNumberAttribute('learning_duration');
  }

  // learning_method - computed: true, optional: false, required: false
  public get learningMethod() {
    return this.getStringAttribute('learning_method');
  }

  // learning_threshold - computed: true, optional: false, required: false
  public get learningThreshold() {
    return this.getNumberAttribute('learning_threshold');
  }
}

export class DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference {
    return new DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSecurityMonitoringRulesRulesOptions {
}

export function dataDatadogSecurityMonitoringRulesRulesOptionsToTerraform(struct?: DataDatadogSecurityMonitoringRulesRulesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSecurityMonitoringRulesRulesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSecurityMonitoringRulesRulesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decrease_criticality_based_on_env - computed: true, optional: false, required: false
  public get decreaseCriticalityBasedOnEnv() {
    return this.getBooleanAttribute('decrease_criticality_based_on_env');
  }

  // detection_method - computed: true, optional: false, required: false
  public get detectionMethod() {
    return this.getStringAttribute('detection_method');
  }

  // evaluation_window - computed: true, optional: false, required: false
  public get evaluationWindow() {
    return this.getNumberAttribute('evaluation_window');
  }

  // impossible_travel_options - computed: true, optional: false, required: false
  private _impossibleTravelOptions = new DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList(this, "impossible_travel_options", false);
  public get impossibleTravelOptions() {
    return this._impossibleTravelOptions;
  }

  // keep_alive - computed: true, optional: false, required: false
  public get keepAlive() {
    return this.getNumberAttribute('keep_alive');
  }

  // max_signal_duration - computed: true, optional: false, required: false
  public get maxSignalDuration() {
    return this.getNumberAttribute('max_signal_duration');
  }

  // new_value_options - computed: true, optional: false, required: false
  private _newValueOptions = new DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList(this, "new_value_options", false);
  public get newValueOptions() {
    return this._newValueOptions;
  }
}

export class DataDatadogSecurityMonitoringRulesRulesOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference {
    return new DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSecurityMonitoringRulesRulesQueryAgentRule {
}

export function dataDatadogSecurityMonitoringRulesRulesQueryAgentRuleToTerraform(struct?: DataDatadogSecurityMonitoringRulesRulesQueryAgentRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSecurityMonitoringRulesRulesQueryAgentRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSecurityMonitoringRulesRulesQueryAgentRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_rule_id - computed: true, optional: false, required: false
  public get agentRuleId() {
    return this.getStringAttribute('agent_rule_id');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference {
    return new DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSecurityMonitoringRulesRulesQuery {
}

export function dataDatadogSecurityMonitoringRulesRulesQueryToTerraform(struct?: DataDatadogSecurityMonitoringRulesRulesQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogSecurityMonitoringRulesRulesQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSecurityMonitoringRulesRulesQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSecurityMonitoringRulesRulesQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_rule - computed: true, optional: false, required: false
  private _agentRule = new DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList(this, "agent_rule", false);
  public get agentRule() {
    return this._agentRule;
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // distinct_fields - computed: true, optional: false, required: false
  public get distinctFields() {
    return this.getListAttribute('distinct_fields');
  }

  // group_by_fields - computed: true, optional: false, required: false
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return this.getListAttribute('metrics');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}

export class DataDatadogSecurityMonitoringRulesRulesQueryList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogSecurityMonitoringRulesRulesQueryOutputReference {
    return new DataDatadogSecurityMonitoringRulesRulesQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSecurityMonitoringRulesRulesSignalQuery {
}

export function dataDatadogSecurityMonitoringRulesRulesSignalQueryToTerraform(struct?: DataDatadogSecurityMonitoringRulesRulesSignalQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSecurityMonitoringRulesRulesSignalQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSecurityMonitoringRulesRulesSignalQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // correlated_by_fields - computed: true, optional: false, required: false
  public get correlatedByFields() {
    return this.getListAttribute('correlated_by_fields');
  }

  // correlated_query_index - computed: true, optional: false, required: false
  public get correlatedQueryIndex() {
    return this.getStringAttribute('correlated_query_index');
  }

  // default_rule_id - computed: true, optional: false, required: false
  public get defaultRuleId() {
    return this.getStringAttribute('default_rule_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
}

export class DataDatadogSecurityMonitoringRulesRulesSignalQueryList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference {
    return new DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSecurityMonitoringRulesRules {
}

export function dataDatadogSecurityMonitoringRulesRulesToTerraform(struct?: DataDatadogSecurityMonitoringRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogSecurityMonitoringRulesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSecurityMonitoringRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSecurityMonitoringRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // case - computed: true, optional: false, required: false
  private _case = new DataDatadogSecurityMonitoringRulesRulesCaseList(this, "case", false);
  public get case() {
    return this._case;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataDatadogSecurityMonitoringRulesRulesFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // has_extended_title - computed: true, optional: false, required: false
  public get hasExtendedTitle() {
    return this.getBooleanAttribute('has_extended_title');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataDatadogSecurityMonitoringRulesRulesOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }

  // query - computed: true, optional: false, required: false
  private _query = new DataDatadogSecurityMonitoringRulesRulesQueryList(this, "query", false);
  public get query() {
    return this._query;
  }

  // signal_query - computed: true, optional: false, required: false
  private _signalQuery = new DataDatadogSecurityMonitoringRulesRulesSignalQueryList(this, "signal_query", false);
  public get signalQuery() {
    return this._signalQuery;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataDatadogSecurityMonitoringRulesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogSecurityMonitoringRulesRulesOutputReference {
    return new DataDatadogSecurityMonitoringRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules datadog_security_monitoring_rules}
*/
export class DataDatadogSecurityMonitoringRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_rules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules datadog_security_monitoring_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogSecurityMonitoringRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogSecurityMonitoringRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_rules',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.22.0',
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
    this._defaultOnlyFilter = config.defaultOnlyFilter;
    this._id = config.id;
    this._nameFilter = config.nameFilter;
    this._tagsFilter = config.tagsFilter;
    this._userOnlyFilter = config.userOnlyFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_only_filter - computed: false, optional: true, required: false
  private _defaultOnlyFilter?: boolean | cdktf.IResolvable; 
  public get defaultOnlyFilter() {
    return this.getBooleanAttribute('default_only_filter');
  }
  public set defaultOnlyFilter(value: boolean | cdktf.IResolvable) {
    this._defaultOnlyFilter = value;
  }
  public resetDefaultOnlyFilter() {
    this._defaultOnlyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOnlyFilterInput() {
    return this._defaultOnlyFilter;
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

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string; 
  public get nameFilter() {
    return this.getStringAttribute('name_filter');
  }
  public set nameFilter(value: string) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // rule_ids - computed: true, optional: false, required: false
  public get ruleIds() {
    return this.getListAttribute('rule_ids');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataDatadogSecurityMonitoringRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // tags_filter - computed: false, optional: true, required: false
  private _tagsFilter?: string[]; 
  public get tagsFilter() {
    return this.getListAttribute('tags_filter');
  }
  public set tagsFilter(value: string[]) {
    this._tagsFilter = value;
  }
  public resetTagsFilter() {
    this._tagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsFilterInput() {
    return this._tagsFilter;
  }

  // user_only_filter - computed: false, optional: true, required: false
  private _userOnlyFilter?: boolean | cdktf.IResolvable; 
  public get userOnlyFilter() {
    return this.getBooleanAttribute('user_only_filter');
  }
  public set userOnlyFilter(value: boolean | cdktf.IResolvable) {
    this._userOnlyFilter = value;
  }
  public resetUserOnlyFilter() {
    this._userOnlyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userOnlyFilterInput() {
    return this._userOnlyFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_only_filter: cdktf.booleanToTerraform(this._defaultOnlyFilter),
      id: cdktf.stringToTerraform(this._id),
      name_filter: cdktf.stringToTerraform(this._nameFilter),
      tags_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagsFilter),
      user_only_filter: cdktf.booleanToTerraform(this._userOnlyFilter),
    };
  }
}
