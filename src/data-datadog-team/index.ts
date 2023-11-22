// https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogTeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search query. Can be team name, team handle, or email of team member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/team#filter_keyword DataDatadogTeam#filter_keyword}
  */
  readonly filterKeyword?: string;
  /**
  * The team's identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/team#team_id DataDatadogTeam#team_id}
  */
  readonly teamId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/team datadog_team}
*/
export class DataDatadogTeam extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogTeam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogTeam to import
  * @param importFromId The id of the existing DataDatadogTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogTeam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/team datadog_team} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogTeamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogTeamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_team',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.33.0',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

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

  // handle - computed: true, optional: false, required: false
  public get handle() {
    return this.getStringAttribute('handle');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_count - computed: true, optional: false, required: false
  public get linkCount() {
    return this.getNumberAttribute('link_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // user_count - computed: true, optional: false, required: false
  public get userCount() {
    return this.getNumberAttribute('user_count');
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
