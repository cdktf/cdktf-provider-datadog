// https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityMonitoringRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the rule is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#enabled SecurityMonitoringRule#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Whether the notifications include the triggering group-by values in their title.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#has_extended_title SecurityMonitoringRule#has_extended_title}
  */
  readonly hasExtendedTitle?: boolean;
  /**
  * Message for generated signals.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#message SecurityMonitoringRule#message}
  */
  readonly message: string;
  /**
  * The name of the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#name SecurityMonitoringRule#name}
  */
  readonly name: string;
  /**
  * Tags for generated signals.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#tags SecurityMonitoringRule#tags}
  */
  readonly tags?: string[];
  /**
  * case block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#case SecurityMonitoringRule#case}
  */
  readonly case: SecurityMonitoringRuleCase[];
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#filter SecurityMonitoringRule#filter}
  */
  readonly filter?: SecurityMonitoringRuleFilter[];
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#options SecurityMonitoringRule#options}
  */
  readonly options?: SecurityMonitoringRuleOptions[];
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#query SecurityMonitoringRule#query}
  */
  readonly query: SecurityMonitoringRuleQuery[];
}
export interface SecurityMonitoringRuleCase {
  /**
  * A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated based on the event counts in the previously defined queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#condition SecurityMonitoringRule#condition}
  */
  readonly condition?: string;
  /**
  * Name of the case.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Notification targets for each rule case.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#notifications SecurityMonitoringRule#notifications}
  */
  readonly notifications?: string[];
  /**
  * Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#status SecurityMonitoringRule#status}
  */
  readonly status: string;
}

function securityMonitoringRuleCaseToTerraform(struct?: SecurityMonitoringRuleCase): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#action SecurityMonitoringRule#action}
  */
  readonly action: string;
  /**
  * Query for selecting logs to apply the filtering action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#query SecurityMonitoringRule#query}
  */
  readonly query: string;
}

function securityMonitoringRuleFilterToTerraform(struct?: SecurityMonitoringRuleFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface SecurityMonitoringRuleOptionsNewValueOptions {
  /**
  * The duration in days after which a learned value is forgotten. Valid values are `1`, `2`, `7`, `14`, `21`, `28`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#forget_after SecurityMonitoringRule#forget_after}
  */
  readonly forgetAfter: number;
  /**
  * The duration in days during which values are learned, and after which signals will be generated for values that weren't learned. If set to 0, a signal will be generated for all new values after the first value is learned. Valid values are `0`, `1`, `7`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#learning_duration SecurityMonitoringRule#learning_duration}
  */
  readonly learningDuration: number;
}

function securityMonitoringRuleOptionsNewValueOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsNewValueOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    forget_after: cdktf.numberToTerraform(struct!.forgetAfter),
    learning_duration: cdktf.numberToTerraform(struct!.learningDuration),
  }
}

export interface SecurityMonitoringRuleOptions {
  /**
  * The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#detection_method SecurityMonitoringRule#detection_method}
  */
  readonly detectionMethod?: string;
  /**
  * A time window is specified to match when at least one of the cases matches true. This is a sliding window and evaluates in real time. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#evaluation_window SecurityMonitoringRule#evaluation_window}
  */
  readonly evaluationWindow: number;
  /**
  * Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#keep_alive SecurityMonitoringRule#keep_alive}
  */
  readonly keepAlive: number;
  /**
  * A signal will “close” regardless of the query being matched once the time exceeds the maximum duration. This time is calculated from the first seen timestamp. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#max_signal_duration SecurityMonitoringRule#max_signal_duration}
  */
  readonly maxSignalDuration: number;
  /**
  * new_value_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#new_value_options SecurityMonitoringRule#new_value_options}
  */
  readonly newValueOptions?: SecurityMonitoringRuleOptionsNewValueOptions[];
}

function securityMonitoringRuleOptionsToTerraform(struct?: SecurityMonitoringRuleOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    detection_method: cdktf.stringToTerraform(struct!.detectionMethod),
    evaluation_window: cdktf.numberToTerraform(struct!.evaluationWindow),
    keep_alive: cdktf.numberToTerraform(struct!.keepAlive),
    max_signal_duration: cdktf.numberToTerraform(struct!.maxSignalDuration),
    new_value_options: cdktf.listMapper(securityMonitoringRuleOptionsNewValueOptionsToTerraform)(struct!.newValueOptions),
  }
}

export interface SecurityMonitoringRuleQuery {
  /**
  * The aggregation type. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#aggregation SecurityMonitoringRule#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Field for which the cardinality is measured. Sent as an array.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#distinct_fields SecurityMonitoringRule#distinct_fields}
  */
  readonly distinctFields?: string[];
  /**
  * Fields to group by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#group_by_fields SecurityMonitoringRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The target field to aggregate over when using the sum or max aggregations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#metric SecurityMonitoringRule#metric}
  */
  readonly metric?: string;
  /**
  * Name of the query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Query to run on logs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#query SecurityMonitoringRule#query}
  */
  readonly query: string;
}

function securityMonitoringRuleQueryToTerraform(struct?: SecurityMonitoringRuleQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    distinct_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.distinctFields),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groupByFields),
    metric: cdktf.stringToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html datadog_security_monitoring_rule}
*/
export class SecurityMonitoringRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html datadog_security_monitoring_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityMonitoringRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityMonitoringRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
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
    this._case = config.case;
    this._filter = config.filter;
    this._options = config.options;
    this._query = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // has_extended_title - computed: false, optional: true, required: false
  private _hasExtendedTitle?: boolean;
  public get hasExtendedTitle() {
    return this.getBooleanAttribute('has_extended_title');
  }
  public set hasExtendedTitle(value: boolean ) {
    this._hasExtendedTitle = value;
  }
  public resetHasExtendedTitle() {
    this._hasExtendedTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasExtendedTitleInput() {
    return this._hasExtendedTitle
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: false, optional: false, required: true
  private _message: string;
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // case - computed: false, optional: false, required: true
  private _case: SecurityMonitoringRuleCase[];
  public get case() {
    return this.interpolationForAttribute('case') as any;
  }
  public set case(value: SecurityMonitoringRuleCase[]) {
    this._case = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInput() {
    return this._case
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: SecurityMonitoringRuleFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: SecurityMonitoringRuleFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // options - computed: false, optional: true, required: false
  private _options?: SecurityMonitoringRuleOptions[];
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }
  public set options(value: SecurityMonitoringRuleOptions[] ) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // query - computed: false, optional: false, required: true
  private _query: SecurityMonitoringRuleQuery[];
  public get query() {
    return this.interpolationForAttribute('query') as any;
  }
  public set query(value: SecurityMonitoringRuleQuery[]) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
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
      case: cdktf.listMapper(securityMonitoringRuleCaseToTerraform)(this._case),
      filter: cdktf.listMapper(securityMonitoringRuleFilterToTerraform)(this._filter),
      options: cdktf.listMapper(securityMonitoringRuleOptionsToTerraform)(this._options),
      query: cdktf.listMapper(securityMonitoringRuleQueryToTerraform)(this._query),
    };
  }
}
