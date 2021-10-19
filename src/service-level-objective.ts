// https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLevelObjectiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of this service level objective.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#description ServiceLevelObjective#description}
  */
  readonly description?: string;
  /**
  * A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. dashboards).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#force_delete ServiceLevelObjective#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * A static set of groups to filter monitor-based SLOs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#groups ServiceLevelObjective#groups}
  */
  readonly groups?: string[];
  /**
  * A static set of monitor IDs to use as part of the SLO
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#monitor_ids ServiceLevelObjective#monitor_ids}
  */
  readonly monitorIds?: number[];
  /**
  * Name of Datadog service level objective
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#name ServiceLevelObjective#name}
  */
  readonly name: string;
  /**
  * A list of tags to associate with your service level objective. This can help you categorize and filter service level objectives in the service level objectives page of the UI. Note: it's not currently possible to filter by these tags when querying via the API
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#tags ServiceLevelObjective#tags}
  */
  readonly tags?: string[];
  /**
  * The type of the service level objective. The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/service-level-objectives/#create-a-slo-object). Valid values are `metric`, `monitor`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#type ServiceLevelObjective#type}
  */
  readonly type: string;
  /**
  * Whether or not to validate the SLO.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#validate ServiceLevelObjective#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#query ServiceLevelObjective#query}
  */
  readonly query?: ServiceLevelObjectiveQuery;
  /**
  * thresholds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#thresholds ServiceLevelObjective#thresholds}
  */
  readonly thresholds: ServiceLevelObjectiveThresholds[];
}
export interface ServiceLevelObjectiveQuery {
  /**
  * The sum of the `total` events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#denominator ServiceLevelObjective#denominator}
  */
  readonly denominator: string;
  /**
  * The sum of all the `good` events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#numerator ServiceLevelObjective#numerator}
  */
  readonly numerator: string;
}

function serviceLevelObjectiveQueryToTerraform(struct?: ServiceLevelObjectiveQueryOutputReference | ServiceLevelObjectiveQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denominator: cdktf.stringToTerraform(struct!.denominator),
    numerator: cdktf.stringToTerraform(struct!.numerator),
  }
}

export class ServiceLevelObjectiveQueryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._denominator
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
    return this._numerator
  }
}
export interface ServiceLevelObjectiveThresholds {
  /**
  * The objective's target in`[0,100]`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#target ServiceLevelObjective#target}
  */
  readonly target: number;
  /**
  * A string representation of the target that indicates its precision. It uses trailing zeros to show significant decimal places (e.g. `98.00`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#target_display ServiceLevelObjective#target_display}
  */
  readonly targetDisplay?: string;
  /**
  * The time frame for the objective. The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#timeframe ServiceLevelObjective#timeframe}
  */
  readonly timeframe: string;
  /**
  * The objective's warning value in `[0,100]`. This must be greater than the target value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#warning ServiceLevelObjective#warning}
  */
  readonly warning?: number;
  /**
  * A string representation of the warning target (see the description of the target_display field for details).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html#warning_display ServiceLevelObjective#warning_display}
  */
  readonly warningDisplay?: string;
}

function serviceLevelObjectiveThresholdsToTerraform(struct?: ServiceLevelObjectiveThresholds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.numberToTerraform(struct!.target),
    target_display: cdktf.stringToTerraform(struct!.targetDisplay),
    timeframe: cdktf.stringToTerraform(struct!.timeframe),
    warning: cdktf.numberToTerraform(struct!.warning),
    warning_display: cdktf.stringToTerraform(struct!.warningDisplay),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html datadog_service_level_objective}
*/
export class ServiceLevelObjective extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_service_level_objective";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/service_level_objective.html datadog_service_level_objective} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLevelObjectiveConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLevelObjectiveConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_service_level_objective',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._forceDelete = config.forceDelete;
    this._groups = config.groups;
    this._monitorIds = config.monitorIds;
    this._name = config.name;
    this._tags = config.tags;
    this._type = config.type;
    this._validate = config.validate;
    this._query = config.query;
    this._thresholds = config.thresholds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable | undefined; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete') as any;
  }
  public set forceDelete(value: boolean | cdktf.IResolvable | undefined) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[] | undefined; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[] | undefined) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitor_ids - computed: false, optional: true, required: false
  private _monitorIds?: number[] | undefined; 
  public get monitorIds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('monitor_ids') as any;
  }
  public set monitorIds(value: number[] | undefined) {
    this._monitorIds = value;
  }
  public resetMonitorIds() {
    this._monitorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdsInput() {
    return this._monitorIds
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
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[] | undefined; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable | undefined; 
  public get validate() {
    return this.getBooleanAttribute('validate') as any;
  }
  public set validate(value: boolean | cdktf.IResolvable | undefined) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate
  }

  // query - computed: false, optional: true, required: false
  private _query?: ServiceLevelObjectiveQuery | undefined; 
  private __queryOutput = new ServiceLevelObjectiveQueryOutputReference(this as any, "query", true);
  public get query() {
    return this.__queryOutput;
  }
  public putQuery(value: ServiceLevelObjectiveQuery | undefined) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
  }

  // thresholds - computed: false, optional: false, required: true
  private _thresholds?: ServiceLevelObjectiveThresholds[]; 
  public get thresholds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('thresholds') as any;
  }
  public set thresholds(value: ServiceLevelObjectiveThresholds[]) {
    this._thresholds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      groups: cdktf.listMapper(cdktf.stringToTerraform)(this._groups),
      monitor_ids: cdktf.listMapper(cdktf.numberToTerraform)(this._monitorIds),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      validate: cdktf.booleanToTerraform(this._validate),
      query: serviceLevelObjectiveQueryToTerraform(this._query),
      thresholds: cdktf.listMapper(serviceLevelObjectiveThresholdsToTerraform)(this._thresholds),
    };
  }
}
