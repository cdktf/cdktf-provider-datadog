// https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_gcp_sts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGcpStsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Silence monitors for expected GCE instance shutdowns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_gcp_sts#automute IntegrationGcpSts#automute}
  */
  readonly automute?: boolean | cdktf.IResolvable;
  /**
  * Your service account email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_gcp_sts#client_email IntegrationGcpSts#client_email}
  */
  readonly clientEmail: string;
  /**
  * Your Host Filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_gcp_sts#host_filters IntegrationGcpSts#host_filters}
  */
  readonly hostFilters?: string[];
  /**
  * When enabled, Datadog performs configuration checks across your Google Cloud environment by continuously scanning every resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_gcp_sts#is_cspm_enabled IntegrationGcpSts#is_cspm_enabled}
  */
  readonly isCspmEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_gcp_sts datadog_integration_gcp_sts}
*/
export class IntegrationGcpSts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_gcp_sts";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_gcp_sts datadog_integration_gcp_sts} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationGcpStsConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationGcpStsConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_gcp_sts',
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
    this._automute = config.automute;
    this._clientEmail = config.clientEmail;
    this._hostFilters = config.hostFilters;
    this._isCspmEnabled = config.isCspmEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automute - computed: true, optional: true, required: false
  private _automute?: boolean | cdktf.IResolvable; 
  public get automute() {
    return this.getBooleanAttribute('automute');
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

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // delegate_account_email - computed: true, optional: false, required: false
  public get delegateAccountEmail() {
    return this.getStringAttribute('delegate_account_email');
  }

  // host_filters - computed: false, optional: true, required: false
  private _hostFilters?: string[]; 
  public get hostFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('host_filters'));
  }
  public set hostFilters(value: string[]) {
    this._hostFilters = value;
  }
  public resetHostFilters() {
    this._hostFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostFiltersInput() {
    return this._hostFilters;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_cspm_enabled - computed: true, optional: true, required: false
  private _isCspmEnabled?: boolean | cdktf.IResolvable; 
  public get isCspmEnabled() {
    return this.getBooleanAttribute('is_cspm_enabled');
  }
  public set isCspmEnabled(value: boolean | cdktf.IResolvable) {
    this._isCspmEnabled = value;
  }
  public resetIsCspmEnabled() {
    this._isCspmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCspmEnabledInput() {
    return this._isCspmEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automute: cdktf.booleanToTerraform(this._automute),
      client_email: cdktf.stringToTerraform(this._clientEmail),
      host_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostFilters),
      is_cspm_enabled: cdktf.booleanToTerraform(this._isCspmEnabled),
    };
  }
}
