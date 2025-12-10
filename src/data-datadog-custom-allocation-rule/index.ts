/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogCustomAllocationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the custom allocation rule to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule#rule_id DataDatadogCustomAllocationRule#rule_id}
  */
  readonly ruleId?: number;
  /**
  * costs_to_allocate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule#costs_to_allocate DataDatadogCustomAllocationRule#costs_to_allocate}
  */
  readonly costsToAllocate?: DataDatadogCustomAllocationRuleCostsToAllocate[] | cdktf.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule#strategy DataDatadogCustomAllocationRule#strategy}
  */
  readonly strategy?: DataDatadogCustomAllocationRuleStrategy;
}
export interface DataDatadogCustomAllocationRuleCostsToAllocate {
}

export function dataDatadogCustomAllocationRuleCostsToAllocateToTerraform(struct?: DataDatadogCustomAllocationRuleCostsToAllocate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogCustomAllocationRuleCostsToAllocateToHclTerraform(struct?: DataDatadogCustomAllocationRuleCostsToAllocate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCustomAllocationRuleCostsToAllocateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogCustomAllocationRuleCostsToAllocate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCustomAllocationRuleCostsToAllocate | cdktf.IResolvable | undefined) {
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

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataDatadogCustomAllocationRuleCostsToAllocateList extends cdktf.ComplexList {
  public internalValue? : DataDatadogCustomAllocationRuleCostsToAllocate[] | cdktf.IResolvable

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
  public get(index: number): DataDatadogCustomAllocationRuleCostsToAllocateOutputReference {
    return new DataDatadogCustomAllocationRuleCostsToAllocateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags {
}

export function dataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsToTerraform(struct?: DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsToHclTerraform(struct?: DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList extends cdktf.ComplexList {
  public internalValue? : DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags[] | cdktf.IResolvable

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
  public get(index: number): DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference {
    return new DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogCustomAllocationRuleStrategyAllocatedBy {
  /**
  * allocated_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule#allocated_tags DataDatadogCustomAllocationRule#allocated_tags}
  */
  readonly allocatedTags?: DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags[] | cdktf.IResolvable;
}

export function dataDatadogCustomAllocationRuleStrategyAllocatedByToTerraform(struct?: DataDatadogCustomAllocationRuleStrategyAllocatedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_tags: cdktf.listMapper(dataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsToTerraform, true)(struct!.allocatedTags),
  }
}


export function dataDatadogCustomAllocationRuleStrategyAllocatedByToHclTerraform(struct?: DataDatadogCustomAllocationRuleStrategyAllocatedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_tags: {
      value: cdktf.listMapperHcl(dataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsToHclTerraform, true)(struct!.allocatedTags),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogCustomAllocationRuleStrategyAllocatedBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedTags = this._allocatedTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCustomAllocationRuleStrategyAllocatedBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatedTags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatedTags.internalValue = value.allocatedTags;
    }
  }

  // percentage - computed: true, optional: false, required: false
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }

  // allocated_tags - computed: false, optional: true, required: false
  private _allocatedTags = new DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList(this, "allocated_tags", false);
  public get allocatedTags() {
    return this._allocatedTags;
  }
  public putAllocatedTags(value: DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags[] | cdktf.IResolvable) {
    this._allocatedTags.internalValue = value;
  }
  public resetAllocatedTags() {
    this._allocatedTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedTagsInput() {
    return this._allocatedTags.internalValue;
  }
}

export class DataDatadogCustomAllocationRuleStrategyAllocatedByList extends cdktf.ComplexList {
  public internalValue? : DataDatadogCustomAllocationRuleStrategyAllocatedBy[] | cdktf.IResolvable

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
  public get(index: number): DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference {
    return new DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogCustomAllocationRuleStrategyAllocatedByFilters {
}

export function dataDatadogCustomAllocationRuleStrategyAllocatedByFiltersToTerraform(struct?: DataDatadogCustomAllocationRuleStrategyAllocatedByFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogCustomAllocationRuleStrategyAllocatedByFiltersToHclTerraform(struct?: DataDatadogCustomAllocationRuleStrategyAllocatedByFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogCustomAllocationRuleStrategyAllocatedByFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCustomAllocationRuleStrategyAllocatedByFilters | cdktf.IResolvable | undefined) {
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

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList extends cdktf.ComplexList {
  public internalValue? : DataDatadogCustomAllocationRuleStrategyAllocatedByFilters[] | cdktf.IResolvable

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
  public get(index: number): DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference {
    return new DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogCustomAllocationRuleStrategyBasedOnCosts {
}

export function dataDatadogCustomAllocationRuleStrategyBasedOnCostsToTerraform(struct?: DataDatadogCustomAllocationRuleStrategyBasedOnCosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogCustomAllocationRuleStrategyBasedOnCostsToHclTerraform(struct?: DataDatadogCustomAllocationRuleStrategyBasedOnCosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogCustomAllocationRuleStrategyBasedOnCosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCustomAllocationRuleStrategyBasedOnCosts | cdktf.IResolvable | undefined) {
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

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataDatadogCustomAllocationRuleStrategyBasedOnCostsList extends cdktf.ComplexList {
  public internalValue? : DataDatadogCustomAllocationRuleStrategyBasedOnCosts[] | cdktf.IResolvable

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
  public get(index: number): DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference {
    return new DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries {
}

export function dataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesToTerraform(struct?: DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesToHclTerraform(struct?: DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries | cdktf.IResolvable | undefined) {
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
export interface DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters {
}

export function dataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersToTerraform(struct?: DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersToHclTerraform(struct?: DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters | cdktf.IResolvable | undefined) {
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

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList extends cdktf.ComplexList {
  public internalValue? : DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters[] | cdktf.IResolvable

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
  public get(index: number): DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference {
    return new DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogCustomAllocationRuleStrategy {
  /**
  * allocated_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule#allocated_by DataDatadogCustomAllocationRule#allocated_by}
  */
  readonly allocatedBy?: DataDatadogCustomAllocationRuleStrategyAllocatedBy[] | cdktf.IResolvable;
  /**
  * allocated_by_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule#allocated_by_filters DataDatadogCustomAllocationRule#allocated_by_filters}
  */
  readonly allocatedByFilters?: DataDatadogCustomAllocationRuleStrategyAllocatedByFilters[] | cdktf.IResolvable;
  /**
  * based_on_costs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule#based_on_costs DataDatadogCustomAllocationRule#based_on_costs}
  */
  readonly basedOnCosts?: DataDatadogCustomAllocationRuleStrategyBasedOnCosts[] | cdktf.IResolvable;
  /**
  * based_on_timeseries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule#based_on_timeseries DataDatadogCustomAllocationRule#based_on_timeseries}
  */
  readonly basedOnTimeseries?: DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries;
  /**
  * evaluate_grouped_by_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule#evaluate_grouped_by_filters DataDatadogCustomAllocationRule#evaluate_grouped_by_filters}
  */
  readonly evaluateGroupedByFilters?: DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters[] | cdktf.IResolvable;
}

export function dataDatadogCustomAllocationRuleStrategyToTerraform(struct?: DataDatadogCustomAllocationRuleStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_by: cdktf.listMapper(dataDatadogCustomAllocationRuleStrategyAllocatedByToTerraform, true)(struct!.allocatedBy),
    allocated_by_filters: cdktf.listMapper(dataDatadogCustomAllocationRuleStrategyAllocatedByFiltersToTerraform, true)(struct!.allocatedByFilters),
    based_on_costs: cdktf.listMapper(dataDatadogCustomAllocationRuleStrategyBasedOnCostsToTerraform, true)(struct!.basedOnCosts),
    based_on_timeseries: dataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesToTerraform(struct!.basedOnTimeseries),
    evaluate_grouped_by_filters: cdktf.listMapper(dataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersToTerraform, true)(struct!.evaluateGroupedByFilters),
  }
}


export function dataDatadogCustomAllocationRuleStrategyToHclTerraform(struct?: DataDatadogCustomAllocationRuleStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_by: {
      value: cdktf.listMapperHcl(dataDatadogCustomAllocationRuleStrategyAllocatedByToHclTerraform, true)(struct!.allocatedBy),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogCustomAllocationRuleStrategyAllocatedByList",
    },
    allocated_by_filters: {
      value: cdktf.listMapperHcl(dataDatadogCustomAllocationRuleStrategyAllocatedByFiltersToHclTerraform, true)(struct!.allocatedByFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList",
    },
    based_on_costs: {
      value: cdktf.listMapperHcl(dataDatadogCustomAllocationRuleStrategyBasedOnCostsToHclTerraform, true)(struct!.basedOnCosts),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogCustomAllocationRuleStrategyBasedOnCostsList",
    },
    based_on_timeseries: {
      value: dataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesToHclTerraform(struct!.basedOnTimeseries),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries",
    },
    evaluate_grouped_by_filters: {
      value: cdktf.listMapperHcl(dataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersToHclTerraform, true)(struct!.evaluateGroupedByFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatadogCustomAllocationRuleStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogCustomAllocationRuleStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedBy = this._allocatedBy?.internalValue;
    }
    if (this._allocatedByFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedByFilters = this._allocatedByFilters?.internalValue;
    }
    if (this._basedOnCosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basedOnCosts = this._basedOnCosts?.internalValue;
    }
    if (this._basedOnTimeseries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basedOnTimeseries = this._basedOnTimeseries?.internalValue;
    }
    if (this._evaluateGroupedByFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateGroupedByFilters = this._evaluateGroupedByFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogCustomAllocationRuleStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatedBy.internalValue = undefined;
      this._allocatedByFilters.internalValue = undefined;
      this._basedOnCosts.internalValue = undefined;
      this._basedOnTimeseries.internalValue = undefined;
      this._evaluateGroupedByFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatedBy.internalValue = value.allocatedBy;
      this._allocatedByFilters.internalValue = value.allocatedByFilters;
      this._basedOnCosts.internalValue = value.basedOnCosts;
      this._basedOnTimeseries.internalValue = value.basedOnTimeseries;
      this._evaluateGroupedByFilters.internalValue = value.evaluateGroupedByFilters;
    }
  }

  // allocated_by_tag_keys - computed: true, optional: false, required: false
  public get allocatedByTagKeys() {
    return this.getListAttribute('allocated_by_tag_keys');
  }

  // evaluate_grouped_by_tag_keys - computed: true, optional: false, required: false
  public get evaluateGroupedByTagKeys() {
    return this.getListAttribute('evaluate_grouped_by_tag_keys');
  }

  // granularity - computed: true, optional: false, required: false
  public get granularity() {
    return this.getStringAttribute('granularity');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // allocated_by - computed: false, optional: true, required: false
  private _allocatedBy = new DataDatadogCustomAllocationRuleStrategyAllocatedByList(this, "allocated_by", false);
  public get allocatedBy() {
    return this._allocatedBy;
  }
  public putAllocatedBy(value: DataDatadogCustomAllocationRuleStrategyAllocatedBy[] | cdktf.IResolvable) {
    this._allocatedBy.internalValue = value;
  }
  public resetAllocatedBy() {
    this._allocatedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedByInput() {
    return this._allocatedBy.internalValue;
  }

  // allocated_by_filters - computed: false, optional: true, required: false
  private _allocatedByFilters = new DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList(this, "allocated_by_filters", false);
  public get allocatedByFilters() {
    return this._allocatedByFilters;
  }
  public putAllocatedByFilters(value: DataDatadogCustomAllocationRuleStrategyAllocatedByFilters[] | cdktf.IResolvable) {
    this._allocatedByFilters.internalValue = value;
  }
  public resetAllocatedByFilters() {
    this._allocatedByFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedByFiltersInput() {
    return this._allocatedByFilters.internalValue;
  }

  // based_on_costs - computed: false, optional: true, required: false
  private _basedOnCosts = new DataDatadogCustomAllocationRuleStrategyBasedOnCostsList(this, "based_on_costs", false);
  public get basedOnCosts() {
    return this._basedOnCosts;
  }
  public putBasedOnCosts(value: DataDatadogCustomAllocationRuleStrategyBasedOnCosts[] | cdktf.IResolvable) {
    this._basedOnCosts.internalValue = value;
  }
  public resetBasedOnCosts() {
    this._basedOnCosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basedOnCostsInput() {
    return this._basedOnCosts.internalValue;
  }

  // based_on_timeseries - computed: false, optional: true, required: true
  private _basedOnTimeseries = new DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference(this, "based_on_timeseries");
  public get basedOnTimeseries() {
    return this._basedOnTimeseries;
  }
  public putBasedOnTimeseries(value: DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries) {
    this._basedOnTimeseries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basedOnTimeseriesInput() {
    return this._basedOnTimeseries.internalValue;
  }

  // evaluate_grouped_by_filters - computed: false, optional: true, required: false
  private _evaluateGroupedByFilters = new DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList(this, "evaluate_grouped_by_filters", false);
  public get evaluateGroupedByFilters() {
    return this._evaluateGroupedByFilters;
  }
  public putEvaluateGroupedByFilters(value: DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters[] | cdktf.IResolvable) {
    this._evaluateGroupedByFilters.internalValue = value;
  }
  public resetEvaluateGroupedByFilters() {
    this._evaluateGroupedByFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateGroupedByFiltersInput() {
    return this._evaluateGroupedByFilters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule datadog_custom_allocation_rule}
*/
export class DataDatadogCustomAllocationRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_custom_allocation_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogCustomAllocationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogCustomAllocationRule to import
  * @param importFromId The id of the existing DataDatadogCustomAllocationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogCustomAllocationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_custom_allocation_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/custom_allocation_rule datadog_custom_allocation_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogCustomAllocationRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogCustomAllocationRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_custom_allocation_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.82.0',
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
    this._ruleId = config.ruleId;
    this._costsToAllocate.internalValue = config.costsToAllocate;
    this._strategy.internalValue = config.strategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_user_uuid - computed: true, optional: false, required: false
  public get lastModifiedUserUuid() {
    return this.getStringAttribute('last_modified_user_uuid');
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }

  // providernames - computed: true, optional: false, required: false
  public get providernames() {
    return this.getListAttribute('providernames');
  }

  // rejected - computed: true, optional: false, required: false
  public get rejected() {
    return this.getBooleanAttribute('rejected');
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: number; 
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
  public set ruleId(value: number) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // costs_to_allocate - computed: false, optional: true, required: false
  private _costsToAllocate = new DataDatadogCustomAllocationRuleCostsToAllocateList(this, "costs_to_allocate", false);
  public get costsToAllocate() {
    return this._costsToAllocate;
  }
  public putCostsToAllocate(value: DataDatadogCustomAllocationRuleCostsToAllocate[] | cdktf.IResolvable) {
    this._costsToAllocate.internalValue = value;
  }
  public resetCostsToAllocate() {
    this._costsToAllocate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costsToAllocateInput() {
    return this._costsToAllocate.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new DataDatadogCustomAllocationRuleStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: DataDatadogCustomAllocationRuleStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rule_id: cdktf.numberToTerraform(this._ruleId),
      costs_to_allocate: cdktf.listMapper(dataDatadogCustomAllocationRuleCostsToAllocateToTerraform, true)(this._costsToAllocate.internalValue),
      strategy: dataDatadogCustomAllocationRuleStrategyToTerraform(this._strategy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rule_id: {
        value: cdktf.numberToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      costs_to_allocate: {
        value: cdktf.listMapperHcl(dataDatadogCustomAllocationRuleCostsToAllocateToHclTerraform, true)(this._costsToAllocate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatadogCustomAllocationRuleCostsToAllocateList",
      },
      strategy: {
        value: dataDatadogCustomAllocationRuleStrategyToHclTerraform(this._strategy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatadogCustomAllocationRuleStrategy",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
