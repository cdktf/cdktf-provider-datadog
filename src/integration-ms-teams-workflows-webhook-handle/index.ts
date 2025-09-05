/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/integration_ms_teams_workflows_webhook_handle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationMsTeamsWorkflowsWebhookHandleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your Microsoft Workflows webhook handle name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/integration_ms_teams_workflows_webhook_handle#name IntegrationMsTeamsWorkflowsWebhookHandle#name}
  */
  readonly name: string;
  /**
  * Your Microsoft Workflows webhook URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/integration_ms_teams_workflows_webhook_handle#url IntegrationMsTeamsWorkflowsWebhookHandle#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/integration_ms_teams_workflows_webhook_handle datadog_integration_ms_teams_workflows_webhook_handle}
*/
export class IntegrationMsTeamsWorkflowsWebhookHandle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_ms_teams_workflows_webhook_handle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationMsTeamsWorkflowsWebhookHandle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationMsTeamsWorkflowsWebhookHandle to import
  * @param importFromId The id of the existing IntegrationMsTeamsWorkflowsWebhookHandle that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/integration_ms_teams_workflows_webhook_handle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationMsTeamsWorkflowsWebhookHandle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_ms_teams_workflows_webhook_handle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/integration_ms_teams_workflows_webhook_handle datadog_integration_ms_teams_workflows_webhook_handle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationMsTeamsWorkflowsWebhookHandleConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationMsTeamsWorkflowsWebhookHandleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_ms_teams_workflows_webhook_handle',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.73.0',
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
    this._name = config.name;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
