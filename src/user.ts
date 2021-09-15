// https://www.terraform.io/docs/providers/datadog/r/user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the user is disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/user.html#disabled User#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Email address for user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/user.html#email User#email}
  */
  readonly email: string;
  /**
  * Name for user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/user.html#name User#name}
  */
  readonly name?: string;
  /**
  * A list a role IDs to assign to the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/user.html#roles User#roles}
  */
  readonly roles?: string[];
  /**
  * Whether an invitation email should be sent when the user is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/user.html#send_user_invitation User#send_user_invitation}
  */
  readonly sendUserInvitation?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/user.html datadog_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/user.html datadog_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_user',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._disabled = config.disabled;
    this._email = config.email;
    this._name = config.name;
    this._roles = config.roles;
    this._sendUserInvitation = config.sendUserInvitation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable;
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable ) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

  // email - computed: false, optional: false, required: true
  private _email: string;
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[];
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[] ) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // send_user_invitation - computed: false, optional: true, required: false
  private _sendUserInvitation?: boolean | cdktf.IResolvable;
  public get sendUserInvitation() {
    return this.getBooleanAttribute('send_user_invitation');
  }
  public set sendUserInvitation(value: boolean | cdktf.IResolvable ) {
    this._sendUserInvitation = value;
  }
  public resetSendUserInvitation() {
    this._sendUserInvitation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendUserInvitationInput() {
    return this._sendUserInvitation
  }

  // user_invitation_id - computed: true, optional: false, required: false
  public get userInvitationId() {
    return this.getStringAttribute('user_invitation_id');
  }

  // verified - computed: true, optional: false, required: false
  public get verified() {
    return this.getBooleanAttribute('verified');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      email: cdktf.stringToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
      roles: cdktf.listMapper(cdktf.stringToTerraform)(this._roles),
      send_user_invitation: cdktf.booleanToTerraform(this._sendUserInvitation),
    };
  }
}
