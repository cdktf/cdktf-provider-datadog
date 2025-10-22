/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensitiveDataScannerRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#description SensitiveDataScannerRule#description}
  */
  readonly description?: string;
  /**
  * Attributes excluded from the scan. If namespaces is provided, it has to be a sub-path of the namespaces array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#excluded_namespaces SensitiveDataScannerRule#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * Id of the scanning group the rule belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#group_id SensitiveDataScannerRule#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#id SensitiveDataScannerRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether or not the rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#is_enabled SensitiveDataScannerRule#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#name SensitiveDataScannerRule#name}
  */
  readonly name?: string;
  /**
  * Attributes included in the scan. If namespaces is empty or missing, all attributes except excluded_namespaces are scanned. If both are missing the whole event is scanned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#namespaces SensitiveDataScannerRule#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Not included if there is a relationship to a standard pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#pattern SensitiveDataScannerRule#pattern}
  */
  readonly pattern?: string;
  /**
  * Priority level of the rule (optional). Used to order sensitive data discovered in the sds summary page. It must be between 1 and 5 (1 being the most important).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#priority SensitiveDataScannerRule#priority}
  */
  readonly priority?: number;
  /**
  * Id of the standard pattern the rule refers to. If provided, then pattern must not be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#standard_pattern_id SensitiveDataScannerRule#standard_pattern_id}
  */
  readonly standardPatternId?: string;
  /**
  * List of tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#tags SensitiveDataScannerRule#tags}
  */
  readonly tags?: string[];
  /**
  * included_keyword_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#included_keyword_configuration SensitiveDataScannerRule#included_keyword_configuration}
  */
  readonly includedKeywordConfiguration?: SensitiveDataScannerRuleIncludedKeywordConfiguration;
  /**
  * text_replacement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#text_replacement SensitiveDataScannerRule#text_replacement}
  */
  readonly textReplacement?: SensitiveDataScannerRuleTextReplacement;
}
export interface SensitiveDataScannerRuleIncludedKeywordConfiguration {
  /**
  * Number of characters before the match to find a keyword validating the match. It must be between 1 and 50 (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#character_count SensitiveDataScannerRule#character_count}
  */
  readonly characterCount: number;
  /**
  * Keyword list that is checked during scanning in order to validate a match. The number of keywords in the list must be lower than or equal to 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#keywords SensitiveDataScannerRule#keywords}
  */
  readonly keywords: string[];
}

export function sensitiveDataScannerRuleIncludedKeywordConfigurationToTerraform(struct?: SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference | SensitiveDataScannerRuleIncludedKeywordConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    character_count: cdktf.numberToTerraform(struct!.characterCount),
    keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keywords),
  }
}


export function sensitiveDataScannerRuleIncludedKeywordConfigurationToHclTerraform(struct?: SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference | SensitiveDataScannerRuleIncludedKeywordConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    character_count: {
      value: cdktf.numberToHclTerraform(struct!.characterCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keywords: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keywords),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SensitiveDataScannerRuleIncludedKeywordConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._characterCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterCount = this._characterCount;
    }
    if (this._keywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywords = this._keywords;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensitiveDataScannerRuleIncludedKeywordConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._characterCount = undefined;
      this._keywords = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._characterCount = value.characterCount;
      this._keywords = value.keywords;
    }
  }

  // character_count - computed: false, optional: false, required: true
  private _characterCount?: number; 
  public get characterCount() {
    return this.getNumberAttribute('character_count');
  }
  public set characterCount(value: number) {
    this._characterCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get characterCountInput() {
    return this._characterCount;
  }

  // keywords - computed: false, optional: false, required: true
  private _keywords?: string[]; 
  public get keywords() {
    return this.getListAttribute('keywords');
  }
  public set keywords(value: string[]) {
    this._keywords = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords;
  }
}
export interface SensitiveDataScannerRuleTextReplacement {
  /**
  * Required if type == 'partial_replacement_from_beginning' or 'partial_replacement_from_end'. It must be > 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#number_of_chars SensitiveDataScannerRule#number_of_chars}
  */
  readonly numberOfChars?: number;
  /**
  * Required if type == 'replacement_string'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#replacement_string SensitiveDataScannerRule#replacement_string}
  */
  readonly replacementString?: string;
  /**
  * Only valid when type == `replacement_string`. When enabled, matches can be unmasked in logs by users with ‘Data Scanner Unmask’ permission. As a security best practice, avoid masking for highly-sensitive, long-lived data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#should_save_match SensitiveDataScannerRule#should_save_match}
  */
  readonly shouldSaveMatch?: boolean | cdktf.IResolvable;
  /**
  * Type of the replacement text. None means no replacement. hash means the data will be stubbed. replacement_string means that one can chose a text to replace the data. partial_replacement_from_beginning allows a user to partially replace the data from the beginning, and partial_replacement_from_end on the other hand, allows to replace data from the end. Valid values are `none`, `hash`, `replacement_string`, `partial_replacement_from_beginning`, `partial_replacement_from_end`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#type SensitiveDataScannerRule#type}
  */
  readonly type: string;
}

export function sensitiveDataScannerRuleTextReplacementToTerraform(struct?: SensitiveDataScannerRuleTextReplacementOutputReference | SensitiveDataScannerRuleTextReplacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_chars: cdktf.numberToTerraform(struct!.numberOfChars),
    replacement_string: cdktf.stringToTerraform(struct!.replacementString),
    should_save_match: cdktf.booleanToTerraform(struct!.shouldSaveMatch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sensitiveDataScannerRuleTextReplacementToHclTerraform(struct?: SensitiveDataScannerRuleTextReplacementOutputReference | SensitiveDataScannerRuleTextReplacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_chars: {
      value: cdktf.numberToHclTerraform(struct!.numberOfChars),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replacement_string: {
      value: cdktf.stringToHclTerraform(struct!.replacementString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_save_match: {
      value: cdktf.booleanToHclTerraform(struct!.shouldSaveMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensitiveDataScannerRuleTextReplacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SensitiveDataScannerRuleTextReplacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfChars !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfChars = this._numberOfChars;
    }
    if (this._replacementString !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementString = this._replacementString;
    }
    if (this._shouldSaveMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldSaveMatch = this._shouldSaveMatch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensitiveDataScannerRuleTextReplacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberOfChars = undefined;
      this._replacementString = undefined;
      this._shouldSaveMatch = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberOfChars = value.numberOfChars;
      this._replacementString = value.replacementString;
      this._shouldSaveMatch = value.shouldSaveMatch;
      this._type = value.type;
    }
  }

  // number_of_chars - computed: false, optional: true, required: false
  private _numberOfChars?: number; 
  public get numberOfChars() {
    return this.getNumberAttribute('number_of_chars');
  }
  public set numberOfChars(value: number) {
    this._numberOfChars = value;
  }
  public resetNumberOfChars() {
    this._numberOfChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCharsInput() {
    return this._numberOfChars;
  }

  // replacement_string - computed: false, optional: true, required: false
  private _replacementString?: string; 
  public get replacementString() {
    return this.getStringAttribute('replacement_string');
  }
  public set replacementString(value: string) {
    this._replacementString = value;
  }
  public resetReplacementString() {
    this._replacementString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementStringInput() {
    return this._replacementString;
  }

  // should_save_match - computed: false, optional: true, required: false
  private _shouldSaveMatch?: boolean | cdktf.IResolvable; 
  public get shouldSaveMatch() {
    return this.getBooleanAttribute('should_save_match');
  }
  public set shouldSaveMatch(value: boolean | cdktf.IResolvable) {
    this._shouldSaveMatch = value;
  }
  public resetShouldSaveMatch() {
    this._shouldSaveMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSaveMatchInput() {
    return this._shouldSaveMatch;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule datadog_sensitive_data_scanner_rule}
*/
export class SensitiveDataScannerRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_sensitive_data_scanner_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensitiveDataScannerRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensitiveDataScannerRule to import
  * @param importFromId The id of the existing SensitiveDataScannerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensitiveDataScannerRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_sensitive_data_scanner_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/sensitive_data_scanner_rule datadog_sensitive_data_scanner_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensitiveDataScannerRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SensitiveDataScannerRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_sensitive_data_scanner_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.77.0',
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
    this._excludedNamespaces = config.excludedNamespaces;
    this._groupId = config.groupId;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._namespaces = config.namespaces;
    this._pattern = config.pattern;
    this._priority = config.priority;
    this._standardPatternId = config.standardPatternId;
    this._tags = config.tags;
    this._includedKeywordConfiguration.internalValue = config.includedKeywordConfiguration;
    this._textReplacement.internalValue = config.textReplacement;
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

  // excluded_namespaces - computed: false, optional: true, required: false
  private _excludedNamespaces?: string[]; 
  public get excludedNamespaces() {
    return this.getListAttribute('excluded_namespaces');
  }
  public set excludedNamespaces(value: string[]) {
    this._excludedNamespaces = value;
  }
  public resetExcludedNamespaces() {
    this._excludedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespacesInput() {
    return this._excludedNamespaces;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // standard_pattern_id - computed: false, optional: true, required: false
  private _standardPatternId?: string; 
  public get standardPatternId() {
    return this.getStringAttribute('standard_pattern_id');
  }
  public set standardPatternId(value: string) {
    this._standardPatternId = value;
  }
  public resetStandardPatternId() {
    this._standardPatternId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardPatternIdInput() {
    return this._standardPatternId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // included_keyword_configuration - computed: false, optional: true, required: false
  private _includedKeywordConfiguration = new SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference(this, "included_keyword_configuration");
  public get includedKeywordConfiguration() {
    return this._includedKeywordConfiguration;
  }
  public putIncludedKeywordConfiguration(value: SensitiveDataScannerRuleIncludedKeywordConfiguration) {
    this._includedKeywordConfiguration.internalValue = value;
  }
  public resetIncludedKeywordConfiguration() {
    this._includedKeywordConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedKeywordConfigurationInput() {
    return this._includedKeywordConfiguration.internalValue;
  }

  // text_replacement - computed: false, optional: true, required: false
  private _textReplacement = new SensitiveDataScannerRuleTextReplacementOutputReference(this, "text_replacement");
  public get textReplacement() {
    return this._textReplacement;
  }
  public putTextReplacement(value: SensitiveDataScannerRuleTextReplacement) {
    this._textReplacement.internalValue = value;
  }
  public resetTextReplacement() {
    this._textReplacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textReplacementInput() {
    return this._textReplacement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedNamespaces),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._namespaces),
      pattern: cdktf.stringToTerraform(this._pattern),
      priority: cdktf.numberToTerraform(this._priority),
      standard_pattern_id: cdktf.stringToTerraform(this._standardPatternId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      included_keyword_configuration: sensitiveDataScannerRuleIncludedKeywordConfigurationToTerraform(this._includedKeywordConfiguration.internalValue),
      text_replacement: sensitiveDataScannerRuleTextReplacementToTerraform(this._textReplacement.internalValue),
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
      excluded_namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedNamespaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
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
      namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._namespaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      standard_pattern_id: {
        value: cdktf.stringToHclTerraform(this._standardPatternId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      included_keyword_configuration: {
        value: sensitiveDataScannerRuleIncludedKeywordConfigurationToHclTerraform(this._includedKeywordConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SensitiveDataScannerRuleIncludedKeywordConfigurationList",
      },
      text_replacement: {
        value: sensitiveDataScannerRuleTextReplacementToHclTerraform(this._textReplacement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SensitiveDataScannerRuleTextReplacementList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
