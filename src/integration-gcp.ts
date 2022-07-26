// https://www.terraform.io/docs/providers/datadog/r/integration_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Silence monitors for expected GCE instance shutdowns.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_gcp#automute IntegrationGcp#automute}
  */
  readonly automute?: boolean | cdktf.IResolvable;
  /**
  * Your email found in your JSON service account key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_gcp#client_email IntegrationGcp#client_email}
  */
  readonly clientEmail: string;
  /**
  * Your ID found in your JSON service account key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_gcp#client_id IntegrationGcp#client_id}
  */
  readonly clientId: string;
  /**
  * Limit the GCE instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_gcp#host_filters IntegrationGcp#host_filters}
  */
  readonly hostFilters?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_gcp#id IntegrationGcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Your private key name found in your JSON service account key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_gcp#private_key IntegrationGcp#private_key}
  */
  readonly privateKey: string;
  /**
  * Your private key ID found in your JSON service account key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_gcp#private_key_id IntegrationGcp#private_key_id}
  */
  readonly privateKeyId: string;
  /**
  * Your Google Cloud project ID found in your JSON service account key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_gcp#project_id IntegrationGcp#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/integration_gcp datadog_integration_gcp}
*/
export class IntegrationGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_gcp";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/integration_gcp datadog_integration_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationGcpConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_gcp',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automute = config.automute;
    this._clientEmail = config.clientEmail;
    this._clientId = config.clientId;
    this._hostFilters = config.hostFilters;
    this._id = config.id;
    this._privateKey = config.privateKey;
    this._privateKeyId = config.privateKeyId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automute - computed: false, optional: true, required: false
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: false, required: true
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automute: cdktf.booleanToTerraform(this._automute),
      client_email: cdktf.stringToTerraform(this._clientEmail),
      client_id: cdktf.stringToTerraform(this._clientId),
      host_filters: cdktf.stringToTerraform(this._hostFilters),
      id: cdktf.stringToTerraform(this._id),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_id: cdktf.stringToTerraform(this._privateKeyId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
