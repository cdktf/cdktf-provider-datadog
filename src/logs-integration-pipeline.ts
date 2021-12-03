// https://www.terraform.io/docs/providers/datadog/r/logs_integration_pipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsIntegrationPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean value to enable your pipeline.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_integration_pipeline.html#is_enabled LogsIntegrationPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/logs_integration_pipeline.html datadog_logs_integration_pipeline}
*/
export class LogsIntegrationPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_logs_integration_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/logs_integration_pipeline.html datadog_logs_integration_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsIntegrationPipelineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogsIntegrationPipelineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_integration_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._isEnabled = config.isEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
    };
  }
}
