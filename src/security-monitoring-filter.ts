// https://www.terraform.io/docs/providers/datadog/r/security_monitoring_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityMonitoringFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The filtered data type. Valid values are `logs`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_filter#filtered_data_type SecurityMonitoringFilter#filtered_data_type}
  */
  readonly filteredDataType?: string;
  /**
  * Whether the security filter is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_filter#is_enabled SecurityMonitoringFilter#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * The name of the security filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_filter#name SecurityMonitoringFilter#name}
  */
  readonly name: string;
  /**
  * The query of the security filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_filter#query SecurityMonitoringFilter#query}
  */
  readonly query: string;
  /**
  * exclusion_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_filter#exclusion_filter SecurityMonitoringFilter#exclusion_filter}
  */
  readonly exclusionFilter?: SecurityMonitoringFilterExclusionFilter[] | cdktf.IResolvable;
}
export interface SecurityMonitoringFilterExclusionFilter {
  /**
  * Exclusion filter name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_filter#name SecurityMonitoringFilter#name}
  */
  readonly name: string;
  /**
  * Exclusion filter query. Logs that match this query are excluded from the security filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_filter#query SecurityMonitoringFilter#query}
  */
  readonly query: string;
}

export function securityMonitoringFilterExclusionFilterToTerraform(struct?: SecurityMonitoringFilterExclusionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_filter datadog_security_monitoring_filter}
*/
export class SecurityMonitoringFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_filter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_filter datadog_security_monitoring_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityMonitoringFilterConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityMonitoringFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_filter',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.10.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filteredDataType = config.filteredDataType;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._query = config.query;
    this._exclusionFilter = config.exclusionFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filtered_data_type - computed: false, optional: true, required: false
  private _filteredDataType?: string; 
  public get filteredDataType() {
    return this.getStringAttribute('filtered_data_type');
  }
  public set filteredDataType(value: string) {
    this._filteredDataType = value;
  }
  public resetFilteredDataType() {
    this._filteredDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteredDataTypeInput() {
    return this._filteredDataType;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // exclusion_filter - computed: false, optional: true, required: false
  private _exclusionFilter?: SecurityMonitoringFilterExclusionFilter[] | cdktf.IResolvable; 
  public get exclusionFilter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exclusion_filter');
  }
  public set exclusionFilter(value: SecurityMonitoringFilterExclusionFilter[] | cdktf.IResolvable) {
    this._exclusionFilter = value;
  }
  public resetExclusionFilter() {
    this._exclusionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFilterInput() {
    return this._exclusionFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filtered_data_type: cdktf.stringToTerraform(this._filteredDataType),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      exclusion_filter: cdktf.listMapper(securityMonitoringFilterExclusionFilterToTerraform)(this._exclusionFilter),
    };
  }
}
