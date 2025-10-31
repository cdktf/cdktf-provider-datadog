/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_rulesets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagPipelineRulesetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of Tag Pipeline Ruleset IDs, in order. Rulesets are executed in the order specified in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_rulesets#ruleset_ids TagPipelineRulesets#ruleset_ids}
  */
  readonly rulesetIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_rulesets datadog_tag_pipeline_rulesets}
*/
export class TagPipelineRulesets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_tag_pipeline_rulesets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TagPipelineRulesets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagPipelineRulesets to import
  * @param importFromId The id of the existing TagPipelineRulesets that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_rulesets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagPipelineRulesets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_tag_pipeline_rulesets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_rulesets datadog_tag_pipeline_rulesets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagPipelineRulesetsConfig
  */
  public constructor(scope: Construct, id: string, config: TagPipelineRulesetsConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_tag_pipeline_rulesets',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.78.0',
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
    this._rulesetIds = config.rulesetIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ruleset_ids - computed: false, optional: false, required: true
  private _rulesetIds?: string[]; 
  public get rulesetIds() {
    return this.getListAttribute('ruleset_ids');
  }
  public set rulesetIds(value: string[]) {
    this._rulesetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetIdsInput() {
    return this._rulesetIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ruleset_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rulesetIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ruleset_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rulesetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
