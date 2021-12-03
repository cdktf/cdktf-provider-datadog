// https://www.terraform.io/docs/providers/datadog/d/monitors.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogMonitorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of monitor tags to limit the search. This filters on the tags set on the monitor itself.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitors.html#monitor_tags_filter DataDatadogMonitors#monitor_tags_filter}
  */
  readonly monitorTagsFilter?: string[];
  /**
  * A monitor name to limit the search.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitors.html#name_filter DataDatadogMonitors#name_filter}
  */
  readonly nameFilter?: string;
  /**
  * A list of tags to limit the search. This filters on the monitor scope.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitors.html#tags_filter DataDatadogMonitors#tags_filter}
  */
  readonly tagsFilter?: string[];
}
export class DataDatadogMonitorsMonitors extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/monitors.html datadog_monitors}
*/
export class DataDatadogMonitors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_monitors";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/monitors.html datadog_monitors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogMonitorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogMonitorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_monitors',
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitor_tags_filter - computed: false, optional: true, required: false
  private _monitorTagsFilter?: string[]; 
  public get monitorTagsFilter() {
    return this.getListAttribute('monitor_tags_filter');
  }
  public set monitorTagsFilter(value: string[]) {
    this._monitorTagsFilter = value;
  }
  public resetMonitorTagsFilter() {
    this._monitorTagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTagsFilterInput() {
    return this._monitorTagsFilter;
  }

  // monitors - computed: true, optional: false, required: false
  public monitors(index: string) {
    return new DataDatadogMonitorsMonitors(this, 'monitors', index);
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
