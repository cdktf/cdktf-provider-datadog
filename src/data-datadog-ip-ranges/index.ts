// https://www.terraform.io/docs/providers/datadog/d/ip_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogIpRangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/ip_ranges#id DataDatadogIpRanges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/ip_ranges datadog_ip_ranges}
*/
export class DataDatadogIpRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_ip_ranges";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/ip_ranges datadog_ip_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogIpRangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.22.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agents_ipv4 - computed: true, optional: false, required: false
  public get agentsIpv4() {
    return this.getListAttribute('agents_ipv4');
  }

  // agents_ipv6 - computed: true, optional: false, required: false
  public get agentsIpv6() {
    return this.getListAttribute('agents_ipv6');
  }

  // api_ipv4 - computed: true, optional: false, required: false
  public get apiIpv4() {
    return this.getListAttribute('api_ipv4');
  }

  // api_ipv6 - computed: true, optional: false, required: false
  public get apiIpv6() {
    return this.getListAttribute('api_ipv6');
  }

  // apm_ipv4 - computed: true, optional: false, required: false
  public get apmIpv4() {
    return this.getListAttribute('apm_ipv4');
  }

  // apm_ipv6 - computed: true, optional: false, required: false
  public get apmIpv6() {
    return this.getListAttribute('apm_ipv6');
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

  // logs_ipv4 - computed: true, optional: false, required: false
  public get logsIpv4() {
    return this.getListAttribute('logs_ipv4');
  }

  // logs_ipv6 - computed: true, optional: false, required: false
  public get logsIpv6() {
    return this.getListAttribute('logs_ipv6');
  }

  // orchestrator_ipv4 - computed: true, optional: false, required: false
  public get orchestratorIpv4() {
    return this.getListAttribute('orchestrator_ipv4');
  }

  // orchestrator_ipv6 - computed: true, optional: false, required: false
  public get orchestratorIpv6() {
    return this.getListAttribute('orchestrator_ipv6');
  }

  // process_ipv4 - computed: true, optional: false, required: false
  public get processIpv4() {
    return this.getListAttribute('process_ipv4');
  }

  // process_ipv6 - computed: true, optional: false, required: false
  public get processIpv6() {
    return this.getListAttribute('process_ipv6');
  }

  // synthetics_ipv4 - computed: true, optional: false, required: false
  public get syntheticsIpv4() {
    return this.getListAttribute('synthetics_ipv4');
  }

  // synthetics_ipv4_by_location - computed: true, optional: false, required: false
  private _syntheticsIpv4ByLocation = new cdktf.StringMap(this, "synthetics_ipv4_by_location");
  public get syntheticsIpv4ByLocation() {
    return this._syntheticsIpv4ByLocation;
  }

  // synthetics_ipv6 - computed: true, optional: false, required: false
  public get syntheticsIpv6() {
    return this.getListAttribute('synthetics_ipv6');
  }

  // synthetics_ipv6_by_location - computed: true, optional: false, required: false
  private _syntheticsIpv6ByLocation = new cdktf.StringMap(this, "synthetics_ipv6_by_location");
  public get syntheticsIpv6ByLocation() {
    return this._syntheticsIpv6ByLocation;
  }

  // webhooks_ipv4 - computed: true, optional: false, required: false
  public get webhooksIpv4() {
    return this.getListAttribute('webhooks_ipv4');
  }

  // webhooks_ipv6 - computed: true, optional: false, required: false
  public get webhooksIpv6() {
    return this.getListAttribute('webhooks_ipv6');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
