// https://www.terraform.io/docs/providers/datadog/d/monitor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of monitor tags to limit the search. This filters on the tags set on the monitor itself.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitor.html#monitor_tags_filter DataDatadogMonitor#monitor_tags_filter}
  */
  readonly monitorTagsFilter?: string[];
  /**
  * A monitor name to limit the search.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitor.html#name_filter DataDatadogMonitor#name_filter}
  */
  readonly nameFilter?: string;
  /**
  * A list of tags to limit the search. This filters on the monitor scope.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitor.html#tags_filter DataDatadogMonitor#tags_filter}
  */
  readonly tagsFilter?: string[];
}
export class DataDatadogMonitorMonitorThresholdWindows extends cdktf.ComplexComputedList {

  // recovery_window - computed: true, optional: false, required: false
  public get recoveryWindow() {
    return this.getStringAttribute('recovery_window');
  }

  // trigger_window - computed: true, optional: false, required: false
  public get triggerWindow() {
    return this.getStringAttribute('trigger_window');
  }
}
export class DataDatadogMonitorMonitorThresholds extends cdktf.ComplexComputedList {

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getStringAttribute('critical');
  }

  // critical_recovery - computed: true, optional: false, required: false
  public get criticalRecovery() {
    return this.getStringAttribute('critical_recovery');
  }

  // ok - computed: true, optional: false, required: false
  public get ok() {
    return this.getStringAttribute('ok');
  }

  // unknown - computed: true, optional: false, required: false
  public get unknown() {
    return this.getStringAttribute('unknown');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getStringAttribute('warning');
  }

  // warning_recovery - computed: true, optional: false, required: false
  public get warningRecovery() {
    return this.getStringAttribute('warning_recovery');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/monitor.html datadog_monitor}
*/
export class DataDatadogMonitor extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/monitor.html datadog_monitor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogMonitorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogMonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_monitor',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._monitorTagsFilter = config.monitorTagsFilter;
    this._nameFilter = config.nameFilter;
    this._tagsFilter = config.tagsFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_logs_sample - computed: true, optional: false, required: false
  public get enableLogsSample() {
    return this.getBooleanAttribute('enable_logs_sample');
  }

  // escalation_message - computed: true, optional: false, required: false
  public get escalationMessage() {
    return this.getStringAttribute('escalation_message');
  }

  // evaluation_delay - computed: true, optional: false, required: false
  public get evaluationDelay() {
    return this.getNumberAttribute('evaluation_delay');
  }

  // groupby_simple_monitor - computed: true, optional: false, required: false
  public get groupbySimpleMonitor() {
    return this.getBooleanAttribute('groupby_simple_monitor');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_tags - computed: true, optional: false, required: false
  public get includeTags() {
    return this.getBooleanAttribute('include_tags');
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // monitor_tags_filter - computed: false, optional: true, required: false
  private _monitorTagsFilter?: string[];
  public get monitorTagsFilter() {
    return this.getListAttribute('monitor_tags_filter');
  }
  public set monitorTagsFilter(value: string[] ) {
    this._monitorTagsFilter = value;
  }
  public resetMonitorTagsFilter() {
    this._monitorTagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTagsFilterInput() {
    return this._monitorTagsFilter
  }

  // monitor_threshold_windows - computed: true, optional: false, required: false
  public monitorThresholdWindows(index: string) {
    return new DataDatadogMonitorMonitorThresholdWindows(this, 'monitor_threshold_windows', index);
  }

  // monitor_thresholds - computed: true, optional: false, required: false
  public monitorThresholds(index: string) {
    return new DataDatadogMonitorMonitorThresholds(this, 'monitor_thresholds', index);
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // new_host_delay - computed: true, optional: false, required: false
  public get newHostDelay() {
    return this.getNumberAttribute('new_host_delay');
  }

  // no_data_timeframe - computed: true, optional: false, required: false
  public get noDataTimeframe() {
    return this.getNumberAttribute('no_data_timeframe');
  }

  // notify_audit - computed: true, optional: false, required: false
  public get notifyAudit() {
    return this.getBooleanAttribute('notify_audit');
  }

  // notify_no_data - computed: true, optional: false, required: false
  public get notifyNoData() {
    return this.getBooleanAttribute('notify_no_data');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // renotify_interval - computed: true, optional: false, required: false
  public get renotifyInterval() {
    return this.getNumberAttribute('renotify_interval');
  }

  // require_full_window - computed: true, optional: false, required: false
  public get requireFullWindow() {
    return this.getBooleanAttribute('require_full_window');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
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

  // timeout_h - computed: true, optional: false, required: false
  public get timeoutH() {
    return this.getNumberAttribute('timeout_h');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      monitor_tags_filter: cdktf.listMapper(cdktf.stringToTerraform)(this._monitorTagsFilter),
      name_filter: cdktf.stringToTerraform(this._nameFilter),
      tags_filter: cdktf.listMapper(cdktf.stringToTerraform)(this._tagsFilter),
    };
  }
}
