// https://www.terraform.io/docs/providers/datadog/r/logs_index.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the index.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index.html#name LogsIndex#name}
  */
  readonly name: string;
  /**
  * exclusion_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index.html#exclusion_filter LogsIndex#exclusion_filter}
  */
  readonly exclusionFilter?: LogsIndexExclusionFilter[];
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index.html#filter LogsIndex#filter}
  */
  readonly filter: LogsIndexFilter[];
}
export interface LogsIndexExclusionFilterFilter {
  /**
  * Only logs matching the filter criteria and the query of the parent index will be considered for this exclusion filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index.html#query LogsIndex#query}
  */
  readonly query?: string;
  /**
  * The fraction of logs excluded by the exclusion filter, when active.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index.html#sample_rate LogsIndex#sample_rate}
  */
  readonly sampleRate?: number;
}

function logsIndexExclusionFilterFilterToTerraform(struct?: LogsIndexExclusionFilterFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}

export interface LogsIndexExclusionFilter {
  /**
  * A boolean stating if the exclusion is active or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index.html#is_enabled LogsIndex#is_enabled}
  */
  readonly isEnabled?: boolean;
  /**
  * The name of the exclusion filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index.html#name LogsIndex#name}
  */
  readonly name?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index.html#filter LogsIndex#filter}
  */
  readonly filter?: LogsIndexExclusionFilterFilter[];
}

function logsIndexExclusionFilterToTerraform(struct?: LogsIndexExclusionFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    filter: cdktf.listMapper(logsIndexExclusionFilterFilterToTerraform)(struct!.filter),
  }
}

export interface LogsIndexFilter {
  /**
  * Logs filter criteria. Only logs matching this filter criteria are considered for this index.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index.html#query LogsIndex#query}
  */
  readonly query: string;
}

function logsIndexFilterToTerraform(struct?: LogsIndexFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/logs_index.html datadog_logs_index}
*/
export class LogsIndex extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/logs_index.html datadog_logs_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsIndexConfig
  */
  public constructor(scope: Construct, id: string, config: LogsIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_index',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._exclusionFilter = config.exclusionFilter;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // exclusion_filter - computed: false, optional: true, required: false
  private _exclusionFilter?: LogsIndexExclusionFilter[];
  public get exclusionFilter() {
    return this.interpolationForAttribute('exclusion_filter') as any;
  }
  public set exclusionFilter(value: LogsIndexExclusionFilter[] ) {
    this._exclusionFilter = value;
  }
  public resetExclusionFilter() {
    this._exclusionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFilterInput() {
    return this._exclusionFilter
  }

  // filter - computed: false, optional: false, required: true
  private _filter: LogsIndexFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: LogsIndexFilter[]) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      exclusion_filter: cdktf.listMapper(logsIndexExclusionFilterToTerraform)(this._exclusionFilter),
      filter: cdktf.listMapper(logsIndexFilterToTerraform)(this._filter),
    };
  }
}
