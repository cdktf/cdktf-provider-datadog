// https://www.terraform.io/docs/providers/datadog/r/integration_aws_log_collection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsLogCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your AWS Account ID without dashes. If your account is a GovCloud or China account, specify the `access_key_id` here.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_log_collection.html#account_id IntegrationAwsLogCollection#account_id}
  */
  readonly accountId: string;
  /**
  * A list of services to collect logs from. See the [api docs](https://docs.datadoghq.com/api/v1/aws-logs-integration/#get-list-of-aws-log-ready-services) for more details on which services are supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_log_collection.html#services IntegrationAwsLogCollection#services}
  */
  readonly services: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_log_collection.html datadog_integration_aws_log_collection}
*/
export class IntegrationAwsLogCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_integration_aws_log_collection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_log_collection.html datadog_integration_aws_log_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsLogCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsLogCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_log_collection',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._services = config.services;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // services - computed: false, optional: false, required: true
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      services: cdktf.listMapper(cdktf.stringToTerraform)(this._services),
    };
  }
}
