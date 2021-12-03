// https://www.terraform.io/docs/providers/datadog/r/integration_azure.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Silence monitors for expected Azure VM shutdowns.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_azure.html#automute IntegrationAzure#automute}
  */
  readonly automute?: boolean | cdktf.IResolvable;
  /**
  * Your Azure web application ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_azure.html#client_id IntegrationAzure#client_id}
  */
  readonly clientId: string;
  /**
  * (Required for Initial Creation) Your Azure web application secret key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_azure.html#client_secret IntegrationAzure#client_secret}
  */
  readonly clientSecret: string;
  /**
  * String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure. Limit the Azure instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog. e.x. `env:production,deploymentgroup:red`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_azure.html#host_filters IntegrationAzure#host_filters}
  */
  readonly hostFilters?: string;
  /**
  * Your Azure Active Directory ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_azure.html#tenant_name IntegrationAzure#tenant_name}
  */
  readonly tenantName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/integration_azure.html datadog_integration_azure}
*/
export class IntegrationAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_integration_azure";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/integration_azure.html datadog_integration_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAzureConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_azure',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automute = config.automute;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._hostFilters = config.hostFilters;
    this._tenantName = config.tenantName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automute - computed: false, optional: true, required: false
  private _automute?: boolean | cdktf.IResolvable; 
  public get automute() {
    return this.getBooleanAttribute('automute') as any;
  }
  public set automute(value: boolean | cdktf.IResolvable) {
    this._automute = value;
  }
  public resetAutomute() {
    this._automute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automuteInput() {
    return this._automute;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // host_filters - computed: false, optional: true, required: false
  private _hostFilters?: string; 
  public get hostFilters() {
    return this.getStringAttribute('host_filters');
  }
  public set hostFilters(value: string) {
    this._hostFilters = value;
  }
  public resetHostFilters() {
    this._hostFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostFiltersInput() {
    return this._hostFilters;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automute: cdktf.booleanToTerraform(this._automute),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      host_filters: cdktf.stringToTerraform(this._hostFilters),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
    };
  }
}
