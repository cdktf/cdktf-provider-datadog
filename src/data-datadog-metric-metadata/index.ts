/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/metric_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogMetricMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * The metric for which to fetch metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/metric_metadata#metric_name DataDatadogMetricMetadata#metric_name}
  */
  readonly metricName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/metric_metadata datadog_metric_metadata}
*/
export class DataDatadogMetricMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_metric_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogMetricMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogMetricMetadata to import
  * @param importFromId The id of the existing DataDatadogMetricMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/metric_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogMetricMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_metric_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/metric_metadata datadog_metric_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogMetricMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogMetricMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_metric_metadata',
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
    this._metricName = config.metricName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration - computed: true, optional: false, required: false
  public get integration() {
    return this.getStringAttribute('integration');
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // per_unit - computed: true, optional: false, required: false
  public get perUnit() {
    return this.getStringAttribute('per_unit');
  }

  // short_name - computed: true, optional: false, required: false
  public get shortName() {
    return this.getStringAttribute('short_name');
  }

  // statsd_interval - computed: true, optional: false, required: false
  public get statsdInterval() {
    return this.getNumberAttribute('statsd_interval');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metric_name: cdktf.stringToTerraform(this._metricName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
