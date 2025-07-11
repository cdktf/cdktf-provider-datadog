/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/apm_retention_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApmRetentionFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * the status of the retention filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/apm_retention_filter#enabled ApmRetentionFilter#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The type of the retention filter, currently only spans-processing-sampling is available. Valid values are `spans-sampling-processor`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/apm_retention_filter#filter_type ApmRetentionFilter#filter_type}
  */
  readonly filterType: string;
  /**
  * The name of the retention filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/apm_retention_filter#name ApmRetentionFilter#name}
  */
  readonly name: string;
  /**
  * Sample rate to apply to spans going through this retention filter as a string; a value of 1.0 keeps all spans matching the query. Value must be between 0.00 and 1.00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/apm_retention_filter#rate ApmRetentionFilter#rate}
  */
  readonly rate: string;
  /**
  * Sample rate to apply to traces with spans going through this retention filter as a string; a value of 1.0 keeps all traces matching the query. Value must be between 0.00 and 1.00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/apm_retention_filter#trace_rate ApmRetentionFilter#trace_rate}
  */
  readonly traceRate?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/apm_retention_filter#filter ApmRetentionFilter#filter}
  */
  readonly filter?: ApmRetentionFilterFilter;
}
export interface ApmRetentionFilterFilter {
  /**
  * The search query - follow the span search syntax, use `AND` between tags and `\` to escape special characters, use nanosecond for duration. Defaults to `"*"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/apm_retention_filter#query ApmRetentionFilter#query}
  */
  readonly query?: string;
}

export function apmRetentionFilterFilterToTerraform(struct?: ApmRetentionFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function apmRetentionFilterFilterToHclTerraform(struct?: ApmRetentionFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ApmRetentionFilterFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApmRetentionFilterFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmRetentionFilterFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/apm_retention_filter datadog_apm_retention_filter}
*/
export class ApmRetentionFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_apm_retention_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApmRetentionFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApmRetentionFilter to import
  * @param importFromId The id of the existing ApmRetentionFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/apm_retention_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApmRetentionFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_apm_retention_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/apm_retention_filter datadog_apm_retention_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApmRetentionFilterConfig
  */
  public constructor(scope: Construct, id: string, config: ApmRetentionFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_apm_retention_filter',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.67.0',
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
    this._filterType = config.filterType;
    this._name = config.name;
    this._rate = config.rate;
    this._traceRate = config.traceRate;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
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

  // rate - computed: false, optional: false, required: true
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // trace_rate - computed: false, optional: true, required: false
  private _traceRate?: string; 
  public get traceRate() {
    return this.getStringAttribute('trace_rate');
  }
  public set traceRate(value: string) {
    this._traceRate = value;
  }
  public resetTraceRate() {
    this._traceRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceRateInput() {
    return this._traceRate;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ApmRetentionFilterFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ApmRetentionFilterFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter_type: cdktf.stringToTerraform(this._filterType),
      name: cdktf.stringToTerraform(this._name),
      rate: cdktf.stringToTerraform(this._rate),
      trace_rate: cdktf.stringToTerraform(this._traceRate),
      filter: apmRetentionFilterFilterToTerraform(this._filter.internalValue),
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
      filter_type: {
        value: cdktf.stringToHclTerraform(this._filterType),
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
      rate: {
        value: cdktf.stringToHclTerraform(this._rate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace_rate: {
        value: cdktf.stringToHclTerraform(this._traceRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: apmRetentionFilterFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApmRetentionFilterFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
