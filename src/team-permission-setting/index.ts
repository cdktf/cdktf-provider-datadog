// https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/resources/team_permission_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamPermissionSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier for the action. Valid values are `manage_membership`, `edit`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/resources/team_permission_setting#action TeamPermissionSetting#action}
  */
  readonly action: string;
  /**
  * ID of the team the team permission setting is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/resources/team_permission_setting#team_id TeamPermissionSetting#team_id}
  */
  readonly teamId: string;
  /**
  * The action value. Valid values are dependent on the action. `manage_membership` action allows `admins`, `members`, `organization`, `user_access_manage` values. `edit` action allows `admins`, `members`, `teams_manage` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/resources/team_permission_setting#value TeamPermissionSetting#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/resources/team_permission_setting datadog_team_permission_setting}
*/
export class TeamPermissionSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_team_permission_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamPermissionSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamPermissionSetting to import
  * @param importFromId The id of the existing TeamPermissionSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/resources/team_permission_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamPermissionSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_team_permission_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/resources/team_permission_setting datadog_team_permission_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamPermissionSettingConfig
  */
  public constructor(scope: Construct, id: string, config: TeamPermissionSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_team_permission_setting',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.58.0',
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
    this._action = config.action;
    this._teamId = config.teamId;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      team_id: cdktf.stringToTerraform(this._teamId),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
