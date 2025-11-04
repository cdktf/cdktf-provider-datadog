/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityMonitoringDefaultRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom Message (will override default message) for generated signals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#custom_message SecurityMonitoringDefaultRule#custom_message}
  */
  readonly customMessage?: string;
  /**
  * The name (will override default name) of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#custom_name SecurityMonitoringDefaultRule#custom_name}
  */
  readonly customName?: string;
  /**
  * Custom tags for generated signals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#custom_tags SecurityMonitoringDefaultRule#custom_tags}
  */
  readonly customTags?: string[];
  /**
  * Enable the rule. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#enabled SecurityMonitoringDefaultRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#id SecurityMonitoringDefaultRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * case block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#case SecurityMonitoringDefaultRule#case}
  */
  readonly case?: SecurityMonitoringDefaultRuleCase[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#filter SecurityMonitoringDefaultRule#filter}
  */
  readonly filter?: SecurityMonitoringDefaultRuleFilter[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#options SecurityMonitoringDefaultRule#options}
  */
  readonly options?: SecurityMonitoringDefaultRuleOptions;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}
  */
  readonly query?: SecurityMonitoringDefaultRuleQuery[] | cdktf.IResolvable;
}
export interface SecurityMonitoringDefaultRuleCase {
  /**
  * Status of the rule case to override. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#custom_status SecurityMonitoringDefaultRule#custom_status}
  */
  readonly customStatus?: string;
  /**
  * Notification targets for each rule case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#notifications SecurityMonitoringDefaultRule#notifications}
  */
  readonly notifications?: string[];
  /**
  * Status of the rule case to match. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#status SecurityMonitoringDefaultRule#status}
  */
  readonly status: string;
}

export function securityMonitoringDefaultRuleCaseToTerraform(struct?: SecurityMonitoringDefaultRuleCase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_status: cdktf.stringToTerraform(struct!.customStatus),
    notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifications),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function securityMonitoringDefaultRuleCaseToHclTerraform(struct?: SecurityMonitoringDefaultRuleCase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_status: {
      value: cdktf.stringToHclTerraform(struct!.customStatus),
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

export class SecurityMonitoringDefaultRuleCaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringDefaultRuleCase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStatus = this._customStatus;
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

  public set internalValue(value: SecurityMonitoringDefaultRuleCase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customStatus = undefined;
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
      this._customStatus = value.customStatus;
      this._notifications = value.notifications;
      this._status = value.status;
    }
  }

  // custom_status - computed: false, optional: true, required: false
  private _customStatus?: string; 
  public get customStatus() {
    return this.getStringAttribute('custom_status');
  }
  public set customStatus(value: string) {
    this._customStatus = value;
  }
  public resetCustomStatus() {
    this._customStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStatusInput() {
    return this._customStatus;
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

export class SecurityMonitoringDefaultRuleCaseList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringDefaultRuleCase[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringDefaultRuleCaseOutputReference {
    return new SecurityMonitoringDefaultRuleCaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringDefaultRuleFilter {
  /**
  * The type of filtering action. Allowed enum values: require, suppress Valid values are `require`, `suppress`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#action SecurityMonitoringDefaultRule#action}
  */
  readonly action: string;
  /**
  * Query for selecting logs to apply the filtering action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}
  */
  readonly query: string;
}

export function securityMonitoringDefaultRuleFilterToTerraform(struct?: SecurityMonitoringDefaultRuleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function securityMonitoringDefaultRuleFilterToHclTerraform(struct?: SecurityMonitoringDefaultRuleFilter | cdktf.IResolvable): any {
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

export class SecurityMonitoringDefaultRuleFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringDefaultRuleFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityMonitoringDefaultRuleFilter | cdktf.IResolvable | undefined) {
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

export class SecurityMonitoringDefaultRuleFilterList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringDefaultRuleFilter[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringDefaultRuleFilterOutputReference {
    return new SecurityMonitoringDefaultRuleFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringDefaultRuleOptions {
  /**
  * If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#decrease_criticality_based_on_env SecurityMonitoringDefaultRule#decrease_criticality_based_on_env}
  */
  readonly decreaseCriticalityBasedOnEnv?: boolean | cdktf.IResolvable;
}

export function securityMonitoringDefaultRuleOptionsToTerraform(struct?: SecurityMonitoringDefaultRuleOptionsOutputReference | SecurityMonitoringDefaultRuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decrease_criticality_based_on_env: cdktf.booleanToTerraform(struct!.decreaseCriticalityBasedOnEnv),
  }
}


export function securityMonitoringDefaultRuleOptionsToHclTerraform(struct?: SecurityMonitoringDefaultRuleOptionsOutputReference | SecurityMonitoringDefaultRuleOptions): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringDefaultRuleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityMonitoringDefaultRuleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decreaseCriticalityBasedOnEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.decreaseCriticalityBasedOnEnv = this._decreaseCriticalityBasedOnEnv;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringDefaultRuleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decreaseCriticalityBasedOnEnv = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decreaseCriticalityBasedOnEnv = value.decreaseCriticalityBasedOnEnv;
    }
  }

  // decrease_criticality_based_on_env - computed: true, optional: true, required: false
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
}
export interface SecurityMonitoringDefaultRuleQueryAgentRule {
  /**
  * **Deprecated**. It won't be applied anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#agent_rule_id SecurityMonitoringDefaultRule#agent_rule_id}
  */
  readonly agentRuleId: string;
  /**
  * **Deprecated**. It won't be applied anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#expression SecurityMonitoringDefaultRule#expression}
  */
  readonly expression: string;
}

export function securityMonitoringDefaultRuleQueryAgentRuleToTerraform(struct?: SecurityMonitoringDefaultRuleQueryAgentRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_rule_id: cdktf.stringToTerraform(struct!.agentRuleId),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function securityMonitoringDefaultRuleQueryAgentRuleToHclTerraform(struct?: SecurityMonitoringDefaultRuleQueryAgentRule | cdktf.IResolvable): any {
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

export class SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringDefaultRuleQueryAgentRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityMonitoringDefaultRuleQueryAgentRule | cdktf.IResolvable | undefined) {
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

export class SecurityMonitoringDefaultRuleQueryAgentRuleList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringDefaultRuleQueryAgentRule[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference {
    return new SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringDefaultRuleQuery {
  /**
  * The aggregation type. For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#aggregation SecurityMonitoringDefaultRule#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Query extension to append to the logs query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#custom_query_extension SecurityMonitoringDefaultRule#custom_query_extension}
  */
  readonly customQueryExtension?: string;
  /**
  * Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#data_source SecurityMonitoringDefaultRule#data_source}
  */
  readonly dataSource?: string;
  /**
  * Field for which the cardinality is measured. Sent as an array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#distinct_fields SecurityMonitoringDefaultRule#distinct_fields}
  */
  readonly distinctFields?: string[];
  /**
  * Fields to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#group_by_fields SecurityMonitoringDefaultRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * When false, events without a group-by value are ignored by the rule. When true, events with missing group-by fields are processed with `N/A`, replacing the missing values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#has_optional_group_by_fields SecurityMonitoringDefaultRule#has_optional_group_by_fields}
  */
  readonly hasOptionalGroupByFields?: boolean | cdktf.IResolvable;
  /**
  * The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations. **Deprecated.** Configure `metrics` instead. This attribute will be removed in the next major version of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#metric SecurityMonitoringDefaultRule#metric}
  */
  readonly metric?: string;
  /**
  * Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations. The `sum`, `max`, and `geo_data` aggregations only accept one value in this list, whereas the `new_value` aggregation accepts up to five values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#metrics SecurityMonitoringDefaultRule#metrics}
  */
  readonly metrics?: string[];
  /**
  * Name of the query. Not compatible with `new_value` aggregations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#name SecurityMonitoringDefaultRule#name}
  */
  readonly name?: string;
  /**
  * Query to run on logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}
  */
  readonly query?: string;
  /**
  * agent_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#agent_rule SecurityMonitoringDefaultRule#agent_rule}
  */
  readonly agentRule?: SecurityMonitoringDefaultRuleQueryAgentRule[] | cdktf.IResolvable;
}

export function securityMonitoringDefaultRuleQueryToTerraform(struct?: SecurityMonitoringDefaultRuleQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    custom_query_extension: cdktf.stringToTerraform(struct!.customQueryExtension),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    distinct_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distinctFields),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByFields),
    has_optional_group_by_fields: cdktf.booleanToTerraform(struct!.hasOptionalGroupByFields),
    metric: cdktf.stringToTerraform(struct!.metric),
    metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metrics),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
    agent_rule: cdktf.listMapper(securityMonitoringDefaultRuleQueryAgentRuleToTerraform, true)(struct!.agentRule),
  }
}


export function securityMonitoringDefaultRuleQueryToHclTerraform(struct?: SecurityMonitoringDefaultRuleQuery | cdktf.IResolvable): any {
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
    custom_query_extension: {
      value: cdktf.stringToHclTerraform(struct!.customQueryExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktf.stringToHclTerraform(struct!.dataSource),
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
    has_optional_group_by_fields: {
      value: cdktf.booleanToHclTerraform(struct!.hasOptionalGroupByFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      value: cdktf.listMapperHcl(securityMonitoringDefaultRuleQueryAgentRuleToHclTerraform, true)(struct!.agentRule),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityMonitoringDefaultRuleQueryAgentRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringDefaultRuleQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringDefaultRuleQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._customQueryExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.customQueryExtension = this._customQueryExtension;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._distinctFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinctFields = this._distinctFields;
    }
    if (this._groupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields;
    }
    if (this._hasOptionalGroupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasOptionalGroupByFields = this._hasOptionalGroupByFields;
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

  public set internalValue(value: SecurityMonitoringDefaultRuleQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._customQueryExtension = undefined;
      this._dataSource = undefined;
      this._distinctFields = undefined;
      this._groupByFields = undefined;
      this._hasOptionalGroupByFields = undefined;
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
      this._customQueryExtension = value.customQueryExtension;
      this._dataSource = value.dataSource;
      this._distinctFields = value.distinctFields;
      this._groupByFields = value.groupByFields;
      this._hasOptionalGroupByFields = value.hasOptionalGroupByFields;
      this._metric = value.metric;
      this._metrics = value.metrics;
      this._name = value.name;
      this._query = value.query;
      this._agentRule.internalValue = value.agentRule;
    }
  }

  // aggregation - computed: true, optional: true, required: false
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

  // custom_query_extension - computed: true, optional: true, required: false
  private _customQueryExtension?: string; 
  public get customQueryExtension() {
    return this.getStringAttribute('custom_query_extension');
  }
  public set customQueryExtension(value: string) {
    this._customQueryExtension = value;
  }
  public resetCustomQueryExtension() {
    this._customQueryExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customQueryExtensionInput() {
    return this._customQueryExtension;
  }

  // data_source - computed: true, optional: true, required: false
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // distinct_fields - computed: true, optional: true, required: false
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

  // group_by_fields - computed: true, optional: true, required: false
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

  // has_optional_group_by_fields - computed: true, optional: true, required: false
  private _hasOptionalGroupByFields?: boolean | cdktf.IResolvable; 
  public get hasOptionalGroupByFields() {
    return this.getBooleanAttribute('has_optional_group_by_fields');
  }
  public set hasOptionalGroupByFields(value: boolean | cdktf.IResolvable) {
    this._hasOptionalGroupByFields = value;
  }
  public resetHasOptionalGroupByFields() {
    this._hasOptionalGroupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasOptionalGroupByFieldsInput() {
    return this._hasOptionalGroupByFields;
  }

  // metric - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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

  // agent_rule - computed: false, optional: true, required: false
  private _agentRule = new SecurityMonitoringDefaultRuleQueryAgentRuleList(this, "agent_rule", false);
  public get agentRule() {
    return this._agentRule;
  }
  public putAgentRule(value: SecurityMonitoringDefaultRuleQueryAgentRule[] | cdktf.IResolvable) {
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

export class SecurityMonitoringDefaultRuleQueryList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringDefaultRuleQuery[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringDefaultRuleQueryOutputReference {
    return new SecurityMonitoringDefaultRuleQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule datadog_security_monitoring_default_rule}
*/
export class SecurityMonitoringDefaultRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_default_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityMonitoringDefaultRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityMonitoringDefaultRule to import
  * @param importFromId The id of the existing SecurityMonitoringDefaultRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityMonitoringDefaultRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_monitoring_default_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/security_monitoring_default_rule datadog_security_monitoring_default_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityMonitoringDefaultRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityMonitoringDefaultRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_default_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.79.0',
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
    this._customMessage = config.customMessage;
    this._customName = config.customName;
    this._customTags = config.customTags;
    this._enabled = config.enabled;
    this._id = config.id;
    this._case.internalValue = config.case;
    this._filter.internalValue = config.filter;
    this._options.internalValue = config.options;
    this._query.internalValue = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_message - computed: false, optional: true, required: false
  private _customMessage?: string; 
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }
  public set customMessage(value: string) {
    this._customMessage = value;
  }
  public resetCustomMessage() {
    this._customMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage;
  }

  // custom_name - computed: false, optional: true, required: false
  private _customName?: string; 
  public get customName() {
    return this.getStringAttribute('custom_name');
  }
  public set customName(value: string) {
    this._customName = value;
  }
  public resetCustomName() {
    this._customName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNameInput() {
    return this._customName;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: string[]; 
  public get customTags() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_tags'));
  }
  public set customTags(value: string[]) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // case - computed: false, optional: true, required: false
  private _case = new SecurityMonitoringDefaultRuleCaseList(this, "case", false);
  public get case() {
    return this._case;
  }
  public putCase(value: SecurityMonitoringDefaultRuleCase[] | cdktf.IResolvable) {
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
  private _filter = new SecurityMonitoringDefaultRuleFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SecurityMonitoringDefaultRuleFilter[] | cdktf.IResolvable) {
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
  private _options = new SecurityMonitoringDefaultRuleOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: SecurityMonitoringDefaultRuleOptions) {
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
  private _query = new SecurityMonitoringDefaultRuleQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: SecurityMonitoringDefaultRuleQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_message: cdktf.stringToTerraform(this._customMessage),
      custom_name: cdktf.stringToTerraform(this._customName),
      custom_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customTags),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      case: cdktf.listMapper(securityMonitoringDefaultRuleCaseToTerraform, true)(this._case.internalValue),
      filter: cdktf.listMapper(securityMonitoringDefaultRuleFilterToTerraform, true)(this._filter.internalValue),
      options: securityMonitoringDefaultRuleOptionsToTerraform(this._options.internalValue),
      query: cdktf.listMapper(securityMonitoringDefaultRuleQueryToTerraform, true)(this._query.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_message: {
        value: cdktf.stringToHclTerraform(this._customMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_name: {
        value: cdktf.stringToHclTerraform(this._customName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      case: {
        value: cdktf.listMapperHcl(securityMonitoringDefaultRuleCaseToHclTerraform, true)(this._case.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringDefaultRuleCaseList",
      },
      filter: {
        value: cdktf.listMapperHcl(securityMonitoringDefaultRuleFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringDefaultRuleFilterList",
      },
      options: {
        value: securityMonitoringDefaultRuleOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringDefaultRuleOptionsList",
      },
      query: {
        value: cdktf.listMapperHcl(securityMonitoringDefaultRuleQueryToHclTerraform, true)(this._query.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringDefaultRuleQueryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
