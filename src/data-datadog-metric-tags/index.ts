// https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/data-sources/metric_tags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogMetricTagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The metric for which to fetch tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/data-sources/metric_tags#metric DataDatadogMetricTags#metric}
  */
  readonly metric: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/data-sources/metric_tags datadog_metric_tags}
*/
export class DataDatadogMetricTags extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_metric_tags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogMetricTags resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogMetricTags to import
  * @param importFromId The id of the existing DataDatadogMetricTags that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/data-sources/metric_tags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogMetricTags to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_metric_tags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/data-sources/metric_tags datadog_metric_tags} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogMetricTagsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogMetricTagsConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_metric_tags',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.65.0',
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
    this._metric = config.metric;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metric: cdktf.stringToTerraform(this._metric),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
