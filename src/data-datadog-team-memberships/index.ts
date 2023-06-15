/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/data-sources/team_memberships
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogTeamMembershipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search query, can be user email or name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/data-sources/team_memberships#filter_keyword DataDatadogTeamMemberships#filter_keyword}
  */
  readonly filterKeyword?: string;
  /**
  * The team's identifier.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/data-sources/team_memberships#team_id DataDatadogTeamMemberships#team_id}
  */
  readonly teamId: string;
}
export interface DataDatadogTeamMembershipsTeamMemberships {
}

export function dataDatadogTeamMembershipsTeamMembershipsToTerraform(struct?: DataDatadogTeamMembershipsTeamMemberships): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogTeamMembershipsTeamMembershipsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogTeamMembershipsTeamMemberships | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogTeamMembershipsTeamMemberships | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataDatadogTeamMembershipsTeamMembershipsList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogTeamMembershipsTeamMembershipsOutputReference {
    return new DataDatadogTeamMembershipsTeamMembershipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/data-sources/team_memberships datadog_team_memberships}
*/
export class DataDatadogTeamMemberships extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_team_memberships";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/data-sources/team_memberships datadog_team_memberships} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogTeamMembershipsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogTeamMembershipsConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_team_memberships',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.26.0',
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
    this._filterKeyword = config.filterKeyword;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_keyword - computed: false, optional: true, required: false
  private _filterKeyword?: string; 
  public get filterKeyword() {
    return this.getStringAttribute('filter_keyword');
  }
  public set filterKeyword(value: string) {
    this._filterKeyword = value;
  }
  public resetFilterKeyword() {
    this._filterKeyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKeywordInput() {
    return this._filterKeyword;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // team_memberships - computed: true, optional: false, required: false
  private _teamMemberships = new DataDatadogTeamMembershipsTeamMembershipsList(this, "team_memberships", false);
  public get teamMemberships() {
    return this._teamMemberships;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_keyword: cdktf.stringToTerraform(this._filterKeyword),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }
}
