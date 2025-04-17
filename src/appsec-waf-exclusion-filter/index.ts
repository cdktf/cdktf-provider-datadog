/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecWafExclusionFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for the exclusion filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#description AppsecWafExclusionFilter#description}
  */
  readonly description: string;
  /**
  * Indicates whether the exclusion filter is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#enabled AppsecWafExclusionFilter#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The event query matched by the legacy exclusion filter. Cannot be created nor updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#event_query AppsecWafExclusionFilter#event_query}
  */
  readonly eventQuery?: string;
  /**
  * The client IP addresses matched by the exclusion filter (CIDR notation is supported).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#ip_list AppsecWafExclusionFilter#ip_list}
  */
  readonly ipList?: string[];
  /**
  * The action taken when the exclusion filter matches. When set to `monitor`, security traces are emitted but the requests are not blocked. By default, security traces are not emitted and the requests are not blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#on_match AppsecWafExclusionFilter#on_match}
  */
  readonly onMatch?: string;
  /**
  * A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body. Nested parameters can be matched by joining fields with a dot character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#parameters AppsecWafExclusionFilter#parameters}
  */
  readonly parameters?: string[];
  /**
  * The HTTP path glob expression matched by the exclusion filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#path_glob AppsecWafExclusionFilter#path_glob}
  */
  readonly pathGlob?: string;
  /**
  * rules_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#rules_target AppsecWafExclusionFilter#rules_target}
  */
  readonly rulesTarget?: AppsecWafExclusionFilterRulesTarget[] | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#scope AppsecWafExclusionFilter#scope}
  */
  readonly scope?: AppsecWafExclusionFilterScope[] | cdktf.IResolvable;
}
export interface AppsecWafExclusionFilterRulesTargetTags {
  /**
  * The category of the targeted WAF rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#category AppsecWafExclusionFilter#category}
  */
  readonly category?: string;
  /**
  * The type of the targeted WAF rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#type AppsecWafExclusionFilter#type}
  */
  readonly type?: string;
}

export function appsecWafExclusionFilterRulesTargetTagsToTerraform(struct?: AppsecWafExclusionFilterRulesTargetTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appsecWafExclusionFilterRulesTargetTagsToHclTerraform(struct?: AppsecWafExclusionFilterRulesTargetTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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

export class AppsecWafExclusionFilterRulesTargetTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsecWafExclusionFilterRulesTargetTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecWafExclusionFilterRulesTargetTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._type = value.type;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface AppsecWafExclusionFilterRulesTarget {
  /**
  * Target a single WAF rule based on its identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#rule_id AppsecWafExclusionFilter#rule_id}
  */
  readonly ruleId?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#tags AppsecWafExclusionFilter#tags}
  */
  readonly tags?: AppsecWafExclusionFilterRulesTargetTags;
}

export function appsecWafExclusionFilterRulesTargetToTerraform(struct?: AppsecWafExclusionFilterRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    tags: appsecWafExclusionFilterRulesTargetTagsToTerraform(struct!.tags),
  }
}


export function appsecWafExclusionFilterRulesTargetToHclTerraform(struct?: AppsecWafExclusionFilterRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: appsecWafExclusionFilterRulesTargetTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsecWafExclusionFilterRulesTargetTags",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecWafExclusionFilterRulesTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsecWafExclusionFilterRulesTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecWafExclusionFilterRulesTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleId = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleId = value.ruleId;
      this._tags.internalValue = value.tags;
    }
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new AppsecWafExclusionFilterRulesTargetTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: AppsecWafExclusionFilterRulesTargetTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class AppsecWafExclusionFilterRulesTargetList extends cdktf.ComplexList {
  public internalValue? : AppsecWafExclusionFilterRulesTarget[] | cdktf.IResolvable

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
  public get(index: number): AppsecWafExclusionFilterRulesTargetOutputReference {
    return new AppsecWafExclusionFilterRulesTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsecWafExclusionFilterScope {
  /**
  * Deploy on this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#env AppsecWafExclusionFilter#env}
  */
  readonly env?: string;
  /**
  * Deploy on this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#service AppsecWafExclusionFilter#service}
  */
  readonly service?: string;
}

export function appsecWafExclusionFilterScopeToTerraform(struct?: AppsecWafExclusionFilterScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.stringToTerraform(struct!.env),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function appsecWafExclusionFilterScopeToHclTerraform(struct?: AppsecWafExclusionFilterScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.stringToHclTerraform(struct!.env),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecWafExclusionFilterScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsecWafExclusionFilterScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecWafExclusionFilterScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
      this._service = value.service;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class AppsecWafExclusionFilterScopeList extends cdktf.ComplexList {
  public internalValue? : AppsecWafExclusionFilterScope[] | cdktf.IResolvable

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
  public get(index: number): AppsecWafExclusionFilterScopeOutputReference {
    return new AppsecWafExclusionFilterScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter datadog_appsec_waf_exclusion_filter}
*/
export class AppsecWafExclusionFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_appsec_waf_exclusion_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecWafExclusionFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecWafExclusionFilter to import
  * @param importFromId The id of the existing AppsecWafExclusionFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecWafExclusionFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_appsec_waf_exclusion_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_exclusion_filter datadog_appsec_waf_exclusion_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecWafExclusionFilterConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecWafExclusionFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_appsec_waf_exclusion_filter',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._eventQuery = config.eventQuery;
    this._ipList = config.ipList;
    this._onMatch = config.onMatch;
    this._parameters = config.parameters;
    this._pathGlob = config.pathGlob;
    this._rulesTarget.internalValue = config.rulesTarget;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event_query - computed: false, optional: true, required: false
  private _eventQuery?: string; 
  public get eventQuery() {
    return this.getStringAttribute('event_query');
  }
  public set eventQuery(value: string) {
    this._eventQuery = value;
  }
  public resetEventQuery() {
    this._eventQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventQueryInput() {
    return this._eventQuery;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList?: string[]; 
  public get ipList() {
    return this.getListAttribute('ip_list');
  }
  public set ipList(value: string[]) {
    this._ipList = value;
  }
  public resetIpList() {
    this._ipList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }

  // on_match - computed: false, optional: true, required: false
  private _onMatch?: string; 
  public get onMatch() {
    return this.getStringAttribute('on_match');
  }
  public set onMatch(value: string) {
    this._onMatch = value;
  }
  public resetOnMatch() {
    this._onMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMatchInput() {
    return this._onMatch;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // path_glob - computed: false, optional: true, required: false
  private _pathGlob?: string; 
  public get pathGlob() {
    return this.getStringAttribute('path_glob');
  }
  public set pathGlob(value: string) {
    this._pathGlob = value;
  }
  public resetPathGlob() {
    this._pathGlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathGlobInput() {
    return this._pathGlob;
  }

  // rules_target - computed: false, optional: true, required: false
  private _rulesTarget = new AppsecWafExclusionFilterRulesTargetList(this, "rules_target", false);
  public get rulesTarget() {
    return this._rulesTarget;
  }
  public putRulesTarget(value: AppsecWafExclusionFilterRulesTarget[] | cdktf.IResolvable) {
    this._rulesTarget.internalValue = value;
  }
  public resetRulesTarget() {
    this._rulesTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesTargetInput() {
    return this._rulesTarget.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new AppsecWafExclusionFilterScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: AppsecWafExclusionFilterScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_query: cdktf.stringToTerraform(this._eventQuery),
      ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipList),
      on_match: cdktf.stringToTerraform(this._onMatch),
      parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._parameters),
      path_glob: cdktf.stringToTerraform(this._pathGlob),
      rules_target: cdktf.listMapper(appsecWafExclusionFilterRulesTargetToTerraform, true)(this._rulesTarget.internalValue),
      scope: cdktf.listMapper(appsecWafExclusionFilterScopeToTerraform, true)(this._scope.internalValue),
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
      event_query: {
        value: cdktf.stringToHclTerraform(this._eventQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      on_match: {
        value: cdktf.stringToHclTerraform(this._onMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._parameters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      path_glob: {
        value: cdktf.stringToHclTerraform(this._pathGlob),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules_target: {
        value: cdktf.listMapperHcl(appsecWafExclusionFilterRulesTargetToHclTerraform, true)(this._rulesTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecWafExclusionFilterRulesTargetList",
      },
      scope: {
        value: cdktf.listMapperHcl(appsecWafExclusionFilterScopeToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecWafExclusionFilterScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
