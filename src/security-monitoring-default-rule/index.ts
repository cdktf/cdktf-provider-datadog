// https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityMonitoringDefaultRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable the rule. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule#enabled SecurityMonitoringDefaultRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule#id SecurityMonitoringDefaultRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * case block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule#case SecurityMonitoringDefaultRule#case}
  */
  readonly case?: SecurityMonitoringDefaultRuleCase[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule#filter SecurityMonitoringDefaultRule#filter}
  */
  readonly filter?: SecurityMonitoringDefaultRuleFilter[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule#options SecurityMonitoringDefaultRule#options}
  */
  readonly options?: SecurityMonitoringDefaultRuleOptions;
}
export interface SecurityMonitoringDefaultRuleCase {
  /**
  * Notification targets for each rule case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule#notifications SecurityMonitoringDefaultRule#notifications}
  */
  readonly notifications: string[];
  /**
  * Status of the rule case to match. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule#status SecurityMonitoringDefaultRule#status}
  */
  readonly status: string;
}

export function securityMonitoringDefaultRuleCaseToTerraform(struct?: SecurityMonitoringDefaultRuleCase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifications),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function securityMonitoringDefaultRuleCaseToHclTerraform(struct?: SecurityMonitoringDefaultRuleCase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notifications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringDefaultRuleCaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringDefaultRuleCase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringDefaultRuleCase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notifications = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notifications = value.notifications;
      this._status = value.status;
    }
  }

  // notifications - computed: false, optional: false, required: true
  private _notifications?: string[]; 
  public get notifications() {
    return this.getListAttribute('notifications');
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SecurityMonitoringDefaultRuleCaseList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringDefaultRuleCase[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringDefaultRuleCaseOutputReference {
    return new SecurityMonitoringDefaultRuleCaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringDefaultRuleFilter {
  /**
  * The type of filtering action. Allowed enum values: require, suppress Valid values are `require`, `suppress`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule#action SecurityMonitoringDefaultRule#action}
  */
  readonly action: string;
  /**
  * Query for selecting logs to apply the filtering action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}
  */
  readonly query: string;
}

export function securityMonitoringDefaultRuleFilterToTerraform(struct?: SecurityMonitoringDefaultRuleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function securityMonitoringDefaultRuleFilterToHclTerraform(struct?: SecurityMonitoringDefaultRuleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringDefaultRuleFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityMonitoringDefaultRuleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringDefaultRuleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._query = value.query;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SecurityMonitoringDefaultRuleFilterList extends cdktf.ComplexList {
  public internalValue? : SecurityMonitoringDefaultRuleFilter[] | cdktf.IResolvable

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
  public get(index: number): SecurityMonitoringDefaultRuleFilterOutputReference {
    return new SecurityMonitoringDefaultRuleFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityMonitoringDefaultRuleOptions {
  /**
  * If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule#decrease_criticality_based_on_env SecurityMonitoringDefaultRule#decrease_criticality_based_on_env}
  */
  readonly decreaseCriticalityBasedOnEnv?: boolean | cdktf.IResolvable;
}

export function securityMonitoringDefaultRuleOptionsToTerraform(struct?: SecurityMonitoringDefaultRuleOptionsOutputReference | SecurityMonitoringDefaultRuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decrease_criticality_based_on_env: cdktf.booleanToTerraform(struct!.decreaseCriticalityBasedOnEnv),
  }
}


export function securityMonitoringDefaultRuleOptionsToHclTerraform(struct?: SecurityMonitoringDefaultRuleOptionsOutputReference | SecurityMonitoringDefaultRuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decrease_criticality_based_on_env: {
      value: cdktf.booleanToHclTerraform(struct!.decreaseCriticalityBasedOnEnv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityMonitoringDefaultRuleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityMonitoringDefaultRuleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decreaseCriticalityBasedOnEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.decreaseCriticalityBasedOnEnv = this._decreaseCriticalityBasedOnEnv;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityMonitoringDefaultRuleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decreaseCriticalityBasedOnEnv = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decreaseCriticalityBasedOnEnv = value.decreaseCriticalityBasedOnEnv;
    }
  }

  // decrease_criticality_based_on_env - computed: false, optional: true, required: false
  private _decreaseCriticalityBasedOnEnv?: boolean | cdktf.IResolvable; 
  public get decreaseCriticalityBasedOnEnv() {
    return this.getBooleanAttribute('decrease_criticality_based_on_env');
  }
  public set decreaseCriticalityBasedOnEnv(value: boolean | cdktf.IResolvable) {
    this._decreaseCriticalityBasedOnEnv = value;
  }
  public resetDecreaseCriticalityBasedOnEnv() {
    this._decreaseCriticalityBasedOnEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decreaseCriticalityBasedOnEnvInput() {
    return this._decreaseCriticalityBasedOnEnv;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule datadog_security_monitoring_default_rule}
*/
export class SecurityMonitoringDefaultRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_default_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityMonitoringDefaultRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityMonitoringDefaultRule to import
  * @param importFromId The id of the existing SecurityMonitoringDefaultRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityMonitoringDefaultRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_monitoring_default_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/security_monitoring_default_rule datadog_security_monitoring_default_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityMonitoringDefaultRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityMonitoringDefaultRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_default_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.39.0',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._case.internalValue = config.case;
    this._filter.internalValue = config.filter;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // case - computed: false, optional: true, required: false
  private _case = new SecurityMonitoringDefaultRuleCaseList(this, "case", false);
  public get case() {
    return this._case;
  }
  public putCase(value: SecurityMonitoringDefaultRuleCase[] | cdktf.IResolvable) {
    this._case.internalValue = value;
  }
  public resetCase() {
    this._case.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInput() {
    return this._case.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new SecurityMonitoringDefaultRuleFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SecurityMonitoringDefaultRuleFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new SecurityMonitoringDefaultRuleOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: SecurityMonitoringDefaultRuleOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      case: cdktf.listMapper(securityMonitoringDefaultRuleCaseToTerraform, true)(this._case.internalValue),
      filter: cdktf.listMapper(securityMonitoringDefaultRuleFilterToTerraform, true)(this._filter.internalValue),
      options: securityMonitoringDefaultRuleOptionsToTerraform(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      case: {
        value: cdktf.listMapperHcl(securityMonitoringDefaultRuleCaseToHclTerraform, true)(this._case.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringDefaultRuleCaseList",
      },
      filter: {
        value: cdktf.listMapperHcl(securityMonitoringDefaultRuleFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringDefaultRuleFilterList",
      },
      options: {
        value: securityMonitoringDefaultRuleOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityMonitoringDefaultRuleOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
