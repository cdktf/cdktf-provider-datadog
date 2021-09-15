// https://www.terraform.io/docs/providers/datadog/d/security_monitoring_filters.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogSecurityMonitoringFiltersConfig extends cdktf.TerraformMetaArguments {
}
export class DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}
export class DataDatadogSecurityMonitoringFiltersFilters extends cdktf.ComplexComputedList {

  // exclusion_filter - computed: true, optional: false, required: false
  public get exclusionFilter() {
    return this.interpolationForAttribute('exclusion_filter') as any;
  }

  // filtered_data_type - computed: true, optional: false, required: false
  public get filteredDataType() {
    return this.getStringAttribute('filtered_data_type');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_filters.html datadog_security_monitoring_filters}
*/
export class DataDatadogSecurityMonitoringFilters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_security_monitoring_filters";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/security_monitoring_filters.html datadog_security_monitoring_filters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogSecurityMonitoringFiltersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogSecurityMonitoringFiltersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_filters',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: true, optional: false, required: false
  public filters(index: string) {
    return new DataDatadogSecurityMonitoringFiltersFilters(this, 'filters', index);
  }

  // filters_ids - computed: true, optional: false, required: false
  public get filtersIds() {
    return this.getListAttribute('filters_ids');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
