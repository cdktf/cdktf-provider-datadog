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
  readonly settings?: OrganizationSettingsSettings;
}
export interface OrganizationSettingsSettingsSaml {
  /**
  * Whether or not SAML is enabled for this organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#enabled OrganizationSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function organizationSettingsSettingsSamlToTerraform(struct?: OrganizationSettingsSettingsSamlOutputReference | OrganizationSettingsSettingsSaml): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class OrganizationSettingsSettingsSamlOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

function organizationSettingsSettingsSamlAutocreateUsersDomainsToTerraform(struct?: OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference | OrganizationSettingsSettingsSamlAutocreateUsersDomains): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.domains),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[] | undefined; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[] | undefined) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

function organizationSettingsSettingsSamlIdpInitiatedLoginToTerraform(struct?: OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference | OrganizationSettingsSettingsSamlIdpInitiatedLogin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

function organizationSettingsSettingsSamlStrictModeToTerraform(struct?: OrganizationSettingsSettingsSamlStrictModeOutputReference | OrganizationSettingsSettingsSamlStrictMode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class OrganizationSettingsSettingsSamlStrictModeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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
  readonly saml: OrganizationSettingsSettingsSaml;
  /**
  * saml_autocreate_users_domains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#saml_autocreate_users_domains OrganizationSettings#saml_autocreate_users_domains}
  */
  readonly samlAutocreateUsersDomains: OrganizationSettingsSettingsSamlAutocreateUsersDomains;
  /**
  * saml_idp_initiated_login block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#saml_idp_initiated_login OrganizationSettings#saml_idp_initiated_login}
  */
  readonly samlIdpInitiatedLogin: OrganizationSettingsSettingsSamlIdpInitiatedLogin;
  /**
  * saml_strict_mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/organization_settings.html#saml_strict_mode OrganizationSettings#saml_strict_mode}
  */
  readonly samlStrictMode: OrganizationSettingsSettingsSamlStrictMode;
}

function organizationSettingsSettingsToTerraform(struct?: OrganizationSettingsSettingsOutputReference | OrganizationSettingsSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_widget_share: cdktf.booleanToTerraform(struct!.privateWidgetShare),
    saml_autocreate_access_role: cdktf.stringToTerraform(struct!.samlAutocreateAccessRole),
    saml: organizationSettingsSettingsSamlToTerraform(struct!.saml),
    saml_autocreate_users_domains: organizationSettingsSettingsSamlAutocreateUsersDomainsToTerraform(struct!.samlAutocreateUsersDomains),
    saml_idp_initiated_login: organizationSettingsSettingsSamlIdpInitiatedLoginToTerraform(struct!.samlIdpInitiatedLogin),
    saml_strict_mode: organizationSettingsSettingsSamlStrictModeToTerraform(struct!.samlStrictMode),
  }
}

export class OrganizationSettingsSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // private_widget_share - computed: false, optional: true, required: false
  private _privateWidgetShare?: boolean | cdktf.IResolvable | undefined; 
  public get privateWidgetShare() {
    return this.getBooleanAttribute('private_widget_share') as any;
  }
  public set privateWidgetShare(value: boolean | cdktf.IResolvable | undefined) {
    this._privateWidgetShare = value;
  }
  public resetPrivateWidgetShare() {
    this._privateWidgetShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateWidgetShareInput() {
    return this._privateWidgetShare
  }

  // saml_autocreate_access_role - computed: false, optional: true, required: false
  private _samlAutocreateAccessRole?: string | undefined; 
  public get samlAutocreateAccessRole() {
    return this.getStringAttribute('saml_autocreate_access_role');
  }
  public set samlAutocreateAccessRole(value: string | undefined) {
    this._samlAutocreateAccessRole = value;
  }
  public resetSamlAutocreateAccessRole() {
    this._samlAutocreateAccessRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAutocreateAccessRoleInput() {
    return this._samlAutocreateAccessRole
  }

  // saml - computed: false, optional: false, required: true
  private _saml?: OrganizationSettingsSettingsSaml; 
  private __samlOutput = new OrganizationSettingsSettingsSamlOutputReference(this as any, "saml", true);
  public get saml() {
    return this.__samlOutput;
  }
  public putSaml(value: OrganizationSettingsSettingsSaml) {
    this._saml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml
  }

  // saml_autocreate_users_domains - computed: false, optional: false, required: true
  private _samlAutocreateUsersDomains?: OrganizationSettingsSettingsSamlAutocreateUsersDomains; 
  private __samlAutocreateUsersDomainsOutput = new OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference(this as any, "saml_autocreate_users_domains", true);
  public get samlAutocreateUsersDomains() {
    return this.__samlAutocreateUsersDomainsOutput;
  }
  public putSamlAutocreateUsersDomains(value: OrganizationSettingsSettingsSamlAutocreateUsersDomains) {
    this._samlAutocreateUsersDomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAutocreateUsersDomainsInput() {
    return this._samlAutocreateUsersDomains
  }

  // saml_idp_initiated_login - computed: false, optional: false, required: true
  private _samlIdpInitiatedLogin?: OrganizationSettingsSettingsSamlIdpInitiatedLogin; 
  private __samlIdpInitiatedLoginOutput = new OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference(this as any, "saml_idp_initiated_login", true);
  public get samlIdpInitiatedLogin() {
    return this.__samlIdpInitiatedLoginOutput;
  }
  public putSamlIdpInitiatedLogin(value: OrganizationSettingsSettingsSamlIdpInitiatedLogin) {
    this._samlIdpInitiatedLogin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpInitiatedLoginInput() {
    return this._samlIdpInitiatedLogin
  }

  // saml_strict_mode - computed: false, optional: false, required: true
  private _samlStrictMode?: OrganizationSettingsSettingsSamlStrictMode; 
  private __samlStrictModeOutput = new OrganizationSettingsSettingsSamlStrictModeOutputReference(this as any, "saml_strict_mode", true);
  public get samlStrictMode() {
    return this.__samlStrictModeOutput;
  }
  public putSamlStrictMode(value: OrganizationSettingsSettingsSamlStrictMode) {
    this._samlStrictMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlStrictModeInput() {
    return this._samlStrictMode
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
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
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
  private _settings?: OrganizationSettingsSettings | undefined; 
  private __settingsOutput = new OrganizationSettingsSettingsOutputReference(this as any, "settings", true);
  public get settings() {
    return this.__settingsOutput;
  }
  public putSettings(value: OrganizationSettingsSettings | undefined) {
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
      settings: organizationSettingsSettingsToTerraform(this._settings),
    };
  }
}
