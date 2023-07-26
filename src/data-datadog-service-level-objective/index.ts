// https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/service_level_objective
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogServiceLevelObjectiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * A SLO ID to limit the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/service_level_objective#id DataDatadogServiceLevelObjective#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter results based on SLO numerator and denominator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/service_level_objective#metrics_query DataDatadogServiceLevelObjective#metrics_query}
  */
  readonly metricsQuery?: string;
  /**
  * Filter results based on SLO names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/service_level_objective#name_query DataDatadogServiceLevelObjective#name_query}
  */
  readonly nameQuery?: string;
  /**
  * Filter results based on a single SLO tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/service_level_objective#tags_query DataDatadogServiceLevelObjective#tags_query}
  */
  readonly tagsQuery?: string;
}
export interface DataDatadogServiceLevelObjectiveQuery {
}

export function dataDatadogServiceLevelObjectiveQueryToTerraform(struct?: DataDatadogServiceLevelObjectiveQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogServiceLevelObjectiveQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogServiceLevelObjectiveQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogServiceLevelObjectiveQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // denominator - computed: true, optional: false, required: false
  public get denominator() {
    return this.getStringAttribute('denominator');
  }

  // numerator - computed: true, optional: false, required: false
  public get numerator() {
    return this.getStringAttribute('numerator');
  }
}

export class DataDatadogServiceLevelObjectiveQueryList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogServiceLevelObjectiveQueryOutputReference {
    return new DataDatadogServiceLevelObjectiveQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/service_level_objective datadog_service_level_objective}
*/
export class DataDatadogServiceLevelObjective extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_service_level_objective";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/data-sources/service_level_objective datadog_service_level_objective} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogServiceLevelObjectiveConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogServiceLevelObjectiveConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_service_level_objective',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.28.0',
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
    this._id = config.id;
    this._metricsQuery = config.metricsQuery;
    this._nameQuery = config.nameQuery;
    this._tagsQuery = config.tagsQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: true, required: false
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

  // metrics_query - computed: false, optional: true, required: false
  private _metricsQuery?: string; 
  public get metricsQuery() {
    return this.getStringAttribute('metrics_query');
  }
  public set metricsQuery(value: string) {
    this._metricsQuery = value;
  }
  public resetMetricsQuery() {
    this._metricsQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsQueryInput() {
    return this._metricsQuery;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_query - computed: false, optional: true, required: false
  private _nameQuery?: string; 
  public get nameQuery() {
    return this.getStringAttribute('name_query');
  }
  public set nameQuery(value: string) {
    this._nameQuery = value;
  }
  public resetNameQuery() {
    this._nameQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameQueryInput() {
    return this._nameQuery;
  }

  // query - computed: true, optional: false, required: false
  private _query = new DataDatadogServiceLevelObjectiveQueryList(this, "query", false);
  public get query() {
    return this._query;
  }

  // tags_query - computed: false, optional: true, required: false
  private _tagsQuery?: string; 
  public get tagsQuery() {
    return this.getStringAttribute('tags_query');
  }
  public set tagsQuery(value: string) {
    this._tagsQuery = value;
  }
  public resetTagsQuery() {
    this._tagsQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsQueryInput() {
    return this._tagsQuery;
  }

  // target_threshold - computed: true, optional: false, required: false
  public get targetThreshold() {
    return this.getNumberAttribute('target_threshold');
  }

  // timeframe - computed: true, optional: false, required: false
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // warning_threshold - computed: true, optional: false, required: false
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metrics_query: cdktf.stringToTerraform(this._metricsQuery),
      name_query: cdktf.stringToTerraform(this._nameQuery),
      tags_query: cdktf.stringToTerraform(this._tagsQuery),
    };
  }
}
