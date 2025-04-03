// https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_suppression
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityMonitoringSuppressionConfig extends cdktf.TerraformMetaArguments {
  /**
  * An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule. Events matching this query are ignored by any detection rules referenced in the suppression rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_suppression#data_exclusion_query SecurityMonitoringSuppression#data_exclusion_query}
  */
  readonly dataExclusionQuery?: string;
  /**
  * A description for the suppression rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_suppression#description SecurityMonitoringSuppression#description}
  */
  readonly description?: string;
  /**
  * Whether the suppression rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_suppression#enabled SecurityMonitoringSuppression#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_suppression#expiration_date SecurityMonitoringSuppression#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * The name of the suppression rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_suppression#name SecurityMonitoringSuppression#name}
  */
  readonly name: string;
  /**
  * The rule query of the suppression rule, with the same syntax as the search bar for detection rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_suppression#rule_query SecurityMonitoringSuppression#rule_query}
  */
  readonly ruleQuery: string;
  /**
  * A RFC3339 timestamp giving a start date for the suppression rule. Before this date, it doesn't suppress signals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_suppression#start_date SecurityMonitoringSuppression#start_date}
  */
  readonly startDate?: string;
  /**
  * The suppression query of the suppression rule. If a signal matches this query, it is suppressed and is not triggered. It uses the same syntax as the queries to search signals in the Signals Explorer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_suppression#suppression_query SecurityMonitoringSuppression#suppression_query}
  */
  readonly suppressionQuery?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_suppression datadog_security_monitoring_suppression}
*/
export class SecurityMonitoringSuppression extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_suppression";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityMonitoringSuppression resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityMonitoringSuppression to import
  * @param importFromId The id of the existing SecurityMonitoringSuppression that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_suppression#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityMonitoringSuppression to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_monitoring_suppression", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_suppression datadog_security_monitoring_suppression} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityMonitoringSuppressionConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityMonitoringSuppressionConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_suppression',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.59.0',
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
    this._dataExclusionQuery = config.dataExclusionQuery;
    this._description = config.description;
    this._enabled = config.enabled;
    this._expirationDate = config.expirationDate;
    this._name = config.name;
    this._ruleQuery = config.ruleQuery;
    this._startDate = config.startDate;
    this._suppressionQuery = config.suppressionQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_exclusion_query - computed: false, optional: true, required: false
  private _dataExclusionQuery?: string; 
  public get dataExclusionQuery() {
    return this.getStringAttribute('data_exclusion_query');
  }
  public set dataExclusionQuery(value: string) {
    this._dataExclusionQuery = value;
  }
  public resetDataExclusionQuery() {
    this._dataExclusionQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExclusionQueryInput() {
    return this._dataExclusionQuery;
  }

  // description - computed: false, optional: true, required: false
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

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
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

  // rule_query - computed: false, optional: false, required: true
  private _ruleQuery?: string; 
  public get ruleQuery() {
    return this.getStringAttribute('rule_query');
  }
  public set ruleQuery(value: string) {
    this._ruleQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleQueryInput() {
    return this._ruleQuery;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // suppression_query - computed: false, optional: true, required: false
  private _suppressionQuery?: string; 
  public get suppressionQuery() {
    return this.getStringAttribute('suppression_query');
  }
  public set suppressionQuery(value: string) {
    this._suppressionQuery = value;
  }
  public resetSuppressionQuery() {
    this._suppressionQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionQueryInput() {
    return this._suppressionQuery;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_exclusion_query: cdktf.stringToTerraform(this._dataExclusionQuery),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      name: cdktf.stringToTerraform(this._name),
      rule_query: cdktf.stringToTerraform(this._ruleQuery),
      start_date: cdktf.stringToTerraform(this._startDate),
      suppression_query: cdktf.stringToTerraform(this._suppressionQuery),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_exclusion_query: {
        value: cdktf.stringToHclTerraform(this._dataExclusionQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      expiration_date: {
        value: cdktf.stringToHclTerraform(this._expirationDate),
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
      rule_query: {
        value: cdktf.stringToHclTerraform(this._ruleQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppression_query: {
        value: cdktf.stringToHclTerraform(this._suppressionQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
