/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/csm_threats_agent_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogCsmThreatsAgentRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Listing only the rules in the policy with this field as the ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/csm_threats_agent_rules#policy_id DataDatadogCsmThreatsAgentRules#policy_id}
  */
  readonly policyId?: string;
}
export interface DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash {
}

export function dataDatadogCsmThreatsAgentRulesAgentRulesActionsHashToTerraform(struct?: DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogCsmThreatsAgentRulesAgentRulesActionsHashToHclTerraform(struct?: DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet {
}

export function dataDatadogCsmThreatsAgentRulesAgentRulesActionsSetToTerraform(struct?: DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogCsmThreatsAgentRulesAgentRulesActionsSetToHclTerraform(struct?: DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getBooleanAttribute('append');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // inherited - computed: true, optional: false, required: false
  public get inherited() {
    return this.getBooleanAttribute('inherited');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataDatadogCsmThreatsAgentRulesAgentRulesActions {
}

export function dataDatadogCsmThreatsAgentRulesAgentRulesActionsToTerraform(struct?: DataDatadogCsmThreatsAgentRulesAgentRulesActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogCsmThreatsAgentRulesAgentRulesActionsToHclTerraform(struct?: DataDatadogCsmThreatsAgentRulesAgentRulesActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogCsmThreatsAgentRulesAgentRulesActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCsmThreatsAgentRulesAgentRulesActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hash - computed: true, optional: false, required: false
  private _hash = new DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference(this, "hash");
  public get hash() {
    return this._hash;
  }

  // set - computed: true, optional: false, required: false
  private _set = new DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
}

export class DataDatadogCsmThreatsAgentRulesAgentRulesActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference {
    return new DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogCsmThreatsAgentRulesAgentRules {
}

export function dataDatadogCsmThreatsAgentRulesAgentRulesToTerraform(struct?: DataDatadogCsmThreatsAgentRulesAgentRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogCsmThreatsAgentRulesAgentRulesToHclTerraform(struct?: DataDatadogCsmThreatsAgentRulesAgentRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogCsmThreatsAgentRulesAgentRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCsmThreatsAgentRulesAgentRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataDatadogCsmThreatsAgentRulesAgentRulesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product_tags - computed: true, optional: false, required: false
  public get productTags() {
    return cdktf.Fn.tolist(this.getListAttribute('product_tags'));
  }
}

export class DataDatadogCsmThreatsAgentRulesAgentRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference {
    return new DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/csm_threats_agent_rules datadog_csm_threats_agent_rules}
*/
export class DataDatadogCsmThreatsAgentRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_csm_threats_agent_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogCsmThreatsAgentRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogCsmThreatsAgentRules to import
  * @param importFromId The id of the existing DataDatadogCsmThreatsAgentRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/csm_threats_agent_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogCsmThreatsAgentRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_csm_threats_agent_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/csm_threats_agent_rules datadog_csm_threats_agent_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogCsmThreatsAgentRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogCsmThreatsAgentRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_csm_threats_agent_rules',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.78.0',
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
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_rules - computed: true, optional: false, required: false
  private _agentRules = new DataDatadogCsmThreatsAgentRulesAgentRulesList(this, "agent_rules", false);
  public get agentRules() {
    return this._agentRules;
  }

  // agent_rules_ids - computed: true, optional: false, required: false
  public get agentRulesIds() {
    return this.getListAttribute('agent_rules_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_id: cdktf.stringToTerraform(this._policyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
