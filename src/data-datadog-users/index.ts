// https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter all users by the given string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/users#filter DataDatadogUsers#filter}
  */
  readonly filter?: string;
  /**
  * Filter on status attribute. Comma-separated list with possible values of Active, Pending, and Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/users#filter_status DataDatadogUsers#filter_status}
  */
  readonly filterStatus?: string;
}
export interface DataDatadogUsersUsers {
}

export function dataDatadogUsersUsersToTerraform(struct?: DataDatadogUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogUsersUsersToHclTerraform(struct?: DataDatadogUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataDatadogUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogUsersUsersOutputReference {
    return new DataDatadogUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/users datadog_users}
*/
export class DataDatadogUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogUsers to import
  * @param importFromId The id of the existing DataDatadogUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.47.0/docs/data-sources/users datadog_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_users',
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
    this._filter = config.filter;
    this._filterStatus = config.filterStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // filter_status - computed: false, optional: true, required: false
  private _filterStatus?: string; 
  public get filterStatus() {
    return this.getStringAttribute('filter_status');
  }
  public set filterStatus(value: string) {
    this._filterStatus = value;
  }
  public resetFilterStatus() {
    this._filterStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStatusInput() {
    return this._filterStatus;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataDatadogUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      filter_status: cdktf.stringToTerraform(this._filterStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_status: {
        value: cdktf.stringToHclTerraform(this._filterStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
