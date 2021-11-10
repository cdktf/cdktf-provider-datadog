// https://www.terraform.io/docs/providers/datadog/r/downtime.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DowntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optionally specify an end date when this downtime should expire
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#end Downtime#end}
  */
  readonly end?: number;
  /**
  * String representing date and time to end the downtime in RFC3339 format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#end_date Downtime#end_date}
  */
  readonly endDate?: string;
  /**
  * An optional message to provide when creating the downtime, can include notification handles
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#message Downtime#message}
  */
  readonly message?: string;
  /**
  * When specified, this downtime will only apply to this monitor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#monitor_id Downtime#monitor_id}
  */
  readonly monitorId?: number;
  /**
  * A list of monitor tags (up to 32) to base the scheduled downtime on. Only monitors that have all selected tags are silenced
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#monitor_tags Downtime#monitor_tags}
  */
  readonly monitorTags?: string[];
  /**
  * specify the group scope to which this downtime applies. For everything use '*'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#scope Downtime#scope}
  */
  readonly scope: string[];
  /**
  * Specify when this downtime should start
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#start Downtime#start}
  */
  readonly start?: number;
  /**
  * String representing date and time to start the downtime in RFC3339 format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#start_date Downtime#start_date}
  */
  readonly startDate?: string;
  /**
  * The timezone for the downtime, default UTC
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#timezone Downtime#timezone}
  */
  readonly timezone?: string;
  /**
  * recurrence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#recurrence Downtime#recurrence}
  */
  readonly recurrence?: DowntimeRecurrence;
}
export interface DowntimeRecurrence {
  /**
  * How often to repeat as an integer. For example to repeat every 3 days, select a `type` of `days` and a `period` of `3`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#period Downtime#period}
  */
  readonly period?: number;
  /**
  * The RRULE standard for defining recurring events. For example, to have a recurring event on the first day of each month, use `FREQ=MONTHLY;INTERVAL=1`. Most common rrule options from the iCalendar Spec are supported. Attributes specifying the duration in RRULE are not supported (for example, `DTSTART`, `DTEND`, `DURATION`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#rrule Downtime#rrule}
  */
  readonly rrule?: string;
  /**
  * One of `days`, `weeks`, `months`, or `years`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#type Downtime#type}
  */
  readonly type: string;
  /**
  * The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#until_date Downtime#until_date}
  */
  readonly untilDate?: number;
  /**
  * How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#until_occurrences Downtime#until_occurrences}
  */
  readonly untilOccurrences?: number;
  /**
  * A list of week days to repeat on. Choose from: `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` or `Sun`. Only applicable when `type` is `weeks`. First letter must be capitalized.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html#week_days Downtime#week_days}
  */
  readonly weekDays?: string[];
}

function downtimeRecurrenceToTerraform(struct?: DowntimeRecurrenceOutputReference | DowntimeRecurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.numberToTerraform(struct!.period),
    rrule: cdktf.stringToTerraform(struct!.rrule),
    type: cdktf.stringToTerraform(struct!.type),
    until_date: cdktf.numberToTerraform(struct!.untilDate),
    until_occurrences: cdktf.numberToTerraform(struct!.untilOccurrences),
    week_days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekDays),
  }
}

export class DowntimeRecurrenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // period - computed: false, optional: true, required: false
  private _period?: number | undefined; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number | undefined) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period
  }

  // rrule - computed: false, optional: true, required: false
  private _rrule?: string | undefined; 
  public get rrule() {
    return this.getStringAttribute('rrule');
  }
  public set rrule(value: string | undefined) {
    this._rrule = value;
  }
  public resetRrule() {
    this._rrule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rruleInput() {
    return this._rrule
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // until_date - computed: false, optional: true, required: false
  private _untilDate?: number | undefined; 
  public get untilDate() {
    return this.getNumberAttribute('until_date');
  }
  public set untilDate(value: number | undefined) {
    this._untilDate = value;
  }
  public resetUntilDate() {
    this._untilDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilDateInput() {
    return this._untilDate
  }

  // until_occurrences - computed: false, optional: true, required: false
  private _untilOccurrences?: number | undefined; 
  public get untilOccurrences() {
    return this.getNumberAttribute('until_occurrences');
  }
  public set untilOccurrences(value: number | undefined) {
    this._untilOccurrences = value;
  }
  public resetUntilOccurrences() {
    this._untilOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilOccurrencesInput() {
    return this._untilOccurrences
  }

  // week_days - computed: false, optional: true, required: false
  private _weekDays?: string[] | undefined; 
  public get weekDays() {
    return this.getListAttribute('week_days');
  }
  public set weekDays(value: string[] | undefined) {
    this._weekDays = value;
  }
  public resetWeekDays() {
    this._weekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysInput() {
    return this._weekDays
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html datadog_downtime}
*/
export class Downtime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_downtime";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/downtime.html datadog_downtime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DowntimeConfig
  */
  public constructor(scope: Construct, id: string, config: DowntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_downtime',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._end = config.end;
    this._endDate = config.endDate;
    this._message = config.message;
    this._monitorId = config.monitorId;
    this._monitorTags = config.monitorTags;
    this._scope = config.scope;
    this._start = config.start;
    this._startDate = config.startDate;
    this._timezone = config.timezone;
    this._recurrence = config.recurrence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active') as any;
  }

  // active_child_id - computed: true, optional: false, required: false
  public get activeChildId() {
    return this.getNumberAttribute('active_child_id');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
  }

  // end - computed: false, optional: true, required: false
  private _end?: number | undefined; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number | undefined) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string | undefined; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string | undefined) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: false, optional: true, required: false
  private _message?: string | undefined; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string | undefined) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message
  }

  // monitor_id - computed: false, optional: true, required: false
  private _monitorId?: number | undefined; 
  public get monitorId() {
    return this.getNumberAttribute('monitor_id');
  }
  public set monitorId(value: number | undefined) {
    this._monitorId = value;
  }
  public resetMonitorId() {
    this._monitorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId
  }

  // monitor_tags - computed: false, optional: true, required: false
  private _monitorTags?: string[] | undefined; 
  public get monitorTags() {
    return this.getListAttribute('monitor_tags');
  }
  public set monitorTags(value: string[] | undefined) {
    this._monitorTags = value;
  }
  public resetMonitorTags() {
    this._monitorTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTagsInput() {
    return this._monitorTags
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // start - computed: false, optional: true, required: false
  private _start?: number | undefined; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number | undefined) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string | undefined; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string | undefined) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string | undefined; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string | undefined) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence?: DowntimeRecurrence | undefined; 
  private __recurrenceOutput = new DowntimeRecurrenceOutputReference(this as any, "recurrence", true);
  public get recurrence() {
    return this.__recurrenceOutput;
  }
  public putRecurrence(value: DowntimeRecurrence | undefined) {
    this._recurrence = value;
  }
  public resetRecurrence() {
    this._recurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end: cdktf.numberToTerraform(this._end),
      end_date: cdktf.stringToTerraform(this._endDate),
      message: cdktf.stringToTerraform(this._message),
      monitor_id: cdktf.numberToTerraform(this._monitorId),
      monitor_tags: cdktf.listMapper(cdktf.stringToTerraform)(this._monitorTags),
      scope: cdktf.listMapper(cdktf.stringToTerraform)(this._scope),
      start: cdktf.numberToTerraform(this._start),
      start_date: cdktf.stringToTerraform(this._startDate),
      timezone: cdktf.stringToTerraform(this._timezone),
      recurrence: downtimeRecurrenceToTerraform(this._recurrence),
    };
  }
}
