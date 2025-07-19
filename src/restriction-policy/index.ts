/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/restriction_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RestrictionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier for the resource, formatted as resource_type:resource_id.
  * 
  * Resources to define `resource_type` : 
  * * [List of supported resources](https://docs.datadoghq.com/account_management/rbac/granular_access)
  * * [Resource type definition](https://docs.datadoghq.com/api/latest/restriction-policies/#supported-resources)
  * 
  * Restrictions :
  * * Dashboards : support is in private beta. Reach out to your Datadog contact or support to enable this.
  * * Monitors : Management of restriction policy through terraform is currently not available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/restriction_policy#resource_id RestrictionPolicy#resource_id}
  */
  readonly resourceId: string;
  /**
  * bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/restriction_policy#bindings RestrictionPolicy#bindings}
  */
  readonly bindings?: RestrictionPolicyBindings[] | cdktf.IResolvable;
}
export interface RestrictionPolicyBindings {
  /**
  * An array of principals. A principal is a subject or group of subjects. Each principal is formatted as `type:id`. Supported types: `role`, `team`, `user`, and `org`. Org ID can be obtained using a `GET /api/v2/current_user` API request. Find it in the `data.relationships.org.data.id` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/restriction_policy#principals RestrictionPolicy#principals}
  */
  readonly principals: string[];
  /**
  * The role/level of access. See this page for more details https://docs.datadoghq.com/api/latest/restriction-policies/#supported-relations-for-resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/restriction_policy#relation RestrictionPolicy#relation}
  */
  readonly relation: string;
}

export function restrictionPolicyBindingsToTerraform(struct?: RestrictionPolicyBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principals),
    relation: cdktf.stringToTerraform(struct!.relation),
  }
}


export function restrictionPolicyBindingsToHclTerraform(struct?: RestrictionPolicyBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    relation: {
      value: cdktf.stringToHclTerraform(struct!.relation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RestrictionPolicyBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RestrictionPolicyBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    if (this._relation !== undefined) {
      hasAnyValues = true;
      internalValueResult.relation = this._relation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestrictionPolicyBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principals = undefined;
      this._relation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principals = value.principals;
      this._relation = value.relation;
    }
  }

  // principals - computed: false, optional: false, required: true
  private _principals?: string[]; 
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // relation - computed: false, optional: false, required: true
  private _relation?: string; 
  public get relation() {
    return this.getStringAttribute('relation');
  }
  public set relation(value: string) {
    this._relation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInput() {
    return this._relation;
  }
}

export class RestrictionPolicyBindingsList extends cdktf.ComplexList {
  public internalValue? : RestrictionPolicyBindings[] | cdktf.IResolvable

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
  public get(index: number): RestrictionPolicyBindingsOutputReference {
    return new RestrictionPolicyBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/restriction_policy datadog_restriction_policy}
*/
export class RestrictionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_restriction_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RestrictionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RestrictionPolicy to import
  * @param importFromId The id of the existing RestrictionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/restriction_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RestrictionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_restriction_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/restriction_policy datadog_restriction_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RestrictionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: RestrictionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_restriction_policy',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.68.0',
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
    this._resourceId = config.resourceId;
    this._bindings.internalValue = config.bindings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new RestrictionPolicyBindingsList(this, "bindings", true);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: RestrictionPolicyBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_id: cdktf.stringToTerraform(this._resourceId),
      bindings: cdktf.listMapper(restrictionPolicyBindingsToTerraform, true)(this._bindings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindings: {
        value: cdktf.listMapperHcl(restrictionPolicyBindingsToHclTerraform, true)(this._bindings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RestrictionPolicyBindingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
