// https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/security_monitoring_suppression
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityMonitoringSuppressionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for the suppression rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/security_monitoring_suppression#description SecurityMonitoringSuppression#description}
  */
  readonly description?: string;
  /**
  * Whether the suppression rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/security_monitoring_suppression#enabled SecurityMonitoringSuppression#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/security_monitoring_suppression#expiration_date SecurityMonitoringSuppression#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * The name of the suppression rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/security_monitoring_suppression#name SecurityMonitoringSuppression#name}
  */
  readonly name: string;
  /**
  * The rule query of the suppression rule, with the same syntax as the search bar for detection rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/security_monitoring_suppression#rule_query SecurityMonitoringSuppression#rule_query}
  */
  readonly ruleQuery: string;
  /**
  * The suppression query of the suppression rule. If a signal matches this query, it is suppressed and is not triggered. Same syntax as the queries to search signals in the signal explorer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/security_monitoring_suppression#suppression_query SecurityMonitoringSuppression#suppression_query}
  */
  readonly suppressionQuery: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/security_monitoring_suppression datadog_security_monitoring_suppression}
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
  * @param importFromId The id of the existing SecurityMonitoringSuppression that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/security_monitoring_suppression#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityMonitoringSuppression to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_monitoring_suppression", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/security_monitoring_suppression datadog_security_monitoring_suppression} Resource
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
        providerVersion: '3.36.1',
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
    this._expirationDate = config.expirationDate;
    this._name = config.name;
    this._ruleQuery = config.ruleQuery;
    this._suppressionQuery = config.suppressionQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // suppression_query - computed: false, optional: false, required: true
  private _suppressionQuery?: string; 
  public get suppressionQuery() {
    return this.getStringAttribute('suppression_query');
  }
  public set suppressionQuery(value: string) {
    this._suppressionQuery = value;
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
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      name: cdktf.stringToTerraform(this._name),
      rule_query: cdktf.stringToTerraform(this._ruleQuery),
      suppression_query: cdktf.stringToTerraform(this._suppressionQuery),
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
