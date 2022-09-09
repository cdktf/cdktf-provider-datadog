// https://www.terraform.io/docs/providers/datadog/r/slo_correction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloCorrectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction#category SloCorrection#category}
  */
  readonly category: string;
  /**
  * Description of the correction being made.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction#description SloCorrection#description}
  */
  readonly description?: string;
  /**
  * Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction#duration SloCorrection#duration}
  */
  readonly duration?: number;
  /**
  * Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction#end SloCorrection#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction#id SloCorrection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Recurrence rules as defined in the iCalendar RFC 5545. Supported rules for SLO corrections are `FREQ`, `INTERVAL`, `COUNT` and `UNTIL`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction#rrule SloCorrection#rrule}
  */
  readonly rrule?: string;
  /**
  * ID of the SLO that this correction will be applied to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction#slo_id SloCorrection#slo_id}
  */
  readonly sloId: string;
  /**
  * Starting time of the correction in epoch seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction#start SloCorrection#start}
  */
  readonly start: number;
  /**
  * The timezone to display in the UI for the correction times (defaults to "UTC")
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction#timezone SloCorrection#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction datadog_slo_correction}
*/
export class SloCorrection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_slo_correction";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/slo_correction datadog_slo_correction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloCorrectionConfig
  */
  public constructor(scope: Construct, id: string, config: SloCorrectionConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_slo_correction',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.15.1',
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
    this._category = config.category;
    this._description = config.description;
    this._duration = config.duration;
    this._end = config.end;
    this._id = config.id;
    this._rrule = config.rrule;
    this._sloId = config.sloId;
    this._start = config.start;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

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

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
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

  // rrule - computed: false, optional: true, required: false
  private _rrule?: string; 
  public get rrule() {
    return this.getStringAttribute('rrule');
  }
  public set rrule(value: string) {
    this._rrule = value;
  }
  public resetRrule() {
    this._rrule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rruleInput() {
    return this._rrule;
  }

  // slo_id - computed: false, optional: false, required: true
  private _sloId?: string; 
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string) {
    this._sloId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdInput() {
    return this._sloId;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      duration: cdktf.numberToTerraform(this._duration),
      end: cdktf.numberToTerraform(this._end),
      id: cdktf.stringToTerraform(this._id),
      rrule: cdktf.stringToTerraform(this._rrule),
      slo_id: cdktf.stringToTerraform(this._sloId),
      start: cdktf.numberToTerraform(this._start),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }
}
