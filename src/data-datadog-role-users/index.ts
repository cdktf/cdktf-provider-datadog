// https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/role_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogRoleUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, `filter_keyword` string is exact matched against the user's `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/role_users#exact_match DataDatadogRoleUsers#exact_match}
  */
  readonly exactMatch?: boolean | cdktf.IResolvable;
  /**
  * Search query, can be user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/role_users#filter DataDatadogRoleUsers#filter}
  */
  readonly filter?: string;
  /**
  * The role's identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/role_users#role_id DataDatadogRoleUsers#role_id}
  */
  readonly roleId: string;
}
export interface DataDatadogRoleUsersRoleUsers {
}

export function dataDatadogRoleUsersRoleUsersToTerraform(struct?: DataDatadogRoleUsersRoleUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogRoleUsersRoleUsersToHclTerraform(struct?: DataDatadogRoleUsersRoleUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogRoleUsersRoleUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogRoleUsersRoleUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogRoleUsersRoleUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataDatadogRoleUsersRoleUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogRoleUsersRoleUsersOutputReference {
    return new DataDatadogRoleUsersRoleUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/role_users datadog_role_users}
*/
export class DataDatadogRoleUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_role_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogRoleUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogRoleUsers to import
  * @param importFromId The id of the existing DataDatadogRoleUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/role_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogRoleUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_role_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/role_users datadog_role_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogRoleUsersConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogRoleUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_role_users',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.47.0',
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
    this._exactMatch = config.exactMatch;
    this._filter = config.filter;
    this._roleId = config.roleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: boolean | cdktf.IResolvable; 
  public get exactMatch() {
    return this.getBooleanAttribute('exact_match');
  }
  public set exactMatch(value: boolean | cdktf.IResolvable) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // role_users - computed: true, optional: false, required: false
  private _roleUsers = new DataDatadogRoleUsersRoleUsersList(this, "role_users", false);
  public get roleUsers() {
    return this._roleUsers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exact_match: cdktf.booleanToTerraform(this._exactMatch),
      filter: cdktf.stringToTerraform(this._filter),
      role_id: cdktf.stringToTerraform(this._roleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exact_match: {
        value: cdktf.booleanToHclTerraform(this._exactMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
