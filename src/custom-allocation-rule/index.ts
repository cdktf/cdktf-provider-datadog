/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomAllocationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the custom allocation rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#enabled CustomAllocationRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * List of cloud providers the rule applies to. Valid values include `aws`, `azure`, and `gcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#providernames CustomAllocationRule#providernames}
  */
  readonly providernames: string[];
  /**
  * The name of the custom allocation rule. This field is immutable - changing it will force replacement of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#rule_name CustomAllocationRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * costs_to_allocate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#costs_to_allocate CustomAllocationRule#costs_to_allocate}
  */
  readonly costsToAllocate?: CustomAllocationRuleCostsToAllocate[] | cdktf.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#strategy CustomAllocationRule#strategy}
  */
  readonly strategy?: CustomAllocationRuleStrategy;
}
export interface CustomAllocationRuleCostsToAllocate {
  /**
  * The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}
  */
  readonly condition?: string;
  /**
  * The tag key to filter on (e.g., `aws_product`, `team`, `environment`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}
  */
  readonly tag?: string;
  /**
  * The single tag value to match. Use this field for conditions like `=`, `!=`, `is`, `is not`, `like`. Do not use with `in` or `not in` conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}
  */
  readonly value?: string;
  /**
  * A list of tag values to match. Use this field for `in` or `not in` conditions only. Do not use with single-value conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}
  */
  readonly values?: string[];
}

export function customAllocationRuleCostsToAllocateToTerraform(struct?: CustomAllocationRuleCostsToAllocate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    tag: cdktf.stringToTerraform(struct!.tag),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function customAllocationRuleCostsToAllocateToHclTerraform(struct?: CustomAllocationRuleCostsToAllocate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAllocationRuleCostsToAllocateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAllocationRuleCostsToAllocate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAllocationRuleCostsToAllocate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._tag = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._tag = value.tag;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // value - computed: false, optional: true, required: false
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CustomAllocationRuleCostsToAllocateList extends cdktf.ComplexList {
  public internalValue? : CustomAllocationRuleCostsToAllocate[] | cdktf.IResolvable

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
  public get(index: number): CustomAllocationRuleCostsToAllocateOutputReference {
    return new CustomAllocationRuleCostsToAllocateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAllocationRuleStrategyAllocatedByAllocatedTags {
  /**
  * The tag key to allocate costs to (e.g., `team`, `environment`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#key CustomAllocationRule#key}
  */
  readonly key?: string;
  /**
  * The tag value to allocate costs to (e.g., `backend`, `production`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}
  */
  readonly value?: string;
}

export function customAllocationRuleStrategyAllocatedByAllocatedTagsToTerraform(struct?: CustomAllocationRuleStrategyAllocatedByAllocatedTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function customAllocationRuleStrategyAllocatedByAllocatedTagsToHclTerraform(struct?: CustomAllocationRuleStrategyAllocatedByAllocatedTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAllocationRuleStrategyAllocatedByAllocatedTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAllocationRuleStrategyAllocatedByAllocatedTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
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

export class CustomAllocationRuleStrategyAllocatedByAllocatedTagsList extends cdktf.ComplexList {
  public internalValue? : CustomAllocationRuleStrategyAllocatedByAllocatedTags[] | cdktf.IResolvable

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
  public get(index: number): CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference {
    return new CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAllocationRuleStrategyAllocatedBy {
  /**
  * The percentage of costs to allocate to this target as a decimal (e.g., 0.33 for 33%). Used when `method` is `percent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#percentage CustomAllocationRule#percentage}
  */
  readonly percentage?: number;
  /**
  * allocated_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_tags CustomAllocationRule#allocated_tags}
  */
  readonly allocatedTags?: CustomAllocationRuleStrategyAllocatedByAllocatedTags[] | cdktf.IResolvable;
}

export function customAllocationRuleStrategyAllocatedByToTerraform(struct?: CustomAllocationRuleStrategyAllocatedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    allocated_tags: cdktf.listMapper(customAllocationRuleStrategyAllocatedByAllocatedTagsToTerraform, true)(struct!.allocatedTags),
  }
}


export function customAllocationRuleStrategyAllocatedByToHclTerraform(struct?: CustomAllocationRuleStrategyAllocatedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allocated_tags: {
      value: cdktf.listMapperHcl(customAllocationRuleStrategyAllocatedByAllocatedTagsToHclTerraform, true)(struct!.allocatedTags),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAllocationRuleStrategyAllocatedByAllocatedTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAllocationRuleStrategyAllocatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAllocationRuleStrategyAllocatedBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._allocatedTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedTags = this._allocatedTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAllocationRuleStrategyAllocatedBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentage = undefined;
      this._allocatedTags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentage = value.percentage;
      this._allocatedTags.internalValue = value.allocatedTags;
    }
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // allocated_tags - computed: false, optional: true, required: false
  private _allocatedTags = new CustomAllocationRuleStrategyAllocatedByAllocatedTagsList(this, "allocated_tags", false);
  public get allocatedTags() {
    return this._allocatedTags;
  }
  public putAllocatedTags(value: CustomAllocationRuleStrategyAllocatedByAllocatedTags[] | cdktf.IResolvable) {
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

export class CustomAllocationRuleStrategyAllocatedByList extends cdktf.ComplexList {
  public internalValue? : CustomAllocationRuleStrategyAllocatedBy[] | cdktf.IResolvable

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
  public get(index: number): CustomAllocationRuleStrategyAllocatedByOutputReference {
    return new CustomAllocationRuleStrategyAllocatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAllocationRuleStrategyAllocatedByFilters {
  /**
  * The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}
  */
  readonly condition?: string;
  /**
  * The tag key to filter on for allocation targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}
  */
  readonly tag?: string;
  /**
  * The single tag value to match for allocation. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}
  */
  readonly value?: string;
  /**
  * A list of tag values to match for allocation. Use with `in` or `not in` conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}
  */
  readonly values?: string[];
}

export function customAllocationRuleStrategyAllocatedByFiltersToTerraform(struct?: CustomAllocationRuleStrategyAllocatedByFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    tag: cdktf.stringToTerraform(struct!.tag),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function customAllocationRuleStrategyAllocatedByFiltersToHclTerraform(struct?: CustomAllocationRuleStrategyAllocatedByFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAllocationRuleStrategyAllocatedByFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAllocationRuleStrategyAllocatedByFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAllocationRuleStrategyAllocatedByFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._tag = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._tag = value.tag;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // value - computed: false, optional: true, required: false
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CustomAllocationRuleStrategyAllocatedByFiltersList extends cdktf.ComplexList {
  public internalValue? : CustomAllocationRuleStrategyAllocatedByFilters[] | cdktf.IResolvable

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
  public get(index: number): CustomAllocationRuleStrategyAllocatedByFiltersOutputReference {
    return new CustomAllocationRuleStrategyAllocatedByFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAllocationRuleStrategyBasedOnCosts {
  /**
  * The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}
  */
  readonly condition?: string;
  /**
  * The tag key to use as the basis for cost allocation calculations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}
  */
  readonly tag?: string;
  /**
  * The single tag value to use for cost calculations. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}
  */
  readonly value?: string;
  /**
  * A list of tag values to use for cost calculations. Use with `in` or `not in` conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}
  */
  readonly values?: string[];
}

export function customAllocationRuleStrategyBasedOnCostsToTerraform(struct?: CustomAllocationRuleStrategyBasedOnCosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    tag: cdktf.stringToTerraform(struct!.tag),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function customAllocationRuleStrategyBasedOnCostsToHclTerraform(struct?: CustomAllocationRuleStrategyBasedOnCosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAllocationRuleStrategyBasedOnCostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAllocationRuleStrategyBasedOnCosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAllocationRuleStrategyBasedOnCosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._tag = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._tag = value.tag;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // value - computed: false, optional: true, required: false
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CustomAllocationRuleStrategyBasedOnCostsList extends cdktf.ComplexList {
  public internalValue? : CustomAllocationRuleStrategyBasedOnCosts[] | cdktf.IResolvable

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
  public get(index: number): CustomAllocationRuleStrategyBasedOnCostsOutputReference {
    return new CustomAllocationRuleStrategyBasedOnCostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAllocationRuleStrategyBasedOnTimeseries {
}

export function customAllocationRuleStrategyBasedOnTimeseriesToTerraform(struct?: CustomAllocationRuleStrategyBasedOnTimeseries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function customAllocationRuleStrategyBasedOnTimeseriesToHclTerraform(struct?: CustomAllocationRuleStrategyBasedOnTimeseries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomAllocationRuleStrategyBasedOnTimeseries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAllocationRuleStrategyBasedOnTimeseries | cdktf.IResolvable | undefined) {
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
export interface CustomAllocationRuleStrategyEvaluateGroupedByFilters {
  /**
  * The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}
  */
  readonly condition?: string;
  /**
  * The tag key to filter on when grouping costs for evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}
  */
  readonly tag?: string;
  /**
  * The single tag value to match when grouping. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}
  */
  readonly value?: string;
  /**
  * A list of tag values to match when grouping. Use with `in` or `not in` conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}
  */
  readonly values?: string[];
}

export function customAllocationRuleStrategyEvaluateGroupedByFiltersToTerraform(struct?: CustomAllocationRuleStrategyEvaluateGroupedByFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    tag: cdktf.stringToTerraform(struct!.tag),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function customAllocationRuleStrategyEvaluateGroupedByFiltersToHclTerraform(struct?: CustomAllocationRuleStrategyEvaluateGroupedByFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAllocationRuleStrategyEvaluateGroupedByFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAllocationRuleStrategyEvaluateGroupedByFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._tag = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._tag = value.tag;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // value - computed: false, optional: true, required: false
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CustomAllocationRuleStrategyEvaluateGroupedByFiltersList extends cdktf.ComplexList {
  public internalValue? : CustomAllocationRuleStrategyEvaluateGroupedByFilters[] | cdktf.IResolvable

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
  public get(index: number): CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference {
    return new CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAllocationRuleStrategy {
  /**
  * List of tag keys used to allocate costs (e.g., `["team", "project"]`). Costs will be distributed across unique values of these tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_by_tag_keys CustomAllocationRule#allocated_by_tag_keys}
  */
  readonly allocatedByTagKeys?: string[];
  /**
  * List of tag keys used to group costs before allocation. Costs are grouped by these tag values before applying the allocation strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#evaluate_grouped_by_tag_keys CustomAllocationRule#evaluate_grouped_by_tag_keys}
  */
  readonly evaluateGroupedByTagKeys?: string[];
  /**
  * The granularity level for cost allocation. Valid values are `daily` or `monthly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#granularity CustomAllocationRule#granularity}
  */
  readonly granularity?: string;
  /**
  * The allocation method. Valid values are `even`, `proportional`, `proportional_timeseries`, or `percent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#method CustomAllocationRule#method}
  */
  readonly method?: string;
  /**
  * allocated_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_by CustomAllocationRule#allocated_by}
  */
  readonly allocatedBy?: CustomAllocationRuleStrategyAllocatedBy[] | cdktf.IResolvable;
  /**
  * allocated_by_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_by_filters CustomAllocationRule#allocated_by_filters}
  */
  readonly allocatedByFilters?: CustomAllocationRuleStrategyAllocatedByFilters[] | cdktf.IResolvable;
  /**
  * based_on_costs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#based_on_costs CustomAllocationRule#based_on_costs}
  */
  readonly basedOnCosts?: CustomAllocationRuleStrategyBasedOnCosts[] | cdktf.IResolvable;
  /**
  * based_on_timeseries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#based_on_timeseries CustomAllocationRule#based_on_timeseries}
  */
  readonly basedOnTimeseries?: CustomAllocationRuleStrategyBasedOnTimeseries;
  /**
  * evaluate_grouped_by_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#evaluate_grouped_by_filters CustomAllocationRule#evaluate_grouped_by_filters}
  */
  readonly evaluateGroupedByFilters?: CustomAllocationRuleStrategyEvaluateGroupedByFilters[] | cdktf.IResolvable;
}

export function customAllocationRuleStrategyToTerraform(struct?: CustomAllocationRuleStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_by_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allocatedByTagKeys),
    evaluate_grouped_by_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluateGroupedByTagKeys),
    granularity: cdktf.stringToTerraform(struct!.granularity),
    method: cdktf.stringToTerraform(struct!.method),
    allocated_by: cdktf.listMapper(customAllocationRuleStrategyAllocatedByToTerraform, true)(struct!.allocatedBy),
    allocated_by_filters: cdktf.listMapper(customAllocationRuleStrategyAllocatedByFiltersToTerraform, true)(struct!.allocatedByFilters),
    based_on_costs: cdktf.listMapper(customAllocationRuleStrategyBasedOnCostsToTerraform, true)(struct!.basedOnCosts),
    based_on_timeseries: customAllocationRuleStrategyBasedOnTimeseriesToTerraform(struct!.basedOnTimeseries),
    evaluate_grouped_by_filters: cdktf.listMapper(customAllocationRuleStrategyEvaluateGroupedByFiltersToTerraform, true)(struct!.evaluateGroupedByFilters),
  }
}


export function customAllocationRuleStrategyToHclTerraform(struct?: CustomAllocationRuleStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_by_tag_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allocatedByTagKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    evaluate_grouped_by_tag_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluateGroupedByTagKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    granularity: {
      value: cdktf.stringToHclTerraform(struct!.granularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocated_by: {
      value: cdktf.listMapperHcl(customAllocationRuleStrategyAllocatedByToHclTerraform, true)(struct!.allocatedBy),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAllocationRuleStrategyAllocatedByList",
    },
    allocated_by_filters: {
      value: cdktf.listMapperHcl(customAllocationRuleStrategyAllocatedByFiltersToHclTerraform, true)(struct!.allocatedByFilters),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAllocationRuleStrategyAllocatedByFiltersList",
    },
    based_on_costs: {
      value: cdktf.listMapperHcl(customAllocationRuleStrategyBasedOnCostsToHclTerraform, true)(struct!.basedOnCosts),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAllocationRuleStrategyBasedOnCostsList",
    },
    based_on_timeseries: {
      value: customAllocationRuleStrategyBasedOnTimeseriesToHclTerraform(struct!.basedOnTimeseries),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomAllocationRuleStrategyBasedOnTimeseries",
    },
    evaluate_grouped_by_filters: {
      value: cdktf.listMapperHcl(customAllocationRuleStrategyEvaluateGroupedByFiltersToHclTerraform, true)(struct!.evaluateGroupedByFilters),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAllocationRuleStrategyEvaluateGroupedByFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAllocationRuleStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomAllocationRuleStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedByTagKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedByTagKeys = this._allocatedByTagKeys;
    }
    if (this._evaluateGroupedByTagKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateGroupedByTagKeys = this._evaluateGroupedByTagKeys;
    }
    if (this._granularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularity = this._granularity;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
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

  public set internalValue(value: CustomAllocationRuleStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatedByTagKeys = undefined;
      this._evaluateGroupedByTagKeys = undefined;
      this._granularity = undefined;
      this._method = undefined;
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
      this._allocatedByTagKeys = value.allocatedByTagKeys;
      this._evaluateGroupedByTagKeys = value.evaluateGroupedByTagKeys;
      this._granularity = value.granularity;
      this._method = value.method;
      this._allocatedBy.internalValue = value.allocatedBy;
      this._allocatedByFilters.internalValue = value.allocatedByFilters;
      this._basedOnCosts.internalValue = value.basedOnCosts;
      this._basedOnTimeseries.internalValue = value.basedOnTimeseries;
      this._evaluateGroupedByFilters.internalValue = value.evaluateGroupedByFilters;
    }
  }

  // allocated_by_tag_keys - computed: false, optional: true, required: false
  private _allocatedByTagKeys?: string[]; 
  public get allocatedByTagKeys() {
    return this.getListAttribute('allocated_by_tag_keys');
  }
  public set allocatedByTagKeys(value: string[]) {
    this._allocatedByTagKeys = value;
  }
  public resetAllocatedByTagKeys() {
    this._allocatedByTagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedByTagKeysInput() {
    return this._allocatedByTagKeys;
  }

  // evaluate_grouped_by_tag_keys - computed: false, optional: true, required: false
  private _evaluateGroupedByTagKeys?: string[]; 
  public get evaluateGroupedByTagKeys() {
    return this.getListAttribute('evaluate_grouped_by_tag_keys');
  }
  public set evaluateGroupedByTagKeys(value: string[]) {
    this._evaluateGroupedByTagKeys = value;
  }
  public resetEvaluateGroupedByTagKeys() {
    this._evaluateGroupedByTagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateGroupedByTagKeysInput() {
    return this._evaluateGroupedByTagKeys;
  }

  // granularity - computed: false, optional: true, required: false
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  public resetGranularity() {
    this._granularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // allocated_by - computed: false, optional: true, required: false
  private _allocatedBy = new CustomAllocationRuleStrategyAllocatedByList(this, "allocated_by", false);
  public get allocatedBy() {
    return this._allocatedBy;
  }
  public putAllocatedBy(value: CustomAllocationRuleStrategyAllocatedBy[] | cdktf.IResolvable) {
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
  private _allocatedByFilters = new CustomAllocationRuleStrategyAllocatedByFiltersList(this, "allocated_by_filters", false);
  public get allocatedByFilters() {
    return this._allocatedByFilters;
  }
  public putAllocatedByFilters(value: CustomAllocationRuleStrategyAllocatedByFilters[] | cdktf.IResolvable) {
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
  private _basedOnCosts = new CustomAllocationRuleStrategyBasedOnCostsList(this, "based_on_costs", false);
  public get basedOnCosts() {
    return this._basedOnCosts;
  }
  public putBasedOnCosts(value: CustomAllocationRuleStrategyBasedOnCosts[] | cdktf.IResolvable) {
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
  private _basedOnTimeseries = new CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference(this, "based_on_timeseries");
  public get basedOnTimeseries() {
    return this._basedOnTimeseries;
  }
  public putBasedOnTimeseries(value: CustomAllocationRuleStrategyBasedOnTimeseries) {
    this._basedOnTimeseries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basedOnTimeseriesInput() {
    return this._basedOnTimeseries.internalValue;
  }

  // evaluate_grouped_by_filters - computed: false, optional: true, required: false
  private _evaluateGroupedByFilters = new CustomAllocationRuleStrategyEvaluateGroupedByFiltersList(this, "evaluate_grouped_by_filters", false);
  public get evaluateGroupedByFilters() {
    return this._evaluateGroupedByFilters;
  }
  public putEvaluateGroupedByFilters(value: CustomAllocationRuleStrategyEvaluateGroupedByFilters[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule datadog_custom_allocation_rule}
*/
export class CustomAllocationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_custom_allocation_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomAllocationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomAllocationRule to import
  * @param importFromId The id of the existing CustomAllocationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomAllocationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_custom_allocation_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule datadog_custom_allocation_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomAllocationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CustomAllocationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_custom_allocation_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.76.0',
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
    this._providernames = config.providernames;
    this._ruleName = config.ruleName;
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

  // providernames - computed: false, optional: false, required: true
  private _providernames?: string[]; 
  public get providernames() {
    return this.getListAttribute('providernames');
  }
  public set providernames(value: string[]) {
    this._providernames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providernamesInput() {
    return this._providernames;
  }

  // rejected - computed: true, optional: false, required: false
  public get rejected() {
    return this.getBooleanAttribute('rejected');
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // costs_to_allocate - computed: false, optional: true, required: false
  private _costsToAllocate = new CustomAllocationRuleCostsToAllocateList(this, "costs_to_allocate", false);
  public get costsToAllocate() {
    return this._costsToAllocate;
  }
  public putCostsToAllocate(value: CustomAllocationRuleCostsToAllocate[] | cdktf.IResolvable) {
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
  private _strategy = new CustomAllocationRuleStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: CustomAllocationRuleStrategy) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      providernames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._providernames),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      costs_to_allocate: cdktf.listMapper(customAllocationRuleCostsToAllocateToTerraform, true)(this._costsToAllocate.internalValue),
      strategy: customAllocationRuleStrategyToTerraform(this._strategy.internalValue),
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
      providernames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._providernames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      costs_to_allocate: {
        value: cdktf.listMapperHcl(customAllocationRuleCostsToAllocateToHclTerraform, true)(this._costsToAllocate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomAllocationRuleCostsToAllocateList",
      },
      strategy: {
        value: customAllocationRuleStrategyToHclTerraform(this._strategy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomAllocationRuleStrategy",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
