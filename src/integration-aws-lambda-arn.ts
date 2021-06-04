// https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsLambdaArnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your AWS Account ID without dashes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn.html#account_id IntegrationAwsLambdaArn#account_id}
  */
  readonly accountId: string;
  /**
  * The ARN of the Datadog forwarder Lambda.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn.html#lambda_arn IntegrationAwsLambdaArn#lambda_arn}
  */
  readonly lambdaArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn.html datadog_integration_aws_lambda_arn}
*/
export class IntegrationAwsLambdaArn extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn.html datadog_integration_aws_lambda_arn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsLambdaArnConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsLambdaArnConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_lambda_arn',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._lambdaArn = config.lambdaArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId: string;
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn: string;
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      lambda_arn: cdktf.stringToTerraform(this._lambdaArn),
    };
  }
}
