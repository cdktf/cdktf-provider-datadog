// https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/metric_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/metric_metadata#description MetricMetadata#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/metric_metadata#id MetricMetadata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/metric_metadata#metric MetricMetadata#metric}
  */
  readonly metric: string;
  /**
  * Per unit of the metric such as `second` in `bytes per second`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/metric_metadata#per_unit MetricMetadata#per_unit}
  */
  readonly perUnit?: string;
  /**
  * A short name of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/metric_metadata#short_name MetricMetadata#short_name}
  */
  readonly shortName?: string;
  /**
  * If applicable, statsd flush interval in seconds for the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/metric_metadata#statsd_interval MetricMetadata#statsd_interval}
  */
  readonly statsdInterval?: number;
  /**
  * Metric type such as `count`, `gauge`, or `rate`. Updating a metric of type `distribution` is not supported. If you would like to see the `distribution` type returned, contact [Datadog support](https://docs.datadoghq.com/help/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/metric_metadata#type MetricMetadata#type}
  */
  readonly type?: string;
  /**
  * Primary unit of the metric such as `byte` or `operation`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/metric_metadata#unit MetricMetadata#unit}
  */
  readonly unit?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/metric_metadata datadog_metric_metadata}
*/
export class MetricMetadata extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_metric_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricMetadata to import
  * @param importFromId The id of the existing MetricMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/metric_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_metric_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/metric_metadata datadog_metric_metadata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: MetricMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_metric_metadata',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.53.0',
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
    this._description = config.description;
    this._id = config.id;
    this._metric = config.metric;
    this._perUnit = config.perUnit;
    this._shortName = config.shortName;
    this._statsdInterval = config.statsdInterval;
    this._type = config.type;
    this._unit = config.unit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // per_unit - computed: false, optional: true, required: false
  private _perUnit?: string; 
  public get perUnit() {
    return this.getStringAttribute('per_unit');
  }
  public set perUnit(value: string) {
    this._perUnit = value;
  }
  public resetPerUnit() {
    this._perUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perUnitInput() {
    return this._perUnit;
  }

  // short_name - computed: false, optional: true, required: false
  private _shortName?: string; 
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  public resetShortName() {
    this._shortName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName;
  }

  // statsd_interval - computed: false, optional: true, required: false
  private _statsdInterval?: number; 
  public get statsdInterval() {
    return this.getNumberAttribute('statsd_interval');
  }
  public set statsdInterval(value: number) {
    this._statsdInterval = value;
  }
  public resetStatsdInterval() {
    this._statsdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsdIntervalInput() {
    return this._statsdInterval;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      metric: cdktf.stringToTerraform(this._metric),
      per_unit: cdktf.stringToTerraform(this._perUnit),
      short_name: cdktf.stringToTerraform(this._shortName),
      statsd_interval: cdktf.numberToTerraform(this._statsdInterval),
      type: cdktf.stringToTerraform(this._type),
      unit: cdktf.stringToTerraform(this._unit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_unit: {
        value: cdktf.stringToHclTerraform(this._perUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_name: {
        value: cdktf.stringToHclTerraform(this._shortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statsd_interval: {
        value: cdktf.numberToHclTerraform(this._statsdInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
