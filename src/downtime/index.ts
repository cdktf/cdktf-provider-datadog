// https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DowntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#end Downtime#end}
  */
  readonly end?: number;
  /**
  * String representing date and time to end the downtime in RFC3339 format.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#end_date Downtime#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#id Downtime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An optional message to provide when creating the downtime, can include notification handles
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#message Downtime#message}
  */
  readonly message?: string;
  /**
  * When specified, this downtime will only apply to this monitor
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#monitor_id Downtime#monitor_id}
  */
  readonly monitorId?: number;
  /**
  * A list of monitor tags (up to 32) to base the scheduled downtime on. Only monitors that have all selected tags are silenced
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#monitor_tags Downtime#monitor_tags}
  */
  readonly monitorTags?: string[];
  /**
  * When true the first recovery notification during the downtime will be muted
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#mute_first_recovery_notification Downtime#mute_first_recovery_notification}
  */
  readonly muteFirstRecoveryNotification?: boolean | cdktf.IResolvable;
  /**
  * specify the group scope to which this downtime applies. For everything use '*'
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#scope Downtime#scope}
  */
  readonly scope: string[];
  /**
  * Specify when this downtime should start. Accepts a Unix timestamp in UTC.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#start Downtime#start}
  */
  readonly start?: number;
  /**
  * String representing date and time to start the downtime in RFC3339 format.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#start_date Downtime#start_date}
  */
  readonly startDate?: string;
  /**
  * The timezone for the downtime, default UTC. Follows IANA timezone database identifiers.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#timezone Downtime#timezone}
  */
  readonly timezone?: string;
  /**
  * recurrence block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#recurrence Downtime#recurrence}
  */
  readonly recurrence?: DowntimeRecurrence;
}
export interface DowntimeRecurrence {
  /**
  * How often to repeat as an integer. For example to repeat every 3 days, select a `type` of `days` and a `period` of `3`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#period Downtime#period}
  */
  readonly period?: number;
  /**
  * The RRULE standard for defining recurring events. For example, to have a recurring event on the first day of each month, use `FREQ=MONTHLY;INTERVAL=1`. Most common rrule options from the iCalendar Spec are supported. Attributes specifying the duration in RRULE are not supported (for example, `DTSTART`, `DTEND`, `DURATION`). Only applicable when `type` is `rrule`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#rrule Downtime#rrule}
  */
  readonly rrule?: string;
  /**
  * One of `days`, `weeks`, `months`, `years`, or `rrule`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#type Downtime#type}
  */
  readonly type: string;
  /**
  * The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#until_date Downtime#until_date}
  */
  readonly untilDate?: number;
  /**
  * How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#until_occurrences Downtime#until_occurrences}
  */
  readonly untilOccurrences?: number;
  /**
  * A list of week days to repeat on. Choose from: `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` or `Sun`. Only applicable when `type` is `weeks`. First letter must be capitalized.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime#week_days Downtime#week_days}
  */
  readonly weekDays?: string[];
}

export function downtimeRecurrenceToTerraform(struct?: DowntimeRecurrenceOutputReference | DowntimeRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.numberToTerraform(struct!.period),
    rrule: cdktf.stringToTerraform(struct!.rrule),
    type: cdktf.stringToTerraform(struct!.type),
    until_date: cdktf.numberToTerraform(struct!.untilDate),
    until_occurrences: cdktf.numberToTerraform(struct!.untilOccurrences),
    week_days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekDays),
  }
}

export class DowntimeRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DowntimeRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._rrule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrule = this._rrule;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._untilDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.untilDate = this._untilDate;
    }
    if (this._untilOccurrences !== undefined) {
      hasAnyValues = true;
      internalValueResult.untilOccurrences = this._untilOccurrences;
    }
    if (this._weekDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDays = this._weekDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DowntimeRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._period = undefined;
      this._rrule = undefined;
      this._type = undefined;
      this._untilDate = undefined;
      this._untilOccurrences = undefined;
      this._weekDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._period = value.period;
      this._rrule = value.rrule;
      this._type = value.type;
      this._untilDate = value.untilDate;
      this._untilOccurrences = value.untilOccurrences;
      this._weekDays = value.weekDays;
    }
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
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
    return this._type;
  }

  // until_date - computed: false, optional: true, required: false
  private _untilDate?: number; 
  public get untilDate() {
    return this.getNumberAttribute('until_date');
  }
  public set untilDate(value: number) {
    this._untilDate = value;
  }
  public resetUntilDate() {
    this._untilDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilDateInput() {
    return this._untilDate;
  }

  // until_occurrences - computed: false, optional: true, required: false
  private _untilOccurrences?: number; 
  public get untilOccurrences() {
    return this.getNumberAttribute('until_occurrences');
  }
  public set untilOccurrences(value: number) {
    this._untilOccurrences = value;
  }
  public resetUntilOccurrences() {
    this._untilOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilOccurrencesInput() {
    return this._untilOccurrences;
  }

  // week_days - computed: false, optional: true, required: false
  private _weekDays?: string[]; 
  public get weekDays() {
    return this.getListAttribute('week_days');
  }
  public set weekDays(value: string[]) {
    this._weekDays = value;
  }
  public resetWeekDays() {
    this._weekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysInput() {
    return this._weekDays;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime datadog_downtime}
*/
export class Downtime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_downtime";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/downtime datadog_downtime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DowntimeConfig
  */
  public constructor(scope: Construct, id: string, config: DowntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_downtime',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.24.0',
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
    this._end = config.end;
    this._endDate = config.endDate;
    this._id = config.id;
    this._message = config.message;
    this._monitorId = config.monitorId;
    this._monitorTags = config.monitorTags;
    this._muteFirstRecoveryNotification = config.muteFirstRecoveryNotification;
    this._scope = config.scope;
    this._start = config.start;
    this._startDate = config.startDate;
    this._timezone = config.timezone;
    this._recurrence.internalValue = config.recurrence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // active_child_id - computed: true, optional: false, required: false
  public get activeChildId() {
    return this.getNumberAttribute('active_child_id');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
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

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // monitor_id - computed: false, optional: true, required: false
  private _monitorId?: number; 
  public get monitorId() {
    return this.getNumberAttribute('monitor_id');
  }
  public set monitorId(value: number) {
    this._monitorId = value;
  }
  public resetMonitorId() {
    this._monitorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId;
  }

  // monitor_tags - computed: false, optional: true, required: false
  private _monitorTags?: string[]; 
  public get monitorTags() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor_tags'));
  }
  public set monitorTags(value: string[]) {
    this._monitorTags = value;
  }
  public resetMonitorTags() {
    this._monitorTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTagsInput() {
    return this._monitorTags;
  }

  // mute_first_recovery_notification - computed: false, optional: true, required: false
  private _muteFirstRecoveryNotification?: boolean | cdktf.IResolvable; 
  public get muteFirstRecoveryNotification() {
    return this.getBooleanAttribute('mute_first_recovery_notification');
  }
  public set muteFirstRecoveryNotification(value: boolean | cdktf.IResolvable) {
    this._muteFirstRecoveryNotification = value;
  }
  public resetMuteFirstRecoveryNotification() {
    this._muteFirstRecoveryNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteFirstRecoveryNotificationInput() {
    return this._muteFirstRecoveryNotification;
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
    return this._scope;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
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

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new DowntimeRecurrenceOutputReference(this, "recurrence");
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: DowntimeRecurrence) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end: cdktf.numberToTerraform(this._end),
      end_date: cdktf.stringToTerraform(this._endDate),
      id: cdktf.stringToTerraform(this._id),
      message: cdktf.stringToTerraform(this._message),
      monitor_id: cdktf.numberToTerraform(this._monitorId),
      monitor_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorTags),
      mute_first_recovery_notification: cdktf.booleanToTerraform(this._muteFirstRecoveryNotification),
      scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scope),
      start: cdktf.numberToTerraform(this._start),
      start_date: cdktf.stringToTerraform(this._startDate),
      timezone: cdktf.stringToTerraform(this._timezone),
      recurrence: downtimeRecurrenceToTerraform(this._recurrence.internalValue),
    };
  }
}
