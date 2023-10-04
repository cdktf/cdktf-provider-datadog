// https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/logs_pipeline_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsPipelineOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/logs_pipeline_order#id LogsPipelineOrder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name attribute in the resource `datadog_logs_pipeline_order` needs to be unique. It's recommended to use the same value as the resource name. No related field is available in [Logs Pipeline API](https://docs.datadoghq.com/api/v1/logs-pipelines/#get-pipeline-order).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/logs_pipeline_order#name LogsPipelineOrder#name}
  */
  readonly name: string;
  /**
  * The pipeline IDs list. The order of pipeline IDs in this attribute defines the overall pipeline order for logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/logs_pipeline_order#pipelines LogsPipelineOrder#pipelines}
  */
  readonly pipelines: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/logs_pipeline_order datadog_logs_pipeline_order}
*/
export class LogsPipelineOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_pipeline_order";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/logs_pipeline_order datadog_logs_pipeline_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsPipelineOrderConfig
  */
  public constructor(scope: Construct, id: string, config: LogsPipelineOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_pipeline_order',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.30.0',
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
    this._name = config.name;
    this._pipelines = config.pipelines;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // pipelines - computed: false, optional: false, required: true
  private _pipelines?: string[]; 
  public get pipelines() {
    return this.getListAttribute('pipelines');
  }
  public set pipelines(value: string[]) {
    this._pipelines = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelinesInput() {
    return this._pipelines;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pipelines: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pipelines),
    };
  }
}
