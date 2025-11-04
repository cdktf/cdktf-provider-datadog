/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureUcConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The tenant ID of the Azure account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#account_id AzureUcConfig#account_id}
  */
  readonly accountId: string;
  /**
  * The client ID of the Azure account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#client_id AzureUcConfig#client_id}
  */
  readonly clientId: string;
  /**
  * The scope of your observed subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#scope AzureUcConfig#scope}
  */
  readonly scope: string;
  /**
  * actual_bill_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#actual_bill_config AzureUcConfig#actual_bill_config}
  */
  readonly actualBillConfig: AzureUcConfigActualBillConfig;
  /**
  * amortized_bill_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#amortized_bill_config AzureUcConfig#amortized_bill_config}
  */
  readonly amortizedBillConfig: AzureUcConfigAmortizedBillConfig;
}
export interface AzureUcConfigActualBillConfig {
  /**
  * The name of the configured Azure Export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#export_name AzureUcConfig#export_name}
  */
  readonly exportName: string;
  /**
  * The path where the Azure Export is saved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#export_path AzureUcConfig#export_path}
  */
  readonly exportPath: string;
  /**
  * The name of the storage account where the Azure Export is saved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#storage_account AzureUcConfig#storage_account}
  */
  readonly storageAccount: string;
  /**
  * The name of the storage container where the Azure Export is saved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#storage_container AzureUcConfig#storage_container}
  */
  readonly storageContainer: string;
}

export function azureUcConfigActualBillConfigToTerraform(struct?: AzureUcConfigActualBillConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_name: cdktf.stringToTerraform(struct!.exportName),
    export_path: cdktf.stringToTerraform(struct!.exportPath),
    storage_account: cdktf.stringToTerraform(struct!.storageAccount),
    storage_container: cdktf.stringToTerraform(struct!.storageContainer),
  }
}


export function azureUcConfigActualBillConfigToHclTerraform(struct?: AzureUcConfigActualBillConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_name: {
      value: cdktf.stringToHclTerraform(struct!.exportName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_path: {
      value: cdktf.stringToHclTerraform(struct!.exportPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account: {
      value: cdktf.stringToHclTerraform(struct!.storageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_container: {
      value: cdktf.stringToHclTerraform(struct!.storageContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureUcConfigActualBillConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureUcConfigActualBillConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportName !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportName = this._exportName;
    }
    if (this._exportPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPath = this._exportPath;
    }
    if (this._storageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccount = this._storageAccount;
    }
    if (this._storageContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainer = this._storageContainer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureUcConfigActualBillConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportName = undefined;
      this._exportPath = undefined;
      this._storageAccount = undefined;
      this._storageContainer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportName = value.exportName;
      this._exportPath = value.exportPath;
      this._storageAccount = value.storageAccount;
      this._storageContainer = value.storageContainer;
    }
  }

  // export_name - computed: false, optional: false, required: true
  private _exportName?: string; 
  public get exportName() {
    return this.getStringAttribute('export_name');
  }
  public set exportName(value: string) {
    this._exportName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportNameInput() {
    return this._exportName;
  }

  // export_path - computed: false, optional: false, required: true
  private _exportPath?: string; 
  public get exportPath() {
    return this.getStringAttribute('export_path');
  }
  public set exportPath(value: string) {
    this._exportPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPathInput() {
    return this._exportPath;
  }

  // storage_account - computed: false, optional: false, required: true
  private _storageAccount?: string; 
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }
  public set storageAccount(value: string) {
    this._storageAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
  }

  // storage_container - computed: false, optional: false, required: true
  private _storageContainer?: string; 
  public get storageContainer() {
    return this.getStringAttribute('storage_container');
  }
  public set storageContainer(value: string) {
    this._storageContainer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerInput() {
    return this._storageContainer;
  }
}
export interface AzureUcConfigAmortizedBillConfig {
  /**
  * The name of the configured Azure Export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#export_name AzureUcConfig#export_name}
  */
  readonly exportName: string;
  /**
  * The path where the Azure Export is saved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#export_path AzureUcConfig#export_path}
  */
  readonly exportPath: string;
  /**
  * The name of the storage account where the Azure Export is saved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#storage_account AzureUcConfig#storage_account}
  */
  readonly storageAccount: string;
  /**
  * The name of the storage container where the Azure Export is saved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#storage_container AzureUcConfig#storage_container}
  */
  readonly storageContainer: string;
}

export function azureUcConfigAmortizedBillConfigToTerraform(struct?: AzureUcConfigAmortizedBillConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_name: cdktf.stringToTerraform(struct!.exportName),
    export_path: cdktf.stringToTerraform(struct!.exportPath),
    storage_account: cdktf.stringToTerraform(struct!.storageAccount),
    storage_container: cdktf.stringToTerraform(struct!.storageContainer),
  }
}


export function azureUcConfigAmortizedBillConfigToHclTerraform(struct?: AzureUcConfigAmortizedBillConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_name: {
      value: cdktf.stringToHclTerraform(struct!.exportName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_path: {
      value: cdktf.stringToHclTerraform(struct!.exportPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account: {
      value: cdktf.stringToHclTerraform(struct!.storageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_container: {
      value: cdktf.stringToHclTerraform(struct!.storageContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureUcConfigAmortizedBillConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureUcConfigAmortizedBillConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportName !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportName = this._exportName;
    }
    if (this._exportPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPath = this._exportPath;
    }
    if (this._storageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccount = this._storageAccount;
    }
    if (this._storageContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainer = this._storageContainer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureUcConfigAmortizedBillConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportName = undefined;
      this._exportPath = undefined;
      this._storageAccount = undefined;
      this._storageContainer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportName = value.exportName;
      this._exportPath = value.exportPath;
      this._storageAccount = value.storageAccount;
      this._storageContainer = value.storageContainer;
    }
  }

  // export_name - computed: false, optional: false, required: true
  private _exportName?: string; 
  public get exportName() {
    return this.getStringAttribute('export_name');
  }
  public set exportName(value: string) {
    this._exportName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportNameInput() {
    return this._exportName;
  }

  // export_path - computed: false, optional: false, required: true
  private _exportPath?: string; 
  public get exportPath() {
    return this.getStringAttribute('export_path');
  }
  public set exportPath(value: string) {
    this._exportPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPathInput() {
    return this._exportPath;
  }

  // storage_account - computed: false, optional: false, required: true
  private _storageAccount?: string; 
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }
  public set storageAccount(value: string) {
    this._storageAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
  }

  // storage_container - computed: false, optional: false, required: true
  private _storageContainer?: string; 
  public get storageContainer() {
    return this.getStringAttribute('storage_container');
  }
  public set storageContainer(value: string) {
    this._storageContainer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerInput() {
    return this._storageContainer;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config datadog_azure_uc_config}
*/
export class AzureUcConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_azure_uc_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureUcConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureUcConfig to import
  * @param importFromId The id of the existing AzureUcConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureUcConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_azure_uc_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/azure_uc_config datadog_azure_uc_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureUcConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AzureUcConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_azure_uc_config',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.79.0',
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
    this._accountId = config.accountId;
    this._clientId = config.clientId;
    this._scope = config.scope;
    this._actualBillConfig.internalValue = config.actualBillConfig;
    this._amortizedBillConfig.internalValue = config.amortizedBillConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // error_messages - computed: true, optional: false, required: false
  public get errorMessages() {
    return this.getListAttribute('error_messages');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_updated_at - computed: true, optional: false, required: false
  public get statusUpdatedAt() {
    return this.getStringAttribute('status_updated_at');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // actual_bill_config - computed: false, optional: false, required: true
  private _actualBillConfig = new AzureUcConfigActualBillConfigOutputReference(this, "actual_bill_config");
  public get actualBillConfig() {
    return this._actualBillConfig;
  }
  public putActualBillConfig(value: AzureUcConfigActualBillConfig) {
    this._actualBillConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actualBillConfigInput() {
    return this._actualBillConfig.internalValue;
  }

  // amortized_bill_config - computed: false, optional: false, required: true
  private _amortizedBillConfig = new AzureUcConfigAmortizedBillConfigOutputReference(this, "amortized_bill_config");
  public get amortizedBillConfig() {
    return this._amortizedBillConfig;
  }
  public putAmortizedBillConfig(value: AzureUcConfigAmortizedBillConfig) {
    this._amortizedBillConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amortizedBillConfigInput() {
    return this._amortizedBillConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      client_id: cdktf.stringToTerraform(this._clientId),
      scope: cdktf.stringToTerraform(this._scope),
      actual_bill_config: azureUcConfigActualBillConfigToTerraform(this._actualBillConfig.internalValue),
      amortized_bill_config: azureUcConfigAmortizedBillConfigToTerraform(this._amortizedBillConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actual_bill_config: {
        value: azureUcConfigActualBillConfigToHclTerraform(this._actualBillConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureUcConfigActualBillConfig",
      },
      amortized_bill_config: {
        value: azureUcConfigAmortizedBillConfigToHclTerraform(this._amortizedBillConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureUcConfigAmortizedBillConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
