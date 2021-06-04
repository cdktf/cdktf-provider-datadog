// https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Array with the different device IDs used to run the test. Allowed enum values: `laptop_large`, `tablet`, `mobile_small` (only available for `browser` tests).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#device_ids SyntheticsTest#device_ids}
  */
  readonly deviceIds?: string[];
  /**
  * Array of locations used to run the test. Refer to [Datadog documentation](https://docs.datadoghq.com/synthetics/api_test/#request) for available locations (e.g. `aws:eu-central-1`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#locations SyntheticsTest#locations}
  */
  readonly locations: string[];
  /**
  * A message to include with notifications for this synthetics test. Email notifications can be sent to specific users by using the same `@username` notation as events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#message SyntheticsTest#message}
  */
  readonly message?: string;
  /**
  * Name of Datadog synthetics test.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Header name and value map.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_headers SyntheticsTest#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Query arguments name and value map.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_query SyntheticsTest#request_query}
  */
  readonly requestQuery?: { [key: string]: string };
  /**
  * Cookies to be used for a browser test request, using the [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#set_cookie SyntheticsTest#set_cookie}
  */
  readonly setCookie?: string;
  /**
  * Define whether you want to start (`live`) or pause (`paused`) a Synthetic test. Allowed enum values: `live`, `paused`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#status SyntheticsTest#status}
  */
  readonly status: string;
  /**
  * When `type` is `api`, choose from `http`, `ssl`, `tcp`, `dns`, `icmp` or `multi`. Defaults to `http`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#subtype SyntheticsTest#subtype}
  */
  readonly subtype?: string;
  /**
  * A list of tags to associate with your synthetics test. This can help you categorize and filter tests in the manage synthetics page of the UI. Default is an empty list (`[]`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#tags SyntheticsTest#tags}
  */
  readonly tags?: string[];
  /**
  * Synthetics test type (`api` or `browser`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * api_step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#api_step SyntheticsTest#api_step}
  */
  readonly apiStep?: SyntheticsTestApiStep[];
  /**
  * assertion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#assertion SyntheticsTest#assertion}
  */
  readonly assertion?: SyntheticsTestAssertion[];
  /**
  * browser_step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#browser_step SyntheticsTest#browser_step}
  */
  readonly browserStep?: SyntheticsTestBrowserStep[];
  /**
  * browser_variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#browser_variable SyntheticsTest#browser_variable}
  */
  readonly browserVariable?: SyntheticsTestBrowserVariable[];
  /**
  * config_variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#config_variable SyntheticsTest#config_variable}
  */
  readonly configVariable?: SyntheticsTestConfigVariable[];
  /**
  * options_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#options_list SyntheticsTest#options_list}
  */
  readonly optionsList?: SyntheticsTestOptionsList[];
  /**
  * request_basicauth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_basicauth SyntheticsTest#request_basicauth}
  */
  readonly requestBasicauth?: SyntheticsTestRequestBasicauth[];
  /**
  * request_client_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_client_certificate SyntheticsTest#request_client_certificate}
  */
  readonly requestClientCertificate?: SyntheticsTestRequestClientCertificate[];
  /**
  * request_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_definition SyntheticsTest#request_definition}
  */
  readonly requestDefinition?: SyntheticsTestRequestDefinition[];
}
export interface SyntheticsTestApiStepAssertionTargetjsonpath {
  /**
  * The JSON path to assert.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#jsonpath SyntheticsTest#jsonpath}
  */
  readonly jsonpath: string;
  /**
  * The specific operator to use on the path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#operator SyntheticsTest#operator}
  */
  readonly operator: string;
  /**
  * Expected matching value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#targetvalue SyntheticsTest#targetvalue}
  */
  readonly targetvalue: string;
}

function syntheticsTestApiStepAssertionTargetjsonpathToTerraform(struct?: SyntheticsTestApiStepAssertionTargetjsonpath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    jsonpath: cdktf.stringToTerraform(struct!.jsonpath),
    operator: cdktf.stringToTerraform(struct!.operator),
    targetvalue: cdktf.stringToTerraform(struct!.targetvalue),
  }
}

export interface SyntheticsTestApiStepAssertion {
  /**
  * Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#operator SyntheticsTest#operator}
  */
  readonly operator: string;
  /**
  * If assertion type is `header`, this is the header name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#property SyntheticsTest#property}
  */
  readonly property?: string;
  /**
  * Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#target SyntheticsTest#target}
  */
  readonly target?: string;
  /**
  * Type of assertion. Choose from `body`, `header`, `responseTime`, `statusCode`. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * targetjsonpath block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#targetjsonpath SyntheticsTest#targetjsonpath}
  */
  readonly targetjsonpath?: SyntheticsTestApiStepAssertionTargetjsonpath[];
}

function syntheticsTestApiStepAssertionToTerraform(struct?: SyntheticsTestApiStepAssertion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    property: cdktf.stringToTerraform(struct!.property),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
    targetjsonpath: cdktf.listMapper(syntheticsTestApiStepAssertionTargetjsonpathToTerraform)(struct!.targetjsonpath),
  }
}

export interface SyntheticsTestApiStepExtractedValueParser {
  /**
  * Type of parser for a Synthetics global variable from a synthetics test: `raw`, `json_path`, `regex`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * Regex or JSON path used for the parser. Not used with type `raw`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#value SyntheticsTest#value}
  */
  readonly value?: string;
}

function syntheticsTestApiStepExtractedValueParserToTerraform(struct?: SyntheticsTestApiStepExtractedValueParser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SyntheticsTestApiStepExtractedValue {
  /**
  * When type is `http_header`, name of the header to use to extract the value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#field SyntheticsTest#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Property of the Synthetics Test Response to use for the variable: `http_body` or `http_header`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#parser SyntheticsTest#parser}
  */
  readonly parser: SyntheticsTestApiStepExtractedValueParser[];
}

function syntheticsTestApiStepExtractedValueToTerraform(struct?: SyntheticsTestApiStepExtractedValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    parser: cdktf.listMapper(syntheticsTestApiStepExtractedValueParserToTerraform)(struct!.parser),
  }
}

export interface SyntheticsTestApiStepRequestBasicauth {
  /**
  * Password for authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#password SyntheticsTest#password}
  */
  readonly password: string;
  /**
  * Username for authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#username SyntheticsTest#username}
  */
  readonly username: string;
}

function syntheticsTestApiStepRequestBasicauthToTerraform(struct?: SyntheticsTestApiStepRequestBasicauth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface SyntheticsTestApiStepRequestClientCertificateCert {
  /**
  * Content of the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#content SyntheticsTest#content}
  */
  readonly content: string;
  /**
  * File name for the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#filename SyntheticsTest#filename}
  */
  readonly filename?: string;
}

function syntheticsTestApiStepRequestClientCertificateCertToTerraform(struct?: SyntheticsTestApiStepRequestClientCertificateCert): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}

export interface SyntheticsTestApiStepRequestClientCertificateKey {
  /**
  * Content of the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#content SyntheticsTest#content}
  */
  readonly content: string;
  /**
  * File name for the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#filename SyntheticsTest#filename}
  */
  readonly filename?: string;
}

function syntheticsTestApiStepRequestClientCertificateKeyToTerraform(struct?: SyntheticsTestApiStepRequestClientCertificateKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}

export interface SyntheticsTestApiStepRequestClientCertificate {
  /**
  * cert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#cert SyntheticsTest#cert}
  */
  readonly cert: SyntheticsTestApiStepRequestClientCertificateCert[];
  /**
  * key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#key SyntheticsTest#key}
  */
  readonly key: SyntheticsTestApiStepRequestClientCertificateKey[];
}

function syntheticsTestApiStepRequestClientCertificateToTerraform(struct?: SyntheticsTestApiStepRequestClientCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cert: cdktf.listMapper(syntheticsTestApiStepRequestClientCertificateCertToTerraform)(struct!.cert),
    key: cdktf.listMapper(syntheticsTestApiStepRequestClientCertificateKeyToTerraform)(struct!.key),
  }
}

export interface SyntheticsTestApiStepRequestDefinition {
  /**
  * The request body.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#body SyntheticsTest#body}
  */
  readonly body?: string;
  /**
  * DNS server to use for DNS tests (`subtype = "dns"`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#dns_server SyntheticsTest#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * DNS server port to use for DNS tests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#dns_server_port SyntheticsTest#dns_server_port}
  */
  readonly dnsServerPort?: number;
  /**
  * Host name to perform the test with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#host SyntheticsTest#host}
  */
  readonly host?: string;
  /**
  * The HTTP method. One of `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#method SyntheticsTest#method}
  */
  readonly method?: string;
  /**
  * Determines whether or not to save the response body.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#no_saving_response_body SyntheticsTest#no_saving_response_body}
  */
  readonly noSavingResponseBody?: boolean;
  /**
  * Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#number_of_packets SyntheticsTest#number_of_packets}
  */
  readonly numberOfPackets?: number;
  /**
  * Port to use when performing the test.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#port SyntheticsTest#port}
  */
  readonly port?: number;
  /**
  * This will turn on a traceroute probe to discover all gateways along the path to the host destination. For ICMP tests (`subtype = "icmp"`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#should_track_hops SyntheticsTest#should_track_hops}
  */
  readonly shouldTrackHops?: boolean;
  /**
  * Timeout in seconds for the test. Defaults to `60`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#timeout SyntheticsTest#timeout}
  */
  readonly timeout?: number;
  /**
  * The URL to send the request to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#url SyntheticsTest#url}
  */
  readonly url?: string;
}

function syntheticsTestApiStepRequestDefinitionToTerraform(struct?: SyntheticsTestApiStepRequestDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    dns_server_port: cdktf.numberToTerraform(struct!.dnsServerPort),
    host: cdktf.stringToTerraform(struct!.host),
    method: cdktf.stringToTerraform(struct!.method),
    no_saving_response_body: cdktf.booleanToTerraform(struct!.noSavingResponseBody),
    number_of_packets: cdktf.numberToTerraform(struct!.numberOfPackets),
    port: cdktf.numberToTerraform(struct!.port),
    should_track_hops: cdktf.booleanToTerraform(struct!.shouldTrackHops),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface SyntheticsTestApiStep {
  /**
  * Determines whether or not to continue with test if this step fails.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#allow_failure SyntheticsTest#allow_failure}
  */
  readonly allowFailure?: boolean;
  /**
  * Determines whether or not to consider the entire test as failed if this step fails. Can be used only if `allow_failure` is `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#is_critical SyntheticsTest#is_critical}
  */
  readonly isCritical?: boolean;
  /**
  * The name of the step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Header name and value map.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_headers SyntheticsTest#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Query arguments name and value map.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_query SyntheticsTest#request_query}
  */
  readonly requestQuery?: { [key: string]: string };
  /**
  * The subtype of the Synthetic multistep API test step, currently only supporting `http`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#subtype SyntheticsTest#subtype}
  */
  readonly subtype?: string;
  /**
  * assertion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#assertion SyntheticsTest#assertion}
  */
  readonly assertion?: SyntheticsTestApiStepAssertion[];
  /**
  * extracted_value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#extracted_value SyntheticsTest#extracted_value}
  */
  readonly extractedValue?: SyntheticsTestApiStepExtractedValue[];
  /**
  * request_basicauth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_basicauth SyntheticsTest#request_basicauth}
  */
  readonly requestBasicauth?: SyntheticsTestApiStepRequestBasicauth[];
  /**
  * request_client_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_client_certificate SyntheticsTest#request_client_certificate}
  */
  readonly requestClientCertificate?: SyntheticsTestApiStepRequestClientCertificate[];
  /**
  * request_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_definition SyntheticsTest#request_definition}
  */
  readonly requestDefinition?: SyntheticsTestApiStepRequestDefinition[];
}

function syntheticsTestApiStepToTerraform(struct?: SyntheticsTestApiStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_failure: cdktf.booleanToTerraform(struct!.allowFailure),
    is_critical: cdktf.booleanToTerraform(struct!.isCritical),
    name: cdktf.stringToTerraform(struct!.name),
    request_headers: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requestHeaders),
    request_query: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requestQuery),
    subtype: cdktf.stringToTerraform(struct!.subtype),
    assertion: cdktf.listMapper(syntheticsTestApiStepAssertionToTerraform)(struct!.assertion),
    extracted_value: cdktf.listMapper(syntheticsTestApiStepExtractedValueToTerraform)(struct!.extractedValue),
    request_basicauth: cdktf.listMapper(syntheticsTestApiStepRequestBasicauthToTerraform)(struct!.requestBasicauth),
    request_client_certificate: cdktf.listMapper(syntheticsTestApiStepRequestClientCertificateToTerraform)(struct!.requestClientCertificate),
    request_definition: cdktf.listMapper(syntheticsTestApiStepRequestDefinitionToTerraform)(struct!.requestDefinition),
  }
}

export interface SyntheticsTestAssertionTargetjsonpath {
  /**
  * The JSON path to assert.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#jsonpath SyntheticsTest#jsonpath}
  */
  readonly jsonpath: string;
  /**
  * The specific operator to use on the path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#operator SyntheticsTest#operator}
  */
  readonly operator: string;
  /**
  * Expected matching value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#targetvalue SyntheticsTest#targetvalue}
  */
  readonly targetvalue: string;
}

function syntheticsTestAssertionTargetjsonpathToTerraform(struct?: SyntheticsTestAssertionTargetjsonpath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    jsonpath: cdktf.stringToTerraform(struct!.jsonpath),
    operator: cdktf.stringToTerraform(struct!.operator),
    targetvalue: cdktf.stringToTerraform(struct!.targetvalue),
  }
}

export interface SyntheticsTestAssertion {
  /**
  * Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#operator SyntheticsTest#operator}
  */
  readonly operator: string;
  /**
  * If assertion type is `header`, this is the header name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#property SyntheticsTest#property}
  */
  readonly property?: string;
  /**
  * Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#target SyntheticsTest#target}
  */
  readonly target?: string;
  /**
  * Type of assertion. Choose from `body`, `header`, `responseTime`, `statusCode`. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * targetjsonpath block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#targetjsonpath SyntheticsTest#targetjsonpath}
  */
  readonly targetjsonpath?: SyntheticsTestAssertionTargetjsonpath[];
}

function syntheticsTestAssertionToTerraform(struct?: SyntheticsTestAssertion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    property: cdktf.stringToTerraform(struct!.property),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
    targetjsonpath: cdktf.listMapper(syntheticsTestAssertionTargetjsonpathToTerraform)(struct!.targetjsonpath),
  }
}

export interface SyntheticsTestBrowserStepParamsVariable {
  /**
  * Example of the extracted variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#example SyntheticsTest#example}
  */
  readonly example?: string;
  /**
  * Name of the extracted variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name?: string;
}

function syntheticsTestBrowserStepParamsVariableToTerraform(struct?: SyntheticsTestBrowserStepParamsVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    example: cdktf.stringToTerraform(struct!.example),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface SyntheticsTestBrowserStepParams {
  /**
  * Name of the attribute to use for an "assert attribute" step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#attribute SyntheticsTest#attribute}
  */
  readonly attribute?: string;
  /**
  * Check type to use for an assertion step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#check SyntheticsTest#check}
  */
  readonly check?: string;
  /**
  * Type of click to use for a "click" step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#click_type SyntheticsTest#click_type}
  */
  readonly clickType?: string;
  /**
  * Javascript code to use for the step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#code SyntheticsTest#code}
  */
  readonly code?: string;
  /**
  * Delay between each key stroke for a "type test" step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#delay SyntheticsTest#delay}
  */
  readonly delay?: number;
  /**
  * Element to use for the step, json encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#element SyntheticsTest#element}
  */
  readonly element?: string;
  /**
  * Details of the email for an "assert email" step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#email SyntheticsTest#email}
  */
  readonly email?: string;
  /**
  * For an "assert download" step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#file SyntheticsTest#file}
  */
  readonly file?: string;
  /**
  * Details of the files for an "upload files" step, json encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#files SyntheticsTest#files}
  */
  readonly files?: string;
  /**
  * Modifier to use for a "press key" step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#modifiers SyntheticsTest#modifiers}
  */
  readonly modifiers?: string[];
  /**
  * ID of the tab to play the subtest.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#playing_tab_id SyntheticsTest#playing_tab_id}
  */
  readonly playingTabId?: string;
  /**
  * Request for an API step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request SyntheticsTest#request}
  */
  readonly request?: string;
  /**
  * ID of the Synthetics test to use as subtest.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#subtest_public_id SyntheticsTest#subtest_public_id}
  */
  readonly subtestPublicId?: string;
  /**
  * Value of the step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#value SyntheticsTest#value}
  */
  readonly value?: string;
  /**
  * For "file upload" steps.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#with_click SyntheticsTest#with_click}
  */
  readonly withClick?: boolean;
  /**
  * X coordinates for a "scroll step".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#x SyntheticsTest#x}
  */
  readonly x?: number;
  /**
  * Y coordinates for a "scroll step".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#y SyntheticsTest#y}
  */
  readonly y?: number;
  /**
  * variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#variable SyntheticsTest#variable}
  */
  readonly variable?: SyntheticsTestBrowserStepParamsVariable[];
}

function syntheticsTestBrowserStepParamsToTerraform(struct?: SyntheticsTestBrowserStepParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    check: cdktf.stringToTerraform(struct!.check),
    click_type: cdktf.stringToTerraform(struct!.clickType),
    code: cdktf.stringToTerraform(struct!.code),
    delay: cdktf.numberToTerraform(struct!.delay),
    element: cdktf.stringToTerraform(struct!.element),
    email: cdktf.stringToTerraform(struct!.email),
    file: cdktf.stringToTerraform(struct!.file),
    files: cdktf.stringToTerraform(struct!.files),
    modifiers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.modifiers),
    playing_tab_id: cdktf.stringToTerraform(struct!.playingTabId),
    request: cdktf.stringToTerraform(struct!.request),
    subtest_public_id: cdktf.stringToTerraform(struct!.subtestPublicId),
    value: cdktf.stringToTerraform(struct!.value),
    with_click: cdktf.booleanToTerraform(struct!.withClick),
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
    variable: cdktf.listMapper(syntheticsTestBrowserStepParamsVariableToTerraform)(struct!.variable),
  }
}

export interface SyntheticsTestBrowserStep {
  /**
  * Determines if the step should be allowed to fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#allow_failure SyntheticsTest#allow_failure}
  */
  readonly allowFailure?: boolean;
  /**
  * Force update of the "element" parameter for the step
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#force_element_update SyntheticsTest#force_element_update}
  */
  readonly forceElementUpdate?: boolean;
  /**
  * Name of the step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Used to override the default timeout of a step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#timeout SyntheticsTest#timeout}
  */
  readonly timeout?: number;
  /**
  * Type of the step. Refer to [Datadog documentation](https://docs.datadoghq.com/api/v1/synthetics/#create-a-test) for the complete list of available types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#params SyntheticsTest#params}
  */
  readonly params: SyntheticsTestBrowserStepParams[];
}

function syntheticsTestBrowserStepToTerraform(struct?: SyntheticsTestBrowserStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_failure: cdktf.booleanToTerraform(struct!.allowFailure),
    force_element_update: cdktf.booleanToTerraform(struct!.forceElementUpdate),
    name: cdktf.stringToTerraform(struct!.name),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    params: cdktf.listMapper(syntheticsTestBrowserStepParamsToTerraform)(struct!.params),
  }
}

export interface SyntheticsTestBrowserVariable {
  /**
  * Example for the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#example SyntheticsTest#example}
  */
  readonly example?: string;
  /**
  * ID of the global variable to use. This is actually only used (and required) in the case of using a variable of type `global`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#id SyntheticsTest#id}
  */
  readonly id?: string;
  /**
  * Name of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Pattern of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#pattern SyntheticsTest#pattern}
  */
  readonly pattern?: string;
  /**
  * Type of browser test variable. Allowed enum values: `element`, `email`, `global`, `javascript`, `text`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
}

function syntheticsTestBrowserVariableToTerraform(struct?: SyntheticsTestBrowserVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    example: cdktf.stringToTerraform(struct!.example),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface SyntheticsTestConfigVariable {
  /**
  * Example for the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#example SyntheticsTest#example}
  */
  readonly example?: string;
  /**
  * Name of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Pattern of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#pattern SyntheticsTest#pattern}
  */
  readonly pattern?: string;
  /**
  * Type of test configuration variable. Allowed enum values: `text`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
}

function syntheticsTestConfigVariableToTerraform(struct?: SyntheticsTestConfigVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    example: cdktf.stringToTerraform(struct!.example),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface SyntheticsTestOptionsListMonitorOptions {
  /**
  * Specify a renotification frequency.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#renotify_interval SyntheticsTest#renotify_interval}
  */
  readonly renotifyInterval?: number;
}

function syntheticsTestOptionsListMonitorOptionsToTerraform(struct?: SyntheticsTestOptionsListMonitorOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    renotify_interval: cdktf.numberToTerraform(struct!.renotifyInterval),
  }
}

export interface SyntheticsTestOptionsListRetry {
  /**
  * Number of retries needed to consider a location as failed before sending a notification alert.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#count SyntheticsTest#count}
  */
  readonly count?: number;
  /**
  * Interval between a failed test and the next retry in milliseconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#interval SyntheticsTest#interval}
  */
  readonly interval?: number;
}

function syntheticsTestOptionsListRetryToTerraform(struct?: SyntheticsTestOptionsListRetry): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export interface SyntheticsTestOptionsList {
  /**
  * For SSL test, whether or not the test should allow self signed certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#accept_self_signed SyntheticsTest#accept_self_signed}
  */
  readonly acceptSelfSigned?: boolean;
  /**
  * Allows loading insecure content for an HTTP test.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#allow_insecure SyntheticsTest#allow_insecure}
  */
  readonly allowInsecure?: boolean;
  /**
  * For API HTTP test, whether or not the test should follow redirects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#follow_redirects SyntheticsTest#follow_redirects}
  */
  readonly followRedirects?: boolean;
  /**
  * Minimum amount of time in failure required to trigger an alert. Default is `0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#min_failure_duration SyntheticsTest#min_failure_duration}
  */
  readonly minFailureDuration?: number;
  /**
  * Minimum number of locations in failure required to trigger an alert. Default is `1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#min_location_failed SyntheticsTest#min_location_failed}
  */
  readonly minLocationFailed?: number;
  /**
  * Prevents saving screenshots of the steps.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#no_screenshot SyntheticsTest#no_screenshot}
  */
  readonly noScreenshot?: boolean;
  /**
  * How often the test should run (in seconds). Current possible values are `900`, `1800`, `3600`, `21600`, `43200`, `86400`, `604800` plus `60` for API tests or `300` for browser tests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#tick_every SyntheticsTest#tick_every}
  */
  readonly tickEvery: number;
  /**
  * monitor_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#monitor_options SyntheticsTest#monitor_options}
  */
  readonly monitorOptions?: SyntheticsTestOptionsListMonitorOptions[];
  /**
  * retry block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#retry SyntheticsTest#retry}
  */
  readonly retry?: SyntheticsTestOptionsListRetry[];
}

function syntheticsTestOptionsListToTerraform(struct?: SyntheticsTestOptionsList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accept_self_signed: cdktf.booleanToTerraform(struct!.acceptSelfSigned),
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    min_failure_duration: cdktf.numberToTerraform(struct!.minFailureDuration),
    min_location_failed: cdktf.numberToTerraform(struct!.minLocationFailed),
    no_screenshot: cdktf.booleanToTerraform(struct!.noScreenshot),
    tick_every: cdktf.numberToTerraform(struct!.tickEvery),
    monitor_options: cdktf.listMapper(syntheticsTestOptionsListMonitorOptionsToTerraform)(struct!.monitorOptions),
    retry: cdktf.listMapper(syntheticsTestOptionsListRetryToTerraform)(struct!.retry),
  }
}

export interface SyntheticsTestRequestBasicauth {
  /**
  * Password for authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#password SyntheticsTest#password}
  */
  readonly password: string;
  /**
  * Username for authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#username SyntheticsTest#username}
  */
  readonly username: string;
}

function syntheticsTestRequestBasicauthToTerraform(struct?: SyntheticsTestRequestBasicauth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface SyntheticsTestRequestClientCertificateCert {
  /**
  * Content of the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#content SyntheticsTest#content}
  */
  readonly content: string;
  /**
  * File name for the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#filename SyntheticsTest#filename}
  */
  readonly filename?: string;
}

function syntheticsTestRequestClientCertificateCertToTerraform(struct?: SyntheticsTestRequestClientCertificateCert): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}

export interface SyntheticsTestRequestClientCertificateKey {
  /**
  * Content of the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#content SyntheticsTest#content}
  */
  readonly content: string;
  /**
  * File name for the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#filename SyntheticsTest#filename}
  */
  readonly filename?: string;
}

function syntheticsTestRequestClientCertificateKeyToTerraform(struct?: SyntheticsTestRequestClientCertificateKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}

export interface SyntheticsTestRequestClientCertificate {
  /**
  * cert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#cert SyntheticsTest#cert}
  */
  readonly cert: SyntheticsTestRequestClientCertificateCert[];
  /**
  * key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#key SyntheticsTest#key}
  */
  readonly key: SyntheticsTestRequestClientCertificateKey[];
}

function syntheticsTestRequestClientCertificateToTerraform(struct?: SyntheticsTestRequestClientCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cert: cdktf.listMapper(syntheticsTestRequestClientCertificateCertToTerraform)(struct!.cert),
    key: cdktf.listMapper(syntheticsTestRequestClientCertificateKeyToTerraform)(struct!.key),
  }
}

export interface SyntheticsTestRequestDefinition {
  /**
  * The request body.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#body SyntheticsTest#body}
  */
  readonly body?: string;
  /**
  * DNS server to use for DNS tests (`subtype = "dns"`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#dns_server SyntheticsTest#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * DNS server port to use for DNS tests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#dns_server_port SyntheticsTest#dns_server_port}
  */
  readonly dnsServerPort?: number;
  /**
  * Host name to perform the test with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#host SyntheticsTest#host}
  */
  readonly host?: string;
  /**
  * The HTTP method. One of `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#method SyntheticsTest#method}
  */
  readonly method?: string;
  /**
  * Determines whether or not to save the response body.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#no_saving_response_body SyntheticsTest#no_saving_response_body}
  */
  readonly noSavingResponseBody?: boolean;
  /**
  * Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#number_of_packets SyntheticsTest#number_of_packets}
  */
  readonly numberOfPackets?: number;
  /**
  * Port to use when performing the test.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#port SyntheticsTest#port}
  */
  readonly port?: number;
  /**
  * This will turn on a traceroute probe to discover all gateways along the path to the host destination. For ICMP tests (`subtype = "icmp"`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#should_track_hops SyntheticsTest#should_track_hops}
  */
  readonly shouldTrackHops?: boolean;
  /**
  * Timeout in seconds for the test. Defaults to `60`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#timeout SyntheticsTest#timeout}
  */
  readonly timeout?: number;
  /**
  * The URL to send the request to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#url SyntheticsTest#url}
  */
  readonly url?: string;
}

function syntheticsTestRequestDefinitionToTerraform(struct?: SyntheticsTestRequestDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    dns_server_port: cdktf.numberToTerraform(struct!.dnsServerPort),
    host: cdktf.stringToTerraform(struct!.host),
    method: cdktf.stringToTerraform(struct!.method),
    no_saving_response_body: cdktf.booleanToTerraform(struct!.noSavingResponseBody),
    number_of_packets: cdktf.numberToTerraform(struct!.numberOfPackets),
    port: cdktf.numberToTerraform(struct!.port),
    should_track_hops: cdktf.booleanToTerraform(struct!.shouldTrackHops),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html datadog_synthetics_test}
*/
export class SyntheticsTest extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html datadog_synthetics_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsTestConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsTestConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_synthetics_test',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deviceIds = config.deviceIds;
    this._locations = config.locations;
    this._message = config.message;
    this._name = config.name;
    this._requestHeaders = config.requestHeaders;
    this._requestQuery = config.requestQuery;
    this._setCookie = config.setCookie;
    this._status = config.status;
    this._subtype = config.subtype;
    this._tags = config.tags;
    this._type = config.type;
    this._apiStep = config.apiStep;
    this._assertion = config.assertion;
    this._browserStep = config.browserStep;
    this._browserVariable = config.browserVariable;
    this._configVariable = config.configVariable;
    this._optionsList = config.optionsList;
    this._requestBasicauth = config.requestBasicauth;
    this._requestClientCertificate = config.requestClientCertificate;
    this._requestDefinition = config.requestDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_ids - computed: false, optional: true, required: false
  private _deviceIds?: string[];
  public get deviceIds() {
    return this.getListAttribute('device_ids');
  }
  public set deviceIds(value: string[] ) {
    this._deviceIds = value;
  }
  public resetDeviceIds() {
    this._deviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locations - computed: false, optional: false, required: true
  private _locations: string[];
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations
  }

  // message - computed: false, optional: true, required: false
  private _message?: string;
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string ) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message
  }

  // monitor_id - computed: true, optional: false, required: false
  public get monitorId() {
    return this.getNumberAttribute('monitor_id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string };
  public get requestHeaders() {
    return this.interpolationForAttribute('request_headers') as any;
  }
  public set requestHeaders(value: { [key: string]: string } ) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders
  }

  // request_query - computed: false, optional: true, required: false
  private _requestQuery?: { [key: string]: string };
  public get requestQuery() {
    return this.interpolationForAttribute('request_query') as any;
  }
  public set requestQuery(value: { [key: string]: string } ) {
    this._requestQuery = value;
  }
  public resetRequestQuery() {
    this._requestQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestQueryInput() {
    return this._requestQuery
  }

  // set_cookie - computed: false, optional: true, required: false
  private _setCookie?: string;
  public get setCookie() {
    return this.getStringAttribute('set_cookie');
  }
  public set setCookie(value: string ) {
    this._setCookie = value;
  }
  public resetSetCookie() {
    this._setCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCookieInput() {
    return this._setCookie
  }

  // status - computed: false, optional: false, required: true
  private _status: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // subtype - computed: false, optional: true, required: false
  private _subtype?: string;
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
  public set subtype(value: string ) {
    this._subtype = value;
  }
  public resetSubtype() {
    this._subtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // api_step - computed: false, optional: true, required: false
  private _apiStep?: SyntheticsTestApiStep[];
  public get apiStep() {
    return this.interpolationForAttribute('api_step') as any;
  }
  public set apiStep(value: SyntheticsTestApiStep[] ) {
    this._apiStep = value;
  }
  public resetApiStep() {
    this._apiStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiStepInput() {
    return this._apiStep
  }

  // assertion - computed: false, optional: true, required: false
  private _assertion?: SyntheticsTestAssertion[];
  public get assertion() {
    return this.interpolationForAttribute('assertion') as any;
  }
  public set assertion(value: SyntheticsTestAssertion[] ) {
    this._assertion = value;
  }
  public resetAssertion() {
    this._assertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionInput() {
    return this._assertion
  }

  // browser_step - computed: false, optional: true, required: false
  private _browserStep?: SyntheticsTestBrowserStep[];
  public get browserStep() {
    return this.interpolationForAttribute('browser_step') as any;
  }
  public set browserStep(value: SyntheticsTestBrowserStep[] ) {
    this._browserStep = value;
  }
  public resetBrowserStep() {
    this._browserStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserStepInput() {
    return this._browserStep
  }

  // browser_variable - computed: false, optional: true, required: false
  private _browserVariable?: SyntheticsTestBrowserVariable[];
  public get browserVariable() {
    return this.interpolationForAttribute('browser_variable') as any;
  }
  public set browserVariable(value: SyntheticsTestBrowserVariable[] ) {
    this._browserVariable = value;
  }
  public resetBrowserVariable() {
    this._browserVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserVariableInput() {
    return this._browserVariable
  }

  // config_variable - computed: false, optional: true, required: false
  private _configVariable?: SyntheticsTestConfigVariable[];
  public get configVariable() {
    return this.interpolationForAttribute('config_variable') as any;
  }
  public set configVariable(value: SyntheticsTestConfigVariable[] ) {
    this._configVariable = value;
  }
  public resetConfigVariable() {
    this._configVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configVariableInput() {
    return this._configVariable
  }

  // options_list - computed: false, optional: true, required: false
  private _optionsList?: SyntheticsTestOptionsList[];
  public get optionsList() {
    return this.interpolationForAttribute('options_list') as any;
  }
  public set optionsList(value: SyntheticsTestOptionsList[] ) {
    this._optionsList = value;
  }
  public resetOptionsList() {
    this._optionsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsListInput() {
    return this._optionsList
  }

  // request_basicauth - computed: false, optional: true, required: false
  private _requestBasicauth?: SyntheticsTestRequestBasicauth[];
  public get requestBasicauth() {
    return this.interpolationForAttribute('request_basicauth') as any;
  }
  public set requestBasicauth(value: SyntheticsTestRequestBasicauth[] ) {
    this._requestBasicauth = value;
  }
  public resetRequestBasicauth() {
    this._requestBasicauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBasicauthInput() {
    return this._requestBasicauth
  }

  // request_client_certificate - computed: false, optional: true, required: false
  private _requestClientCertificate?: SyntheticsTestRequestClientCertificate[];
  public get requestClientCertificate() {
    return this.interpolationForAttribute('request_client_certificate') as any;
  }
  public set requestClientCertificate(value: SyntheticsTestRequestClientCertificate[] ) {
    this._requestClientCertificate = value;
  }
  public resetRequestClientCertificate() {
    this._requestClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestClientCertificateInput() {
    return this._requestClientCertificate
  }

  // request_definition - computed: false, optional: true, required: false
  private _requestDefinition?: SyntheticsTestRequestDefinition[];
  public get requestDefinition() {
    return this.interpolationForAttribute('request_definition') as any;
  }
  public set requestDefinition(value: SyntheticsTestRequestDefinition[] ) {
    this._requestDefinition = value;
  }
  public resetRequestDefinition() {
    this._requestDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDefinitionInput() {
    return this._requestDefinition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._deviceIds),
      locations: cdktf.listMapper(cdktf.stringToTerraform)(this._locations),
      message: cdktf.stringToTerraform(this._message),
      name: cdktf.stringToTerraform(this._name),
      request_headers: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestHeaders),
      request_query: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestQuery),
      set_cookie: cdktf.stringToTerraform(this._setCookie),
      status: cdktf.stringToTerraform(this._status),
      subtype: cdktf.stringToTerraform(this._subtype),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      api_step: cdktf.listMapper(syntheticsTestApiStepToTerraform)(this._apiStep),
      assertion: cdktf.listMapper(syntheticsTestAssertionToTerraform)(this._assertion),
      browser_step: cdktf.listMapper(syntheticsTestBrowserStepToTerraform)(this._browserStep),
      browser_variable: cdktf.listMapper(syntheticsTestBrowserVariableToTerraform)(this._browserVariable),
      config_variable: cdktf.listMapper(syntheticsTestConfigVariableToTerraform)(this._configVariable),
      options_list: cdktf.listMapper(syntheticsTestOptionsListToTerraform)(this._optionsList),
      request_basicauth: cdktf.listMapper(syntheticsTestRequestBasicauthToTerraform)(this._requestBasicauth),
      request_client_certificate: cdktf.listMapper(syntheticsTestRequestClientCertificateToTerraform)(this._requestClientCertificate),
      request_definition: cdktf.listMapper(syntheticsTestRequestDefinitionToTerraform)(this._requestDefinition),
    };
  }
}
