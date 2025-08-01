/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/csm_threats_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsmThreatsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/csm_threats_policy#description CsmThreatsPolicy#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the policy is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/csm_threats_policy#enabled CsmThreatsPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Host tags that define where the policy is deployed. Inner values are ANDed, outer arrays are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/csm_threats_policy#host_tags_lists CsmThreatsPolicy#host_tags_lists}
  */
  readonly hostTagsLists?: string[][] | cdktf.IResolvable;
  /**
  * The name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/csm_threats_policy#name CsmThreatsPolicy#name}
  */
  readonly name: string;
  /**
  * Host tags that define where the policy is deployed. Deprecated, use host_tags_lists instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/csm_threats_policy#tags CsmThreatsPolicy#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/csm_threats_policy datadog_csm_threats_policy}
*/
export class CsmThreatsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_csm_threats_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsmThreatsPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsmThreatsPolicy to import
  * @param importFromId The id of the existing CsmThreatsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/csm_threats_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsmThreatsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_csm_threats_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/csm_threats_policy datadog_csm_threats_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsmThreatsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CsmThreatsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_csm_threats_policy',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.69.0',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._hostTagsLists = config.hostTagsLists;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // host_tags_lists - computed: false, optional: true, required: false
  private _hostTagsLists?: string[][] | cdktf.IResolvable; 
  public get hostTagsLists() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('host_tags_lists')));
  }
  public set hostTagsLists(value: string[][] | cdktf.IResolvable) {
    this._hostTagsLists = value;
  }
  public resetHostTagsLists() {
    this._hostTagsLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTagsListsInput() {
    return this._hostTagsLists;
  }

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

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      host_tags_lists: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(this._hostTagsLists),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_tags_lists: {
        value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(this._hostTagsLists),
        isBlock: false,
        type: "set",
        storageClassType: "stringListList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
