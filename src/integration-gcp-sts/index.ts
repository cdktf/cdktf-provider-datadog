// https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGcpStsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tags to be associated with GCP metrics and service checks from your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#account_tags IntegrationGcpSts#account_tags}
  */
  readonly accountTags?: string[];
  /**
  * Silence monitors for expected GCE instance shutdowns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#automute IntegrationGcpSts#automute}
  */
  readonly automute?: boolean | cdktf.IResolvable;
  /**
  * Your service account email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#client_email IntegrationGcpSts#client_email}
  */
  readonly clientEmail: string;
  /**
  * Your Host Filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#host_filters IntegrationGcpSts#host_filters}
  */
  readonly hostFilters?: string[];
  /**
  * Whether Datadog collects cloud security posture management resources from your GCP project. If enabled, requires `resource_collection_enabled` to also be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#is_cspm_enabled IntegrationGcpSts#is_cspm_enabled}
  */
  readonly isCspmEnabled?: boolean | cdktf.IResolvable;
  /**
  * When enabled, Datadog will attempt to collect Security Command Center Findings. Note: This requires additional permissions on the service account. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#is_security_command_center_enabled IntegrationGcpSts#is_security_command_center_enabled}
  */
  readonly isSecurityCommandCenterEnabled?: boolean | cdktf.IResolvable;
  /**
  * When enabled, Datadog scans for all resources in your GCP environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#resource_collection_enabled IntegrationGcpSts#resource_collection_enabled}
  */
  readonly resourceCollectionEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts datadog_integration_gcp_sts}
*/
export class IntegrationGcpSts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_gcp_sts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationGcpSts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationGcpSts to import
  * @param importFromId The id of the existing IntegrationGcpSts that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationGcpSts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_gcp_sts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts datadog_integration_gcp_sts} Resource
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
        providerVersion: '3.46.0',
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
    this._accountTags = config.accountTags;
    this._automute = config.automute;
    this._clientEmail = config.clientEmail;
    this._hostFilters = config.hostFilters;
    this._isCspmEnabled = config.isCspmEnabled;
    this._isSecurityCommandCenterEnabled = config.isSecurityCommandCenterEnabled;
    this._resourceCollectionEnabled = config.resourceCollectionEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_tags - computed: false, optional: true, required: false
  private _accountTags?: string[]; 
  public get accountTags() {
    return cdktf.Fn.tolist(this.getListAttribute('account_tags'));
  }
  public set accountTags(value: string[]) {
    this._accountTags = value;
  }
  public resetAccountTags() {
    this._accountTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTagsInput() {
    return this._accountTags;
  }

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

  // is_security_command_center_enabled - computed: true, optional: true, required: false
  private _isSecurityCommandCenterEnabled?: boolean | cdktf.IResolvable; 
  public get isSecurityCommandCenterEnabled() {
    return this.getBooleanAttribute('is_security_command_center_enabled');
  }
  public set isSecurityCommandCenterEnabled(value: boolean | cdktf.IResolvable) {
    this._isSecurityCommandCenterEnabled = value;
  }
  public resetIsSecurityCommandCenterEnabled() {
    this._isSecurityCommandCenterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecurityCommandCenterEnabledInput() {
    return this._isSecurityCommandCenterEnabled;
  }

  // resource_collection_enabled - computed: true, optional: true, required: false
  private _resourceCollectionEnabled?: boolean | cdktf.IResolvable; 
  public get resourceCollectionEnabled() {
    return this.getBooleanAttribute('resource_collection_enabled');
  }
  public set resourceCollectionEnabled(value: boolean | cdktf.IResolvable) {
    this._resourceCollectionEnabled = value;
  }
  public resetResourceCollectionEnabled() {
    this._resourceCollectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCollectionEnabledInput() {
    return this._resourceCollectionEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountTags),
      automute: cdktf.booleanToTerraform(this._automute),
      client_email: cdktf.stringToTerraform(this._clientEmail),
      host_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostFilters),
      is_cspm_enabled: cdktf.booleanToTerraform(this._isCspmEnabled),
      is_security_command_center_enabled: cdktf.booleanToTerraform(this._isSecurityCommandCenterEnabled),
      resource_collection_enabled: cdktf.booleanToTerraform(this._resourceCollectionEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      automute: {
        value: cdktf.booleanToHclTerraform(this._automute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_email: {
        value: cdktf.stringToHclTerraform(this._clientEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostFilters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_cspm_enabled: {
        value: cdktf.booleanToHclTerraform(this._isCspmEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_security_command_center_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSecurityCommandCenterEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_collection_enabled: {
        value: cdktf.booleanToHclTerraform(this._resourceCollectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
