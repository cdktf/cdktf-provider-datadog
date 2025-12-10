/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogTeamHierarchyLinksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter by parent team ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_parent_team DataDatadogTeamHierarchyLinks#filter_parent_team}
  */
  readonly filterParentTeam?: string;
  /**
  * Filter by sub team ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_sub_team DataDatadogTeamHierarchyLinks#filter_sub_team}
  */
  readonly filterSubTeam?: string;
  /**
  * The team hierarchy link’s identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#link_id DataDatadogTeamHierarchyLinks#link_id}
  */
  readonly linkId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links datadog_team_hierarchy_links}
*/
export class DataDatadogTeamHierarchyLinks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_team_hierarchy_links";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogTeamHierarchyLinks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogTeamHierarchyLinks to import
  * @param importFromId The id of the existing DataDatadogTeamHierarchyLinks that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogTeamHierarchyLinks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_team_hierarchy_links", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links datadog_team_hierarchy_links} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogTeamHierarchyLinksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogTeamHierarchyLinksConfig = {}) {
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
    this._filterParentTeam = config.filterParentTeam;
    this._filterSubTeam = config.filterSubTeam;
    this._linkId = config.linkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // filter_parent_team - computed: false, optional: true, required: false
  private _filterParentTeam?: string; 
  public get filterParentTeam() {
    return this.getStringAttribute('filter_parent_team');
  }
  public set filterParentTeam(value: string) {
    this._filterParentTeam = value;
  }
  public resetFilterParentTeam() {
    this._filterParentTeam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterParentTeamInput() {
    return this._filterParentTeam;
  }

  // filter_sub_team - computed: false, optional: true, required: false
  private _filterSubTeam?: string; 
  public get filterSubTeam() {
    return this.getStringAttribute('filter_sub_team');
  }
  public set filterSubTeam(value: string) {
    this._filterSubTeam = value;
  }
  public resetFilterSubTeam() {
    this._filterSubTeam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSubTeamInput() {
    return this._filterSubTeam;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_id - computed: false, optional: true, required: false
  private _linkId?: string; 
  public get linkId() {
    return this.getStringAttribute('link_id');
  }
  public set linkId(value: string) {
    this._linkId = value;
  }
  public resetLinkId() {
    this._linkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkIdInput() {
    return this._linkId;
  }

  // provisioned_by - computed: true, optional: false, required: false
  public get provisionedBy() {
    return this.getStringAttribute('provisioned_by');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_parent_team: cdktf.stringToTerraform(this._filterParentTeam),
      filter_sub_team: cdktf.stringToTerraform(this._filterSubTeam),
      link_id: cdktf.stringToTerraform(this._linkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_parent_team: {
        value: cdktf.stringToHclTerraform(this._filterParentTeam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_sub_team: {
        value: cdktf.stringToHclTerraform(this._filterSubTeam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_id: {
        value: cdktf.stringToHclTerraform(this._linkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
