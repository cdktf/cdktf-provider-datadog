// https://www.terraform.io/docs/providers/datadog/d/service_level_objectives.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogServiceLevelObjectivesConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array of SLO IDs to limit the search.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objectives.html#ids DataDatadogServiceLevelObjectives#ids}
  */
  readonly ids?: string[];
  /**
  * Filter results based on SLO numerator and denominator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objectives.html#metrics_query DataDatadogServiceLevelObjectives#metrics_query}
  */
  readonly metricsQuery?: string;
  /**
  * Filter results based on SLO names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objectives.html#name_query DataDatadogServiceLevelObjectives#name_query}
  */
  readonly nameQuery?: string;
  /**
  * Filter results based on a single SLO tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objectives.html#tags_query DataDatadogServiceLevelObjectives#tags_query}
  */
  readonly tagsQuery?: string;
}
export class DataDatadogServiceLevelObjectivesSlos extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objectives.html datadog_service_level_objectives}
*/
export class DataDatadogServiceLevelObjectives extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_service_level_objectives";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objectives.html datadog_service_level_objectives} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogServiceLevelObjectivesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogServiceLevelObjectivesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_service_level_objectives',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ids = config.ids;
    this._metricsQuery = config.metricsQuery;
    this._nameQuery = config.nameQuery;
    this._tagsQuery = config.tagsQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[] | undefined; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[] | undefined) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids
  }

  // metrics_query - computed: false, optional: true, required: false
  private _metricsQuery?: string | undefined; 
  public get metricsQuery() {
    return this.getStringAttribute('metrics_query');
  }
  public set metricsQuery(value: string | undefined) {
    this._metricsQuery = value;
  }
  public resetMetricsQuery() {
    this._metricsQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsQueryInput() {
    return this._metricsQuery
  }

  // name_query - computed: false, optional: true, required: false
  private _nameQuery?: string | undefined; 
  public get nameQuery() {
    return this.getStringAttribute('name_query');
  }
  public set nameQuery(value: string | undefined) {
    this._nameQuery = value;
  }
  public resetNameQuery() {
    this._nameQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameQueryInput() {
    return this._nameQuery
  }

  // slos - computed: true, optional: false, required: false
  public slos(index: string) {
    return new DataDatadogServiceLevelObjectivesSlos(this, 'slos', index);
  }

  // tags_query - computed: false, optional: true, required: false
  private _tagsQuery?: string | undefined; 
  public get tagsQuery() {
    return this.getStringAttribute('tags_query');
  }
  public set tagsQuery(value: string | undefined) {
    this._tagsQuery = value;
  }
  public resetTagsQuery() {
    this._tagsQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsQueryInput() {
    return this._tagsQuery
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ids: cdktf.listMapper(cdktf.stringToTerraform)(this._ids),
      metrics_query: cdktf.stringToTerraform(this._metricsQuery),
      name_query: cdktf.stringToTerraform(this._nameQuery),
      tags_query: cdktf.stringToTerraform(this._tagsQuery),
    };
  }
}
