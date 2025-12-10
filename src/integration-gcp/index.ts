/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Silence monitors for expected GCE instance shutdowns. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#automute IntegrationGcp#automute}
  */
  readonly automute?: boolean | cdktf.IResolvable;
  /**
  * Your email found in your JSON service account key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#client_email IntegrationGcp#client_email}
  */
  readonly clientEmail: string;
  /**
  * Your ID found in your JSON service account key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#client_id IntegrationGcp#client_id}
  */
  readonly clientId: string;
  /**
  * List of filters to limit the Cloud Run revisions that are pulled into Datadog by using tags. Only Cloud Run revision resources that apply to specified filters are imported into Datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#cloud_run_revision_filters IntegrationGcp#cloud_run_revision_filters}
  */
  readonly cloudRunRevisionFilters?: string[];
  /**
  * Whether Datadog collects cloud security posture management resources from your GCP project. If enabled, requires `resource_collection_enabled` to also be enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#cspm_resource_collection_enabled IntegrationGcp#cspm_resource_collection_enabled}
  */
  readonly cspmResourceCollectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of filters to limit the VM instances that are pulled into Datadog by using tags. Only VM instance resources that apply to specified filters are imported into Datadog. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#host_filters IntegrationGcp#host_filters}
  */
  readonly hostFilters?: string;
  /**
  * When enabled, Datadog scans for all resource change data in your Google Cloud environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#is_resource_change_collection_enabled IntegrationGcp#is_resource_change_collection_enabled}
  */
  readonly isResourceChangeCollectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * When enabled, Datadog will attempt to collect Security Command Center Findings. Note: This requires additional permissions on the service account. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#is_security_command_center_enabled IntegrationGcp#is_security_command_center_enabled}
  */
  readonly isSecurityCommandCenterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Configurations for GCP monitored resources. Only monitored resources that apply to specified filters are imported into Datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#monitored_resource_configs IntegrationGcp#monitored_resource_configs}
  */
  readonly monitoredResourceConfigs?: IntegrationGcpMonitoredResourceConfigs[] | cdktf.IResolvable;
  /**
  * Your private key name found in your JSON service account key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#private_key IntegrationGcp#private_key}
  */
  readonly privateKey: string;
  /**
  * Your private key ID found in your JSON service account key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#private_key_id IntegrationGcp#private_key_id}
  */
  readonly privateKeyId: string;
  /**
  * Your Google Cloud project ID found in your JSON service account key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#project_id IntegrationGcp#project_id}
  */
  readonly projectId: string;
  /**
  * When enabled, Datadog scans for all resources in your GCP environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#resource_collection_enabled IntegrationGcp#resource_collection_enabled}
  */
  readonly resourceCollectionEnabled?: boolean | cdktf.IResolvable;
}
export interface IntegrationGcpMonitoredResourceConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#filters IntegrationGcp#filters}
  */
  readonly filters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#type IntegrationGcp#type}
  */
  readonly type?: string;
}

export function integrationGcpMonitoredResourceConfigsToTerraform(struct?: IntegrationGcpMonitoredResourceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function integrationGcpMonitoredResourceConfigsToHclTerraform(struct?: IntegrationGcpMonitoredResourceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationGcpMonitoredResourceConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationGcpMonitoredResourceConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationGcpMonitoredResourceConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters = value.filters;
      this._type = value.type;
    }
  }

  // filters - computed: true, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class IntegrationGcpMonitoredResourceConfigsList extends cdktf.ComplexList {
  public internalValue? : IntegrationGcpMonitoredResourceConfigs[] | cdktf.IResolvable

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
  public get(index: number): IntegrationGcpMonitoredResourceConfigsOutputReference {
    return new IntegrationGcpMonitoredResourceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp datadog_integration_gcp}
*/
export class IntegrationGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationGcp to import
  * @param importFromId The id of the existing IntegrationGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/integration_gcp datadog_integration_gcp} Resource
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
        providerVersion: '3.82.0',
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
    this._clientId = config.clientId;
    this._cloudRunRevisionFilters = config.cloudRunRevisionFilters;
    this._cspmResourceCollectionEnabled = config.cspmResourceCollectionEnabled;
    this._hostFilters = config.hostFilters;
    this._isResourceChangeCollectionEnabled = config.isResourceChangeCollectionEnabled;
    this._isSecurityCommandCenterEnabled = config.isSecurityCommandCenterEnabled;
    this._monitoredResourceConfigs.internalValue = config.monitoredResourceConfigs;
    this._privateKey = config.privateKey;
    this._privateKeyId = config.privateKeyId;
    this._projectId = config.projectId;
    this._resourceCollectionEnabled = config.resourceCollectionEnabled;
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

  // cloud_run_revision_filters - computed: true, optional: true, required: false
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

  // cspm_resource_collection_enabled - computed: true, optional: true, required: false
  private _cspmResourceCollectionEnabled?: boolean | cdktf.IResolvable; 
  public get cspmResourceCollectionEnabled() {
    return this.getBooleanAttribute('cspm_resource_collection_enabled');
  }
  public set cspmResourceCollectionEnabled(value: boolean | cdktf.IResolvable) {
    this._cspmResourceCollectionEnabled = value;
  }
  public resetCspmResourceCollectionEnabled() {
    this._cspmResourceCollectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspmResourceCollectionEnabledInput() {
    return this._cspmResourceCollectionEnabled;
  }

  // host_filters - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // monitored_resource_configs - computed: true, optional: true, required: false
  private _monitoredResourceConfigs = new IntegrationGcpMonitoredResourceConfigsList(this, "monitored_resource_configs", true);
  public get monitoredResourceConfigs() {
    return this._monitoredResourceConfigs;
  }
  public putMonitoredResourceConfigs(value: IntegrationGcpMonitoredResourceConfigs[] | cdktf.IResolvable) {
    this._monitoredResourceConfigs.internalValue = value;
  }
  public resetMonitoredResourceConfigs() {
    this._monitoredResourceConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredResourceConfigsInput() {
    return this._monitoredResourceConfigs.internalValue;
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
      automute: cdktf.booleanToTerraform(this._automute),
      client_email: cdktf.stringToTerraform(this._clientEmail),
      client_id: cdktf.stringToTerraform(this._clientId),
      cloud_run_revision_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudRunRevisionFilters),
      cspm_resource_collection_enabled: cdktf.booleanToTerraform(this._cspmResourceCollectionEnabled),
      host_filters: cdktf.stringToTerraform(this._hostFilters),
      is_resource_change_collection_enabled: cdktf.booleanToTerraform(this._isResourceChangeCollectionEnabled),
      is_security_command_center_enabled: cdktf.booleanToTerraform(this._isSecurityCommandCenterEnabled),
      monitored_resource_configs: cdktf.listMapper(integrationGcpMonitoredResourceConfigsToTerraform, false)(this._monitoredResourceConfigs.internalValue),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_id: cdktf.stringToTerraform(this._privateKeyId),
      project_id: cdktf.stringToTerraform(this._projectId),
      resource_collection_enabled: cdktf.booleanToTerraform(this._resourceCollectionEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
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
      cspm_resource_collection_enabled: {
        value: cdktf.booleanToHclTerraform(this._cspmResourceCollectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_filters: {
        value: cdktf.stringToHclTerraform(this._hostFilters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      monitored_resource_configs: {
        value: cdktf.listMapperHcl(integrationGcpMonitoredResourceConfigsToHclTerraform, false)(this._monitoredResourceConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationGcpMonitoredResourceConfigsList",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_id: {
        value: cdktf.stringToHclTerraform(this._privateKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
