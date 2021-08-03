// https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogSecurityMonitoringRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Limit the search to default rules
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules.html#default_only_filter DataDatadogSecurityMonitoringRules#default_only_filter}
  */
  readonly defaultOnlyFilter?: boolean;
  /**
  * A rule name to limit the search
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules.html#name_filter DataDatadogSecurityMonitoringRules#name_filter}
  */
  readonly nameFilter?: string;
  /**
  * A list of tags to limit the search
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules.html#tags_filter DataDatadogSecurityMonitoringRules#tags_filter}
  */
  readonly tagsFilter?: string[];
  /**
  * Limit the search to user rules
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules.html#user_only_filter DataDatadogSecurityMonitoringRules#user_only_filter}
  */
  readonly userOnlyFilter?: boolean;
}
export class DataDatadogSecurityMonitoringRulesRulesCase extends cdktf.ComplexComputedList {

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
export class DataDatadogSecurityMonitoringRulesRulesFilter extends cdktf.ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}
export class DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions extends cdktf.ComplexComputedList {

  // forget_after - computed: true, optional: false, required: false
  public get forgetAfter() {
    return this.getNumberAttribute('forget_after');
  }

  // learning_duration - computed: true, optional: false, required: false
  public get learningDuration() {
    return this.getNumberAttribute('learning_duration');
  }
}
export class DataDatadogSecurityMonitoringRulesRulesOptions extends cdktf.ComplexComputedList {

  // detection_method - computed: true, optional: false, required: false
  public get detectionMethod() {
    return this.getStringAttribute('detection_method');
  }

  // evaluation_window - computed: true, optional: false, required: false
  public get evaluationWindow() {
    return this.getNumberAttribute('evaluation_window');
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
  public get newValueOptions() {
    return this.interpolationForAttribute('new_value_options') as any;
  }
}
export class DataDatadogSecurityMonitoringRulesRulesQuery extends cdktf.ComplexComputedList {

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}
export class DataDatadogSecurityMonitoringRulesRules extends cdktf.ComplexComputedList {

  // case - computed: true, optional: false, required: false
  public get case() {
    return this.interpolationForAttribute('case') as any;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
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
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.interpolationForAttribute('query') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules.html datadog_security_monitoring_rules}
*/
export class DataDatadogSecurityMonitoringRules extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_rules.html datadog_security_monitoring_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogSecurityMonitoringRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogSecurityMonitoringRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_rules',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultOnlyFilter = config.defaultOnlyFilter;
    this._nameFilter = config.nameFilter;
    this._tagsFilter = config.tagsFilter;
    this._userOnlyFilter = config.userOnlyFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_only_filter - computed: false, optional: true, required: false
  private _defaultOnlyFilter?: boolean;
  public get defaultOnlyFilter() {
    return this.getBooleanAttribute('default_only_filter');
  }
  public set defaultOnlyFilter(value: boolean ) {
    this._defaultOnlyFilter = value;
  }
  public resetDefaultOnlyFilter() {
    this._defaultOnlyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOnlyFilterInput() {
    return this._defaultOnlyFilter
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string;
  public get nameFilter() {
    return this.getStringAttribute('name_filter');
  }
  public set nameFilter(value: string ) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter
  }

  // rule_ids - computed: true, optional: false, required: false
  public get ruleIds() {
    return this.getListAttribute('rule_ids');
  }

  // rules - computed: true, optional: false, required: false
  public rules(index: string) {
    return new DataDatadogSecurityMonitoringRulesRules(this, 'rules', index);
  }

  // tags_filter - computed: false, optional: true, required: false
  private _tagsFilter?: string[];
  public get tagsFilter() {
    return this.getListAttribute('tags_filter');
  }
  public set tagsFilter(value: string[] ) {
    this._tagsFilter = value;
  }
  public resetTagsFilter() {
    this._tagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsFilterInput() {
    return this._tagsFilter
  }

  // user_only_filter - computed: false, optional: true, required: false
  private _userOnlyFilter?: boolean;
  public get userOnlyFilter() {
    return this.getBooleanAttribute('user_only_filter');
  }
  public set userOnlyFilter(value: boolean ) {
    this._userOnlyFilter = value;
  }
  public resetUserOnlyFilter() {
    this._userOnlyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userOnlyFilterInput() {
    return this._userOnlyFilter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_only_filter: cdktf.booleanToTerraform(this._defaultOnlyFilter),
      name_filter: cdktf.stringToTerraform(this._nameFilter),
      tags_filter: cdktf.listMapper(cdktf.stringToTerraform)(this._tagsFilter),
      user_only_filter: cdktf.booleanToTerraform(this._userOnlyFilter),
    };
  }
}
