/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/team_hierarchy_links
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamHierarchyLinksConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the parent team the team hierarchy link is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/team_hierarchy_links#parent_team_id TeamHierarchyLinks#parent_team_id}
  */
  readonly parentTeamId: string;
  /**
  * ID of the sub team the team hierarchy link is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/team_hierarchy_links#sub_team_id TeamHierarchyLinks#sub_team_id}
  */
  readonly subTeamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/team_hierarchy_links datadog_team_hierarchy_links}
*/
export class TeamHierarchyLinks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_team_hierarchy_links";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamHierarchyLinks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamHierarchyLinks to import
  * @param importFromId The id of the existing TeamHierarchyLinks that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/team_hierarchy_links#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamHierarchyLinks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_team_hierarchy_links", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/team_hierarchy_links datadog_team_hierarchy_links} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamHierarchyLinksConfig
  */
  public constructor(scope: Construct, id: string, config: TeamHierarchyLinksConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_team_hierarchy_links',
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
    this._parentTeamId = config.parentTeamId;
    this._subTeamId = config.subTeamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent_team_id - computed: false, optional: false, required: true
  private _parentTeamId?: string; 
  public get parentTeamId() {
    return this.getStringAttribute('parent_team_id');
  }
  public set parentTeamId(value: string) {
    this._parentTeamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTeamIdInput() {
    return this._parentTeamId;
  }

  // provisioned_by - computed: true, optional: false, required: false
  public get provisionedBy() {
    return this.getStringAttribute('provisioned_by');
  }

  // sub_team_id - computed: false, optional: false, required: true
  private _subTeamId?: string; 
  public get subTeamId() {
    return this.getStringAttribute('sub_team_id');
  }
  public set subTeamId(value: string) {
    this._subTeamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subTeamIdInput() {
    return this._subTeamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parent_team_id: cdktf.stringToTerraform(this._parentTeamId),
      sub_team_id: cdktf.stringToTerraform(this._subTeamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      parent_team_id: {
        value: cdktf.stringToHclTerraform(this._parentTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_team_id: {
        value: cdktf.stringToHclTerraform(this._subTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
