// https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DowntimeScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The timezone in which to display the downtime's start and end times in Datadog applications. This is not used as an offset for scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#display_timezone DowntimeSchedule#display_timezone}
  */
  readonly displayTimezone?: string;
  /**
  * A message to include with notifications for this downtime. Email notifications can be sent to specific users by using the same `@username` notation as events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#message DowntimeSchedule#message}
  */
  readonly message?: string;
  /**
  * If the first recovery notification during a downtime should be muted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#mute_first_recovery_notification DowntimeSchedule#mute_first_recovery_notification}
  */
  readonly muteFirstRecoveryNotification?: boolean | cdktf.IResolvable;
  /**
  * States that will trigger a monitor notification when the `notify_end_types` action occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#notify_end_states DowntimeSchedule#notify_end_states}
  */
  readonly notifyEndStates?: string[];
  /**
  * Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#notify_end_types DowntimeSchedule#notify_end_types}
  */
  readonly notifyEndTypes?: string[];
  /**
  * The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#scope DowntimeSchedule#scope}
  */
  readonly scope: string;
  /**
  * monitor_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#monitor_identifier DowntimeSchedule#monitor_identifier}
  */
  readonly monitorIdentifier?: DowntimeScheduleMonitorIdentifier;
  /**
  * one_time_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#one_time_schedule DowntimeSchedule#one_time_schedule}
  */
  readonly oneTimeSchedule?: DowntimeScheduleOneTimeSchedule;
  /**
  * recurring_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#recurring_schedule DowntimeSchedule#recurring_schedule}
  */
  readonly recurringSchedule?: DowntimeScheduleRecurringSchedule;
}
export interface DowntimeScheduleMonitorIdentifier {
  /**
  * ID of the monitor to prevent notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#monitor_id DowntimeSchedule#monitor_id}
  */
  readonly monitorId?: number;
  /**
  * A list of monitor tags. For example, tags that are applied directly to monitors, not tags that are used in monitor queries (which are filtered by the scope parameter), to which the downtime applies. The resulting downtime applies to monitors that match **all** provided monitor tags. Setting `monitor_tags` to `[*]` configures the downtime to mute all monitors for the given scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#monitor_tags DowntimeSchedule#monitor_tags}
  */
  readonly monitorTags?: string[];
}

export function downtimeScheduleMonitorIdentifierToTerraform(struct?: DowntimeScheduleMonitorIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_id: cdktf.numberToTerraform(struct!.monitorId),
    monitor_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitorTags),
  }
}


export function downtimeScheduleMonitorIdentifierToHclTerraform(struct?: DowntimeScheduleMonitorIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_id: {
      value: cdktf.numberToHclTerraform(struct!.monitorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitorTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DowntimeScheduleMonitorIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DowntimeScheduleMonitorIdentifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorId = this._monitorId;
    }
    if (this._monitorTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorTags = this._monitorTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DowntimeScheduleMonitorIdentifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorId = undefined;
      this._monitorTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorId = value.monitorId;
      this._monitorTags = value.monitorTags;
    }
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
}
export interface DowntimeScheduleOneTimeSchedule {
  /**
  * ISO-8601 Datetime to end the downtime. Must include a UTC offset of zero. If not provided, the downtime never ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#end DowntimeSchedule#end}
  */
  readonly end?: string;
  /**
  * ISO-8601 Datetime to start the downtime. Must include a UTC offset of zero. If not provided, the downtime starts the moment it is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#start DowntimeSchedule#start}
  */
  readonly start?: string;
}

export function downtimeScheduleOneTimeScheduleToTerraform(struct?: DowntimeScheduleOneTimeSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function downtimeScheduleOneTimeScheduleToHclTerraform(struct?: DowntimeScheduleOneTimeSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DowntimeScheduleOneTimeScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DowntimeScheduleOneTimeSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DowntimeScheduleOneTimeSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DowntimeScheduleRecurringScheduleRecurrence {
  /**
  * The length of the downtime. Must begin with an integer and end with one of 'm', 'h', d', or 'w'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#duration DowntimeSchedule#duration}
  */
  readonly duration: string;
  /**
  * The `RRULE` standard for defining recurring events. For example, to have a recurring event on the first day of each month, set the type to `rrule` and set the `FREQ` to `MONTHLY` and `BYMONTHDAY` to `1`. Most common `rrule` options from the [iCalendar Spec](https://tools.ietf.org/html/rfc5545) are supported.  **Note**: Attributes specifying the duration in `RRULE` are not supported (for example, `DTSTART`, `DTEND`, `DURATION`). More examples available in this [downtime guide](https://docs.datadoghq.com/monitors/guide/suppress-alert-with-downtimes/?tab=api).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#rrule DowntimeSchedule#rrule}
  */
  readonly rrule: string;
  /**
  * ISO-8601 Datetime to start the downtime. Must not include a UTC offset. If not provided, the downtime starts the moment it is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#start DowntimeSchedule#start}
  */
  readonly start?: string;
}

export function downtimeScheduleRecurringScheduleRecurrenceToTerraform(struct?: DowntimeScheduleRecurringScheduleRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    rrule: cdktf.stringToTerraform(struct!.rrule),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function downtimeScheduleRecurringScheduleRecurrenceToHclTerraform(struct?: DowntimeScheduleRecurringScheduleRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rrule: {
      value: cdktf.stringToHclTerraform(struct!.rrule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DowntimeScheduleRecurringScheduleRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DowntimeScheduleRecurringScheduleRecurrence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._rrule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrule = this._rrule;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DowntimeScheduleRecurringScheduleRecurrence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._rrule = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._rrule = value.rrule;
      this._start = value.start;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // rrule - computed: false, optional: false, required: true
  private _rrule?: string; 
  public get rrule() {
    return this.getStringAttribute('rrule');
  }
  public set rrule(value: string) {
    this._rrule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rruleInput() {
    return this._rrule;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DowntimeScheduleRecurringScheduleRecurrenceList extends cdktf.ComplexList {
  public internalValue? : DowntimeScheduleRecurringScheduleRecurrence[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DowntimeScheduleRecurringScheduleRecurrenceOutputReference {
    return new DowntimeScheduleRecurringScheduleRecurrenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DowntimeScheduleRecurringSchedule {
  /**
  * The timezone in which to schedule the downtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#timezone DowntimeSchedule#timezone}
  */
  readonly timezone?: string;
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#recurrence DowntimeSchedule#recurrence}
  */
  readonly recurrence?: DowntimeScheduleRecurringScheduleRecurrence[] | cdktf.IResolvable;
}

export function downtimeScheduleRecurringScheduleToTerraform(struct?: DowntimeScheduleRecurringSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timezone: cdktf.stringToTerraform(struct!.timezone),
    recurrence: cdktf.listMapper(downtimeScheduleRecurringScheduleRecurrenceToTerraform, true)(struct!.recurrence),
  }
}


export function downtimeScheduleRecurringScheduleToHclTerraform(struct?: DowntimeScheduleRecurringSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence: {
      value: cdktf.listMapperHcl(downtimeScheduleRecurringScheduleRecurrenceToHclTerraform, true)(struct!.recurrence),
      isBlock: true,
      type: "list",
      storageClassType: "DowntimeScheduleRecurringScheduleRecurrenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DowntimeScheduleRecurringScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DowntimeScheduleRecurringSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._recurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DowntimeScheduleRecurringSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timezone = undefined;
      this._recurrence.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timezone = value.timezone;
      this._recurrence.internalValue = value.recurrence;
    }
  }

  // timezone - computed: true, optional: true, required: false
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
  private _recurrence = new DowntimeScheduleRecurringScheduleRecurrenceList(this, "recurrence", false);
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: DowntimeScheduleRecurringScheduleRecurrence[] | cdktf.IResolvable) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule datadog_downtime_schedule}
*/
export class DowntimeSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_downtime_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DowntimeSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DowntimeSchedule to import
  * @param importFromId The id of the existing DowntimeSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DowntimeSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_downtime_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/downtime_schedule datadog_downtime_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DowntimeScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DowntimeScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_downtime_schedule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.60.1',
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
    this._displayTimezone = config.displayTimezone;
    this._message = config.message;
    this._muteFirstRecoveryNotification = config.muteFirstRecoveryNotification;
    this._notifyEndStates = config.notifyEndStates;
    this._notifyEndTypes = config.notifyEndTypes;
    this._scope = config.scope;
    this._monitorIdentifier.internalValue = config.monitorIdentifier;
    this._oneTimeSchedule.internalValue = config.oneTimeSchedule;
    this._recurringSchedule.internalValue = config.recurringSchedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_timezone - computed: true, optional: true, required: false
  private _displayTimezone?: string; 
  public get displayTimezone() {
    return this.getStringAttribute('display_timezone');
  }
  public set displayTimezone(value: string) {
    this._displayTimezone = value;
  }
  public resetDisplayTimezone() {
    this._displayTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTimezoneInput() {
    return this._displayTimezone;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // mute_first_recovery_notification - computed: true, optional: true, required: false
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

  // notify_end_states - computed: true, optional: true, required: false
  private _notifyEndStates?: string[]; 
  public get notifyEndStates() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_end_states'));
  }
  public set notifyEndStates(value: string[]) {
    this._notifyEndStates = value;
  }
  public resetNotifyEndStates() {
    this._notifyEndStates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEndStatesInput() {
    return this._notifyEndStates;
  }

  // notify_end_types - computed: true, optional: true, required: false
  private _notifyEndTypes?: string[]; 
  public get notifyEndTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_end_types'));
  }
  public set notifyEndTypes(value: string[]) {
    this._notifyEndTypes = value;
  }
  public resetNotifyEndTypes() {
    this._notifyEndTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEndTypesInput() {
    return this._notifyEndTypes;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // monitor_identifier - computed: false, optional: true, required: false
  private _monitorIdentifier = new DowntimeScheduleMonitorIdentifierOutputReference(this, "monitor_identifier");
  public get monitorIdentifier() {
    return this._monitorIdentifier;
  }
  public putMonitorIdentifier(value: DowntimeScheduleMonitorIdentifier) {
    this._monitorIdentifier.internalValue = value;
  }
  public resetMonitorIdentifier() {
    this._monitorIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdentifierInput() {
    return this._monitorIdentifier.internalValue;
  }

  // one_time_schedule - computed: false, optional: true, required: false
  private _oneTimeSchedule = new DowntimeScheduleOneTimeScheduleOutputReference(this, "one_time_schedule");
  public get oneTimeSchedule() {
    return this._oneTimeSchedule;
  }
  public putOneTimeSchedule(value: DowntimeScheduleOneTimeSchedule) {
    this._oneTimeSchedule.internalValue = value;
  }
  public resetOneTimeSchedule() {
    this._oneTimeSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeScheduleInput() {
    return this._oneTimeSchedule.internalValue;
  }

  // recurring_schedule - computed: false, optional: true, required: false
  private _recurringSchedule = new DowntimeScheduleRecurringScheduleOutputReference(this, "recurring_schedule");
  public get recurringSchedule() {
    return this._recurringSchedule;
  }
  public putRecurringSchedule(value: DowntimeScheduleRecurringSchedule) {
    this._recurringSchedule.internalValue = value;
  }
  public resetRecurringSchedule() {
    this._recurringSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringScheduleInput() {
    return this._recurringSchedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_timezone: cdktf.stringToTerraform(this._displayTimezone),
      message: cdktf.stringToTerraform(this._message),
      mute_first_recovery_notification: cdktf.booleanToTerraform(this._muteFirstRecoveryNotification),
      notify_end_states: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifyEndStates),
      notify_end_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifyEndTypes),
      scope: cdktf.stringToTerraform(this._scope),
      monitor_identifier: downtimeScheduleMonitorIdentifierToTerraform(this._monitorIdentifier.internalValue),
      one_time_schedule: downtimeScheduleOneTimeScheduleToTerraform(this._oneTimeSchedule.internalValue),
      recurring_schedule: downtimeScheduleRecurringScheduleToTerraform(this._recurringSchedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_timezone: {
        value: cdktf.stringToHclTerraform(this._displayTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mute_first_recovery_notification: {
        value: cdktf.booleanToHclTerraform(this._muteFirstRecoveryNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_end_states: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifyEndStates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      notify_end_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifyEndTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_identifier: {
        value: downtimeScheduleMonitorIdentifierToHclTerraform(this._monitorIdentifier.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DowntimeScheduleMonitorIdentifier",
      },
      one_time_schedule: {
        value: downtimeScheduleOneTimeScheduleToHclTerraform(this._oneTimeSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DowntimeScheduleOneTimeSchedule",
      },
      recurring_schedule: {
        value: downtimeScheduleRecurringScheduleToHclTerraform(this._recurringSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DowntimeScheduleRecurringSchedule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
