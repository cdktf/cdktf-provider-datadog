// https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_fastly_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationFastlyServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fastly Account id.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_fastly_service#account_id IntegrationFastlyService#account_id}
  */
  readonly accountId?: string;
  /**
  * The ID of the Fastly service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_fastly_service#service_id IntegrationFastlyService#service_id}
  */
  readonly serviceId: string;
  /**
  * A list of tags for the Fastly service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_fastly_service#tags IntegrationFastlyService#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_fastly_service datadog_integration_fastly_service}
*/
export class IntegrationFastlyService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_fastly_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_fastly_service datadog_integration_fastly_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationFastlyServiceConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationFastlyServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_fastly_service',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.24.0',
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
    this._accountId = config.accountId;
    this._serviceId = config.serviceId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      service_id: cdktf.stringToTerraform(this._serviceId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }
}
