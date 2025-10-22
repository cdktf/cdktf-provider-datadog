/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the user is disabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/user#disabled User#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Email address for user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User's name. Should be set only for password authentication, as it is overridden by Google or SAML authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/user#name User#name}
  */
  readonly name?: string;
  /**
  * A list of role IDs to assign to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/user#roles User#roles}
  */
  readonly roles?: string[];
  /**
  * Whether an invitation email should be sent when the user is created. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/user#send_user_invitation User#send_user_invitation}
  */
  readonly sendUserInvitation?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/user datadog_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/user datadog_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_user',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.77.0',
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
    this._disabled = config.disabled;
    this._email = config.email;
    this._id = config.id;
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
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // roles - computed: true, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // send_user_invitation - computed: false, optional: true, required: false
  private _sendUserInvitation?: boolean | cdktf.IResolvable; 
  public get sendUserInvitation() {
    return this.getBooleanAttribute('send_user_invitation');
  }
  public set sendUserInvitation(value: boolean | cdktf.IResolvable) {
    this._sendUserInvitation = value;
  }
  public resetSendUserInvitation() {
    this._sendUserInvitation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendUserInvitationInput() {
    return this._sendUserInvitation;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      send_user_invitation: cdktf.booleanToTerraform(this._sendUserInvitation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      send_user_invitation: {
        value: cdktf.booleanToHclTerraform(this._sendUserInvitation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
