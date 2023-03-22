// https://www.terraform.io/docs/providers/datadog/r/service_level_objective
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLevelObjectiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of this service level objective.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#description ServiceLevelObjective#description}
  */
  readonly description?: string;
  /**
  * A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#force_delete ServiceLevelObjective#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * A static set of groups to filter monitor-based SLOs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#groups ServiceLevelObjective#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#id ServiceLevelObjective#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A static set of monitor IDs to use as part of the SLO
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#monitor_ids ServiceLevelObjective#monitor_ids}
  */
  readonly monitorIds?: number[];
  /**
  * Name of Datadog service level objective
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#name ServiceLevelObjective#name}
  */
  readonly name: string;
  /**
  * A list of tags to associate with your service level objective. This can help you categorize and filter service level objectives in the service level objectives page of the UI. Note: it's not currently possible to filter by these tags when querying via the API
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#tags ServiceLevelObjective#tags}
  */
  readonly tags?: string[];
  /**
  * The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#target_threshold ServiceLevelObjective#target_threshold}
  */
  readonly targetThreshold?: number;
  /**
  * The primary time frame for the objective. The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#timeframe ServiceLevelObjective#timeframe}
  */
  readonly timeframe?: string;
  /**
  * The type of the service level objective. The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/service-level-objectives/#create-a-slo-object). Valid values are `metric`, `monitor`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#type ServiceLevelObjective#type}
  */
  readonly type: string;
  /**
  * Whether or not to validate the SLO.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#validate ServiceLevelObjective#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * The objective's warning value in `(0,100)`. This must be greater than the target value and match the corresponding thresholds of the primary time frame.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#warning_threshold ServiceLevelObjective#warning_threshold}
  */
  readonly warningThreshold?: number;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#query ServiceLevelObjective#query}
  */
  readonly query?: ServiceLevelObjectiveQuery;
  /**
  * thresholds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#thresholds ServiceLevelObjective#thresholds}
  */
  readonly thresholds: ServiceLevelObjectiveThresholds[] | cdktf.IResolvable;
}
export interface ServiceLevelObjectiveQuery {
  /**
  * The sum of the `total` events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#denominator ServiceLevelObjective#denominator}
  */
  readonly denominator: string;
  /**
  * The sum of all the `good` events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#numerator ServiceLevelObjective#numerator}
  */
  readonly numerator: string;
}

export function serviceLevelObjectiveQueryToTerraform(struct?: ServiceLevelObjectiveQueryOutputReference | ServiceLevelObjectiveQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denominator: cdktf.stringToTerraform(struct!.denominator),
    numerator: cdktf.stringToTerraform(struct!.numerator),
  }
}

export class ServiceLevelObjectiveQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceLevelObjectiveQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominator = this._denominator;
    }
    if (this._numerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.numerator = this._numerator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjectiveQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._denominator = undefined;
      this._numerator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._denominator = value.denominator;
      this._numerator = value.numerator;
    }
  }

  // denominator - computed: false, optional: false, required: true
  private _denominator?: string; 
  public get denominator() {
    return this.getStringAttribute('denominator');
  }
  public set denominator(value: string) {
    this._denominator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorInput() {
    return this._denominator;
  }

  // numerator - computed: false, optional: false, required: true
  private _numerator?: string; 
  public get numerator() {
    return this.getStringAttribute('numerator');
  }
  public set numerator(value: string) {
    this._numerator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numeratorInput() {
    return this._numerator;
  }
}
export interface ServiceLevelObjectiveThresholds {
  /**
  * The objective's target in `(0,100)`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#target ServiceLevelObjective#target}
  */
  readonly target: number;
  /**
  * The time frame for the objective. The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#timeframe ServiceLevelObjective#timeframe}
  */
  readonly timeframe: string;
  /**
  * The objective's warning value in `(0,100)`. This must be greater than the target value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective#warning ServiceLevelObjective#warning}
  */
  readonly warning?: number;
}

export function serviceLevelObjectiveThresholdsToTerraform(struct?: ServiceLevelObjectiveThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.numberToTerraform(struct!.target),
    timeframe: cdktf.stringToTerraform(struct!.timeframe),
    warning: cdktf.numberToTerraform(struct!.warning),
  }
}

export class ServiceLevelObjectiveThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLevelObjectiveThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframe = this._timeframe;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjectiveThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._timeframe = undefined;
      this._warning = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._timeframe = value.timeframe;
      this._warning = value.warning;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_display - computed: true, optional: false, required: false
  public get targetDisplay() {
    return this.getStringAttribute('target_display');
  }

  // timeframe - computed: false, optional: false, required: true
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: number; 
  public get warning() {
    return this.getNumberAttribute('warning');
  }
  public set warning(value: number) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // warning_display - computed: true, optional: false, required: false
  public get warningDisplay() {
    return this.getStringAttribute('warning_display');
  }
}

export class ServiceLevelObjectiveThresholdsList extends cdktf.ComplexList {
  public internalValue? : ServiceLevelObjectiveThresholds[] | cdktf.IResolvable

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
  public get(index: number): ServiceLevelObjectiveThresholdsOutputReference {
    return new ServiceLevelObjectiveThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective datadog_service_level_objective}
*/
export class ServiceLevelObjective extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_service_level_objective";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective datadog_service_level_objective} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLevelObjectiveConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLevelObjectiveConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_service_level_objective',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.23.0',
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
    this._forceDelete = config.forceDelete;
    this._groups = config.groups;
    this._id = config.id;
    this._monitorIds = config.monitorIds;
    this._name = config.name;
    this._tags = config.tags;
    this._targetThreshold = config.targetThreshold;
    this._timeframe = config.timeframe;
    this._type = config.type;
    this._validate = config.validate;
    this._warningThreshold = config.warningThreshold;
    this._query.internalValue = config.query;
    this._thresholds.internalValue = config.thresholds;
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

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // monitor_ids - computed: false, optional: true, required: false
  private _monitorIds?: number[]; 
  public get monitorIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('monitor_ids')));
  }
  public set monitorIds(value: number[]) {
    this._monitorIds = value;
  }
  public resetMonitorIds() {
    this._monitorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdsInput() {
    return this._monitorIds;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_threshold - computed: true, optional: true, required: false
  private _targetThreshold?: number; 
  public get targetThreshold() {
    return this.getNumberAttribute('target_threshold');
  }
  public set targetThreshold(value: number) {
    this._targetThreshold = value;
  }
  public resetTargetThreshold() {
    this._targetThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetThresholdInput() {
    return this._targetThreshold;
  }

  // timeframe - computed: true, optional: true, required: false
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  public resetTimeframe() {
    this._timeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
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

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktf.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // warning_threshold - computed: true, optional: true, required: false
  private _warningThreshold?: number; 
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }
  public set warningThreshold(value: number) {
    this._warningThreshold = value;
  }
  public resetWarningThreshold() {
    this._warningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }

  // query - computed: false, optional: true, required: false
  private _query = new ServiceLevelObjectiveQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: ServiceLevelObjectiveQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // thresholds - computed: false, optional: false, required: true
  private _thresholds = new ServiceLevelObjectiveThresholdsList(this, "thresholds", false);
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: ServiceLevelObjectiveThresholds[] | cdktf.IResolvable) {
    this._thresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      monitor_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._monitorIds),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_threshold: cdktf.numberToTerraform(this._targetThreshold),
      timeframe: cdktf.stringToTerraform(this._timeframe),
      type: cdktf.stringToTerraform(this._type),
      validate: cdktf.booleanToTerraform(this._validate),
      warning_threshold: cdktf.numberToTerraform(this._warningThreshold),
      query: serviceLevelObjectiveQueryToTerraform(this._query.internalValue),
      thresholds: cdktf.listMapper(serviceLevelObjectiveThresholdsToTerraform, true)(this._thresholds.internalValue),
    };
  }
}
