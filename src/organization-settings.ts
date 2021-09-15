// https://www.terraform.io/docs/providers/datadog/r/organization_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name for Organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#name OrganizationSettings#name}
  */
  readonly name?: string;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#settings OrganizationSettings#settings}
  */
  readonly settings?: OrganizationSettingsSettings[];
}
export interface OrganizationSettingsSettingsSaml {
  /**
  * Whether or not SAML is enabled for this organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#enabled OrganizationSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function organizationSettingsSettingsSamlToTerraform(struct?: OrganizationSettingsSettingsSaml): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface OrganizationSettingsSettingsSamlAutocreateUsersDomains {
  /**
  * List of domains where the SAML automated user creation is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#domains OrganizationSettings#domains}
  */
  readonly domains?: string[];
  /**
  * Whether or not the automated user creation based on SAML domain is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#enabled OrganizationSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function organizationSettingsSettingsSamlAutocreateUsersDomainsToTerraform(struct?: OrganizationSettingsSettingsSamlAutocreateUsersDomains): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.domains),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface OrganizationSettingsSettingsSamlIdpInitiatedLogin {
  /**
  * Whether or not a SAML identity provider metadata file was provided to the Datadog organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#enabled OrganizationSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function organizationSettingsSettingsSamlIdpInitiatedLoginToTerraform(struct?: OrganizationSettingsSettingsSamlIdpInitiatedLogin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface OrganizationSettingsSettingsSamlStrictMode {
  /**
  * Whether or not the SAML strict mode is enabled. If true, all users must log in with SAML.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#enabled OrganizationSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function organizationSettingsSettingsSamlStrictModeToTerraform(struct?: OrganizationSettingsSettingsSamlStrictMode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface OrganizationSettingsSettings {
  /**
  * Whether or not the organization users can share widgets outside of Datadog.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#private_widget_share OrganizationSettings#private_widget_share}
  */
  readonly privateWidgetShare?: boolean | cdktf.IResolvable;
  /**
  * The access role of the user. Options are `st` (standard user), `adm` (admin user), or `ro` (read-only user). Allowed enum values: `st`, `adm` , `ro`, `ERROR`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#saml_autocreate_access_role OrganizationSettings#saml_autocreate_access_role}
  */
  readonly samlAutocreateAccessRole?: string;
  /**
  * saml block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#saml OrganizationSettings#saml}
  */
  readonly saml: OrganizationSettingsSettingsSaml[];
  /**
  * saml_autocreate_users_domains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#saml_autocreate_users_domains OrganizationSettings#saml_autocreate_users_domains}
  */
  readonly samlAutocreateUsersDomains: OrganizationSettingsSettingsSamlAutocreateUsersDomains[];
  /**
  * saml_idp_initiated_login block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#saml_idp_initiated_login OrganizationSettings#saml_idp_initiated_login}
  */
  readonly samlIdpInitiatedLogin: OrganizationSettingsSettingsSamlIdpInitiatedLogin[];
  /**
  * saml_strict_mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#saml_strict_mode OrganizationSettings#saml_strict_mode}
  */
  readonly samlStrictMode: OrganizationSettingsSettingsSamlStrictMode[];
}

function organizationSettingsSettingsToTerraform(struct?: OrganizationSettingsSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    private_widget_share: cdktf.booleanToTerraform(struct!.privateWidgetShare),
    saml_autocreate_access_role: cdktf.stringToTerraform(struct!.samlAutocreateAccessRole),
    saml: cdktf.listMapper(organizationSettingsSettingsSamlToTerraform)(struct!.saml),
    saml_autocreate_users_domains: cdktf.listMapper(organizationSettingsSettingsSamlAutocreateUsersDomainsToTerraform)(struct!.samlAutocreateUsersDomains),
    saml_idp_initiated_login: cdktf.listMapper(organizationSettingsSettingsSamlIdpInitiatedLoginToTerraform)(struct!.samlIdpInitiatedLogin),
    saml_strict_mode: cdktf.listMapper(organizationSettingsSettingsSamlStrictModeToTerraform)(struct!.samlStrictMode),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html datadog_organization_settings}
*/
export class OrganizationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_organization_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html datadog_organization_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrganizationSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_organization_settings',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._settings = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // public_id - computed: true, optional: false, required: false
  public get publicId() {
    return this.getStringAttribute('public_id');
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: OrganizationSettingsSettings[];
  public get settings() {
    return this.interpolationForAttribute('settings') as any;
  }
  public set settings(value: OrganizationSettingsSettings[] ) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      settings: cdktf.listMapper(organizationSettingsSettingsToTerraform)(this._settings),
    };
  }
}
