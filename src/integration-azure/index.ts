// https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans. Only App Service Plans that match one of the defined tags are imported into Datadog. The rest, including the apps and functions running on them, are ignored. This also filters the metrics for any App or Function running on the App Service Plan(s). Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#app_service_plan_filters IntegrationAzure#app_service_plan_filters}
  */
  readonly appServicePlanFilters?: string;
  /**
  * Silence monitors for expected Azure VM shutdowns. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#automute IntegrationAzure#automute}
  */
  readonly automute?: boolean | cdktf.IResolvable;
  /**
  * Your Azure web application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#client_id IntegrationAzure#client_id}
  */
  readonly clientId: string;
  /**
  * (Required for Initial Creation) Your Azure web application secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#client_secret IntegrationAzure#client_secret}
  */
  readonly clientSecret: string;
  /**
  * This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps. Only Container Apps that match one of the defined tags are imported into Datadog. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#container_app_filters IntegrationAzure#container_app_filters}
  */
  readonly containerAppFilters?: string;
  /**
  * When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration.
  * Note: This requires `resource_collection_enabled` to be set to true. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#cspm_enabled IntegrationAzure#cspm_enabled}
  */
  readonly cspmEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable custom metrics for your organization. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#custom_metrics_enabled IntegrationAzure#custom_metrics_enabled}
  */
  readonly customMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure. Limit the Azure instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog. e.x. `env:production,deploymentgroup:red` Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#host_filters IntegrationAzure#host_filters}
  */
  readonly hostFilters?: string;
  /**
  * Enable Azure metrics for your organization. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}
  */
  readonly metricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Azure metrics for your organization for resource providers where no resource provider config is specified. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#metrics_enabled_default IntegrationAzure#metrics_enabled_default}
  */
  readonly metricsEnabledDefault?: boolean | cdktf.IResolvable;
  /**
  * When enabled, Datadog collects metadata and configuration info from cloud resources (such as compute instances, databases, and load balancers) monitored by this app registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#resource_collection_enabled IntegrationAzure#resource_collection_enabled}
  */
  readonly resourceCollectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Configuration settings applied to resources from the specified Azure resource providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#resource_provider_configs IntegrationAzure#resource_provider_configs}
  */
  readonly resourceProviderConfigs?: IntegrationAzureResourceProviderConfigs[] | cdktf.IResolvable;
  /**
  * Your Azure Active Directory ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#tenant_name IntegrationAzure#tenant_name}
  */
  readonly tenantName: string;
  /**
  * Enable azure.usage metrics for your organization. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#usage_metrics_enabled IntegrationAzure#usage_metrics_enabled}
  */
  readonly usageMetricsEnabled?: boolean | cdktf.IResolvable;
}
export interface IntegrationAzureResourceProviderConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}
  */
  readonly metricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#namespace IntegrationAzure#namespace}
  */
  readonly namespace?: string;
}

export function integrationAzureResourceProviderConfigsToTerraform(struct?: IntegrationAzureResourceProviderConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_enabled: cdktf.booleanToTerraform(struct!.metricsEnabled),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function integrationAzureResourceProviderConfigsToHclTerraform(struct?: IntegrationAzureResourceProviderConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.metricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAzureResourceProviderConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationAzureResourceProviderConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEnabled = this._metricsEnabled;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAzureResourceProviderConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsEnabled = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsEnabled = value.metricsEnabled;
      this._namespace = value.namespace;
    }
  }

  // metrics_enabled - computed: true, optional: true, required: false
  private _metricsEnabled?: boolean | cdktf.IResolvable; 
  public get metricsEnabled() {
    return this.getBooleanAttribute('metrics_enabled');
  }
  public set metricsEnabled(value: boolean | cdktf.IResolvable) {
    this._metricsEnabled = value;
  }
  public resetMetricsEnabled() {
    this._metricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEnabledInput() {
    return this._metricsEnabled;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class IntegrationAzureResourceProviderConfigsList extends cdktf.ComplexList {
  public internalValue? : IntegrationAzureResourceProviderConfigs[] | cdktf.IResolvable

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
  public get(index: number): IntegrationAzureResourceProviderConfigsOutputReference {
    return new IntegrationAzureResourceProviderConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure datadog_integration_azure}
*/
export class IntegrationAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAzure to import
  * @param importFromId The id of the existing IntegrationAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_azure datadog_integration_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAzureConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_azure',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.62.0',
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
    this._appServicePlanFilters = config.appServicePlanFilters;
    this._automute = config.automute;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._containerAppFilters = config.containerAppFilters;
    this._cspmEnabled = config.cspmEnabled;
    this._customMetricsEnabled = config.customMetricsEnabled;
    this._hostFilters = config.hostFilters;
    this._metricsEnabled = config.metricsEnabled;
    this._metricsEnabledDefault = config.metricsEnabledDefault;
    this._resourceCollectionEnabled = config.resourceCollectionEnabled;
    this._resourceProviderConfigs.internalValue = config.resourceProviderConfigs;
    this._tenantName = config.tenantName;
    this._usageMetricsEnabled = config.usageMetricsEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_plan_filters - computed: true, optional: true, required: false
  private _appServicePlanFilters?: string; 
  public get appServicePlanFilters() {
    return this.getStringAttribute('app_service_plan_filters');
  }
  public set appServicePlanFilters(value: string) {
    this._appServicePlanFilters = value;
  }
  public resetAppServicePlanFilters() {
    this._appServicePlanFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServicePlanFiltersInput() {
    return this._appServicePlanFilters;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // container_app_filters - computed: true, optional: true, required: false
  private _containerAppFilters?: string; 
  public get containerAppFilters() {
    return this.getStringAttribute('container_app_filters');
  }
  public set containerAppFilters(value: string) {
    this._containerAppFilters = value;
  }
  public resetContainerAppFilters() {
    this._containerAppFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAppFiltersInput() {
    return this._containerAppFilters;
  }

  // cspm_enabled - computed: true, optional: true, required: false
  private _cspmEnabled?: boolean | cdktf.IResolvable; 
  public get cspmEnabled() {
    return this.getBooleanAttribute('cspm_enabled');
  }
  public set cspmEnabled(value: boolean | cdktf.IResolvable) {
    this._cspmEnabled = value;
  }
  public resetCspmEnabled() {
    this._cspmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspmEnabledInput() {
    return this._cspmEnabled;
  }

  // custom_metrics_enabled - computed: true, optional: true, required: false
  private _customMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get customMetricsEnabled() {
    return this.getBooleanAttribute('custom_metrics_enabled');
  }
  public set customMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._customMetricsEnabled = value;
  }
  public resetCustomMetricsEnabled() {
    this._customMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricsEnabledInput() {
    return this._customMetricsEnabled;
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

  // metrics_enabled - computed: true, optional: true, required: false
  private _metricsEnabled?: boolean | cdktf.IResolvable; 
  public get metricsEnabled() {
    return this.getBooleanAttribute('metrics_enabled');
  }
  public set metricsEnabled(value: boolean | cdktf.IResolvable) {
    this._metricsEnabled = value;
  }
  public resetMetricsEnabled() {
    this._metricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEnabledInput() {
    return this._metricsEnabled;
  }

  // metrics_enabled_default - computed: true, optional: true, required: false
  private _metricsEnabledDefault?: boolean | cdktf.IResolvable; 
  public get metricsEnabledDefault() {
    return this.getBooleanAttribute('metrics_enabled_default');
  }
  public set metricsEnabledDefault(value: boolean | cdktf.IResolvable) {
    this._metricsEnabledDefault = value;
  }
  public resetMetricsEnabledDefault() {
    this._metricsEnabledDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEnabledDefaultInput() {
    return this._metricsEnabledDefault;
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

  // resource_provider_configs - computed: true, optional: true, required: false
  private _resourceProviderConfigs = new IntegrationAzureResourceProviderConfigsList(this, "resource_provider_configs", false);
  public get resourceProviderConfigs() {
    return this._resourceProviderConfigs;
  }
  public putResourceProviderConfigs(value: IntegrationAzureResourceProviderConfigs[] | cdktf.IResolvable) {
    this._resourceProviderConfigs.internalValue = value;
  }
  public resetResourceProviderConfigs() {
    this._resourceProviderConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceProviderConfigsInput() {
    return this._resourceProviderConfigs.internalValue;
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // usage_metrics_enabled - computed: true, optional: true, required: false
  private _usageMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get usageMetricsEnabled() {
    return this.getBooleanAttribute('usage_metrics_enabled');
  }
  public set usageMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._usageMetricsEnabled = value;
  }
  public resetUsageMetricsEnabled() {
    this._usageMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageMetricsEnabledInput() {
    return this._usageMetricsEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service_plan_filters: cdktf.stringToTerraform(this._appServicePlanFilters),
      automute: cdktf.booleanToTerraform(this._automute),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      container_app_filters: cdktf.stringToTerraform(this._containerAppFilters),
      cspm_enabled: cdktf.booleanToTerraform(this._cspmEnabled),
      custom_metrics_enabled: cdktf.booleanToTerraform(this._customMetricsEnabled),
      host_filters: cdktf.stringToTerraform(this._hostFilters),
      metrics_enabled: cdktf.booleanToTerraform(this._metricsEnabled),
      metrics_enabled_default: cdktf.booleanToTerraform(this._metricsEnabledDefault),
      resource_collection_enabled: cdktf.booleanToTerraform(this._resourceCollectionEnabled),
      resource_provider_configs: cdktf.listMapper(integrationAzureResourceProviderConfigsToTerraform, false)(this._resourceProviderConfigs.internalValue),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      usage_metrics_enabled: cdktf.booleanToTerraform(this._usageMetricsEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_service_plan_filters: {
        value: cdktf.stringToHclTerraform(this._appServicePlanFilters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automute: {
        value: cdktf.booleanToHclTerraform(this._automute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_app_filters: {
        value: cdktf.stringToHclTerraform(this._containerAppFilters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cspm_enabled: {
        value: cdktf.booleanToHclTerraform(this._cspmEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_metrics_enabled: {
        value: cdktf.booleanToHclTerraform(this._customMetricsEnabled),
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
      metrics_enabled: {
        value: cdktf.booleanToHclTerraform(this._metricsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metrics_enabled_default: {
        value: cdktf.booleanToHclTerraform(this._metricsEnabledDefault),
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
      resource_provider_configs: {
        value: cdktf.listMapperHcl(integrationAzureResourceProviderConfigsToHclTerraform, false)(this._resourceProviderConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationAzureResourceProviderConfigsList",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_metrics_enabled: {
        value: cdktf.booleanToHclTerraform(this._usageMetricsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
