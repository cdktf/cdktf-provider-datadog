/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGcpStsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tags to be associated with GCP metrics and service checks from your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#account_tags IntegrationGcpSts#account_tags}
  */
  readonly accountTags?: string[];
  /**
  * Silence monitors for expected GCE instance shutdowns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#automute IntegrationGcpSts#automute}
  */
  readonly automute?: boolean | cdktf.IResolvable;
  /**
  * Your service account email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#client_email IntegrationGcpSts#client_email}
  */
  readonly clientEmail: string;
  /**
  * Tags to filter which Cloud Run revisions are imported into Datadog. Only revisions that meet specified criteria are monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#cloud_run_revision_filters IntegrationGcpSts#cloud_run_revision_filters}
  */
  readonly cloudRunRevisionFilters?: string[];
  /**
  * Your Host Filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#host_filters IntegrationGcpSts#host_filters}
  */
  readonly hostFilters?: string[];
  /**
  * Whether Datadog collects cloud security posture management resources from your GCP project. If enabled, requires `resource_collection_enabled` to also be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#is_cspm_enabled IntegrationGcpSts#is_cspm_enabled}
  */
  readonly isCspmEnabled?: boolean | cdktf.IResolvable;
  /**
  * When enabled, Datadog scans for all resource change data in your Google Cloud environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#is_resource_change_collection_enabled IntegrationGcpSts#is_resource_change_collection_enabled}
  */
  readonly isResourceChangeCollectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * When enabled, Datadog will attempt to collect Security Command Center Findings. Note: This requires additional permissions on the service account. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#is_security_command_center_enabled IntegrationGcpSts#is_security_command_center_enabled}
  */
  readonly isSecurityCommandCenterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Configuration for a GCP metric namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#metric_namespace_configs IntegrationGcpSts#metric_namespace_configs}
  */
  readonly metricNamespaceConfigs?: IntegrationGcpStsMetricNamespaceConfigs[] | cdktf.IResolvable;
  /**
  * When enabled, Datadog scans for all resources in your GCP environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#resource_collection_enabled IntegrationGcpSts#resource_collection_enabled}
  */
  readonly resourceCollectionEnabled?: boolean | cdktf.IResolvable;
}
export interface IntegrationGcpStsMetricNamespaceConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#disabled IntegrationGcpSts#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#id IntegrationGcpSts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function integrationGcpStsMetricNamespaceConfigsToTerraform(struct?: IntegrationGcpStsMetricNamespaceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function integrationGcpStsMetricNamespaceConfigsToHclTerraform(struct?: IntegrationGcpStsMetricNamespaceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationGcpStsMetricNamespaceConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationGcpStsMetricNamespaceConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationGcpStsMetricNamespaceConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._id = value.id;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // id - computed: false, optional: true, required: false
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
}

export class IntegrationGcpStsMetricNamespaceConfigsList extends cdktf.ComplexList {
  public internalValue? : IntegrationGcpStsMetricNamespaceConfigs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IntegrationGcpStsMetricNamespaceConfigsOutputReference {
    return new IntegrationGcpStsMetricNamespaceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts datadog_integration_gcp_sts}
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
  * @param importFromId The id of the existing IntegrationGcpSts that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationGcpSts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_gcp_sts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/resources/integration_gcp_sts datadog_integration_gcp_sts} Resource
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
    this._accountTags = config.accountTags;
    this._automute = config.automute;
    this._clientEmail = config.clientEmail;
    this._cloudRunRevisionFilters = config.cloudRunRevisionFilters;
    this._hostFilters = config.hostFilters;
    this._isCspmEnabled = config.isCspmEnabled;
    this._isResourceChangeCollectionEnabled = config.isResourceChangeCollectionEnabled;
    this._isSecurityCommandCenterEnabled = config.isSecurityCommandCenterEnabled;
    this._metricNamespaceConfigs.internalValue = config.metricNamespaceConfigs;
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

  // cloud_run_revision_filters - computed: false, optional: true, required: false
  private _cloudRunRevisionFilters?: string[]; 
  public get cloudRunRevisionFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('cloud_run_revision_filters'));
  }
  public set cloudRunRevisionFilters(value: string[]) {
    this._cloudRunRevisionFilters = value;
  }
  public resetCloudRunRevisionFilters() {
    this._cloudRunRevisionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunRevisionFiltersInput() {
    return this._cloudRunRevisionFilters;
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

  // is_resource_change_collection_enabled - computed: true, optional: true, required: false
  private _isResourceChangeCollectionEnabled?: boolean | cdktf.IResolvable; 
  public get isResourceChangeCollectionEnabled() {
    return this.getBooleanAttribute('is_resource_change_collection_enabled');
  }
  public set isResourceChangeCollectionEnabled(value: boolean | cdktf.IResolvable) {
    this._isResourceChangeCollectionEnabled = value;
  }
  public resetIsResourceChangeCollectionEnabled() {
    this._isResourceChangeCollectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResourceChangeCollectionEnabledInput() {
    return this._isResourceChangeCollectionEnabled;
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

  // metric_namespace_configs - computed: false, optional: true, required: false
  private _metricNamespaceConfigs = new IntegrationGcpStsMetricNamespaceConfigsList(this, "metric_namespace_configs", true);
  public get metricNamespaceConfigs() {
    return this._metricNamespaceConfigs;
  }
  public putMetricNamespaceConfigs(value: IntegrationGcpStsMetricNamespaceConfigs[] | cdktf.IResolvable) {
    this._metricNamespaceConfigs.internalValue = value;
  }
  public resetMetricNamespaceConfigs() {
    this._metricNamespaceConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceConfigsInput() {
    return this._metricNamespaceConfigs.internalValue;
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
      cloud_run_revision_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudRunRevisionFilters),
      host_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostFilters),
      is_cspm_enabled: cdktf.booleanToTerraform(this._isCspmEnabled),
      is_resource_change_collection_enabled: cdktf.booleanToTerraform(this._isResourceChangeCollectionEnabled),
      is_security_command_center_enabled: cdktf.booleanToTerraform(this._isSecurityCommandCenterEnabled),
      metric_namespace_configs: cdktf.listMapper(integrationGcpStsMetricNamespaceConfigsToTerraform, false)(this._metricNamespaceConfigs.internalValue),
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
      cloud_run_revision_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudRunRevisionFilters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      is_resource_change_collection_enabled: {
        value: cdktf.booleanToHclTerraform(this._isResourceChangeCollectionEnabled),
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
      metric_namespace_configs: {
        value: cdktf.listMapperHcl(integrationGcpStsMetricNamespaceConfigsToHclTerraform, false)(this._metricNamespaceConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationGcpStsMetricNamespaceConfigsList",
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
