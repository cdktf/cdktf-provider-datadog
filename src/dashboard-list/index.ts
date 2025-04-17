/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/dashboard_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Dashboard List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/dashboard_list#name DashboardList#name}
  */
  readonly name: string;
  /**
  * dash_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/dashboard_list#dash_item DashboardList#dash_item}
  */
  readonly dashItem?: DashboardListDashItem[] | cdktf.IResolvable;
}
export interface DashboardListDashItem {
  /**
  * The ID of the dashboard to add
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/dashboard_list#dash_id DashboardList#dash_id}
  */
  readonly dashId: string;
  /**
  * The type of this dashboard. Valid values are `custom_timeboard`, `custom_screenboard`, `integration_screenboard`, `integration_timeboard`, `host_timeboard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/dashboard_list#type DashboardList#type}
  */
  readonly type: string;
}

export function dashboardListDashItemToTerraform(struct?: DashboardListDashItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dash_id: cdktf.stringToTerraform(struct!.dashId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dashboardListDashItemToHclTerraform(struct?: DashboardListDashItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dash_id: {
      value: cdktf.stringToHclTerraform(struct!.dashId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardListDashItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DashboardListDashItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashId = this._dashId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardListDashItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashId = value.dashId;
      this._type = value.type;
    }
  }

  // dash_id - computed: false, optional: false, required: true
  private _dashId?: string; 
  public get dashId() {
    return this.getStringAttribute('dash_id');
  }
  public set dashId(value: string) {
    this._dashId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashIdInput() {
    return this._dashId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DashboardListDashItemList extends cdktf.ComplexList {
  public internalValue? : DashboardListDashItem[] | cdktf.IResolvable

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
  public get(index: number): DashboardListDashItemOutputReference {
    return new DashboardListDashItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/dashboard_list datadog_dashboard_list}
*/
export class DashboardList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_dashboard_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardList to import
  * @param importFromId The id of the existing DashboardList that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/dashboard_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_dashboard_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/dashboard_list datadog_dashboard_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardListConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardListConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_dashboard_list',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.60.0',
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
    this._name = config.name;
    this._dashItem.internalValue = config.dashItem;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // dash_item - computed: false, optional: true, required: false
  private _dashItem = new DashboardListDashItemList(this, "dash_item", true);
  public get dashItem() {
    return this._dashItem;
  }
  public putDashItem(value: DashboardListDashItem[] | cdktf.IResolvable) {
    this._dashItem.internalValue = value;
  }
  public resetDashItem() {
    this._dashItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashItemInput() {
    return this._dashItem.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      dash_item: cdktf.listMapper(dashboardListDashItemToTerraform, true)(this._dashItem.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dash_item: {
        value: cdktf.listMapperHcl(dashboardListDashItemToHclTerraform, true)(this._dashItem.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DashboardListDashItemList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
