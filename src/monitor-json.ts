// https://www.terraform.io/docs/providers/datadog/r/monitor_json.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorJsonConfig extends cdktf.TerraformMetaArguments {
  /**
  * The JSON formatted definition of the monitor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_json.html#monitor MonitorJson#monitor}
  */
  readonly monitor: string;
  /**
  * The URL of the monitor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_json.html#url MonitorJson#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/monitor_json.html datadog_monitor_json}
*/
export class MonitorJson extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_monitor_json";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/monitor_json.html datadog_monitor_json} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorJsonConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorJsonConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_monitor_json',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._monitor = config.monitor;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitor - computed: false, optional: false, required: true
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      monitor: cdktf.stringToTerraform(this._monitor),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}
