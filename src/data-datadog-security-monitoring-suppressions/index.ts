// https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/data-sources/security_monitoring_suppressions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogSecurityMonitoringSuppressionsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataDatadogSecurityMonitoringSuppressionsSuppressions {
}

export function dataDatadogSecurityMonitoringSuppressionsSuppressionsToTerraform(struct?: DataDatadogSecurityMonitoringSuppressionsSuppressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogSecurityMonitoringSuppressionsSuppressionsToHclTerraform(struct?: DataDatadogSecurityMonitoringSuppressionsSuppressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogSecurityMonitoringSuppressionsSuppressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSecurityMonitoringSuppressionsSuppressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_exclusion_query - computed: true, optional: false, required: false
  public get dataExclusionQuery() {
    return this.getStringAttribute('data_exclusion_query');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rule_query - computed: true, optional: false, required: false
  public get ruleQuery() {
    return this.getStringAttribute('rule_query');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // suppression_query - computed: true, optional: false, required: false
  public get suppressionQuery() {
    return this.getStringAttribute('suppression_query');
  }
}

export class DataDatadogSecurityMonitoringSuppressionsSuppressionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference {
    return new DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/data-sources/security_monitoring_suppressions datadog_security_monitoring_suppressions}
*/
export class DataDatadogSecurityMonitoringSuppressions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_suppressions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogSecurityMonitoringSuppressions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogSecurityMonitoringSuppressions to import
  * @param importFromId The id of the existing DataDatadogSecurityMonitoringSuppressions that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/data-sources/security_monitoring_suppressions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogSecurityMonitoringSuppressions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_monitoring_suppressions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/data-sources/security_monitoring_suppressions datadog_security_monitoring_suppressions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogSecurityMonitoringSuppressionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogSecurityMonitoringSuppressionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_suppressions',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.65.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // suppression_ids - computed: true, optional: false, required: false
  public get suppressionIds() {
    return this.getListAttribute('suppression_ids');
  }

  // suppressions - computed: true, optional: false, required: false
  private _suppressions = new DataDatadogSecurityMonitoringSuppressionsSuppressionsList(this, "suppressions", false);
  public get suppressions() {
    return this._suppressions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
