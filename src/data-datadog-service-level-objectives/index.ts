/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/service_level_objectives
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogServiceLevelObjectivesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Throw an error if no results are found. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/service_level_objectives#error_on_empty_result DataDatadogServiceLevelObjectives#error_on_empty_result}
  */
  readonly errorOnEmptyResult?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/service_level_objectives#id DataDatadogServiceLevelObjectives#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An array of SLO IDs to limit the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/service_level_objectives#ids DataDatadogServiceLevelObjectives#ids}
  */
  readonly ids?: string[];
  /**
  * Filter results based on SLO numerator and denominator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/service_level_objectives#metrics_query DataDatadogServiceLevelObjectives#metrics_query}
  */
  readonly metricsQuery?: string;
  /**
  * Filter results based on SLO names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/service_level_objectives#name_query DataDatadogServiceLevelObjectives#name_query}
  */
  readonly nameQuery?: string;
  /**
  * The query string to filter results based on SLO names. Some examples of queries include service:<service-name> and <slo-name>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/service_level_objectives#query DataDatadogServiceLevelObjectives#query}
  */
  readonly query?: string;
  /**
  * Filter results based on a single SLO tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/service_level_objectives#tags_query DataDatadogServiceLevelObjectives#tags_query}
  */
  readonly tagsQuery?: string;
}
export interface DataDatadogServiceLevelObjectivesSlos {
}

export function dataDatadogServiceLevelObjectivesSlosToTerraform(struct?: DataDatadogServiceLevelObjectivesSlos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogServiceLevelObjectivesSlosToHclTerraform(struct?: DataDatadogServiceLevelObjectivesSlos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogServiceLevelObjectivesSlosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogServiceLevelObjectivesSlos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogServiceLevelObjectivesSlos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class DataDatadogServiceLevelObjectivesSlosList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogServiceLevelObjectivesSlosOutputReference {
    return new DataDatadogServiceLevelObjectivesSlosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/service_level_objectives datadog_service_level_objectives}
*/
export class DataDatadogServiceLevelObjectives extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_service_level_objectives";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogServiceLevelObjectives resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogServiceLevelObjectives to import
  * @param importFromId The id of the existing DataDatadogServiceLevelObjectives that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/service_level_objectives#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogServiceLevelObjectives to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_service_level_objectives", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/service_level_objectives datadog_service_level_objectives} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogServiceLevelObjectivesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogServiceLevelObjectivesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_service_level_objectives',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.78.0',
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
    this._errorOnEmptyResult = config.errorOnEmptyResult;
    this._id = config.id;
    this._ids = config.ids;
    this._metricsQuery = config.metricsQuery;
    this._nameQuery = config.nameQuery;
    this._query = config.query;
    this._tagsQuery = config.tagsQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // error_on_empty_result - computed: false, optional: true, required: false
  private _errorOnEmptyResult?: boolean | cdktf.IResolvable; 
  public get errorOnEmptyResult() {
    return this.getBooleanAttribute('error_on_empty_result');
  }
  public set errorOnEmptyResult(value: boolean | cdktf.IResolvable) {
    this._errorOnEmptyResult = value;
  }
  public resetErrorOnEmptyResult() {
    this._errorOnEmptyResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOnEmptyResultInput() {
    return this._errorOnEmptyResult;
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

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
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

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // slos - computed: true, optional: false, required: false
  private _slos = new DataDatadogServiceLevelObjectivesSlosList(this, "slos", false);
  public get slos() {
    return this._slos;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      error_on_empty_result: cdktf.booleanToTerraform(this._errorOnEmptyResult),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      metrics_query: cdktf.stringToTerraform(this._metricsQuery),
      name_query: cdktf.stringToTerraform(this._nameQuery),
      query: cdktf.stringToTerraform(this._query),
      tags_query: cdktf.stringToTerraform(this._tagsQuery),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      error_on_empty_result: {
        value: cdktf.booleanToHclTerraform(this._errorOnEmptyResult),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      metrics_query: {
        value: cdktf.stringToHclTerraform(this._metricsQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_query: {
        value: cdktf.stringToHclTerraform(this._nameQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags_query: {
        value: cdktf.stringToHclTerraform(this._tagsQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
