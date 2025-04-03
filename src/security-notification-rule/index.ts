/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityNotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the rule is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule#enabled SecurityNotificationRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the rule (must be unique).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule#name SecurityNotificationRule#name}
  */
  readonly name: string;
  /**
  * The list of handle targets for the notifications. A target must be prefixed with an @. It can be an email address (@bob@email.com), or any installed integration. For example, a Slack recipient (@slack-ops), or a Teams recipient (@teams-ops).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule#targets SecurityNotificationRule#targets}
  */
  readonly targets: string[];
  /**
  * Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule#time_aggregation SecurityNotificationRule#time_aggregation}
  */
  readonly timeAggregation?: number;
  /**
  * selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule#selectors SecurityNotificationRule#selectors}
  */
  readonly selectors?: SecurityNotificationRuleSelectors;
}
export interface SecurityNotificationRuleSelectors {
  /**
  * Comprises one or several key:value pairs for filtering security issues based on tags and attributes. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule#query SecurityNotificationRule#query}
  */
  readonly query?: string;
  /**
  * Specifies security rule types for filtering signals and vulnerabilities that generate notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule#rule_types SecurityNotificationRule#rule_types}
  */
  readonly ruleTypes: string[];
  /**
  * The security rules severities to consider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule#severities SecurityNotificationRule#severities}
  */
  readonly severities?: string[];
  /**
  * The type of security issues the rule applies to. Use `security_signals` for rules based on security signals and `security_findings` for those based on vulnerabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule#trigger_source SecurityNotificationRule#trigger_source}
  */
  readonly triggerSource: string;
}

export function securityNotificationRuleSelectorsToTerraform(struct?: SecurityNotificationRuleSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    rule_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ruleTypes),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    trigger_source: cdktf.stringToTerraform(struct!.triggerSource),
  }
}


export function securityNotificationRuleSelectorsToHclTerraform(struct?: SecurityNotificationRuleSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ruleTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    trigger_source: {
      value: cdktf.stringToHclTerraform(struct!.triggerSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityNotificationRuleSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityNotificationRuleSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._ruleTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTypes = this._ruleTypes;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._triggerSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerSource = this._triggerSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityNotificationRuleSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
      this._ruleTypes = undefined;
      this._severities = undefined;
      this._triggerSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
      this._ruleTypes = value.ruleTypes;
      this._severities = value.severities;
      this._triggerSource = value.triggerSource;
    }
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

  // rule_types - computed: false, optional: false, required: true
  private _ruleTypes?: string[]; 
  public get ruleTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('rule_types'));
  }
  public set ruleTypes(value: string[]) {
    this._ruleTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypesInput() {
    return this._ruleTypes;
  }

  // severities - computed: true, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // trigger_source - computed: false, optional: false, required: true
  private _triggerSource?: string; 
  public get triggerSource() {
    return this.getStringAttribute('trigger_source');
  }
  public set triggerSource(value: string) {
    this._triggerSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSourceInput() {
    return this._triggerSource;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule datadog_security_notification_rule}
*/
export class SecurityNotificationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_notification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityNotificationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityNotificationRule to import
  * @param importFromId The id of the existing SecurityNotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityNotificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_notification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_notification_rule datadog_security_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.59.0',
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
    this._name = config.name;
    this._targets = config.targets;
    this._timeAggregation = config.timeAggregation;
    this._selectors.internalValue = config.selectors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // created_by_handle - computed: true, optional: false, required: false
  public get createdByHandle() {
    return this.getStringAttribute('created_by_handle');
  }

  // created_by_name - computed: true, optional: false, required: false
  public get createdByName() {
    return this.getStringAttribute('created_by_name');
  }

  // enabled - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getNumberAttribute('modified_at');
  }

  // modified_by_handle - computed: true, optional: false, required: false
  public get modifiedByHandle() {
    return this.getStringAttribute('modified_by_handle');
  }

  // modified_by_name - computed: true, optional: false, required: false
  public get modifiedByName() {
    return this.getStringAttribute('modified_by_name');
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

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return cdktf.Fn.tolist(this.getListAttribute('targets'));
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // time_aggregation - computed: true, optional: true, required: false
  private _timeAggregation?: number; 
  public get timeAggregation() {
    return this.getNumberAttribute('time_aggregation');
  }
  public set timeAggregation(value: number) {
    this._timeAggregation = value;
  }
  public resetTimeAggregation() {
    this._timeAggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAggregationInput() {
    return this._timeAggregation;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new SecurityNotificationRuleSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: SecurityNotificationRuleSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targets),
      time_aggregation: cdktf.numberToTerraform(this._timeAggregation),
      selectors: securityNotificationRuleSelectorsToTerraform(this._selectors.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      time_aggregation: {
        value: cdktf.numberToHclTerraform(this._timeAggregation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      selectors: {
        value: securityNotificationRuleSelectorsToHclTerraform(this._selectors.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityNotificationRuleSelectors",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
