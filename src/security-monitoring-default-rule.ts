// https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityMonitoringDefaultRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule#enabled SecurityMonitoringDefaultRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * case block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule#case SecurityMonitoringDefaultRule#case}
  */
  readonly case?: SecurityMonitoringDefaultRuleCase[] | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule#filter SecurityMonitoringDefaultRule#filter}
  */
  readonly filter?: SecurityMonitoringDefaultRuleFilter[] | cdktf.IResolvable;
}
export interface SecurityMonitoringDefaultRuleCase {
  /**
  * Notification targets for each rule case.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule#notifications SecurityMonitoringDefaultRule#notifications}
  */
  readonly notifications: string[];
  /**
  * Status of the rule case to match. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule#status SecurityMonitoringDefaultRule#status}
  */
  readonly status: string;
}

export function securityMonitoringDefaultRuleCaseToTerraform(struct?: SecurityMonitoringDefaultRuleCase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notifications: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notifications),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export interface SecurityMonitoringDefaultRuleFilter {
  /**
  * The type of filtering action. Allowed enum values: require, suppress Valid values are `require`, `suppress`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule#action SecurityMonitoringDefaultRule#action}
  */
  readonly action: string;
  /**
  * Query for selecting logs to apply the filtering action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule datadog_security_monitoring_default_rule}
*/
export class SecurityMonitoringDefaultRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_default_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule datadog_security_monitoring_default_rule} Resource
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
        providerVersion: '3.10.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._case = config.case;
    this._filter = config.filter;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // case - computed: false, optional: true, required: false
  private _case?: SecurityMonitoringDefaultRuleCase[] | cdktf.IResolvable; 
  public get case() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('case');
  }
  public set case(value: SecurityMonitoringDefaultRuleCase[] | cdktf.IResolvable) {
    this._case = value;
  }
  public resetCase() {
    this._case = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInput() {
    return this._case;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: SecurityMonitoringDefaultRuleFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter');
  }
  public set filter(value: SecurityMonitoringDefaultRuleFilter[] | cdktf.IResolvable) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      case: cdktf.listMapper(securityMonitoringDefaultRuleCaseToTerraform)(this._case),
      filter: cdktf.listMapper(securityMonitoringDefaultRuleFilterToTerraform)(this._filter),
    };
  }
}
