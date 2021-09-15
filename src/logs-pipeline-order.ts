// https://www.terraform.io/docs/providers/datadog/r/logs_pipeline_order.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsPipelineOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name attribute in the resource `datadog_logs_pipeline_order` needs to be unique. It's recommended to use the same value as the resource name. No related field is available in [Logs Pipeline API](https://docs.datadoghq.com/api/v1/logs-pipelines/#get-pipeline-order).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_pipeline_order.html#name LogsPipelineOrder#name}
  */
  readonly name: string;
  /**
  * The pipeline IDs list. The order of pipeline IDs in this attribute defines the overall pipeline order for logs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_pipeline_order.html#pipelines LogsPipelineOrder#pipelines}
  */
  readonly pipelines: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/logs_pipeline_order.html datadog_logs_pipeline_order}
*/
export class LogsPipelineOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_logs_pipeline_order";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/logs_pipeline_order.html datadog_logs_pipeline_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsPipelineOrderConfig
  */
  public constructor(scope: Construct, id: string, config: LogsPipelineOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_pipeline_order',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._pipelines = config.pipelines;
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

  // pipelines - computed: false, optional: false, required: true
  private _pipelines: string[];
  public get pipelines() {
    return this.getListAttribute('pipelines');
  }
  public set pipelines(value: string[]) {
    this._pipelines = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelinesInput() {
    return this._pipelines
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      pipelines: cdktf.listMapper(cdktf.stringToTerraform)(this._pipelines),
    };
  }
}
