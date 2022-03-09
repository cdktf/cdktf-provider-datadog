// https://www.terraform.io/docs/providers/datadog/d/logs_indexes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogLogsIndexesConfig extends cdktf.TerraformMetaArguments {
}
export class DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter extends cdktf.ComplexComputedList {

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // sample_rate - computed: true, optional: false, required: false
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
}
export class DataDatadogLogsIndexesLogsIndexesExclusionFilter extends cdktf.ComplexComputedList {

  // filter - computed: true, optional: false, required: false
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataDatadogLogsIndexesLogsIndexesFilter extends cdktf.ComplexComputedList {

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}
export class DataDatadogLogsIndexesLogsIndexes extends cdktf.ComplexComputedList {

  // daily_limit - computed: true, optional: false, required: false
  public get dailyLimit() {
    return this.getNumberAttribute('daily_limit');
  }

  // exclusion_filter - computed: true, optional: false, required: false
  public get exclusionFilter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exclusion_filter');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/logs_indexes datadog_logs_indexes}
*/
export class DataDatadogLogsIndexes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_logs_indexes";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/logs_indexes datadog_logs_indexes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogLogsIndexesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogLogsIndexesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_indexes',
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logs_indexes - computed: true, optional: false, required: false
  public logsIndexes(index: string) {
    return new DataDatadogLogsIndexesLogsIndexes(this, 'logs_indexes', index, false);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
