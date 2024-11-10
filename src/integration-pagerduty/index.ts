// https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_pagerduty
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationPagerdutyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your PagerDuty API token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_pagerduty#api_token IntegrationPagerduty#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_pagerduty#id IntegrationPagerduty#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Array of your schedule URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_pagerduty#schedules IntegrationPagerduty#schedules}
  */
  readonly schedules?: string[];
  /**
  * Your PagerDuty account’s personalized subdomain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_pagerduty#subdomain IntegrationPagerduty#subdomain}
  */
  readonly subdomain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_pagerduty datadog_integration_pagerduty}
*/
export class IntegrationPagerduty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_pagerduty";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationPagerduty resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationPagerduty to import
  * @param importFromId The id of the existing IntegrationPagerduty that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_pagerduty#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationPagerduty to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_pagerduty", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_pagerduty datadog_integration_pagerduty} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationPagerdutyConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationPagerdutyConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_pagerduty',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.47.0',
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
    this._apiToken = config.apiToken;
    this._id = config.id;
    this._schedules = config.schedules;
    this._subdomain = config.subdomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
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

  // schedules - computed: false, optional: true, required: false
  private _schedules?: string[]; 
  public get schedules() {
    return this.getListAttribute('schedules');
  }
  public set schedules(value: string[]) {
    this._schedules = value;
  }
  public resetSchedules() {
    this._schedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules;
  }

  // subdomain - computed: false, optional: false, required: true
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token: cdktf.stringToTerraform(this._apiToken),
      id: cdktf.stringToTerraform(this._id),
      schedules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schedules),
      subdomain: cdktf.stringToTerraform(this._subdomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schedules),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subdomain: {
        value: cdktf.stringToHclTerraform(this._subdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
