/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/data-sources/azure_uc_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogAzureUcConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/data-sources/azure_uc_config#cloud_account_id DataDatadogAzureUcConfig#cloud_account_id}
  */
  readonly cloudAccountId: number;
}
export interface DataDatadogAzureUcConfigActualBillConfig {
}

export function dataDatadogAzureUcConfigActualBillConfigToTerraform(struct?: DataDatadogAzureUcConfigActualBillConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogAzureUcConfigActualBillConfigToHclTerraform(struct?: DataDatadogAzureUcConfigActualBillConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogAzureUcConfigActualBillConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogAzureUcConfigActualBillConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogAzureUcConfigActualBillConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // export_name - computed: true, optional: false, required: false
  public get exportName() {
    return this.getStringAttribute('export_name');
  }

  // export_path - computed: true, optional: false, required: false
  public get exportPath() {
    return this.getStringAttribute('export_path');
  }

  // storage_account - computed: true, optional: false, required: false
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }

  // storage_container - computed: true, optional: false, required: false
  public get storageContainer() {
    return this.getStringAttribute('storage_container');
  }
}
export interface DataDatadogAzureUcConfigAmortizedBillConfig {
}

export function dataDatadogAzureUcConfigAmortizedBillConfigToTerraform(struct?: DataDatadogAzureUcConfigAmortizedBillConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogAzureUcConfigAmortizedBillConfigToHclTerraform(struct?: DataDatadogAzureUcConfigAmortizedBillConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogAzureUcConfigAmortizedBillConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogAzureUcConfigAmortizedBillConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogAzureUcConfigAmortizedBillConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // export_name - computed: true, optional: false, required: false
  public get exportName() {
    return this.getStringAttribute('export_name');
  }

  // export_path - computed: true, optional: false, required: false
  public get exportPath() {
    return this.getStringAttribute('export_path');
  }

  // storage_account - computed: true, optional: false, required: false
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }

  // storage_container - computed: true, optional: false, required: false
  public get storageContainer() {
    return this.getStringAttribute('storage_container');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/data-sources/azure_uc_config datadog_azure_uc_config}
*/
export class DataDatadogAzureUcConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_azure_uc_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogAzureUcConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogAzureUcConfig to import
  * @param importFromId The id of the existing DataDatadogAzureUcConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/data-sources/azure_uc_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogAzureUcConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_azure_uc_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/data-sources/azure_uc_config datadog_azure_uc_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogAzureUcConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogAzureUcConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_azure_uc_config',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.77.0',
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
    this._cloudAccountId = config.cloudAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // cloud_account_id - computed: false, optional: false, required: true
  private _cloudAccountId?: number; 
  public get cloudAccountId() {
    return this.getNumberAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: number) {
    this._cloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
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

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
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

  // actual_bill_config - computed: false, optional: false, required: false
  private _actualBillConfig = new DataDatadogAzureUcConfigActualBillConfigOutputReference(this, "actual_bill_config");
  public get actualBillConfig() {
    return this._actualBillConfig;
  }

  // amortized_bill_config - computed: false, optional: false, required: false
  private _amortizedBillConfig = new DataDatadogAzureUcConfigAmortizedBillConfigOutputReference(this, "amortized_bill_config");
  public get amortizedBillConfig() {
    return this._amortizedBillConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_account_id: cdktf.numberToTerraform(this._cloudAccountId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_account_id: {
        value: cdktf.numberToHclTerraform(this._cloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
