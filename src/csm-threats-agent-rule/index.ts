/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsmThreatsAgentRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for the Agent rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#description CsmThreatsAgentRule#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the Agent rule is enabled. Must not be used without policy_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#enabled CsmThreatsAgentRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The SECL expression of the Agent rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#expression CsmThreatsAgentRule#expression}
  */
  readonly expression: string;
  /**
  * The name of the Agent rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}
  */
  readonly name: string;
  /**
  * The ID of the agent policy in which the rule is saved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#policy_id CsmThreatsAgentRule#policy_id}
  */
  readonly policyId?: string;
  /**
  * The list of product tags associated with the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#product_tags CsmThreatsAgentRule#product_tags}
  */
  readonly productTags?: string[];
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#actions CsmThreatsAgentRule#actions}
  */
  readonly actions?: CsmThreatsAgentRuleActions[] | cdktf.IResolvable;
}
export interface CsmThreatsAgentRuleActionsHash {
}

export function csmThreatsAgentRuleActionsHashToTerraform(struct?: CsmThreatsAgentRuleActionsHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function csmThreatsAgentRuleActionsHashToHclTerraform(struct?: CsmThreatsAgentRuleActionsHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CsmThreatsAgentRuleActionsHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsmThreatsAgentRuleActionsHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsmThreatsAgentRuleActionsHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface CsmThreatsAgentRuleActionsSet {
  /**
  * Whether to append to the set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#append CsmThreatsAgentRule#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * The field to get the value from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#field CsmThreatsAgentRule#field}
  */
  readonly field?: string;
  /**
  * The name of the set action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}
  */
  readonly name: string;
  /**
  * The scope of the set action (process, container, cgroup, or empty)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#scope CsmThreatsAgentRule#scope}
  */
  readonly scope?: string;
  /**
  * The maximum size of the set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#size CsmThreatsAgentRule#size}
  */
  readonly size?: number;
  /**
  * The time to live for the set in nanoseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#ttl CsmThreatsAgentRule#ttl}
  */
  readonly ttl?: number;
  /**
  * The value to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#value CsmThreatsAgentRule#value}
  */
  readonly value?: string;
}

export function csmThreatsAgentRuleActionsSetToTerraform(struct?: CsmThreatsAgentRuleActionsSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    field: cdktf.stringToTerraform(struct!.field),
    name: cdktf.stringToTerraform(struct!.name),
    scope: cdktf.stringToTerraform(struct!.scope),
    size: cdktf.numberToTerraform(struct!.size),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function csmThreatsAgentRuleActionsSetToHclTerraform(struct?: CsmThreatsAgentRuleActionsSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsmThreatsAgentRuleActionsSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsmThreatsAgentRuleActionsSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsmThreatsAgentRuleActionsSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._field = undefined;
      this._name = undefined;
      this._scope = undefined;
      this._size = undefined;
      this._ttl = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._field = value.field;
      this._name = value.name;
      this._scope = value.scope;
      this._size = value.size;
      this._ttl = value.ttl;
      this._value = value.value;
    }
  }

  // append - computed: true, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CsmThreatsAgentRuleActions {
  /**
  * hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#hash CsmThreatsAgentRule#hash}
  */
  readonly hash?: CsmThreatsAgentRuleActionsHash;
  /**
  * set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#set CsmThreatsAgentRule#set}
  */
  readonly set?: CsmThreatsAgentRuleActionsSet;
}

export function csmThreatsAgentRuleActionsToTerraform(struct?: CsmThreatsAgentRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: csmThreatsAgentRuleActionsHashToTerraform(struct!.hash),
    set: csmThreatsAgentRuleActionsSetToTerraform(struct!.set),
  }
}


export function csmThreatsAgentRuleActionsToHclTerraform(struct?: CsmThreatsAgentRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: csmThreatsAgentRuleActionsHashToHclTerraform(struct!.hash),
      isBlock: true,
      type: "struct",
      storageClassType: "CsmThreatsAgentRuleActionsHash",
    },
    set: {
      value: csmThreatsAgentRuleActionsSetToHclTerraform(struct!.set),
      isBlock: true,
      type: "struct",
      storageClassType: "CsmThreatsAgentRuleActionsSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsmThreatsAgentRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsmThreatsAgentRuleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash?.internalValue;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsmThreatsAgentRuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash.internalValue = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash.internalValue = value.hash;
      this._set.internalValue = value.set;
    }
  }

  // hash - computed: false, optional: true, required: true
  private _hash = new CsmThreatsAgentRuleActionsHashOutputReference(this, "hash");
  public get hash() {
    return this._hash;
  }
  public putHash(value: CsmThreatsAgentRuleActionsHash) {
    this._hash.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash.internalValue;
  }

  // set - computed: false, optional: true, required: false
  private _set = new CsmThreatsAgentRuleActionsSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: CsmThreatsAgentRuleActionsSet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}

export class CsmThreatsAgentRuleActionsList extends cdktf.ComplexList {
  public internalValue? : CsmThreatsAgentRuleActions[] | cdktf.IResolvable

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
  public get(index: number): CsmThreatsAgentRuleActionsOutputReference {
    return new CsmThreatsAgentRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule datadog_csm_threats_agent_rule}
*/
export class CsmThreatsAgentRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_csm_threats_agent_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsmThreatsAgentRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsmThreatsAgentRule to import
  * @param importFromId The id of the existing CsmThreatsAgentRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsmThreatsAgentRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_csm_threats_agent_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule datadog_csm_threats_agent_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsmThreatsAgentRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CsmThreatsAgentRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_csm_threats_agent_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.71.0',
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
    this._expression = config.expression;
    this._name = config.name;
    this._policyId = config.policyId;
    this._productTags = config.productTags;
    this._actions.internalValue = config.actions;
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // product_tags - computed: true, optional: true, required: false
  private _productTags?: string[]; 
  public get productTags() {
    return cdktf.Fn.tolist(this.getListAttribute('product_tags'));
  }
  public set productTags(value: string[]) {
    this._productTags = value;
  }
  public resetProductTags() {
    this._productTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTagsInput() {
    return this._productTags;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new CsmThreatsAgentRuleActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: CsmThreatsAgentRuleActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expression: cdktf.stringToTerraform(this._expression),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.stringToTerraform(this._policyId),
      product_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._productTags),
      actions: cdktf.listMapper(csmThreatsAgentRuleActionsToTerraform, true)(this._actions.internalValue),
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
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
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
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._productTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      actions: {
        value: cdktf.listMapperHcl(csmThreatsAgentRuleActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsmThreatsAgentRuleActionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
