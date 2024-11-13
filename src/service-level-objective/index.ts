// https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLevelObjectiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of this service level objective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#description ServiceLevelObjective#description}
  */
  readonly description?: string;
  /**
  * A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#force_delete ServiceLevelObjective#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * A static set of groups to filter monitor-based SLOs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#groups ServiceLevelObjective#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A static set of monitor IDs to use as part of the SLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#monitor_ids ServiceLevelObjective#monitor_ids}
  */
  readonly monitorIds?: number[];
  /**
  * Name of Datadog service level objective
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#name ServiceLevelObjective#name}
  */
  readonly name: string;
  /**
  * A list of tags to associate with your service level objective. This can help you categorize and filter service level objectives in the service level objectives page of the UI. Note: it's not currently possible to filter by these tags when querying via the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#tags ServiceLevelObjective#tags}
  */
  readonly tags?: string[];
  /**
  * The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#target_threshold ServiceLevelObjective#target_threshold}
  */
  readonly targetThreshold?: number;
  /**
  * The primary time frame for the objective. The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}
  */
  readonly timeframe?: string;
  /**
  * The type of the service level objective. The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/service-level-objectives/#create-a-slo-object). Valid values are `metric`, `monitor`, `time_slice`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#type ServiceLevelObjective#type}
  */
  readonly type: string;
  /**
  * Whether or not to validate the SLO. It checks if monitors added to a monitor SLO already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#validate ServiceLevelObjective#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * The objective's warning value in `(0,100)`. This must be greater than the target value and match the corresponding thresholds of the primary time frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#warning_threshold ServiceLevelObjective#warning_threshold}
  */
  readonly warningThreshold?: number;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}
  */
  readonly query?: ServiceLevelObjectiveQuery;
  /**
  * sli_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#sli_specification ServiceLevelObjective#sli_specification}
  */
  readonly sliSpecification?: ServiceLevelObjectiveSliSpecification;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#thresholds ServiceLevelObjective#thresholds}
  */
  readonly thresholds: ServiceLevelObjectiveThresholds[] | cdktf.IResolvable;
}
export interface ServiceLevelObjectiveQuery {
  /**
  * The sum of the `total` events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#denominator ServiceLevelObjective#denominator}
  */
  readonly denominator: string;
  /**
  * The sum of all the `good` events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#numerator ServiceLevelObjective#numerator}
  */
  readonly numerator: string;
}

export function serviceLevelObjectiveQueryToTerraform(struct?: ServiceLevelObjectiveQueryOutputReference | ServiceLevelObjectiveQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denominator: cdktf.stringToTerraform(struct!.denominator),
    numerator: cdktf.stringToTerraform(struct!.numerator),
  }
}


export function serviceLevelObjectiveQueryToHclTerraform(struct?: ServiceLevelObjectiveQueryOutputReference | ServiceLevelObjectiveQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denominator: {
      value: cdktf.stringToHclTerraform(struct!.denominator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numerator: {
      value: cdktf.stringToHclTerraform(struct!.numerator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLevelObjectiveQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceLevelObjectiveQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominator = this._denominator;
    }
    if (this._numerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.numerator = this._numerator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjectiveQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._denominator = undefined;
      this._numerator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._denominator = value.denominator;
      this._numerator = value.numerator;
    }
  }

  // denominator - computed: false, optional: false, required: true
  private _denominator?: string; 
  public get denominator() {
    return this.getStringAttribute('denominator');
  }
  public set denominator(value: string) {
    this._denominator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorInput() {
    return this._denominator;
  }

  // numerator - computed: false, optional: false, required: true
  private _numerator?: string; 
  public get numerator() {
    return this.getStringAttribute('numerator');
  }
  public set numerator(value: string) {
    this._numerator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numeratorInput() {
    return this._numerator;
  }
}
export interface ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula {
  /**
  * The formula string, which is an expression involving named queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#formula_expression ServiceLevelObjective#formula_expression}
  */
  readonly formulaExpression: string;
}

export function serviceLevelObjectiveSliSpecificationTimeSliceQueryFormulaToTerraform(struct?: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference | ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    formula_expression: cdktf.stringToTerraform(struct!.formulaExpression),
  }
}


export function serviceLevelObjectiveSliSpecificationTimeSliceQueryFormulaToHclTerraform(struct?: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference | ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    formula_expression: {
      value: cdktf.stringToHclTerraform(struct!.formulaExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formulaExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.formulaExpression = this._formulaExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._formulaExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._formulaExpression = value.formulaExpression;
    }
  }

  // formula_expression - computed: false, optional: false, required: true
  private _formulaExpression?: string; 
  public get formulaExpression() {
    return this.getStringAttribute('formula_expression');
  }
  public set formulaExpression(value: string) {
    this._formulaExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaExpressionInput() {
    return this._formulaExpression;
  }
}
export interface ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery {
  /**
  * The data source for metrics queries. Defaults to `"metrics"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#data_source ServiceLevelObjective#data_source}
  */
  readonly dataSource?: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#name ServiceLevelObjective#name}
  */
  readonly name: string;
  /**
  * The metrics query definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}
  */
  readonly query: string;
}

export function serviceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryToTerraform(struct?: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference | ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function serviceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryToHclTerraform(struct?: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference | ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source: {
      value: cdktf.stringToHclTerraform(struct!.dataSource),
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

export class ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._query = value.query;
    }
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
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
}
export interface ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery {
  /**
  * metric_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#metric_query ServiceLevelObjective#metric_query}
  */
  readonly metricQuery?: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery;
}

export function serviceLevelObjectiveSliSpecificationTimeSliceQueryQueryToTerraform(struct?: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_query: serviceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryToTerraform(struct!.metricQuery),
  }
}


export function serviceLevelObjectiveSliSpecificationTimeSliceQueryQueryToHclTerraform(struct?: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_query: {
      value: serviceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryToHclTerraform(struct!.metricQuery),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricQuery = this._metricQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricQuery.internalValue = value.metricQuery;
    }
  }

  // metric_query - computed: false, optional: true, required: false
  private _metricQuery = new ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery) {
    this._metricQuery.internalValue = value;
  }
  public resetMetricQuery() {
    this._metricQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricQueryInput() {
    return this._metricQuery.internalValue;
  }
}

export class ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList extends cdktf.ComplexList {
  public internalValue? : ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery[] | cdktf.IResolvable

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
  public get(index: number): ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference {
    return new ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLevelObjectiveSliSpecificationTimeSliceQuery {
  /**
  * formula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#formula ServiceLevelObjective#formula}
  */
  readonly formula: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}
  */
  readonly query: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery[] | cdktf.IResolvable;
}

export function serviceLevelObjectiveSliSpecificationTimeSliceQueryToTerraform(struct?: ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference | ServiceLevelObjectiveSliSpecificationTimeSliceQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    formula: serviceLevelObjectiveSliSpecificationTimeSliceQueryFormulaToTerraform(struct!.formula),
    query: cdktf.listMapper(serviceLevelObjectiveSliSpecificationTimeSliceQueryQueryToTerraform, true)(struct!.query),
  }
}


export function serviceLevelObjectiveSliSpecificationTimeSliceQueryToHclTerraform(struct?: ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference | ServiceLevelObjectiveSliSpecificationTimeSliceQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    formula: {
      value: serviceLevelObjectiveSliSpecificationTimeSliceQueryFormulaToHclTerraform(struct!.formula),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaList",
    },
    query: {
      value: cdktf.listMapperHcl(serviceLevelObjectiveSliSpecificationTimeSliceQueryQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceLevelObjectiveSliSpecificationTimeSliceQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formula?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjectiveSliSpecificationTimeSliceQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._formula.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._formula.internalValue = value.formula;
      this._query.internalValue = value.query;
    }
  }

  // formula - computed: false, optional: false, required: true
  private _formula = new ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference(this, "formula");
  public get formula() {
    return this._formula;
  }
  public putFormula(value: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula) {
    this._formula.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface ServiceLevelObjectiveSliSpecificationTimeSlice {
  /**
  * The comparator used to compare the SLI value to the threshold. Valid values are `>`, `>=`, `<`, `<=`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#comparator ServiceLevelObjective#comparator}
  */
  readonly comparator: string;
  /**
  * The interval used when querying data, which defines the size of a time slice. Valid values are `60`, `300`. Defaults to `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#query_interval_seconds ServiceLevelObjective#query_interval_seconds}
  */
  readonly queryIntervalSeconds?: number;
  /**
  * The threshold value to which each SLI value will be compared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#threshold ServiceLevelObjective#threshold}
  */
  readonly threshold: number;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}
  */
  readonly query: ServiceLevelObjectiveSliSpecificationTimeSliceQuery;
}

export function serviceLevelObjectiveSliSpecificationTimeSliceToTerraform(struct?: ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference | ServiceLevelObjectiveSliSpecificationTimeSlice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    query_interval_seconds: cdktf.numberToTerraform(struct!.queryIntervalSeconds),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    query: serviceLevelObjectiveSliSpecificationTimeSliceQueryToTerraform(struct!.query),
  }
}


export function serviceLevelObjectiveSliSpecificationTimeSliceToHclTerraform(struct?: ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference | ServiceLevelObjectiveSliSpecificationTimeSlice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.queryIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: serviceLevelObjectiveSliSpecificationTimeSliceQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLevelObjectiveSliSpecificationTimeSliceQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceLevelObjectiveSliSpecificationTimeSlice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._queryIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryIntervalSeconds = this._queryIntervalSeconds;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjectiveSliSpecificationTimeSlice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._queryIntervalSeconds = undefined;
      this._threshold = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._queryIntervalSeconds = value.queryIntervalSeconds;
      this._threshold = value.threshold;
      this._query.internalValue = value.query;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // query_interval_seconds - computed: false, optional: true, required: false
  private _queryIntervalSeconds?: number; 
  public get queryIntervalSeconds() {
    return this.getNumberAttribute('query_interval_seconds');
  }
  public set queryIntervalSeconds(value: number) {
    this._queryIntervalSeconds = value;
  }
  public resetQueryIntervalSeconds() {
    this._queryIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalSecondsInput() {
    return this._queryIntervalSeconds;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // query - computed: false, optional: false, required: true
  private _query = new ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: ServiceLevelObjectiveSliSpecificationTimeSliceQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface ServiceLevelObjectiveSliSpecification {
  /**
  * time_slice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#time_slice ServiceLevelObjective#time_slice}
  */
  readonly timeSlice: ServiceLevelObjectiveSliSpecificationTimeSlice;
}

export function serviceLevelObjectiveSliSpecificationToTerraform(struct?: ServiceLevelObjectiveSliSpecificationOutputReference | ServiceLevelObjectiveSliSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_slice: serviceLevelObjectiveSliSpecificationTimeSliceToTerraform(struct!.timeSlice),
  }
}


export function serviceLevelObjectiveSliSpecificationToHclTerraform(struct?: ServiceLevelObjectiveSliSpecificationOutputReference | ServiceLevelObjectiveSliSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_slice: {
      value: serviceLevelObjectiveSliSpecificationTimeSliceToHclTerraform(struct!.timeSlice),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLevelObjectiveSliSpecificationTimeSliceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLevelObjectiveSliSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceLevelObjectiveSliSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeSlice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSlice = this._timeSlice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjectiveSliSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeSlice.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeSlice.internalValue = value.timeSlice;
    }
  }

  // time_slice - computed: false, optional: false, required: true
  private _timeSlice = new ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference(this, "time_slice");
  public get timeSlice() {
    return this._timeSlice;
  }
  public putTimeSlice(value: ServiceLevelObjectiveSliSpecificationTimeSlice) {
    this._timeSlice.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSliceInput() {
    return this._timeSlice.internalValue;
  }
}
export interface ServiceLevelObjectiveThresholds {
  /**
  * The objective's target in `(0,100)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#target ServiceLevelObjective#target}
  */
  readonly target: number;
  /**
  * The time frame for the objective. The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}
  */
  readonly timeframe: string;
  /**
  * The objective's warning value in `(0,100)`. This must be greater than the target value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#warning ServiceLevelObjective#warning}
  */
  readonly warning?: number;
}

export function serviceLevelObjectiveThresholdsToTerraform(struct?: ServiceLevelObjectiveThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.numberToTerraform(struct!.target),
    timeframe: cdktf.stringToTerraform(struct!.timeframe),
    warning: cdktf.numberToTerraform(struct!.warning),
  }
}


export function serviceLevelObjectiveThresholdsToHclTerraform(struct?: ServiceLevelObjectiveThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeframe: {
      value: cdktf.stringToHclTerraform(struct!.timeframe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning: {
      value: cdktf.numberToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLevelObjectiveThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLevelObjectiveThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframe = this._timeframe;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjectiveThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._timeframe = undefined;
      this._warning = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._timeframe = value.timeframe;
      this._warning = value.warning;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_display - computed: true, optional: false, required: false
  public get targetDisplay() {
    return this.getStringAttribute('target_display');
  }

  // timeframe - computed: false, optional: false, required: true
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: number; 
  public get warning() {
    return this.getNumberAttribute('warning');
  }
  public set warning(value: number) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // warning_display - computed: true, optional: false, required: false
  public get warningDisplay() {
    return this.getStringAttribute('warning_display');
  }
}

export class ServiceLevelObjectiveThresholdsList extends cdktf.ComplexList {
  public internalValue? : ServiceLevelObjectiveThresholds[] | cdktf.IResolvable

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
  public get(index: number): ServiceLevelObjectiveThresholdsOutputReference {
    return new ServiceLevelObjectiveThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective datadog_service_level_objective}
*/
export class ServiceLevelObjective extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_service_level_objective";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceLevelObjective resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceLevelObjective to import
  * @param importFromId The id of the existing ServiceLevelObjective that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceLevelObjective to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_service_level_objective", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.48.0/docs/resources/service_level_objective datadog_service_level_objective} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLevelObjectiveConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLevelObjectiveConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_service_level_objective',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.48.0',
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
    this._forceDelete = config.forceDelete;
    this._groups = config.groups;
    this._id = config.id;
    this._monitorIds = config.monitorIds;
    this._name = config.name;
    this._tags = config.tags;
    this._targetThreshold = config.targetThreshold;
    this._timeframe = config.timeframe;
    this._type = config.type;
    this._validate = config.validate;
    this._warningThreshold = config.warningThreshold;
    this._query.internalValue = config.query;
    this._sliSpecification.internalValue = config.sliSpecification;
    this._thresholds.internalValue = config.thresholds;
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

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // monitor_ids - computed: false, optional: true, required: false
  private _monitorIds?: number[]; 
  public get monitorIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('monitor_ids')));
  }
  public set monitorIds(value: number[]) {
    this._monitorIds = value;
  }
  public resetMonitorIds() {
    this._monitorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdsInput() {
    return this._monitorIds;
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

  // tags - computed: false, optional: true, required: false
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

  // target_threshold - computed: true, optional: true, required: false
  private _targetThreshold?: number; 
  public get targetThreshold() {
    return this.getNumberAttribute('target_threshold');
  }
  public set targetThreshold(value: number) {
    this._targetThreshold = value;
  }
  public resetTargetThreshold() {
    this._targetThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetThresholdInput() {
    return this._targetThreshold;
  }

  // timeframe - computed: true, optional: true, required: false
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  public resetTimeframe() {
    this._timeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktf.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // warning_threshold - computed: true, optional: true, required: false
  private _warningThreshold?: number; 
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }
  public set warningThreshold(value: number) {
    this._warningThreshold = value;
  }
  public resetWarningThreshold() {
    this._warningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }

  // query - computed: false, optional: true, required: false
  private _query = new ServiceLevelObjectiveQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: ServiceLevelObjectiveQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // sli_specification - computed: false, optional: true, required: false
  private _sliSpecification = new ServiceLevelObjectiveSliSpecificationOutputReference(this, "sli_specification");
  public get sliSpecification() {
    return this._sliSpecification;
  }
  public putSliSpecification(value: ServiceLevelObjectiveSliSpecification) {
    this._sliSpecification.internalValue = value;
  }
  public resetSliSpecification() {
    this._sliSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliSpecificationInput() {
    return this._sliSpecification.internalValue;
  }

  // thresholds - computed: false, optional: false, required: true
  private _thresholds = new ServiceLevelObjectiveThresholdsList(this, "thresholds", false);
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: ServiceLevelObjectiveThresholds[] | cdktf.IResolvable) {
    this._thresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      monitor_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._monitorIds),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_threshold: cdktf.numberToTerraform(this._targetThreshold),
      timeframe: cdktf.stringToTerraform(this._timeframe),
      type: cdktf.stringToTerraform(this._type),
      validate: cdktf.booleanToTerraform(this._validate),
      warning_threshold: cdktf.numberToTerraform(this._warningThreshold),
      query: serviceLevelObjectiveQueryToTerraform(this._query.internalValue),
      sli_specification: serviceLevelObjectiveSliSpecificationToTerraform(this._sliSpecification.internalValue),
      thresholds: cdktf.listMapper(serviceLevelObjectiveThresholdsToTerraform, true)(this._thresholds.internalValue),
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
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._monitorIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
      target_threshold: {
        value: cdktf.numberToHclTerraform(this._targetThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeframe: {
        value: cdktf.stringToHclTerraform(this._timeframe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate: {
        value: cdktf.booleanToHclTerraform(this._validate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      warning_threshold: {
        value: cdktf.numberToHclTerraform(this._warningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query: {
        value: serviceLevelObjectiveQueryToHclTerraform(this._query.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLevelObjectiveQueryList",
      },
      sli_specification: {
        value: serviceLevelObjectiveSliSpecificationToHclTerraform(this._sliSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLevelObjectiveSliSpecificationList",
      },
      thresholds: {
        value: cdktf.listMapperHcl(serviceLevelObjectiveThresholdsToHclTerraform, true)(this._thresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLevelObjectiveThresholdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
