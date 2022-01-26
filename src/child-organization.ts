// https://www.terraform.io/docs/providers/datadog/r/child_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChildOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name for Child Organization after creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/child_organization#name ChildOrganization#name}
  */
  readonly name: string;
}
export class ChildOrganizationApiKey extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class ChildOrganizationApplicationKey extends cdktf.ComplexComputedList {

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }
}
export class ChildOrganizationSettingsSaml extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class ChildOrganizationSettingsSamlAutocreateUsersDomains extends cdktf.ComplexComputedList {

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return this.getListAttribute('domains');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class ChildOrganizationSettingsSamlIdpInitiatedLogin extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class ChildOrganizationSettingsSamlStrictMode extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class ChildOrganizationSettings extends cdktf.ComplexComputedList {

  // private_widget_share - computed: true, optional: false, required: false
  public get privateWidgetShare() {
    return this.getBooleanAttribute('private_widget_share');
  }

  // saml - computed: true, optional: false, required: false
  public get saml() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('saml');
  }

  // saml_autocreate_access_role - computed: true, optional: false, required: false
  public get samlAutocreateAccessRole() {
    return this.getStringAttribute('saml_autocreate_access_role');
  }

  // saml_autocreate_users_domains - computed: true, optional: false, required: false
  public get samlAutocreateUsersDomains() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('saml_autocreate_users_domains');
  }

  // saml_can_be_enabled - computed: true, optional: false, required: false
  public get samlCanBeEnabled() {
    return this.getBooleanAttribute('saml_can_be_enabled');
  }

  // saml_idp_endpoint - computed: true, optional: false, required: false
  public get samlIdpEndpoint() {
    return this.getStringAttribute('saml_idp_endpoint');
  }

  // saml_idp_initiated_login - computed: true, optional: false, required: false
  public get samlIdpInitiatedLogin() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('saml_idp_initiated_login');
  }

  // saml_idp_metadata_uploaded - computed: true, optional: false, required: false
  public get samlIdpMetadataUploaded() {
    return this.getBooleanAttribute('saml_idp_metadata_uploaded');
  }

  // saml_login_url - computed: true, optional: false, required: false
  public get samlLoginUrl() {
    return this.getStringAttribute('saml_login_url');
  }

  // saml_strict_mode - computed: true, optional: false, required: false
  public get samlStrictMode() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('saml_strict_mode');
  }
}
export class ChildOrganizationUser extends cdktf.ComplexComputedList {

  // access_role - computed: true, optional: false, required: false
  public get accessRole() {
    return this.getStringAttribute('access_role');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/child_organization datadog_child_organization}
*/
export class ChildOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_child_organization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/child_organization datadog_child_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChildOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: ChildOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_child_organization',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: true, optional: false, required: false
  public apiKey(index: string) {
    return new ChildOrganizationApiKey(this, 'api_key', index, false);
  }

  // application_key - computed: true, optional: false, required: false
  public applicationKey(index: string) {
    return new ChildOrganizationApplicationKey(this, 'application_key', index, false);
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // public_id - computed: true, optional: false, required: false
  public get publicId() {
    return this.getStringAttribute('public_id');
  }

  // settings - computed: true, optional: false, required: false
  public settings(index: string) {
    return new ChildOrganizationSettings(this, 'settings', index, false);
  }

  // user - computed: true, optional: false, required: false
  public user(index: string) {
    return new ChildOrganizationUser(this, 'user', index, false);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
