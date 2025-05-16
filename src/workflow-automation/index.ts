/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/workflow_automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowAutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/workflow_automation#description WorkflowAutomation#description}
  */
  readonly description: string;
  /**
  * Name of the workflow. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/workflow_automation#name WorkflowAutomation#name}
  */
  readonly name: string;
  /**
  * Set the workflow to published or unpublished. Workflows in an unpublished state are only executable through manual runs. Automatic triggers such as Schedule do not execute the workflow until it is published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/workflow_automation#published WorkflowAutomation#published}
  */
  readonly published: boolean | cdktf.IResolvable;
  /**
  * The spec defines what the workflow does.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/workflow_automation#spec_json WorkflowAutomation#spec_json}
  */
  readonly specJson: string;
  /**
  * Tags of the workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/workflow_automation#tags WorkflowAutomation#tags}
  */
  readonly tags: string[];
  /**
  * If a webhook trigger is defined on this workflow, a webhookSecret is required and should be provided here. String length must be at least 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/workflow_automation#webhook_secret WorkflowAutomation#webhook_secret}
  */
  readonly webhookSecret?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/workflow_automation datadog_workflow_automation}
*/
export class WorkflowAutomation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_workflow_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowAutomation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowAutomation to import
  * @param importFromId The id of the existing WorkflowAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/workflow_automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowAutomation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_workflow_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/workflow_automation datadog_workflow_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_workflow_automation',
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
    this._description = config.description;
    this._name = config.name;
    this._published = config.published;
    this._specJson = config.specJson;
    this._tags = config.tags;
    this._webhookSecret = config.webhookSecret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // published - computed: false, optional: false, required: true
  private _published?: boolean | cdktf.IResolvable; 
  public get published() {
    return this.getBooleanAttribute('published');
  }
  public set published(value: boolean | cdktf.IResolvable) {
    this._published = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published;
  }

  // spec_json - computed: false, optional: false, required: true
  private _specJson?: string; 
  public get specJson() {
    return this.getStringAttribute('spec_json');
  }
  public set specJson(value: string) {
    this._specJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specJsonInput() {
    return this._specJson;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // webhook_secret - computed: false, optional: true, required: false
  private _webhookSecret?: string; 
  public get webhookSecret() {
    return this.getStringAttribute('webhook_secret');
  }
  public set webhookSecret(value: string) {
    this._webhookSecret = value;
  }
  public resetWebhookSecret() {
    this._webhookSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretInput() {
    return this._webhookSecret;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      published: cdktf.booleanToTerraform(this._published),
      spec_json: cdktf.stringToTerraform(this._specJson),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      webhook_secret: cdktf.stringToTerraform(this._webhookSecret),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      published: {
        value: cdktf.booleanToHclTerraform(this._published),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spec_json: {
        value: cdktf.stringToHclTerraform(this._specJson),
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
      webhook_secret: {
        value: cdktf.stringToHclTerraform(this._webhookSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
