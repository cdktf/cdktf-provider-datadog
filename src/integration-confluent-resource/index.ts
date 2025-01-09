/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_confluent_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationConfluentResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Confluent Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_confluent_resource#account_id IntegrationConfluentResource#account_id}
  */
  readonly accountId: string;
  /**
  * Enable the `custom.consumer_lag_offset` metric, which contains extra metric tags. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_confluent_resource#enable_custom_metrics IntegrationConfluentResource#enable_custom_metrics}
  */
  readonly enableCustomMetrics?: boolean | cdktf.IResolvable;
  /**
  * The ID associated with a Confluent resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_confluent_resource#resource_id IntegrationConfluentResource#resource_id}
  */
  readonly resourceId: string;
  /**
  * The resource type of the Resource. Can be `kafka`, `connector`, `ksql`, or `schema_registry`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_confluent_resource#resource_type IntegrationConfluentResource#resource_type}
  */
  readonly resourceType?: string;
  /**
  * A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_confluent_resource#tags IntegrationConfluentResource#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_confluent_resource datadog_integration_confluent_resource}
*/
export class IntegrationConfluentResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_confluent_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationConfluentResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationConfluentResource to import
  * @param importFromId The id of the existing IntegrationConfluentResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_confluent_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationConfluentResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_confluent_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_confluent_resource datadog_integration_confluent_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationConfluentResourceConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationConfluentResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_confluent_resource',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.51.0',
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
    this._enableCustomMetrics = config.enableCustomMetrics;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._tags = config.tags;
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

  // enable_custom_metrics - computed: true, optional: true, required: false
  private _enableCustomMetrics?: boolean | cdktf.IResolvable; 
  public get enableCustomMetrics() {
    return this.getBooleanAttribute('enable_custom_metrics');
  }
  public set enableCustomMetrics(value: boolean | cdktf.IResolvable) {
    this._enableCustomMetrics = value;
  }
  public resetEnableCustomMetrics() {
    this._enableCustomMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCustomMetricsInput() {
    return this._enableCustomMetrics;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      enable_custom_metrics: cdktf.booleanToTerraform(this._enableCustomMetrics),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
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
      enable_custom_metrics: {
        value: cdktf.booleanToHclTerraform(this._enableCustomMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
