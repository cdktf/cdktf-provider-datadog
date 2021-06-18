// https://www.terraform.io/docs/providers/datadog/r/slo_correction.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloCorrectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction.html#category SloCorrection#category}
  */
  readonly category: string;
  /**
  * Description of the correction being made.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction.html#description SloCorrection#description}
  */
  readonly description?: string;
  /**
  * Ending time of the correction in epoch seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction.html#end SloCorrection#end}
  */
  readonly end: number;
  /**
  * ID of the SLO that this correction will be applied to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction.html#slo_id SloCorrection#slo_id}
  */
  readonly sloId: string;
  /**
  * Starting time of the correction in epoch seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction.html#start SloCorrection#start}
  */
  readonly start: number;
  /**
  * The timezone to display in the UI for the correction times (defaults to "UTC")
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction.html#timezone SloCorrection#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction.html datadog_slo_correction}
*/
export class SloCorrection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction.html datadog_slo_correction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloCorrectionConfig
  */
  public constructor(scope: Construct, id: string, config: SloCorrectionConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_slo_correction',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._category = config.category;
    this._description = config.description;
    this._end = config.end;
    this._sloId = config.sloId;
    this._start = config.start;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category: string;
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // end - computed: false, optional: false, required: true
  private _end: number;
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // slo_id - computed: false, optional: false, required: true
  private _sloId: string;
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string) {
    this._sloId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdInput() {
    return this._sloId
  }

  // start - computed: false, optional: false, required: true
  private _start: number;
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string;
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string ) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      end: cdktf.numberToTerraform(this._end),
      slo_id: cdktf.stringToTerraform(this._sloId),
      start: cdktf.numberToTerraform(this._start),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }
}
