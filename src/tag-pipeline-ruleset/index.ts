/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagPipelineRulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the ruleset is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}
  */
  readonly name: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#rules TagPipelineRuleset#rules}
  */
  readonly rules?: TagPipelineRulesetRules[] | cdktf.IResolvable;
}
export interface TagPipelineRulesetRulesMapping {
  /**
  * The destination key for the mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#destination_key TagPipelineRuleset#destination_key}
  */
  readonly destinationKey?: string;
  /**
  * Whether to apply the mapping only if the destination key doesn't exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}
  */
  readonly ifNotExists?: boolean | cdktf.IResolvable;
  /**
  * The source keys for the mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#source_keys TagPipelineRuleset#source_keys}
  */
  readonly sourceKeys?: string[];
}

export function tagPipelineRulesetRulesMappingToTerraform(struct?: TagPipelineRulesetRulesMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_key: cdktf.stringToTerraform(struct!.destinationKey),
    if_not_exists: cdktf.booleanToTerraform(struct!.ifNotExists),
    source_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceKeys),
  }
}


export function tagPipelineRulesetRulesMappingToHclTerraform(struct?: TagPipelineRulesetRulesMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_key: {
      value: cdktf.stringToHclTerraform(struct!.destinationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_not_exists: {
      value: cdktf.booleanToHclTerraform(struct!.ifNotExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagPipelineRulesetRulesMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagPipelineRulesetRulesMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationKey = this._destinationKey;
    }
    if (this._ifNotExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifNotExists = this._ifNotExists;
    }
    if (this._sourceKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeys = this._sourceKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagPipelineRulesetRulesMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationKey = undefined;
      this._ifNotExists = undefined;
      this._sourceKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationKey = value.destinationKey;
      this._ifNotExists = value.ifNotExists;
      this._sourceKeys = value.sourceKeys;
    }
  }

  // destination_key - computed: false, optional: true, required: false
  private _destinationKey?: string; 
  public get destinationKey() {
    return this.getStringAttribute('destination_key');
  }
  public set destinationKey(value: string) {
    this._destinationKey = value;
  }
  public resetDestinationKey() {
    this._destinationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationKeyInput() {
    return this._destinationKey;
  }

  // if_not_exists - computed: true, optional: true, required: false
  private _ifNotExists?: boolean | cdktf.IResolvable; 
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }
  public set ifNotExists(value: boolean | cdktf.IResolvable) {
    this._ifNotExists = value;
  }
  public resetIfNotExists() {
    this._ifNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNotExistsInput() {
    return this._ifNotExists;
  }

  // source_keys - computed: false, optional: true, required: false
  private _sourceKeys?: string[]; 
  public get sourceKeys() {
    return this.getListAttribute('source_keys');
  }
  public set sourceKeys(value: string[]) {
    this._sourceKeys = value;
  }
  public resetSourceKeys() {
    this._sourceKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeysInput() {
    return this._sourceKeys;
  }
}
export interface TagPipelineRulesetRulesQueryAddition {
  /**
  * The key to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#key TagPipelineRuleset#key}
  */
  readonly key?: string;
  /**
  * The value to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#value TagPipelineRuleset#value}
  */
  readonly value?: string;
}

export function tagPipelineRulesetRulesQueryAdditionToTerraform(struct?: TagPipelineRulesetRulesQueryAddition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tagPipelineRulesetRulesQueryAdditionToHclTerraform(struct?: TagPipelineRulesetRulesQueryAddition | cdktf.IResolvable): any {
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

export class TagPipelineRulesetRulesQueryAdditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagPipelineRulesetRulesQueryAddition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TagPipelineRulesetRulesQueryAddition | cdktf.IResolvable | undefined) {
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
export interface TagPipelineRulesetRulesQuery {
  /**
  * Whether the query matching is case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#case_insensitivity TagPipelineRuleset#case_insensitivity}
  */
  readonly caseInsensitivity?: boolean | cdktf.IResolvable;
  /**
  * Whether to apply the query only if the key doesn't exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}
  */
  readonly ifNotExists?: boolean | cdktf.IResolvable;
  /**
  * The query string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#query TagPipelineRuleset#query}
  */
  readonly query?: string;
  /**
  * addition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#addition TagPipelineRuleset#addition}
  */
  readonly addition?: TagPipelineRulesetRulesQueryAddition;
}

export function tagPipelineRulesetRulesQueryToTerraform(struct?: TagPipelineRulesetRulesQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_insensitivity: cdktf.booleanToTerraform(struct!.caseInsensitivity),
    if_not_exists: cdktf.booleanToTerraform(struct!.ifNotExists),
    query: cdktf.stringToTerraform(struct!.query),
    addition: tagPipelineRulesetRulesQueryAdditionToTerraform(struct!.addition),
  }
}


export function tagPipelineRulesetRulesQueryToHclTerraform(struct?: TagPipelineRulesetRulesQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_insensitivity: {
      value: cdktf.booleanToHclTerraform(struct!.caseInsensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    if_not_exists: {
      value: cdktf.booleanToHclTerraform(struct!.ifNotExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addition: {
      value: tagPipelineRulesetRulesQueryAdditionToHclTerraform(struct!.addition),
      isBlock: true,
      type: "struct",
      storageClassType: "TagPipelineRulesetRulesQueryAddition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagPipelineRulesetRulesQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagPipelineRulesetRulesQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseInsensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitivity = this._caseInsensitivity;
    }
    if (this._ifNotExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifNotExists = this._ifNotExists;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._addition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addition = this._addition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagPipelineRulesetRulesQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseInsensitivity = undefined;
      this._ifNotExists = undefined;
      this._query = undefined;
      this._addition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseInsensitivity = value.caseInsensitivity;
      this._ifNotExists = value.ifNotExists;
      this._query = value.query;
      this._addition.internalValue = value.addition;
    }
  }

  // case_insensitivity - computed: true, optional: true, required: false
  private _caseInsensitivity?: boolean | cdktf.IResolvable; 
  public get caseInsensitivity() {
    return this.getBooleanAttribute('case_insensitivity');
  }
  public set caseInsensitivity(value: boolean | cdktf.IResolvable) {
    this._caseInsensitivity = value;
  }
  public resetCaseInsensitivity() {
    this._caseInsensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitivityInput() {
    return this._caseInsensitivity;
  }

  // if_not_exists - computed: true, optional: true, required: false
  private _ifNotExists?: boolean | cdktf.IResolvable; 
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }
  public set ifNotExists(value: boolean | cdktf.IResolvable) {
    this._ifNotExists = value;
  }
  public resetIfNotExists() {
    this._ifNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNotExistsInput() {
    return this._ifNotExists;
  }

  // query - computed: false, optional: true, required: false
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

  // addition - computed: false, optional: true, required: false
  private _addition = new TagPipelineRulesetRulesQueryAdditionOutputReference(this, "addition");
  public get addition() {
    return this._addition;
  }
  public putAddition(value: TagPipelineRulesetRulesQueryAddition) {
    this._addition.internalValue = value;
  }
  public resetAddition() {
    this._addition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionInput() {
    return this._addition.internalValue;
  }
}
export interface TagPipelineRulesetRulesReferenceTableFieldPairs {
  /**
  * The input column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#input_column TagPipelineRuleset#input_column}
  */
  readonly inputColumn?: string;
  /**
  * The output key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#output_key TagPipelineRuleset#output_key}
  */
  readonly outputKey?: string;
}

export function tagPipelineRulesetRulesReferenceTableFieldPairsToTerraform(struct?: TagPipelineRulesetRulesReferenceTableFieldPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_column: cdktf.stringToTerraform(struct!.inputColumn),
    output_key: cdktf.stringToTerraform(struct!.outputKey),
  }
}


export function tagPipelineRulesetRulesReferenceTableFieldPairsToHclTerraform(struct?: TagPipelineRulesetRulesReferenceTableFieldPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_column: {
      value: cdktf.stringToHclTerraform(struct!.inputColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_key: {
      value: cdktf.stringToHclTerraform(struct!.outputKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TagPipelineRulesetRulesReferenceTableFieldPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputColumn = this._inputColumn;
    }
    if (this._outputKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputKey = this._outputKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagPipelineRulesetRulesReferenceTableFieldPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputColumn = undefined;
      this._outputKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputColumn = value.inputColumn;
      this._outputKey = value.outputKey;
    }
  }

  // input_column - computed: false, optional: true, required: false
  private _inputColumn?: string; 
  public get inputColumn() {
    return this.getStringAttribute('input_column');
  }
  public set inputColumn(value: string) {
    this._inputColumn = value;
  }
  public resetInputColumn() {
    this._inputColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputColumnInput() {
    return this._inputColumn;
  }

  // output_key - computed: false, optional: true, required: false
  private _outputKey?: string; 
  public get outputKey() {
    return this.getStringAttribute('output_key');
  }
  public set outputKey(value: string) {
    this._outputKey = value;
  }
  public resetOutputKey() {
    this._outputKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputKeyInput() {
    return this._outputKey;
  }
}

export class TagPipelineRulesetRulesReferenceTableFieldPairsList extends cdktf.ComplexList {
  public internalValue? : TagPipelineRulesetRulesReferenceTableFieldPairs[] | cdktf.IResolvable

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
  public get(index: number): TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference {
    return new TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TagPipelineRulesetRulesReferenceTable {
  /**
  * Whether the reference table lookup is case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#case_insensitivity TagPipelineRuleset#case_insensitivity}
  */
  readonly caseInsensitivity?: boolean | cdktf.IResolvable;
  /**
  * Whether to apply the reference table only if the key doesn't exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}
  */
  readonly ifNotExists?: boolean | cdktf.IResolvable;
  /**
  * The source keys for the reference table lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#source_keys TagPipelineRuleset#source_keys}
  */
  readonly sourceKeys?: string[];
  /**
  * The name of the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#table_name TagPipelineRuleset#table_name}
  */
  readonly tableName?: string;
  /**
  * field_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#field_pairs TagPipelineRuleset#field_pairs}
  */
  readonly fieldPairs?: TagPipelineRulesetRulesReferenceTableFieldPairs[] | cdktf.IResolvable;
}

export function tagPipelineRulesetRulesReferenceTableToTerraform(struct?: TagPipelineRulesetRulesReferenceTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_insensitivity: cdktf.booleanToTerraform(struct!.caseInsensitivity),
    if_not_exists: cdktf.booleanToTerraform(struct!.ifNotExists),
    source_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceKeys),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    field_pairs: cdktf.listMapper(tagPipelineRulesetRulesReferenceTableFieldPairsToTerraform, true)(struct!.fieldPairs),
  }
}


export function tagPipelineRulesetRulesReferenceTableToHclTerraform(struct?: TagPipelineRulesetRulesReferenceTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_insensitivity: {
      value: cdktf.booleanToHclTerraform(struct!.caseInsensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    if_not_exists: {
      value: cdktf.booleanToHclTerraform(struct!.ifNotExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_pairs: {
      value: cdktf.listMapperHcl(tagPipelineRulesetRulesReferenceTableFieldPairsToHclTerraform, true)(struct!.fieldPairs),
      isBlock: true,
      type: "list",
      storageClassType: "TagPipelineRulesetRulesReferenceTableFieldPairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagPipelineRulesetRulesReferenceTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagPipelineRulesetRulesReferenceTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseInsensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitivity = this._caseInsensitivity;
    }
    if (this._ifNotExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifNotExists = this._ifNotExists;
    }
    if (this._sourceKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeys = this._sourceKeys;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._fieldPairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPairs = this._fieldPairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagPipelineRulesetRulesReferenceTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseInsensitivity = undefined;
      this._ifNotExists = undefined;
      this._sourceKeys = undefined;
      this._tableName = undefined;
      this._fieldPairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseInsensitivity = value.caseInsensitivity;
      this._ifNotExists = value.ifNotExists;
      this._sourceKeys = value.sourceKeys;
      this._tableName = value.tableName;
      this._fieldPairs.internalValue = value.fieldPairs;
    }
  }

  // case_insensitivity - computed: true, optional: true, required: false
  private _caseInsensitivity?: boolean | cdktf.IResolvable; 
  public get caseInsensitivity() {
    return this.getBooleanAttribute('case_insensitivity');
  }
  public set caseInsensitivity(value: boolean | cdktf.IResolvable) {
    this._caseInsensitivity = value;
  }
  public resetCaseInsensitivity() {
    this._caseInsensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitivityInput() {
    return this._caseInsensitivity;
  }

  // if_not_exists - computed: true, optional: true, required: false
  private _ifNotExists?: boolean | cdktf.IResolvable; 
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }
  public set ifNotExists(value: boolean | cdktf.IResolvable) {
    this._ifNotExists = value;
  }
  public resetIfNotExists() {
    this._ifNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNotExistsInput() {
    return this._ifNotExists;
  }

  // source_keys - computed: false, optional: true, required: false
  private _sourceKeys?: string[]; 
  public get sourceKeys() {
    return this.getListAttribute('source_keys');
  }
  public set sourceKeys(value: string[]) {
    this._sourceKeys = value;
  }
  public resetSourceKeys() {
    this._sourceKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeysInput() {
    return this._sourceKeys;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // field_pairs - computed: false, optional: true, required: false
  private _fieldPairs = new TagPipelineRulesetRulesReferenceTableFieldPairsList(this, "field_pairs", false);
  public get fieldPairs() {
    return this._fieldPairs;
  }
  public putFieldPairs(value: TagPipelineRulesetRulesReferenceTableFieldPairs[] | cdktf.IResolvable) {
    this._fieldPairs.internalValue = value;
  }
  public resetFieldPairs() {
    this._fieldPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPairsInput() {
    return this._fieldPairs.internalValue;
  }
}
export interface TagPipelineRulesetRules {
  /**
  * Whether the rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}
  */
  readonly name: string;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#mapping TagPipelineRuleset#mapping}
  */
  readonly mapping?: TagPipelineRulesetRulesMapping;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#query TagPipelineRuleset#query}
  */
  readonly query?: TagPipelineRulesetRulesQuery;
  /**
  * reference_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#reference_table TagPipelineRuleset#reference_table}
  */
  readonly referenceTable?: TagPipelineRulesetRulesReferenceTable;
}

export function tagPipelineRulesetRulesToTerraform(struct?: TagPipelineRulesetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    mapping: tagPipelineRulesetRulesMappingToTerraform(struct!.mapping),
    query: tagPipelineRulesetRulesQueryToTerraform(struct!.query),
    reference_table: tagPipelineRulesetRulesReferenceTableToTerraform(struct!.referenceTable),
  }
}


export function tagPipelineRulesetRulesToHclTerraform(struct?: TagPipelineRulesetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping: {
      value: tagPipelineRulesetRulesMappingToHclTerraform(struct!.mapping),
      isBlock: true,
      type: "struct",
      storageClassType: "TagPipelineRulesetRulesMapping",
    },
    query: {
      value: tagPipelineRulesetRulesQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "struct",
      storageClassType: "TagPipelineRulesetRulesQuery",
    },
    reference_table: {
      value: tagPipelineRulesetRulesReferenceTableToHclTerraform(struct!.referenceTable),
      isBlock: true,
      type: "struct",
      storageClassType: "TagPipelineRulesetRulesReferenceTable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagPipelineRulesetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TagPipelineRulesetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._referenceTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceTable = this._referenceTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagPipelineRulesetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._mapping.internalValue = undefined;
      this._query.internalValue = undefined;
      this._referenceTable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._name = value.name;
      this._mapping.internalValue = value.mapping;
      this._query.internalValue = value.query;
      this._referenceTable.internalValue = value.referenceTable;
    }
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // mapping - computed: false, optional: true, required: false
  private _mapping = new TagPipelineRulesetRulesMappingOutputReference(this, "mapping");
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: TagPipelineRulesetRulesMapping) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new TagPipelineRulesetRulesQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: TagPipelineRulesetRulesQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // reference_table - computed: false, optional: true, required: false
  private _referenceTable = new TagPipelineRulesetRulesReferenceTableOutputReference(this, "reference_table");
  public get referenceTable() {
    return this._referenceTable;
  }
  public putReferenceTable(value: TagPipelineRulesetRulesReferenceTable) {
    this._referenceTable.internalValue = value;
  }
  public resetReferenceTable() {
    this._referenceTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTableInput() {
    return this._referenceTable.internalValue;
  }
}

export class TagPipelineRulesetRulesList extends cdktf.ComplexList {
  public internalValue? : TagPipelineRulesetRules[] | cdktf.IResolvable

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
  public get(index: number): TagPipelineRulesetRulesOutputReference {
    return new TagPipelineRulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset datadog_tag_pipeline_ruleset}
*/
export class TagPipelineRuleset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_tag_pipeline_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TagPipelineRuleset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagPipelineRuleset to import
  * @param importFromId The id of the existing TagPipelineRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagPipelineRuleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_tag_pipeline_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset datadog_tag_pipeline_ruleset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagPipelineRulesetConfig
  */
  public constructor(scope: Construct, id: string, config: TagPipelineRulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_tag_pipeline_ruleset',
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
    this._enabled = config.enabled;
    this._name = config.name;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: true, required: false
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

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new TagPipelineRulesetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TagPipelineRulesetRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(tagPipelineRulesetRulesToTerraform, true)(this._rules.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(tagPipelineRulesetRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TagPipelineRulesetRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
