/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#id OrganizationSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name for Organization.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#name OrganizationSettings#name}
  */
  readonly name?: string;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#settings OrganizationSettings#settings}
  */
  readonly settings?: OrganizationSettingsSettings;
}
export interface OrganizationSettingsSettingsSaml {
  /**
  * Whether or not SAML is enabled for this organization.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function organizationSettingsSettingsSamlToTerraform(struct?: OrganizationSettingsSettingsSamlOutputReference | OrganizationSettingsSettingsSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class OrganizationSettingsSettingsSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationSettingsSettingsSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationSettingsSettingsSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrganizationSettingsSettingsSamlAutocreateUsersDomains {
  /**
  * List of domains where the SAML automated user creation is enabled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#domains OrganizationSettings#domains}
  */
  readonly domains?: string[];
  /**
  * Whether or not the automated user creation based on SAML domain is enabled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function organizationSettingsSettingsSamlAutocreateUsersDomainsToTerraform(struct?: OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference | OrganizationSettingsSettingsSamlAutocreateUsersDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationSettingsSettingsSamlAutocreateUsersDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationSettingsSettingsSamlAutocreateUsersDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
      this._enabled = value.enabled;
    }
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrganizationSettingsSettingsSamlIdpInitiatedLogin {
  /**
  * Whether or not a SAML identity provider metadata file was provided to the Datadog organization.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function organizationSettingsSettingsSamlIdpInitiatedLoginToTerraform(struct?: OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference | OrganizationSettingsSettingsSamlIdpInitiatedLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationSettingsSettingsSamlIdpInitiatedLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationSettingsSettingsSamlIdpInitiatedLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrganizationSettingsSettingsSamlStrictMode {
  /**
  * Whether or not the SAML strict mode is enabled. If true, all users must log in with SAML.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function organizationSettingsSettingsSamlStrictModeToTerraform(struct?: OrganizationSettingsSettingsSamlStrictModeOutputReference | OrganizationSettingsSettingsSamlStrictMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class OrganizationSettingsSettingsSamlStrictModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationSettingsSettingsSamlStrictMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationSettingsSettingsSamlStrictMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrganizationSettingsSettings {
  /**
  * Whether or not the organization users can share widgets outside of Datadog.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#private_widget_share OrganizationSettings#private_widget_share}
  */
  readonly privateWidgetShare?: boolean | cdktf.IResolvable;
  /**
  * The access role of the user. Options are `st` (standard user), `adm` (admin user), or `ro` (read-only user). Allowed enum values: `st`, `adm` , `ro`, `ERROR`
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#saml_autocreate_access_role OrganizationSettings#saml_autocreate_access_role}
  */
  readonly samlAutocreateAccessRole?: string;
  /**
  * saml block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#saml OrganizationSettings#saml}
  */
  readonly saml: OrganizationSettingsSettingsSaml;
  /**
  * saml_autocreate_users_domains block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#saml_autocreate_users_domains OrganizationSettings#saml_autocreate_users_domains}
  */
  readonly samlAutocreateUsersDomains: OrganizationSettingsSettingsSamlAutocreateUsersDomains;
  /**
  * saml_idp_initiated_login block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#saml_idp_initiated_login OrganizationSettings#saml_idp_initiated_login}
  */
  readonly samlIdpInitiatedLogin: OrganizationSettingsSettingsSamlIdpInitiatedLogin;
  /**
  * saml_strict_mode block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings#saml_strict_mode OrganizationSettings#saml_strict_mode}
  */
  readonly samlStrictMode: OrganizationSettingsSettingsSamlStrictMode;
}

export function organizationSettingsSettingsToTerraform(struct?: OrganizationSettingsSettingsOutputReference | OrganizationSettingsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationSettingsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateWidgetShare !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateWidgetShare = this._privateWidgetShare;
    }
    if (this._samlAutocreateAccessRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlAutocreateAccessRole = this._samlAutocreateAccessRole;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    if (this._samlAutocreateUsersDomains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlAutocreateUsersDomains = this._samlAutocreateUsersDomains?.internalValue;
    }
    if (this._samlIdpInitiatedLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlIdpInitiatedLogin = this._samlIdpInitiatedLogin?.internalValue;
    }
    if (this._samlStrictMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlStrictMode = this._samlStrictMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationSettingsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateWidgetShare = undefined;
      this._samlAutocreateAccessRole = undefined;
      this._saml.internalValue = undefined;
      this._samlAutocreateUsersDomains.internalValue = undefined;
      this._samlIdpInitiatedLogin.internalValue = undefined;
      this._samlStrictMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateWidgetShare = value.privateWidgetShare;
      this._samlAutocreateAccessRole = value.samlAutocreateAccessRole;
      this._saml.internalValue = value.saml;
      this._samlAutocreateUsersDomains.internalValue = value.samlAutocreateUsersDomains;
      this._samlIdpInitiatedLogin.internalValue = value.samlIdpInitiatedLogin;
      this._samlStrictMode.internalValue = value.samlStrictMode;
    }
  }

  // private_widget_share - computed: false, optional: true, required: false
  private _privateWidgetShare?: boolean | cdktf.IResolvable; 
  public get privateWidgetShare() {
    return this.getBooleanAttribute('private_widget_share');
  }
  public set privateWidgetShare(value: boolean | cdktf.IResolvable) {
    this._privateWidgetShare = value;
  }
  public resetPrivateWidgetShare() {
    this._privateWidgetShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateWidgetShareInput() {
    return this._privateWidgetShare;
  }

  // saml_autocreate_access_role - computed: false, optional: true, required: false
  private _samlAutocreateAccessRole?: string; 
  public get samlAutocreateAccessRole() {
    return this.getStringAttribute('saml_autocreate_access_role');
  }
  public set samlAutocreateAccessRole(value: string) {
    this._samlAutocreateAccessRole = value;
  }
  public resetSamlAutocreateAccessRole() {
    this._samlAutocreateAccessRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAutocreateAccessRoleInput() {
    return this._samlAutocreateAccessRole;
  }

  // saml_can_be_enabled - computed: true, optional: false, required: false
  public get samlCanBeEnabled() {
    return this.getBooleanAttribute('saml_can_be_enabled');
  }

  // saml_idp_endpoint - computed: true, optional: false, required: false
  public get samlIdpEndpoint() {
    return this.getStringAttribute('saml_idp_endpoint');
  }

  // saml_idp_metadata_uploaded - computed: true, optional: false, required: false
  public get samlIdpMetadataUploaded() {
    return this.getBooleanAttribute('saml_idp_metadata_uploaded');
  }

  // saml_login_url - computed: true, optional: false, required: false
  public get samlLoginUrl() {
    return this.getStringAttribute('saml_login_url');
  }

  // saml - computed: false, optional: false, required: true
  private _saml = new OrganizationSettingsSettingsSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: OrganizationSettingsSettingsSaml) {
    this._saml.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // saml_autocreate_users_domains - computed: false, optional: false, required: true
  private _samlAutocreateUsersDomains = new OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference(this, "saml_autocreate_users_domains");
  public get samlAutocreateUsersDomains() {
    return this._samlAutocreateUsersDomains;
  }
  public putSamlAutocreateUsersDomains(value: OrganizationSettingsSettingsSamlAutocreateUsersDomains) {
    this._samlAutocreateUsersDomains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAutocreateUsersDomainsInput() {
    return this._samlAutocreateUsersDomains.internalValue;
  }

  // saml_idp_initiated_login - computed: false, optional: false, required: true
  private _samlIdpInitiatedLogin = new OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference(this, "saml_idp_initiated_login");
  public get samlIdpInitiatedLogin() {
    return this._samlIdpInitiatedLogin;
  }
  public putSamlIdpInitiatedLogin(value: OrganizationSettingsSettingsSamlIdpInitiatedLogin) {
    this._samlIdpInitiatedLogin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpInitiatedLoginInput() {
    return this._samlIdpInitiatedLogin.internalValue;
  }

  // saml_strict_mode - computed: false, optional: false, required: true
  private _samlStrictMode = new OrganizationSettingsSettingsSamlStrictModeOutputReference(this, "saml_strict_mode");
  public get samlStrictMode() {
    return this._samlStrictMode;
  }
  public putSamlStrictMode(value: OrganizationSettingsSettingsSamlStrictMode) {
    this._samlStrictMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlStrictModeInput() {
    return this._samlStrictMode.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings datadog_organization_settings}
*/
export class OrganizationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_organization_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/organization_settings datadog_organization_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrganizationSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_organization_settings',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.26.0',
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
    this._id = config.id;
    this._name = config.name;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // public_id - computed: true, optional: false, required: false
  public get publicId() {
    return this.getStringAttribute('public_id');
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new OrganizationSettingsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: OrganizationSettingsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      settings: organizationSettingsSettingsToTerraform(this._settings.internalValue),
    };
  }
}
