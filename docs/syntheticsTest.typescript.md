# `syntheticsTest` Submodule <a name="`syntheticsTest` Submodule" id="@cdktf/provider-datadog.syntheticsTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsTest <a name="SyntheticsTest" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test datadog_synthetics_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTest(scope: Construct, id: string, config: SyntheticsTestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig">SyntheticsTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig">SyntheticsTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putApiStep">putApiStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putAssertion">putAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserStep">putBrowserStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserVariable">putBrowserVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putConfigVariable">putConfigVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putOptionsList">putOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestBasicauth">putRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestClientCertificate">putRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestDefinition">putRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestProxy">putRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetApiStep">resetApiStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetAssertion">resetAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetBrowserStep">resetBrowserStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetBrowserVariable">resetBrowserVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetConfigVariable">resetConfigVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetDeviceIds">resetDeviceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetOptionsList">resetOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestBasicauth">resetRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestClientCertificate">resetRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestDefinition">resetRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestProxy">resetRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestQuery">resetRequestQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetSetCookie">resetSetCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetSubtype">resetSubtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putApiStep` <a name="putApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putApiStep"></a>

```typescript
public putApiStep(value: IResolvable | SyntheticsTestApiStep[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putApiStep.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep">SyntheticsTestApiStep</a>[]

---

##### `putAssertion` <a name="putAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putAssertion"></a>

```typescript
public putAssertion(value: IResolvable | SyntheticsTestAssertion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putAssertion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion">SyntheticsTestAssertion</a>[]

---

##### `putBrowserStep` <a name="putBrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserStep"></a>

```typescript
public putBrowserStep(value: IResolvable | SyntheticsTestBrowserStep[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserStep.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep">SyntheticsTestBrowserStep</a>[]

---

##### `putBrowserVariable` <a name="putBrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserVariable"></a>

```typescript
public putBrowserVariable(value: IResolvable | SyntheticsTestBrowserVariable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserVariable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable">SyntheticsTestBrowserVariable</a>[]

---

##### `putConfigVariable` <a name="putConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putConfigVariable"></a>

```typescript
public putConfigVariable(value: IResolvable | SyntheticsTestConfigVariable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putConfigVariable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable">SyntheticsTestConfigVariable</a>[]

---

##### `putOptionsList` <a name="putOptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putOptionsList"></a>

```typescript
public putOptionsList(value: SyntheticsTestOptionsList): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putOptionsList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a>

---

##### `putRequestBasicauth` <a name="putRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestBasicauth"></a>

```typescript
public putRequestBasicauth(value: SyntheticsTestRequestBasicauth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestBasicauth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a>

---

##### `putRequestClientCertificate` <a name="putRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestClientCertificate"></a>

```typescript
public putRequestClientCertificate(value: SyntheticsTestRequestClientCertificate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a>

---

##### `putRequestDefinition` <a name="putRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestDefinition"></a>

```typescript
public putRequestDefinition(value: SyntheticsTestRequestDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a>

---

##### `putRequestProxy` <a name="putRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestProxy"></a>

```typescript
public putRequestProxy(value: SyntheticsTestRequestProxy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a>

---

##### `resetApiStep` <a name="resetApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetApiStep"></a>

```typescript
public resetApiStep(): void
```

##### `resetAssertion` <a name="resetAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetAssertion"></a>

```typescript
public resetAssertion(): void
```

##### `resetBrowserStep` <a name="resetBrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetBrowserStep"></a>

```typescript
public resetBrowserStep(): void
```

##### `resetBrowserVariable` <a name="resetBrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetBrowserVariable"></a>

```typescript
public resetBrowserVariable(): void
```

##### `resetConfigVariable` <a name="resetConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetConfigVariable"></a>

```typescript
public resetConfigVariable(): void
```

##### `resetDeviceIds` <a name="resetDeviceIds" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetDeviceIds"></a>

```typescript
public resetDeviceIds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetOptionsList` <a name="resetOptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetOptionsList"></a>

```typescript
public resetOptionsList(): void
```

##### `resetRequestBasicauth` <a name="resetRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestBasicauth"></a>

```typescript
public resetRequestBasicauth(): void
```

##### `resetRequestClientCertificate` <a name="resetRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestClientCertificate"></a>

```typescript
public resetRequestClientCertificate(): void
```

##### `resetRequestDefinition` <a name="resetRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestDefinition"></a>

```typescript
public resetRequestDefinition(): void
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestHeaders"></a>

```typescript
public resetRequestHeaders(): void
```

##### `resetRequestProxy` <a name="resetRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestProxy"></a>

```typescript
public resetRequestProxy(): void
```

##### `resetRequestQuery` <a name="resetRequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestQuery"></a>

```typescript
public resetRequestQuery(): void
```

##### `resetSetCookie` <a name="resetSetCookie" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetSetCookie"></a>

```typescript
public resetSetCookie(): void
```

##### `resetSubtype` <a name="resetSubtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetSubtype"></a>

```typescript
public resetSubtype(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isConstruct"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

syntheticsTest.SyntheticsTest.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformElement"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

syntheticsTest.SyntheticsTest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformResource"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

syntheticsTest.SyntheticsTest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.apiStep">apiStep</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList">SyntheticsTestApiStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.assertion">assertion</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList">SyntheticsTestAssertionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserStep">browserStep</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList">SyntheticsTestBrowserStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserVariable">browserVariable</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList">SyntheticsTestBrowserVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.configVariable">configVariable</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList">SyntheticsTestConfigVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.monitorId">monitorId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.optionsList">optionsList</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference">SyntheticsTestOptionsListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestBasicauth">requestBasicauth</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference">SyntheticsTestRequestBasicauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestClientCertificate">requestClientCertificate</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference">SyntheticsTestRequestClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestDefinition">requestDefinition</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference">SyntheticsTestRequestDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestProxy">requestProxy</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference">SyntheticsTestRequestProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.apiStepInput">apiStepInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep">SyntheticsTestApiStep</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.assertionInput">assertionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion">SyntheticsTestAssertion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserStepInput">browserStepInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep">SyntheticsTestBrowserStep</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserVariableInput">browserVariableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable">SyntheticsTestBrowserVariable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.configVariableInput">configVariableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable">SyntheticsTestConfigVariable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.deviceIdsInput">deviceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.optionsListInput">optionsListInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestBasicauthInput">requestBasicauthInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestClientCertificateInput">requestClientCertificateInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestDefinitionInput">requestDefinitionInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestHeadersInput">requestHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestProxyInput">requestProxyInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestQueryInput">requestQueryInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.setCookieInput">setCookieInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.subtypeInput">subtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.deviceIds">deviceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestQuery">requestQuery</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.setCookie">setCookie</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.subtype">subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiStep`<sup>Required</sup> <a name="apiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.apiStep"></a>

```typescript
public readonly apiStep: SyntheticsTestApiStepList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList">SyntheticsTestApiStepList</a>

---

##### `assertion`<sup>Required</sup> <a name="assertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.assertion"></a>

```typescript
public readonly assertion: SyntheticsTestAssertionList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList">SyntheticsTestAssertionList</a>

---

##### `browserStep`<sup>Required</sup> <a name="browserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserStep"></a>

```typescript
public readonly browserStep: SyntheticsTestBrowserStepList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList">SyntheticsTestBrowserStepList</a>

---

##### `browserVariable`<sup>Required</sup> <a name="browserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserVariable"></a>

```typescript
public readonly browserVariable: SyntheticsTestBrowserVariableList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList">SyntheticsTestBrowserVariableList</a>

---

##### `configVariable`<sup>Required</sup> <a name="configVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.configVariable"></a>

```typescript
public readonly configVariable: SyntheticsTestConfigVariableList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList">SyntheticsTestConfigVariableList</a>

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.monitorId"></a>

```typescript
public readonly monitorId: number;
```

- *Type:* number

---

##### `optionsList`<sup>Required</sup> <a name="optionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.optionsList"></a>

```typescript
public readonly optionsList: SyntheticsTestOptionsListOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference">SyntheticsTestOptionsListOutputReference</a>

---

##### `requestBasicauth`<sup>Required</sup> <a name="requestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestBasicauth"></a>

```typescript
public readonly requestBasicauth: SyntheticsTestRequestBasicauthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference">SyntheticsTestRequestBasicauthOutputReference</a>

---

##### `requestClientCertificate`<sup>Required</sup> <a name="requestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestClientCertificate"></a>

```typescript
public readonly requestClientCertificate: SyntheticsTestRequestClientCertificateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference">SyntheticsTestRequestClientCertificateOutputReference</a>

---

##### `requestDefinition`<sup>Required</sup> <a name="requestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestDefinition"></a>

```typescript
public readonly requestDefinition: SyntheticsTestRequestDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference">SyntheticsTestRequestDefinitionOutputReference</a>

---

##### `requestProxy`<sup>Required</sup> <a name="requestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestProxy"></a>

```typescript
public readonly requestProxy: SyntheticsTestRequestProxyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference">SyntheticsTestRequestProxyOutputReference</a>

---

##### `apiStepInput`<sup>Optional</sup> <a name="apiStepInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.apiStepInput"></a>

```typescript
public readonly apiStepInput: IResolvable | SyntheticsTestApiStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep">SyntheticsTestApiStep</a>[]

---

##### `assertionInput`<sup>Optional</sup> <a name="assertionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.assertionInput"></a>

```typescript
public readonly assertionInput: IResolvable | SyntheticsTestAssertion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion">SyntheticsTestAssertion</a>[]

---

##### `browserStepInput`<sup>Optional</sup> <a name="browserStepInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserStepInput"></a>

```typescript
public readonly browserStepInput: IResolvable | SyntheticsTestBrowserStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep">SyntheticsTestBrowserStep</a>[]

---

##### `browserVariableInput`<sup>Optional</sup> <a name="browserVariableInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserVariableInput"></a>

```typescript
public readonly browserVariableInput: IResolvable | SyntheticsTestBrowserVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable">SyntheticsTestBrowserVariable</a>[]

---

##### `configVariableInput`<sup>Optional</sup> <a name="configVariableInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.configVariableInput"></a>

```typescript
public readonly configVariableInput: IResolvable | SyntheticsTestConfigVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable">SyntheticsTestConfigVariable</a>[]

---

##### `deviceIdsInput`<sup>Optional</sup> <a name="deviceIdsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.deviceIdsInput"></a>

```typescript
public readonly deviceIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsListInput`<sup>Optional</sup> <a name="optionsListInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.optionsListInput"></a>

```typescript
public readonly optionsListInput: SyntheticsTestOptionsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a>

---

##### `requestBasicauthInput`<sup>Optional</sup> <a name="requestBasicauthInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestBasicauthInput"></a>

```typescript
public readonly requestBasicauthInput: SyntheticsTestRequestBasicauth;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a>

---

##### `requestClientCertificateInput`<sup>Optional</sup> <a name="requestClientCertificateInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestClientCertificateInput"></a>

```typescript
public readonly requestClientCertificateInput: SyntheticsTestRequestClientCertificate;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a>

---

##### `requestDefinitionInput`<sup>Optional</sup> <a name="requestDefinitionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestDefinitionInput"></a>

```typescript
public readonly requestDefinitionInput: SyntheticsTestRequestDefinition;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a>

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestHeadersInput"></a>

```typescript
public readonly requestHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestProxyInput`<sup>Optional</sup> <a name="requestProxyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestProxyInput"></a>

```typescript
public readonly requestProxyInput: SyntheticsTestRequestProxy;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a>

---

##### `requestQueryInput`<sup>Optional</sup> <a name="requestQueryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestQueryInput"></a>

```typescript
public readonly requestQueryInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `setCookieInput`<sup>Optional</sup> <a name="setCookieInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.setCookieInput"></a>

```typescript
public readonly setCookieInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.subtypeInput"></a>

```typescript
public readonly subtypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `deviceIds`<sup>Required</sup> <a name="deviceIds" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.deviceIds"></a>

```typescript
public readonly deviceIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestQuery`<sup>Required</sup> <a name="requestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestQuery"></a>

```typescript
public readonly requestQuery: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `setCookie`<sup>Required</sup> <a name="setCookie" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.setCookie"></a>

```typescript
public readonly setCookie: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsTestApiStep <a name="SyntheticsTestApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStep: syntheticsTest.SyntheticsTestApiStep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.name">name</a></code> | <code>string</code> | The name of the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.allowFailure">allowFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether or not to continue with test if this step fails. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.assertion">assertion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion">SyntheticsTestApiStepAssertion</a>[]</code> | assertion block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.extractedValue">extractedValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue">SyntheticsTestApiStepExtractedValue</a>[]</code> | extracted_value block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.isCritical">isCritical</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether or not to consider the entire test as failed if this step fails. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestBasicauth">requestBasicauth</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a></code> | request_basicauth block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestClientCertificate">requestClientCertificate</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a></code> | request_client_certificate block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestDefinition">requestDefinition</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a></code> | request_definition block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | Header name and value map. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestProxy">requestProxy</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a></code> | request_proxy block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestQuery">requestQuery</a></code> | <code>{[ key: string ]: string}</code> | Query arguments name and value map. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.subtype">subtype</a></code> | <code>string</code> | The subtype of the Synthetic multistep API test step. Valid values are `http`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `allowFailure`<sup>Optional</sup> <a name="allowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.allowFailure"></a>

```typescript
public readonly allowFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether or not to continue with test if this step fails.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#allow_failure SyntheticsTest#allow_failure}

---

##### `assertion`<sup>Optional</sup> <a name="assertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.assertion"></a>

```typescript
public readonly assertion: IResolvable | SyntheticsTestApiStepAssertion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion">SyntheticsTestApiStepAssertion</a>[]

assertion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#assertion SyntheticsTest#assertion}

---

##### `extractedValue`<sup>Optional</sup> <a name="extractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.extractedValue"></a>

```typescript
public readonly extractedValue: IResolvable | SyntheticsTestApiStepExtractedValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue">SyntheticsTestApiStepExtractedValue</a>[]

extracted_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#extracted_value SyntheticsTest#extracted_value}

---

##### `isCritical`<sup>Optional</sup> <a name="isCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.isCritical"></a>

```typescript
public readonly isCritical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether or not to consider the entire test as failed if this step fails.

Can be used only if `allow_failure` is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#is_critical SyntheticsTest#is_critical}

---

##### `requestBasicauth`<sup>Optional</sup> <a name="requestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestBasicauth"></a>

```typescript
public readonly requestBasicauth: SyntheticsTestApiStepRequestBasicauth;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a>

request_basicauth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_basicauth SyntheticsTest#request_basicauth}

---

##### `requestClientCertificate`<sup>Optional</sup> <a name="requestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestClientCertificate"></a>

```typescript
public readonly requestClientCertificate: SyntheticsTestApiStepRequestClientCertificate;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a>

request_client_certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_client_certificate SyntheticsTest#request_client_certificate}

---

##### `requestDefinition`<sup>Optional</sup> <a name="requestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestDefinition"></a>

```typescript
public readonly requestDefinition: SyntheticsTestApiStepRequestDefinition;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a>

request_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_definition SyntheticsTest#request_definition}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Header name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_headers SyntheticsTest#request_headers}

---

##### `requestProxy`<sup>Optional</sup> <a name="requestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestProxy"></a>

```typescript
public readonly requestProxy: SyntheticsTestApiStepRequestProxy;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a>

request_proxy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_proxy SyntheticsTest#request_proxy}

---

##### `requestQuery`<sup>Optional</sup> <a name="requestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestQuery"></a>

```typescript
public readonly requestQuery: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Query arguments name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_query SyntheticsTest#request_query}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.retry"></a>

```typescript
public readonly retry: SyntheticsTestApiStepRetry;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a>

retry block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#retry SyntheticsTest#retry}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

The subtype of the Synthetic multistep API test step. Valid values are `http`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#subtype SyntheticsTest#subtype}

---

### SyntheticsTestApiStepAssertion <a name="SyntheticsTestApiStepAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStepAssertion: syntheticsTest.SyntheticsTestApiStepAssertion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.operator">operator</a></code> | <code>string</code> | Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.type">type</a></code> | <code>string</code> | Type of assertion. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.property">property</a></code> | <code>string</code> | If assertion type is `header`, this is the header name. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.target">target</a></code> | <code>string</code> | Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.targetjsonpath">targetjsonpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a></code> | targetjsonpath block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.targetxpath">targetxpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a></code> | targetxpath block. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of assertion.

**Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). Valid values are `body`, `header`, `statusCode`, `certificate`, `responseTime`, `property`, `recordEvery`, `recordSome`, `tlsVersion`, `minTlsVersion`, `latency`, `packetLossPercentage`, `packetsReceived`, `networkHop`, `receivedMessage`, `grpcHealthcheckStatus`, `connection`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

If assertion type is `header`, this is the header name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#property SyntheticsTest#property}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#target SyntheticsTest#target}

---

##### `targetjsonpath`<sup>Optional</sup> <a name="targetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.targetjsonpath"></a>

```typescript
public readonly targetjsonpath: SyntheticsTestApiStepAssertionTargetjsonpath;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a>

targetjsonpath block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetjsonpath SyntheticsTest#targetjsonpath}

---

##### `targetxpath`<sup>Optional</sup> <a name="targetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.targetxpath"></a>

```typescript
public readonly targetxpath: SyntheticsTestApiStepAssertionTargetxpath;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a>

targetxpath block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetxpath SyntheticsTest#targetxpath}

---

### SyntheticsTestApiStepAssertionTargetjsonpath <a name="SyntheticsTestApiStepAssertionTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStepAssertionTargetjsonpath: syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.jsonpath">jsonpath</a></code> | <code>string</code> | The JSON path to assert. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.operator">operator</a></code> | <code>string</code> | The specific operator to use on the path. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.targetvalue">targetvalue</a></code> | <code>string</code> | Expected matching value. |

---

##### `jsonpath`<sup>Required</sup> <a name="jsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.jsonpath"></a>

```typescript
public readonly jsonpath: string;
```

- *Type:* string

The JSON path to assert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#jsonpath SyntheticsTest#jsonpath}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The specific operator to use on the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `targetvalue`<sup>Required</sup> <a name="targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.targetvalue"></a>

```typescript
public readonly targetvalue: string;
```

- *Type:* string

Expected matching value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetvalue SyntheticsTest#targetvalue}

---

### SyntheticsTestApiStepAssertionTargetxpath <a name="SyntheticsTestApiStepAssertionTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStepAssertionTargetxpath: syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.operator">operator</a></code> | <code>string</code> | The specific operator to use on the path. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.targetvalue">targetvalue</a></code> | <code>string</code> | Expected matching value. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.xpath">xpath</a></code> | <code>string</code> | The xpath to assert. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The specific operator to use on the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `targetvalue`<sup>Required</sup> <a name="targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.targetvalue"></a>

```typescript
public readonly targetvalue: string;
```

- *Type:* string

Expected matching value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetvalue SyntheticsTest#targetvalue}

---

##### `xpath`<sup>Required</sup> <a name="xpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.xpath"></a>

```typescript
public readonly xpath: string;
```

- *Type:* string

The xpath to assert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#xpath SyntheticsTest#xpath}

---

### SyntheticsTestApiStepExtractedValue <a name="SyntheticsTestApiStepExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStepExtractedValue: syntheticsTest.SyntheticsTestApiStepExtractedValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.parser">parser</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a></code> | parser block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.type">type</a></code> | <code>string</code> | Property of the Synthetics Test Response to use for the variable. Valid values are `http_body`, `http_header`, `local_variable`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.field">field</a></code> | <code>string</code> | When type is `http_header`, name of the header to use to extract the value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}.

---

##### `parser`<sup>Required</sup> <a name="parser" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.parser"></a>

```typescript
public readonly parser: SyntheticsTestApiStepExtractedValueParser;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a>

parser block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#parser SyntheticsTest#parser}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Property of the Synthetics Test Response to use for the variable. Valid values are `http_body`, `http_header`, `local_variable`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

When type is `http_header`, name of the header to use to extract the value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#field SyntheticsTest#field}

---

### SyntheticsTestApiStepExtractedValueParser <a name="SyntheticsTestApiStepExtractedValueParser" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStepExtractedValueParser: syntheticsTest.SyntheticsTestApiStepExtractedValueParser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.property.type">type</a></code> | <code>string</code> | Type of parser for a Synthetics global variable from a synthetics test. Valid values are `raw`, `json_path`, `regex`, `x_path`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.property.value">value</a></code> | <code>string</code> | Regex or JSON path used for the parser. Not used with type `raw`. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of parser for a Synthetics global variable from a synthetics test. Valid values are `raw`, `json_path`, `regex`, `x_path`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Regex or JSON path used for the parser. Not used with type `raw`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}

---

### SyntheticsTestApiStepRequestBasicauth <a name="SyntheticsTestApiStepRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStepRequestBasicauth: syntheticsTest.SyntheticsTestApiStepRequestBasicauth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.accessKey">accessKey</a></code> | <code>string</code> | Access key for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.accessTokenUrl">accessTokenUrl</a></code> | <code>string</code> | Access token url for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.audience">audience</a></code> | <code>string</code> | Audience for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.clientId">clientId</a></code> | <code>string</code> | Client ID for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.clientSecret">clientSecret</a></code> | <code>string</code> | Client secret for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.domain">domain</a></code> | <code>string</code> | Domain for `ntlm` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.password">password</a></code> | <code>string</code> | Password for authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.region">region</a></code> | <code>string</code> | Region for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.resource">resource</a></code> | <code>string</code> | Resource for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.scope">scope</a></code> | <code>string</code> | Scope for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.secretKey">secretKey</a></code> | <code>string</code> | Secret key for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.serviceName">serviceName</a></code> | <code>string</code> | Service name for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.sessionToken">sessionToken</a></code> | <code>string</code> | Session token for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.tokenApiAuthentication">tokenApiAuthentication</a></code> | <code>string</code> | Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.type">type</a></code> | <code>string</code> | Type of basic authentication to use when performing the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.username">username</a></code> | <code>string</code> | Username for authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.workstation">workstation</a></code> | <code>string</code> | Workstation for `ntlm` authentication. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

Access key for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#access_key SyntheticsTest#access_key}

---

##### `accessTokenUrl`<sup>Optional</sup> <a name="accessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.accessTokenUrl"></a>

```typescript
public readonly accessTokenUrl: string;
```

- *Type:* string

Access token url for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#access_token_url SyntheticsTest#access_token_url}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#audience SyntheticsTest#audience}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Client ID for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_id SyntheticsTest#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Client secret for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_secret SyntheticsTest#client_secret}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain for `ntlm` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#domain SyntheticsTest#domain}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#password SyntheticsTest#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#region SyntheticsTest#region}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Resource for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#resource SyntheticsTest#resource}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Scope for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#scope SyntheticsTest#scope}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

Secret key for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#secret_key SyntheticsTest#secret_key}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Service name for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#service_name SyntheticsTest#service_name}

---

##### `sessionToken`<sup>Optional</sup> <a name="sessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.sessionToken"></a>

```typescript
public readonly sessionToken: string;
```

- *Type:* string

Session token for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#session_token SyntheticsTest#session_token}

---

##### `tokenApiAuthentication`<sup>Optional</sup> <a name="tokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.tokenApiAuthentication"></a>

```typescript
public readonly tokenApiAuthentication: string;
```

- *Type:* string

Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#token_api_authentication SyntheticsTest#token_api_authentication}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of basic authentication to use when performing the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#username SyntheticsTest#username}

---

##### `workstation`<sup>Optional</sup> <a name="workstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.workstation"></a>

```typescript
public readonly workstation: string;
```

- *Type:* string

Workstation for `ntlm` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#workstation SyntheticsTest#workstation}

---

### SyntheticsTestApiStepRequestClientCertificate <a name="SyntheticsTestApiStepRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStepRequestClientCertificate: syntheticsTest.SyntheticsTestApiStepRequestClientCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.property.cert">cert</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a></code> | cert block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.property.key">key</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a></code> | key block. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.property.cert"></a>

```typescript
public readonly cert: SyntheticsTestApiStepRequestClientCertificateCert;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a>

cert block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#cert SyntheticsTest#cert}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.property.key"></a>

```typescript
public readonly key: SyntheticsTestApiStepRequestClientCertificateKey;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a>

key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#key SyntheticsTest#key}

---

### SyntheticsTestApiStepRequestClientCertificateCert <a name="SyntheticsTestApiStepRequestClientCertificateCert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStepRequestClientCertificateCert: syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.property.content">content</a></code> | <code>string</code> | Content of the certificate. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.property.filename">filename</a></code> | <code>string</code> | File name for the certificate. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Content of the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#content SyntheticsTest#content}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

File name for the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#filename SyntheticsTest#filename}

---

### SyntheticsTestApiStepRequestClientCertificateKey <a name="SyntheticsTestApiStepRequestClientCertificateKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStepRequestClientCertificateKey: syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.property.content">content</a></code> | <code>string</code> | Content of the certificate. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.property.filename">filename</a></code> | <code>string</code> | File name for the certificate. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Content of the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#content SyntheticsTest#content}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

File name for the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#filename SyntheticsTest#filename}

---

### SyntheticsTestApiStepRequestDefinition <a name="SyntheticsTestApiStepRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStepRequestDefinition: syntheticsTest.SyntheticsTestApiStepRequestDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.allowInsecure">allowInsecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows loading insecure content for an HTTP test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.body">body</a></code> | <code>string</code> | The request body. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.bodyType">bodyType</a></code> | <code>string</code> | Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.callType">callType</a></code> | <code>string</code> | The type of gRPC call to perform. Valid values are `healthcheck`, `unary`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.certificateDomains">certificateDomains</a></code> | <code>string[]</code> | By default, the client certificate is applied on the domain of the starting URL for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.dnsServer">dnsServer</a></code> | <code>string</code> | DNS server to use for DNS tests (`subtype = "dns"`). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.dnsServerPort">dnsServerPort</a></code> | <code>number</code> | DNS server port to use for DNS tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.followRedirects">followRedirects</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether or not the API HTTP test should follow redirects. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.host">host</a></code> | <code>string</code> | Host name to perform the test with. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.message">message</a></code> | <code>string</code> | For UDP and websocket tests, message to send with the request. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.method">method</a></code> | <code>string</code> | Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.noSavingResponseBody">noSavingResponseBody</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether or not to save the response body. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.numberOfPackets">numberOfPackets</a></code> | <code>number</code> | Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.port">port</a></code> | <code>number</code> | Port to use when performing the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.servername">servername</a></code> | <code>string</code> | For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.service">service</a></code> | <code>string</code> | The gRPC service on which you want to perform the gRPC call. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.shouldTrackHops">shouldTrackHops</a></code> | <code>boolean \| cdktf.IResolvable</code> | This will turn on a traceroute probe to discover all gateways along the path to the host destination. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.timeout">timeout</a></code> | <code>number</code> | Timeout in seconds for the test. Defaults to `60`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.url">url</a></code> | <code>string</code> | The URL to send the request to. |

---

##### `allowInsecure`<sup>Optional</sup> <a name="allowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.allowInsecure"></a>

```typescript
public readonly allowInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows loading insecure content for an HTTP test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#allow_insecure SyntheticsTest#allow_insecure}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

The request body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#body SyntheticsTest#body}

---

##### `bodyType`<sup>Optional</sup> <a name="bodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.bodyType"></a>

```typescript
public readonly bodyType: string;
```

- *Type:* string

Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#body_type SyntheticsTest#body_type}

---

##### `callType`<sup>Optional</sup> <a name="callType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.callType"></a>

```typescript
public readonly callType: string;
```

- *Type:* string

The type of gRPC call to perform. Valid values are `healthcheck`, `unary`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#call_type SyntheticsTest#call_type}

---

##### `certificateDomains`<sup>Optional</sup> <a name="certificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.certificateDomains"></a>

```typescript
public readonly certificateDomains: string[];
```

- *Type:* string[]

By default, the client certificate is applied on the domain of the starting URL for browser tests.

If you want your client certificate to be applied on other domains instead, add them in `certificate_domains`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#certificate_domains SyntheticsTest#certificate_domains}

---

##### `dnsServer`<sup>Optional</sup> <a name="dnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.dnsServer"></a>

```typescript
public readonly dnsServer: string;
```

- *Type:* string

DNS server to use for DNS tests (`subtype = "dns"`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#dns_server SyntheticsTest#dns_server}

---

##### `dnsServerPort`<sup>Optional</sup> <a name="dnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.dnsServerPort"></a>

```typescript
public readonly dnsServerPort: number;
```

- *Type:* number

DNS server port to use for DNS tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#dns_server_port SyntheticsTest#dns_server_port}

---

##### `followRedirects`<sup>Optional</sup> <a name="followRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.followRedirects"></a>

```typescript
public readonly followRedirects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether or not the API HTTP test should follow redirects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#follow_redirects SyntheticsTest#follow_redirects}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Host name to perform the test with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#host SyntheticsTest#host}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

For UDP and websocket tests, message to send with the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#message SyntheticsTest#message}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field.

Required if `subtype` is `HTTP` or if `subtype` is `grpc` and `callType` is `unary`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#method SyntheticsTest#method}

---

##### `noSavingResponseBody`<sup>Optional</sup> <a name="noSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.noSavingResponseBody"></a>

```typescript
public readonly noSavingResponseBody: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether or not to save the response body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#no_saving_response_body SyntheticsTest#no_saving_response_body}

---

##### `numberOfPackets`<sup>Optional</sup> <a name="numberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.numberOfPackets"></a>

```typescript
public readonly numberOfPackets: number;
```

- *Type:* number

Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#number_of_packets SyntheticsTest#number_of_packets}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port to use when performing the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#port SyntheticsTest#port}

---

##### `servername`<sup>Optional</sup> <a name="servername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.servername"></a>

```typescript
public readonly servername: string;
```

- *Type:* string

For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#servername SyntheticsTest#servername}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The gRPC service on which you want to perform the gRPC call.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#service SyntheticsTest#service}

---

##### `shouldTrackHops`<sup>Optional</sup> <a name="shouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.shouldTrackHops"></a>

```typescript
public readonly shouldTrackHops: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This will turn on a traceroute probe to discover all gateways along the path to the host destination.

For ICMP tests (`subtype = "icmp"`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#should_track_hops SyntheticsTest#should_track_hops}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Timeout in seconds for the test. Defaults to `60`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#timeout SyntheticsTest#timeout}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL to send the request to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#url SyntheticsTest#url}

---

### SyntheticsTestApiStepRequestProxy <a name="SyntheticsTestApiStepRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStepRequestProxy: syntheticsTest.SyntheticsTestApiStepRequestProxy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.property.url">url</a></code> | <code>string</code> | URL of the proxy to perform the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | Header name and value map. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL of the proxy to perform the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#url SyntheticsTest#url}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Header name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#headers SyntheticsTest#headers}

---

### SyntheticsTestApiStepRetry <a name="SyntheticsTestApiStepRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestApiStepRetry: syntheticsTest.SyntheticsTestApiStepRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.property.count">count</a></code> | <code>number</code> | Number of retries needed to consider a location as failed before sending a notification alert. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.property.interval">interval</a></code> | <code>number</code> | Interval between a failed test and the next retry in milliseconds. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Number of retries needed to consider a location as failed before sending a notification alert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#count SyntheticsTest#count}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Interval between a failed test and the next retry in milliseconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#interval SyntheticsTest#interval}

---

### SyntheticsTestAssertion <a name="SyntheticsTestAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestAssertion: syntheticsTest.SyntheticsTestAssertion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.operator">operator</a></code> | <code>string</code> | Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.type">type</a></code> | <code>string</code> | Type of assertion. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.property">property</a></code> | <code>string</code> | If assertion type is `header`, this is the header name. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.target">target</a></code> | <code>string</code> | Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.targetjsonpath">targetjsonpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a></code> | targetjsonpath block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.targetxpath">targetxpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a></code> | targetxpath block. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of assertion.

**Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). Valid values are `body`, `header`, `statusCode`, `certificate`, `responseTime`, `property`, `recordEvery`, `recordSome`, `tlsVersion`, `minTlsVersion`, `latency`, `packetLossPercentage`, `packetsReceived`, `networkHop`, `receivedMessage`, `grpcHealthcheckStatus`, `connection`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

If assertion type is `header`, this is the header name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#property SyntheticsTest#property}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#target SyntheticsTest#target}

---

##### `targetjsonpath`<sup>Optional</sup> <a name="targetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.targetjsonpath"></a>

```typescript
public readonly targetjsonpath: SyntheticsTestAssertionTargetjsonpath;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a>

targetjsonpath block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetjsonpath SyntheticsTest#targetjsonpath}

---

##### `targetxpath`<sup>Optional</sup> <a name="targetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.targetxpath"></a>

```typescript
public readonly targetxpath: SyntheticsTestAssertionTargetxpath;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a>

targetxpath block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetxpath SyntheticsTest#targetxpath}

---

### SyntheticsTestAssertionTargetjsonpath <a name="SyntheticsTestAssertionTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestAssertionTargetjsonpath: syntheticsTest.SyntheticsTestAssertionTargetjsonpath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.jsonpath">jsonpath</a></code> | <code>string</code> | The JSON path to assert. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.operator">operator</a></code> | <code>string</code> | The specific operator to use on the path. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.targetvalue">targetvalue</a></code> | <code>string</code> | Expected matching value. |

---

##### `jsonpath`<sup>Required</sup> <a name="jsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.jsonpath"></a>

```typescript
public readonly jsonpath: string;
```

- *Type:* string

The JSON path to assert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#jsonpath SyntheticsTest#jsonpath}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The specific operator to use on the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `targetvalue`<sup>Required</sup> <a name="targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.targetvalue"></a>

```typescript
public readonly targetvalue: string;
```

- *Type:* string

Expected matching value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetvalue SyntheticsTest#targetvalue}

---

### SyntheticsTestAssertionTargetxpath <a name="SyntheticsTestAssertionTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestAssertionTargetxpath: syntheticsTest.SyntheticsTestAssertionTargetxpath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.operator">operator</a></code> | <code>string</code> | The specific operator to use on the path. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.targetvalue">targetvalue</a></code> | <code>string</code> | Expected matching value. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.xpath">xpath</a></code> | <code>string</code> | The xpath to assert. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The specific operator to use on the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `targetvalue`<sup>Required</sup> <a name="targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.targetvalue"></a>

```typescript
public readonly targetvalue: string;
```

- *Type:* string

Expected matching value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetvalue SyntheticsTest#targetvalue}

---

##### `xpath`<sup>Required</sup> <a name="xpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.xpath"></a>

```typescript
public readonly xpath: string;
```

- *Type:* string

The xpath to assert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#xpath SyntheticsTest#xpath}

---

### SyntheticsTestBrowserStep <a name="SyntheticsTestBrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestBrowserStep: syntheticsTest.SyntheticsTestBrowserStep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.name">name</a></code> | <code>string</code> | Name of the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.params">params</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.type">type</a></code> | <code>string</code> | Type of the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.allowFailure">allowFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the step should be allowed to fail. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.forceElementUpdate">forceElementUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Force update of the "element" parameter for the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.isCritical">isCritical</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether or not to consider the entire test as failed if this step fails. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.timeout">timeout</a></code> | <code>number</code> | Used to override the default timeout of a step. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.params"></a>

```typescript
public readonly params: SyntheticsTestBrowserStepParams;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a>

params block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#params SyntheticsTest#params}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the step.

Valid values are `assertCurrentUrl`, `assertElementAttribute`, `assertElementContent`, `assertElementPresent`, `assertEmail`, `assertFileDownload`, `assertFromJavascript`, `assertPageContains`, `assertPageLacks`, `click`, `extractFromJavascript`, `extractVariable`, `goToEmailLink`, `goToUrl`, `goToUrlAndMeasureTti`, `hover`, `playSubTest`, `pressKey`, `refresh`, `runApiTest`, `scroll`, `selectOption`, `typeText`, `uploadFiles`, `wait`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `allowFailure`<sup>Optional</sup> <a name="allowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.allowFailure"></a>

```typescript
public readonly allowFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the step should be allowed to fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#allow_failure SyntheticsTest#allow_failure}

---

##### `forceElementUpdate`<sup>Optional</sup> <a name="forceElementUpdate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.forceElementUpdate"></a>

```typescript
public readonly forceElementUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Force update of the "element" parameter for the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#force_element_update SyntheticsTest#force_element_update}

---

##### `isCritical`<sup>Optional</sup> <a name="isCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.isCritical"></a>

```typescript
public readonly isCritical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether or not to consider the entire test as failed if this step fails.

Can be used only if `allow_failure` is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#is_critical SyntheticsTest#is_critical}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Used to override the default timeout of a step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#timeout SyntheticsTest#timeout}

---

### SyntheticsTestBrowserStepParams <a name="SyntheticsTestBrowserStepParams" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestBrowserStepParams: syntheticsTest.SyntheticsTestBrowserStepParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.attribute">attribute</a></code> | <code>string</code> | Name of the attribute to use for an "assert attribute" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.check">check</a></code> | <code>string</code> | Check type to use for an assertion step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.clickType">clickType</a></code> | <code>string</code> | Type of click to use for a "click" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.code">code</a></code> | <code>string</code> | Javascript code to use for the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.delay">delay</a></code> | <code>number</code> | Delay between each key stroke for a "type test" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.element">element</a></code> | <code>string</code> | Element to use for the step, json encoded string. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.elementUserLocator">elementUserLocator</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a></code> | element_user_locator block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.email">email</a></code> | <code>string</code> | Details of the email for an "assert email" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.file">file</a></code> | <code>string</code> | For an "assert download" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.files">files</a></code> | <code>string</code> | Details of the files for an "upload files" step, json encoded string. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.modifiers">modifiers</a></code> | <code>string[]</code> | Modifier to use for a "press key" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.playingTabId">playingTabId</a></code> | <code>string</code> | ID of the tab to play the subtest. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.request">request</a></code> | <code>string</code> | Request for an API step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.subtestPublicId">subtestPublicId</a></code> | <code>string</code> | ID of the Synthetics test to use as subtest. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.value">value</a></code> | <code>string</code> | Value of the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a></code> | variable block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.withClick">withClick</a></code> | <code>boolean \| cdktf.IResolvable</code> | For "file upload" steps. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.x">x</a></code> | <code>number</code> | X coordinates for a "scroll step". |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.y">y</a></code> | <code>number</code> | Y coordinates for a "scroll step". |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Name of the attribute to use for an "assert attribute" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#attribute SyntheticsTest#attribute}

---

##### `check`<sup>Optional</sup> <a name="check" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.check"></a>

```typescript
public readonly check: string;
```

- *Type:* string

Check type to use for an assertion step.

Valid values are `equals`, `notEquals`, `contains`, `notContains`, `startsWith`, `notStartsWith`, `greater`, `lower`, `greaterEquals`, `lowerEquals`, `matchRegex`, `between`, `isEmpty`, `notIsEmpty`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#check SyntheticsTest#check}

---

##### `clickType`<sup>Optional</sup> <a name="clickType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.clickType"></a>

```typescript
public readonly clickType: string;
```

- *Type:* string

Type of click to use for a "click" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#click_type SyntheticsTest#click_type}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

Javascript code to use for the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#code SyntheticsTest#code}

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

Delay between each key stroke for a "type test" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#delay SyntheticsTest#delay}

---

##### `element`<sup>Optional</sup> <a name="element" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.element"></a>

```typescript
public readonly element: string;
```

- *Type:* string

Element to use for the step, json encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#element SyntheticsTest#element}

---

##### `elementUserLocator`<sup>Optional</sup> <a name="elementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.elementUserLocator"></a>

```typescript
public readonly elementUserLocator: SyntheticsTestBrowserStepParamsElementUserLocator;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a>

element_user_locator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#element_user_locator SyntheticsTest#element_user_locator}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Details of the email for an "assert email" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#email SyntheticsTest#email}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

For an "assert download" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#file SyntheticsTest#file}

---

##### `files`<sup>Optional</sup> <a name="files" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.files"></a>

```typescript
public readonly files: string;
```

- *Type:* string

Details of the files for an "upload files" step, json encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#files SyntheticsTest#files}

---

##### `modifiers`<sup>Optional</sup> <a name="modifiers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.modifiers"></a>

```typescript
public readonly modifiers: string[];
```

- *Type:* string[]

Modifier to use for a "press key" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#modifiers SyntheticsTest#modifiers}

---

##### `playingTabId`<sup>Optional</sup> <a name="playingTabId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.playingTabId"></a>

```typescript
public readonly playingTabId: string;
```

- *Type:* string

ID of the tab to play the subtest.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#playing_tab_id SyntheticsTest#playing_tab_id}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

Request for an API step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request SyntheticsTest#request}

---

##### `subtestPublicId`<sup>Optional</sup> <a name="subtestPublicId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.subtestPublicId"></a>

```typescript
public readonly subtestPublicId: string;
```

- *Type:* string

ID of the Synthetics test to use as subtest.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#subtest_public_id SyntheticsTest#subtest_public_id}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.variable"></a>

```typescript
public readonly variable: SyntheticsTestBrowserStepParamsVariable;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a>

variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#variable SyntheticsTest#variable}

---

##### `withClick`<sup>Optional</sup> <a name="withClick" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.withClick"></a>

```typescript
public readonly withClick: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

For "file upload" steps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#with_click SyntheticsTest#with_click}

---

##### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.x"></a>

```typescript
public readonly x: number;
```

- *Type:* number

X coordinates for a "scroll step".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#x SyntheticsTest#x}

---

##### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.y"></a>

```typescript
public readonly y: number;
```

- *Type:* number

Y coordinates for a "scroll step".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#y SyntheticsTest#y}

---

### SyntheticsTestBrowserStepParamsElementUserLocator <a name="SyntheticsTestBrowserStepParamsElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestBrowserStepParamsElementUserLocator: syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.property.value">value</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a></code> | value block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.property.failTestOnCannotLocate">failTestOnCannotLocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#fail_test_on_cannot_locate SyntheticsTest#fail_test_on_cannot_locate}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.property.value"></a>

```typescript
public readonly value: SyntheticsTestBrowserStepParamsElementUserLocatorValue;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a>

value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}

---

##### `failTestOnCannotLocate`<sup>Optional</sup> <a name="failTestOnCannotLocate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.property.failTestOnCannotLocate"></a>

```typescript
public readonly failTestOnCannotLocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#fail_test_on_cannot_locate SyntheticsTest#fail_test_on_cannot_locate}.

---

### SyntheticsTestBrowserStepParamsElementUserLocatorValue <a name="SyntheticsTestBrowserStepParamsElementUserLocatorValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestBrowserStepParamsElementUserLocatorValue: syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}.

---

### SyntheticsTestBrowserStepParamsVariable <a name="SyntheticsTestBrowserStepParamsVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestBrowserStepParamsVariable: syntheticsTest.SyntheticsTestBrowserStepParamsVariable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.property.example">example</a></code> | <code>string</code> | Example of the extracted variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.property.name">name</a></code> | <code>string</code> | Name of the extracted variable. |

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.property.example"></a>

```typescript
public readonly example: string;
```

- *Type:* string

Example of the extracted variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#example SyntheticsTest#example}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the extracted variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

### SyntheticsTestBrowserVariable <a name="SyntheticsTestBrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestBrowserVariable: syntheticsTest.SyntheticsTestBrowserVariable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.name">name</a></code> | <code>string</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.type">type</a></code> | <code>string</code> | Type of browser test variable. Valid values are `element`, `email`, `global`, `javascript`, `text`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.example">example</a></code> | <code>string</code> | Example for the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.id">id</a></code> | <code>string</code> | ID of the global variable to use. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.pattern">pattern</a></code> | <code>string</code> | Pattern of the variable. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of browser test variable. Valid values are `element`, `email`, `global`, `javascript`, `text`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.example"></a>

```typescript
public readonly example: string;
```

- *Type:* string

Example for the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#example SyntheticsTest#example}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the global variable to use.

This is actually only used (and required) in the case of using a variable of type `global`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#id SyntheticsTest#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Pattern of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#pattern SyntheticsTest#pattern}

---

### SyntheticsTestConfig <a name="SyntheticsTestConfig" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestConfig: syntheticsTest.SyntheticsTestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.locations">locations</a></code> | <code>string[]</code> | Array of locations used to run the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.name">name</a></code> | <code>string</code> | Name of Datadog synthetics test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.status">status</a></code> | <code>string</code> | Define whether you want to start (`live`) or pause (`paused`) a Synthetic test. Valid values are `live`, `paused`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.type">type</a></code> | <code>string</code> | Synthetics test type. Valid values are `api`, `browser`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.apiStep">apiStep</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep">SyntheticsTestApiStep</a>[]</code> | api_step block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.assertion">assertion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion">SyntheticsTestAssertion</a>[]</code> | assertion block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.browserStep">browserStep</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep">SyntheticsTestBrowserStep</a>[]</code> | browser_step block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.browserVariable">browserVariable</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable">SyntheticsTestBrowserVariable</a>[]</code> | browser_variable block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.configVariable">configVariable</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable">SyntheticsTestConfigVariable</a>[]</code> | config_variable block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.deviceIds">deviceIds</a></code> | <code>string[]</code> | Required if `type = "browser"`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#id SyntheticsTest#id}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.message">message</a></code> | <code>string</code> | A message to include with notifications for this synthetics test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.optionsList">optionsList</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a></code> | options_list block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestBasicauth">requestBasicauth</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a></code> | request_basicauth block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestClientCertificate">requestClientCertificate</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a></code> | request_client_certificate block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestDefinition">requestDefinition</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a></code> | request_definition block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | Header name and value map. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestProxy">requestProxy</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a></code> | request_proxy block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestQuery">requestQuery</a></code> | <code>{[ key: string ]: string}</code> | Query arguments name and value map. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.setCookie">setCookie</a></code> | <code>string</code> | Cookies to be used for a browser test request, using the [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) syntax. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.subtype">subtype</a></code> | <code>string</code> | The subtype of the Synthetic API test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tags to associate with your synthetics test. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

Array of locations used to run the test.

Refer to [the Datadog Synthetics location data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/synthetics_locations) to retrieve the list of locations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#locations SyntheticsTest#locations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of Datadog synthetics test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Define whether you want to start (`live`) or pause (`paused`) a Synthetic test. Valid values are `live`, `paused`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#status SyntheticsTest#status}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Synthetics test type. Valid values are `api`, `browser`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `apiStep`<sup>Optional</sup> <a name="apiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.apiStep"></a>

```typescript
public readonly apiStep: IResolvable | SyntheticsTestApiStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep">SyntheticsTestApiStep</a>[]

api_step block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#api_step SyntheticsTest#api_step}

---

##### `assertion`<sup>Optional</sup> <a name="assertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.assertion"></a>

```typescript
public readonly assertion: IResolvable | SyntheticsTestAssertion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion">SyntheticsTestAssertion</a>[]

assertion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#assertion SyntheticsTest#assertion}

---

##### `browserStep`<sup>Optional</sup> <a name="browserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.browserStep"></a>

```typescript
public readonly browserStep: IResolvable | SyntheticsTestBrowserStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep">SyntheticsTestBrowserStep</a>[]

browser_step block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#browser_step SyntheticsTest#browser_step}

---

##### `browserVariable`<sup>Optional</sup> <a name="browserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.browserVariable"></a>

```typescript
public readonly browserVariable: IResolvable | SyntheticsTestBrowserVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable">SyntheticsTestBrowserVariable</a>[]

browser_variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#browser_variable SyntheticsTest#browser_variable}

---

##### `configVariable`<sup>Optional</sup> <a name="configVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.configVariable"></a>

```typescript
public readonly configVariable: IResolvable | SyntheticsTestConfigVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable">SyntheticsTestConfigVariable</a>[]

config_variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#config_variable SyntheticsTest#config_variable}

---

##### `deviceIds`<sup>Optional</sup> <a name="deviceIds" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.deviceIds"></a>

```typescript
public readonly deviceIds: string[];
```

- *Type:* string[]

Required if `type = "browser"`.

Array with the different device IDs used to run the test. Valid values are `laptop_large`, `tablet`, `mobile_small`, `chrome.laptop_large`, `chrome.tablet`, `chrome.mobile_small`, `firefox.laptop_large`, `firefox.tablet`, `firefox.mobile_small`, `edge.laptop_large`, `edge.tablet`, `edge.mobile_small`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#device_ids SyntheticsTest#device_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#id SyntheticsTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

A message to include with notifications for this synthetics test.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#message SyntheticsTest#message}

---

##### `optionsList`<sup>Optional</sup> <a name="optionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.optionsList"></a>

```typescript
public readonly optionsList: SyntheticsTestOptionsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a>

options_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#options_list SyntheticsTest#options_list}

---

##### `requestBasicauth`<sup>Optional</sup> <a name="requestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestBasicauth"></a>

```typescript
public readonly requestBasicauth: SyntheticsTestRequestBasicauth;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a>

request_basicauth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_basicauth SyntheticsTest#request_basicauth}

---

##### `requestClientCertificate`<sup>Optional</sup> <a name="requestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestClientCertificate"></a>

```typescript
public readonly requestClientCertificate: SyntheticsTestRequestClientCertificate;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a>

request_client_certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_client_certificate SyntheticsTest#request_client_certificate}

---

##### `requestDefinition`<sup>Optional</sup> <a name="requestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestDefinition"></a>

```typescript
public readonly requestDefinition: SyntheticsTestRequestDefinition;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a>

request_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_definition SyntheticsTest#request_definition}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Header name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_headers SyntheticsTest#request_headers}

---

##### `requestProxy`<sup>Optional</sup> <a name="requestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestProxy"></a>

```typescript
public readonly requestProxy: SyntheticsTestRequestProxy;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a>

request_proxy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_proxy SyntheticsTest#request_proxy}

---

##### `requestQuery`<sup>Optional</sup> <a name="requestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestQuery"></a>

```typescript
public readonly requestQuery: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Query arguments name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_query SyntheticsTest#request_query}

---

##### `setCookie`<sup>Optional</sup> <a name="setCookie" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.setCookie"></a>

```typescript
public readonly setCookie: string;
```

- *Type:* string

Cookies to be used for a browser test request, using the [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) syntax.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#set_cookie SyntheticsTest#set_cookie}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

The subtype of the Synthetic API test.

Defaults to `http`. Valid values are `http`, `ssl`, `tcp`, `dns`, `multi`, `icmp`, `udp`, `websocket`, `grpc`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#subtype SyntheticsTest#subtype}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tags to associate with your synthetics test.

This can help you categorize and filter tests in the manage synthetics page of the UI. Default is an empty list (`[]`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#tags SyntheticsTest#tags}

---

### SyntheticsTestConfigVariable <a name="SyntheticsTestConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestConfigVariable: syntheticsTest.SyntheticsTestConfigVariable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.name">name</a></code> | <code>string</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.type">type</a></code> | <code>string</code> | Type of test configuration variable. Valid values are `global`, `text`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.example">example</a></code> | <code>string</code> | Example for the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.id">id</a></code> | <code>string</code> | When type = `global`, ID of the global variable to use. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.pattern">pattern</a></code> | <code>string</code> | Pattern of the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.secure">secure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the value of this variable will be obfuscated in test results. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of test configuration variable. Valid values are `global`, `text`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.example"></a>

```typescript
public readonly example: string;
```

- *Type:* string

Example for the variable.

This value is not returned by the api when `secure = true`. Avoid drift by only making updates to this value from within Terraform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#example SyntheticsTest#example}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

When type = `global`, ID of the global variable to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#id SyntheticsTest#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Pattern of the variable.

This value is not returned by the api when `secure = true`. Avoid drift by only making updates to this value from within Terraform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#pattern SyntheticsTest#pattern}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.secure"></a>

```typescript
public readonly secure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the value of this variable will be obfuscated in test results.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#secure SyntheticsTest#secure}

---

### SyntheticsTestOptionsList <a name="SyntheticsTestOptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestOptionsList: syntheticsTest.SyntheticsTestOptionsList = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.tickEvery">tickEvery</a></code> | <code>number</code> | How often the test should run (in seconds). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.acceptSelfSigned">acceptSelfSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | For SSL test, whether or not the test should allow self signed certificates. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.allowInsecure">allowInsecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows loading insecure content for an HTTP test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.checkCertificateRevocation">checkCertificateRevocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | For SSL test, whether or not the test should fail on revoked certificate in stapled OCSP. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.ci">ci</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a></code> | ci block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.disableCors">disableCors</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable Cross-Origin Resource Sharing for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.disableCsp">disableCsp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable Content Security Policy for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.followRedirects">followRedirects</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether or not the API HTTP test should follow redirects. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.httpVersion">httpVersion</a></code> | <code>string</code> | HTTP version to use for a Synthetics API test. Valid values are `http1`, `http2`, `any`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.ignoreServerCertificateError">ignoreServerCertificateError</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore server certificate error. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.initialNavigationTimeout">initialNavigationTimeout</a></code> | <code>number</code> | Timeout before declaring the initial step as failed (in seconds) for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.minFailureDuration">minFailureDuration</a></code> | <code>number</code> | Minimum amount of time in failure required to trigger an alert. Default is `0`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.minLocationFailed">minLocationFailed</a></code> | <code>number</code> | Minimum number of locations in failure required to trigger an alert. Default is `1`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorName">monitorName</a></code> | <code>string</code> | The monitor name is used for the alert title as well as for all monitor dashboard widgets and SLOs. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorOptions">monitorOptions</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a></code> | monitor_options block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorPriority">monitorPriority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#monitor_priority SyntheticsTest#monitor_priority}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.noScreenshot">noScreenshot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevents saving screenshots of the steps. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.restrictedRoles">restrictedRoles</a></code> | <code>string[]</code> | A list of role identifiers pulled from the Roles API to restrict read and write access. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.rumSettings">rumSettings</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a></code> | rum_settings block. |

---

##### `tickEvery`<sup>Required</sup> <a name="tickEvery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.tickEvery"></a>

```typescript
public readonly tickEvery: number;
```

- *Type:* number

How often the test should run (in seconds).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#tick_every SyntheticsTest#tick_every}

---

##### `acceptSelfSigned`<sup>Optional</sup> <a name="acceptSelfSigned" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.acceptSelfSigned"></a>

```typescript
public readonly acceptSelfSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

For SSL test, whether or not the test should allow self signed certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#accept_self_signed SyntheticsTest#accept_self_signed}

---

##### `allowInsecure`<sup>Optional</sup> <a name="allowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.allowInsecure"></a>

```typescript
public readonly allowInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows loading insecure content for an HTTP test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#allow_insecure SyntheticsTest#allow_insecure}

---

##### `checkCertificateRevocation`<sup>Optional</sup> <a name="checkCertificateRevocation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.checkCertificateRevocation"></a>

```typescript
public readonly checkCertificateRevocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

For SSL test, whether or not the test should fail on revoked certificate in stapled OCSP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#check_certificate_revocation SyntheticsTest#check_certificate_revocation}

---

##### `ci`<sup>Optional</sup> <a name="ci" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.ci"></a>

```typescript
public readonly ci: SyntheticsTestOptionsListCi;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a>

ci block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#ci SyntheticsTest#ci}

---

##### `disableCors`<sup>Optional</sup> <a name="disableCors" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.disableCors"></a>

```typescript
public readonly disableCors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable Cross-Origin Resource Sharing for browser tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#disable_cors SyntheticsTest#disable_cors}

---

##### `disableCsp`<sup>Optional</sup> <a name="disableCsp" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.disableCsp"></a>

```typescript
public readonly disableCsp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable Content Security Policy for browser tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#disable_csp SyntheticsTest#disable_csp}

---

##### `followRedirects`<sup>Optional</sup> <a name="followRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.followRedirects"></a>

```typescript
public readonly followRedirects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether or not the API HTTP test should follow redirects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#follow_redirects SyntheticsTest#follow_redirects}

---

##### `httpVersion`<sup>Optional</sup> <a name="httpVersion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.httpVersion"></a>

```typescript
public readonly httpVersion: string;
```

- *Type:* string

HTTP version to use for a Synthetics API test. Valid values are `http1`, `http2`, `any`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#http_version SyntheticsTest#http_version}

---

##### `ignoreServerCertificateError`<sup>Optional</sup> <a name="ignoreServerCertificateError" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.ignoreServerCertificateError"></a>

```typescript
public readonly ignoreServerCertificateError: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore server certificate error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#ignore_server_certificate_error SyntheticsTest#ignore_server_certificate_error}

---

##### `initialNavigationTimeout`<sup>Optional</sup> <a name="initialNavigationTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.initialNavigationTimeout"></a>

```typescript
public readonly initialNavigationTimeout: number;
```

- *Type:* number

Timeout before declaring the initial step as failed (in seconds) for browser tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#initial_navigation_timeout SyntheticsTest#initial_navigation_timeout}

---

##### `minFailureDuration`<sup>Optional</sup> <a name="minFailureDuration" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.minFailureDuration"></a>

```typescript
public readonly minFailureDuration: number;
```

- *Type:* number

Minimum amount of time in failure required to trigger an alert. Default is `0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#min_failure_duration SyntheticsTest#min_failure_duration}

---

##### `minLocationFailed`<sup>Optional</sup> <a name="minLocationFailed" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.minLocationFailed"></a>

```typescript
public readonly minLocationFailed: number;
```

- *Type:* number

Minimum number of locations in failure required to trigger an alert. Default is `1`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#min_location_failed SyntheticsTest#min_location_failed}

---

##### `monitorName`<sup>Optional</sup> <a name="monitorName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

The monitor name is used for the alert title as well as for all monitor dashboard widgets and SLOs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#monitor_name SyntheticsTest#monitor_name}

---

##### `monitorOptions`<sup>Optional</sup> <a name="monitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorOptions"></a>

```typescript
public readonly monitorOptions: SyntheticsTestOptionsListMonitorOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a>

monitor_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#monitor_options SyntheticsTest#monitor_options}

---

##### `monitorPriority`<sup>Optional</sup> <a name="monitorPriority" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorPriority"></a>

```typescript
public readonly monitorPriority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#monitor_priority SyntheticsTest#monitor_priority}.

---

##### `noScreenshot`<sup>Optional</sup> <a name="noScreenshot" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.noScreenshot"></a>

```typescript
public readonly noScreenshot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevents saving screenshots of the steps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#no_screenshot SyntheticsTest#no_screenshot}

---

##### `restrictedRoles`<sup>Optional</sup> <a name="restrictedRoles" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.restrictedRoles"></a>

```typescript
public readonly restrictedRoles: string[];
```

- *Type:* string[]

A list of role identifiers pulled from the Roles API to restrict read and write access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#restricted_roles SyntheticsTest#restricted_roles}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.retry"></a>

```typescript
public readonly retry: SyntheticsTestOptionsListRetry;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a>

retry block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#retry SyntheticsTest#retry}

---

##### `rumSettings`<sup>Optional</sup> <a name="rumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.rumSettings"></a>

```typescript
public readonly rumSettings: SyntheticsTestOptionsListRumSettings;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a>

rum_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#rum_settings SyntheticsTest#rum_settings}

---

### SyntheticsTestOptionsListCi <a name="SyntheticsTestOptionsListCi" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestOptionsListCi: syntheticsTest.SyntheticsTestOptionsListCi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi.property.executionRule">executionRule</a></code> | <code>string</code> | Execution rule for a Synthetics test. Valid values are `blocking`, `non_blocking`, `skipped`. |

---

##### `executionRule`<sup>Optional</sup> <a name="executionRule" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi.property.executionRule"></a>

```typescript
public readonly executionRule: string;
```

- *Type:* string

Execution rule for a Synthetics test. Valid values are `blocking`, `non_blocking`, `skipped`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#execution_rule SyntheticsTest#execution_rule}

---

### SyntheticsTestOptionsListMonitorOptions <a name="SyntheticsTestOptionsListMonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestOptionsListMonitorOptions: syntheticsTest.SyntheticsTestOptionsListMonitorOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions.property.renotifyInterval">renotifyInterval</a></code> | <code>number</code> | Specify a renotification frequency. |

---

##### `renotifyInterval`<sup>Optional</sup> <a name="renotifyInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions.property.renotifyInterval"></a>

```typescript
public readonly renotifyInterval: number;
```

- *Type:* number

Specify a renotification frequency.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#renotify_interval SyntheticsTest#renotify_interval}

---

### SyntheticsTestOptionsListRetry <a name="SyntheticsTestOptionsListRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestOptionsListRetry: syntheticsTest.SyntheticsTestOptionsListRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.property.count">count</a></code> | <code>number</code> | Number of retries needed to consider a location as failed before sending a notification alert. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.property.interval">interval</a></code> | <code>number</code> | Interval between a failed test and the next retry in milliseconds. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Number of retries needed to consider a location as failed before sending a notification alert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#count SyntheticsTest#count}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Interval between a failed test and the next retry in milliseconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#interval SyntheticsTest#interval}

---

### SyntheticsTestOptionsListRumSettings <a name="SyntheticsTestOptionsListRumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestOptionsListRumSettings: syntheticsTest.SyntheticsTestOptionsListRumSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether RUM data is collected during test runs. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.applicationId">applicationId</a></code> | <code>string</code> | RUM application ID used to collect RUM data for the browser test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.clientTokenId">clientTokenId</a></code> | <code>number</code> | RUM application API key ID used to collect RUM data for the browser test. |

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether RUM data is collected during test runs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#is_enabled SyntheticsTest#is_enabled}

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

RUM application ID used to collect RUM data for the browser test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#application_id SyntheticsTest#application_id}

---

##### `clientTokenId`<sup>Optional</sup> <a name="clientTokenId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.clientTokenId"></a>

```typescript
public readonly clientTokenId: number;
```

- *Type:* number

RUM application API key ID used to collect RUM data for the browser test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_token_id SyntheticsTest#client_token_id}

---

### SyntheticsTestRequestBasicauth <a name="SyntheticsTestRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestRequestBasicauth: syntheticsTest.SyntheticsTestRequestBasicauth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.accessKey">accessKey</a></code> | <code>string</code> | Access key for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.accessTokenUrl">accessTokenUrl</a></code> | <code>string</code> | Access token url for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.audience">audience</a></code> | <code>string</code> | Audience for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.clientId">clientId</a></code> | <code>string</code> | Client ID for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.clientSecret">clientSecret</a></code> | <code>string</code> | Client secret for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.domain">domain</a></code> | <code>string</code> | Domain for `ntlm` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.password">password</a></code> | <code>string</code> | Password for authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.region">region</a></code> | <code>string</code> | Region for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.resource">resource</a></code> | <code>string</code> | Resource for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.scope">scope</a></code> | <code>string</code> | Scope for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.secretKey">secretKey</a></code> | <code>string</code> | Secret key for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.serviceName">serviceName</a></code> | <code>string</code> | Service name for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.sessionToken">sessionToken</a></code> | <code>string</code> | Session token for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.tokenApiAuthentication">tokenApiAuthentication</a></code> | <code>string</code> | Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.type">type</a></code> | <code>string</code> | Type of basic authentication to use when performing the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.username">username</a></code> | <code>string</code> | Username for authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.workstation">workstation</a></code> | <code>string</code> | Workstation for `ntlm` authentication. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

Access key for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#access_key SyntheticsTest#access_key}

---

##### `accessTokenUrl`<sup>Optional</sup> <a name="accessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.accessTokenUrl"></a>

```typescript
public readonly accessTokenUrl: string;
```

- *Type:* string

Access token url for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#access_token_url SyntheticsTest#access_token_url}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#audience SyntheticsTest#audience}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Client ID for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_id SyntheticsTest#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Client secret for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_secret SyntheticsTest#client_secret}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain for `ntlm` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#domain SyntheticsTest#domain}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#password SyntheticsTest#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#region SyntheticsTest#region}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Resource for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#resource SyntheticsTest#resource}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Scope for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#scope SyntheticsTest#scope}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

Secret key for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#secret_key SyntheticsTest#secret_key}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Service name for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#service_name SyntheticsTest#service_name}

---

##### `sessionToken`<sup>Optional</sup> <a name="sessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.sessionToken"></a>

```typescript
public readonly sessionToken: string;
```

- *Type:* string

Session token for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#session_token SyntheticsTest#session_token}

---

##### `tokenApiAuthentication`<sup>Optional</sup> <a name="tokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.tokenApiAuthentication"></a>

```typescript
public readonly tokenApiAuthentication: string;
```

- *Type:* string

Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#token_api_authentication SyntheticsTest#token_api_authentication}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of basic authentication to use when performing the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#username SyntheticsTest#username}

---

##### `workstation`<sup>Optional</sup> <a name="workstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.workstation"></a>

```typescript
public readonly workstation: string;
```

- *Type:* string

Workstation for `ntlm` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#workstation SyntheticsTest#workstation}

---

### SyntheticsTestRequestClientCertificate <a name="SyntheticsTestRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestRequestClientCertificate: syntheticsTest.SyntheticsTestRequestClientCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.property.cert">cert</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a></code> | cert block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.property.key">key</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a></code> | key block. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.property.cert"></a>

```typescript
public readonly cert: SyntheticsTestRequestClientCertificateCert;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a>

cert block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#cert SyntheticsTest#cert}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.property.key"></a>

```typescript
public readonly key: SyntheticsTestRequestClientCertificateKey;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a>

key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#key SyntheticsTest#key}

---

### SyntheticsTestRequestClientCertificateCert <a name="SyntheticsTestRequestClientCertificateCert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestRequestClientCertificateCert: syntheticsTest.SyntheticsTestRequestClientCertificateCert = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.property.content">content</a></code> | <code>string</code> | Content of the certificate. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.property.filename">filename</a></code> | <code>string</code> | File name for the certificate. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Content of the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#content SyntheticsTest#content}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

File name for the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#filename SyntheticsTest#filename}

---

### SyntheticsTestRequestClientCertificateKey <a name="SyntheticsTestRequestClientCertificateKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestRequestClientCertificateKey: syntheticsTest.SyntheticsTestRequestClientCertificateKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.property.content">content</a></code> | <code>string</code> | Content of the certificate. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.property.filename">filename</a></code> | <code>string</code> | File name for the certificate. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Content of the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#content SyntheticsTest#content}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

File name for the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#filename SyntheticsTest#filename}

---

### SyntheticsTestRequestDefinition <a name="SyntheticsTestRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestRequestDefinition: syntheticsTest.SyntheticsTestRequestDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.body">body</a></code> | <code>string</code> | The request body. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.bodyType">bodyType</a></code> | <code>string</code> | Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.callType">callType</a></code> | <code>string</code> | The type of gRPC call to perform. Valid values are `healthcheck`, `unary`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.certificateDomains">certificateDomains</a></code> | <code>string[]</code> | By default, the client certificate is applied on the domain of the starting URL for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.dnsServer">dnsServer</a></code> | <code>string</code> | DNS server to use for DNS tests (`subtype = "dns"`). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.dnsServerPort">dnsServerPort</a></code> | <code>number</code> | DNS server port to use for DNS tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.host">host</a></code> | <code>string</code> | Host name to perform the test with. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.message">message</a></code> | <code>string</code> | For UDP and websocket tests, message to send with the request. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.method">method</a></code> | <code>string</code> | Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.noSavingResponseBody">noSavingResponseBody</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether or not to save the response body. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.numberOfPackets">numberOfPackets</a></code> | <code>number</code> | Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.port">port</a></code> | <code>number</code> | Port to use when performing the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.servername">servername</a></code> | <code>string</code> | For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.service">service</a></code> | <code>string</code> | The gRPC service on which you want to perform the gRPC call. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.shouldTrackHops">shouldTrackHops</a></code> | <code>boolean \| cdktf.IResolvable</code> | This will turn on a traceroute probe to discover all gateways along the path to the host destination. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.timeout">timeout</a></code> | <code>number</code> | Timeout in seconds for the test. Defaults to `60`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.url">url</a></code> | <code>string</code> | The URL to send the request to. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

The request body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#body SyntheticsTest#body}

---

##### `bodyType`<sup>Optional</sup> <a name="bodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.bodyType"></a>

```typescript
public readonly bodyType: string;
```

- *Type:* string

Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#body_type SyntheticsTest#body_type}

---

##### `callType`<sup>Optional</sup> <a name="callType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.callType"></a>

```typescript
public readonly callType: string;
```

- *Type:* string

The type of gRPC call to perform. Valid values are `healthcheck`, `unary`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#call_type SyntheticsTest#call_type}

---

##### `certificateDomains`<sup>Optional</sup> <a name="certificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.certificateDomains"></a>

```typescript
public readonly certificateDomains: string[];
```

- *Type:* string[]

By default, the client certificate is applied on the domain of the starting URL for browser tests.

If you want your client certificate to be applied on other domains instead, add them in `certificate_domains`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#certificate_domains SyntheticsTest#certificate_domains}

---

##### `dnsServer`<sup>Optional</sup> <a name="dnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.dnsServer"></a>

```typescript
public readonly dnsServer: string;
```

- *Type:* string

DNS server to use for DNS tests (`subtype = "dns"`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#dns_server SyntheticsTest#dns_server}

---

##### `dnsServerPort`<sup>Optional</sup> <a name="dnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.dnsServerPort"></a>

```typescript
public readonly dnsServerPort: number;
```

- *Type:* number

DNS server port to use for DNS tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#dns_server_port SyntheticsTest#dns_server_port}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Host name to perform the test with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#host SyntheticsTest#host}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

For UDP and websocket tests, message to send with the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#message SyntheticsTest#message}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field.

Required if `subtype` is `HTTP` or if `subtype` is `grpc` and `callType` is `unary`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#method SyntheticsTest#method}

---

##### `noSavingResponseBody`<sup>Optional</sup> <a name="noSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.noSavingResponseBody"></a>

```typescript
public readonly noSavingResponseBody: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether or not to save the response body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#no_saving_response_body SyntheticsTest#no_saving_response_body}

---

##### `numberOfPackets`<sup>Optional</sup> <a name="numberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.numberOfPackets"></a>

```typescript
public readonly numberOfPackets: number;
```

- *Type:* number

Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#number_of_packets SyntheticsTest#number_of_packets}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port to use when performing the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#port SyntheticsTest#port}

---

##### `servername`<sup>Optional</sup> <a name="servername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.servername"></a>

```typescript
public readonly servername: string;
```

- *Type:* string

For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#servername SyntheticsTest#servername}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The gRPC service on which you want to perform the gRPC call.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#service SyntheticsTest#service}

---

##### `shouldTrackHops`<sup>Optional</sup> <a name="shouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.shouldTrackHops"></a>

```typescript
public readonly shouldTrackHops: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This will turn on a traceroute probe to discover all gateways along the path to the host destination.

For ICMP tests (`subtype = "icmp"`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#should_track_hops SyntheticsTest#should_track_hops}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Timeout in seconds for the test. Defaults to `60`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#timeout SyntheticsTest#timeout}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL to send the request to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#url SyntheticsTest#url}

---

### SyntheticsTestRequestProxy <a name="SyntheticsTestRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

const syntheticsTestRequestProxy: syntheticsTest.SyntheticsTestRequestProxy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.property.url">url</a></code> | <code>string</code> | URL of the proxy to perform the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | Header name and value map. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL of the proxy to perform the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#url SyntheticsTest#url}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Header name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#headers SyntheticsTest#headers}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsTestApiStepAssertionList <a name="SyntheticsTestApiStepAssertionList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepAssertionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.get"></a>

```typescript
public get(index: number): SyntheticsTestApiStepAssertionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion">SyntheticsTestApiStepAssertion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsTestApiStepAssertion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion">SyntheticsTestApiStepAssertion</a>[]

---


### SyntheticsTestApiStepAssertionOutputReference <a name="SyntheticsTestApiStepAssertionOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepAssertionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetjsonpath">putTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetxpath">putTargetxpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetProperty">resetProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTargetjsonpath">resetTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTargetxpath">resetTargetxpath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetjsonpath` <a name="putTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetjsonpath"></a>

```typescript
public putTargetjsonpath(value: SyntheticsTestApiStepAssertionTargetjsonpath): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetjsonpath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a>

---

##### `putTargetxpath` <a name="putTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetxpath"></a>

```typescript
public putTargetxpath(value: SyntheticsTestApiStepAssertionTargetxpath): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetxpath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a>

---

##### `resetProperty` <a name="resetProperty" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetProperty"></a>

```typescript
public resetProperty(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTargetjsonpath` <a name="resetTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTargetjsonpath"></a>

```typescript
public resetTargetjsonpath(): void
```

##### `resetTargetxpath` <a name="resetTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTargetxpath"></a>

```typescript
public resetTargetxpath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetjsonpath">targetjsonpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference">SyntheticsTestApiStepAssertionTargetjsonpathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetxpath">targetxpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference">SyntheticsTestApiStepAssertionTargetxpathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.propertyInput">propertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetjsonpathInput">targetjsonpathInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetxpathInput">targetxpathInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.property">property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion">SyntheticsTestApiStepAssertion</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetjsonpath`<sup>Required</sup> <a name="targetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetjsonpath"></a>

```typescript
public readonly targetjsonpath: SyntheticsTestApiStepAssertionTargetjsonpathOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference">SyntheticsTestApiStepAssertionTargetjsonpathOutputReference</a>

---

##### `targetxpath`<sup>Required</sup> <a name="targetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetxpath"></a>

```typescript
public readonly targetxpath: SyntheticsTestApiStepAssertionTargetxpathOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference">SyntheticsTestApiStepAssertionTargetxpathOutputReference</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.propertyInput"></a>

```typescript
public readonly propertyInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `targetjsonpathInput`<sup>Optional</sup> <a name="targetjsonpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetjsonpathInput"></a>

```typescript
public readonly targetjsonpathInput: SyntheticsTestApiStepAssertionTargetjsonpath;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a>

---

##### `targetxpathInput`<sup>Optional</sup> <a name="targetxpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetxpathInput"></a>

```typescript
public readonly targetxpathInput: SyntheticsTestApiStepAssertionTargetxpath;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStepAssertion | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion">SyntheticsTestApiStepAssertion</a> | cdktf.IResolvable

---


### SyntheticsTestApiStepAssertionTargetjsonpathOutputReference <a name="SyntheticsTestApiStepAssertionTargetjsonpathOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.jsonpathInput">jsonpathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.targetvalueInput">targetvalueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.jsonpath">jsonpath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.targetvalue">targetvalue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonpathInput`<sup>Optional</sup> <a name="jsonpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.jsonpathInput"></a>

```typescript
public readonly jsonpathInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `targetvalueInput`<sup>Optional</sup> <a name="targetvalueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.targetvalueInput"></a>

```typescript
public readonly targetvalueInput: string;
```

- *Type:* string

---

##### `jsonpath`<sup>Required</sup> <a name="jsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.jsonpath"></a>

```typescript
public readonly jsonpath: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `targetvalue`<sup>Required</sup> <a name="targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.targetvalue"></a>

```typescript
public readonly targetvalue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStepAssertionTargetjsonpath;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a>

---


### SyntheticsTestApiStepAssertionTargetxpathOutputReference <a name="SyntheticsTestApiStepAssertionTargetxpathOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.targetvalueInput">targetvalueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.xpathInput">xpathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.targetvalue">targetvalue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.xpath">xpath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `targetvalueInput`<sup>Optional</sup> <a name="targetvalueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.targetvalueInput"></a>

```typescript
public readonly targetvalueInput: string;
```

- *Type:* string

---

##### `xpathInput`<sup>Optional</sup> <a name="xpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.xpathInput"></a>

```typescript
public readonly xpathInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `targetvalue`<sup>Required</sup> <a name="targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.targetvalue"></a>

```typescript
public readonly targetvalue: string;
```

- *Type:* string

---

##### `xpath`<sup>Required</sup> <a name="xpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.xpath"></a>

```typescript
public readonly xpath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStepAssertionTargetxpath;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a>

---


### SyntheticsTestApiStepExtractedValueList <a name="SyntheticsTestApiStepExtractedValueList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepExtractedValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.get"></a>

```typescript
public get(index: number): SyntheticsTestApiStepExtractedValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue">SyntheticsTestApiStepExtractedValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsTestApiStepExtractedValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue">SyntheticsTestApiStepExtractedValue</a>[]

---


### SyntheticsTestApiStepExtractedValueOutputReference <a name="SyntheticsTestApiStepExtractedValueOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.putParser">putParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParser` <a name="putParser" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.putParser"></a>

```typescript
public putParser(value: SyntheticsTestApiStepExtractedValueParser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.putParser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a>

---

##### `resetField` <a name="resetField" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resetField"></a>

```typescript
public resetField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.parser">parser</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference">SyntheticsTestApiStepExtractedValueParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.parserInput">parserInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue">SyntheticsTestApiStepExtractedValue</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parser`<sup>Required</sup> <a name="parser" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.parser"></a>

```typescript
public readonly parser: SyntheticsTestApiStepExtractedValueParserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference">SyntheticsTestApiStepExtractedValueParserOutputReference</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parserInput`<sup>Optional</sup> <a name="parserInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.parserInput"></a>

```typescript
public readonly parserInput: SyntheticsTestApiStepExtractedValueParser;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStepExtractedValue | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue">SyntheticsTestApiStepExtractedValue</a> | cdktf.IResolvable

---


### SyntheticsTestApiStepExtractedValueParserOutputReference <a name="SyntheticsTestApiStepExtractedValueParserOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStepExtractedValueParser;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a>

---


### SyntheticsTestApiStepList <a name="SyntheticsTestApiStepList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.get"></a>

```typescript
public get(index: number): SyntheticsTestApiStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep">SyntheticsTestApiStep</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsTestApiStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep">SyntheticsTestApiStep</a>[]

---


### SyntheticsTestApiStepOutputReference <a name="SyntheticsTestApiStepOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putAssertion">putAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putExtractedValue">putExtractedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestBasicauth">putRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestClientCertificate">putRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestDefinition">putRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestProxy">putRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetAllowFailure">resetAllowFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetAssertion">resetAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetExtractedValue">resetExtractedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetIsCritical">resetIsCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestBasicauth">resetRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestClientCertificate">resetRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestDefinition">resetRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestProxy">resetRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestQuery">resetRequestQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetSubtype">resetSubtype</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssertion` <a name="putAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putAssertion"></a>

```typescript
public putAssertion(value: IResolvable | SyntheticsTestApiStepAssertion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putAssertion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion">SyntheticsTestApiStepAssertion</a>[]

---

##### `putExtractedValue` <a name="putExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putExtractedValue"></a>

```typescript
public putExtractedValue(value: IResolvable | SyntheticsTestApiStepExtractedValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putExtractedValue.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue">SyntheticsTestApiStepExtractedValue</a>[]

---

##### `putRequestBasicauth` <a name="putRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestBasicauth"></a>

```typescript
public putRequestBasicauth(value: SyntheticsTestApiStepRequestBasicauth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestBasicauth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a>

---

##### `putRequestClientCertificate` <a name="putRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestClientCertificate"></a>

```typescript
public putRequestClientCertificate(value: SyntheticsTestApiStepRequestClientCertificate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a>

---

##### `putRequestDefinition` <a name="putRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestDefinition"></a>

```typescript
public putRequestDefinition(value: SyntheticsTestApiStepRequestDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a>

---

##### `putRequestProxy` <a name="putRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestProxy"></a>

```typescript
public putRequestProxy(value: SyntheticsTestApiStepRequestProxy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a>

---

##### `putRetry` <a name="putRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRetry"></a>

```typescript
public putRetry(value: SyntheticsTestApiStepRetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a>

---

##### `resetAllowFailure` <a name="resetAllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetAllowFailure"></a>

```typescript
public resetAllowFailure(): void
```

##### `resetAssertion` <a name="resetAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetAssertion"></a>

```typescript
public resetAssertion(): void
```

##### `resetExtractedValue` <a name="resetExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetExtractedValue"></a>

```typescript
public resetExtractedValue(): void
```

##### `resetIsCritical` <a name="resetIsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetIsCritical"></a>

```typescript
public resetIsCritical(): void
```

##### `resetRequestBasicauth` <a name="resetRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestBasicauth"></a>

```typescript
public resetRequestBasicauth(): void
```

##### `resetRequestClientCertificate` <a name="resetRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestClientCertificate"></a>

```typescript
public resetRequestClientCertificate(): void
```

##### `resetRequestDefinition` <a name="resetRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestDefinition"></a>

```typescript
public resetRequestDefinition(): void
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestHeaders"></a>

```typescript
public resetRequestHeaders(): void
```

##### `resetRequestProxy` <a name="resetRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestProxy"></a>

```typescript
public resetRequestProxy(): void
```

##### `resetRequestQuery` <a name="resetRequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestQuery"></a>

```typescript
public resetRequestQuery(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetSubtype` <a name="resetSubtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetSubtype"></a>

```typescript
public resetSubtype(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.assertion">assertion</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList">SyntheticsTestApiStepAssertionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.extractedValue">extractedValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList">SyntheticsTestApiStepExtractedValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestBasicauth">requestBasicauth</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference">SyntheticsTestApiStepRequestBasicauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestClientCertificate">requestClientCertificate</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference">SyntheticsTestApiStepRequestClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestDefinition">requestDefinition</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference">SyntheticsTestApiStepRequestDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestProxy">requestProxy</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference">SyntheticsTestApiStepRequestProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference">SyntheticsTestApiStepRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.allowFailureInput">allowFailureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.assertionInput">assertionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion">SyntheticsTestApiStepAssertion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.extractedValueInput">extractedValueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue">SyntheticsTestApiStepExtractedValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.isCriticalInput">isCriticalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestBasicauthInput">requestBasicauthInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestClientCertificateInput">requestClientCertificateInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestDefinitionInput">requestDefinitionInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestProxyInput">requestProxyInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestQueryInput">requestQueryInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.retryInput">retryInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.subtypeInput">subtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.allowFailure">allowFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.isCritical">isCritical</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestQuery">requestQuery</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.subtype">subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep">SyntheticsTestApiStep</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assertion`<sup>Required</sup> <a name="assertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.assertion"></a>

```typescript
public readonly assertion: SyntheticsTestApiStepAssertionList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList">SyntheticsTestApiStepAssertionList</a>

---

##### `extractedValue`<sup>Required</sup> <a name="extractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.extractedValue"></a>

```typescript
public readonly extractedValue: SyntheticsTestApiStepExtractedValueList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList">SyntheticsTestApiStepExtractedValueList</a>

---

##### `requestBasicauth`<sup>Required</sup> <a name="requestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestBasicauth"></a>

```typescript
public readonly requestBasicauth: SyntheticsTestApiStepRequestBasicauthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference">SyntheticsTestApiStepRequestBasicauthOutputReference</a>

---

##### `requestClientCertificate`<sup>Required</sup> <a name="requestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestClientCertificate"></a>

```typescript
public readonly requestClientCertificate: SyntheticsTestApiStepRequestClientCertificateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference">SyntheticsTestApiStepRequestClientCertificateOutputReference</a>

---

##### `requestDefinition`<sup>Required</sup> <a name="requestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestDefinition"></a>

```typescript
public readonly requestDefinition: SyntheticsTestApiStepRequestDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference">SyntheticsTestApiStepRequestDefinitionOutputReference</a>

---

##### `requestProxy`<sup>Required</sup> <a name="requestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestProxy"></a>

```typescript
public readonly requestProxy: SyntheticsTestApiStepRequestProxyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference">SyntheticsTestApiStepRequestProxyOutputReference</a>

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.retry"></a>

```typescript
public readonly retry: SyntheticsTestApiStepRetryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference">SyntheticsTestApiStepRetryOutputReference</a>

---

##### `allowFailureInput`<sup>Optional</sup> <a name="allowFailureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.allowFailureInput"></a>

```typescript
public readonly allowFailureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `assertionInput`<sup>Optional</sup> <a name="assertionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.assertionInput"></a>

```typescript
public readonly assertionInput: IResolvable | SyntheticsTestApiStepAssertion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion">SyntheticsTestApiStepAssertion</a>[]

---

##### `extractedValueInput`<sup>Optional</sup> <a name="extractedValueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.extractedValueInput"></a>

```typescript
public readonly extractedValueInput: IResolvable | SyntheticsTestApiStepExtractedValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue">SyntheticsTestApiStepExtractedValue</a>[]

---

##### `isCriticalInput`<sup>Optional</sup> <a name="isCriticalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.isCriticalInput"></a>

```typescript
public readonly isCriticalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requestBasicauthInput`<sup>Optional</sup> <a name="requestBasicauthInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestBasicauthInput"></a>

```typescript
public readonly requestBasicauthInput: SyntheticsTestApiStepRequestBasicauth;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a>

---

##### `requestClientCertificateInput`<sup>Optional</sup> <a name="requestClientCertificateInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestClientCertificateInput"></a>

```typescript
public readonly requestClientCertificateInput: SyntheticsTestApiStepRequestClientCertificate;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a>

---

##### `requestDefinitionInput`<sup>Optional</sup> <a name="requestDefinitionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestDefinitionInput"></a>

```typescript
public readonly requestDefinitionInput: SyntheticsTestApiStepRequestDefinition;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a>

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestHeadersInput"></a>

```typescript
public readonly requestHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestProxyInput`<sup>Optional</sup> <a name="requestProxyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestProxyInput"></a>

```typescript
public readonly requestProxyInput: SyntheticsTestApiStepRequestProxy;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a>

---

##### `requestQueryInput`<sup>Optional</sup> <a name="requestQueryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestQueryInput"></a>

```typescript
public readonly requestQueryInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.retryInput"></a>

```typescript
public readonly retryInput: SyntheticsTestApiStepRetry;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a>

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.subtypeInput"></a>

```typescript
public readonly subtypeInput: string;
```

- *Type:* string

---

##### `allowFailure`<sup>Required</sup> <a name="allowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.allowFailure"></a>

```typescript
public readonly allowFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isCritical`<sup>Required</sup> <a name="isCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.isCritical"></a>

```typescript
public readonly isCritical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestQuery`<sup>Required</sup> <a name="requestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestQuery"></a>

```typescript
public readonly requestQuery: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStep | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep">SyntheticsTestApiStep</a> | cdktf.IResolvable

---


### SyntheticsTestApiStepRequestBasicauthOutputReference <a name="SyntheticsTestApiStepRequestBasicauthOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAccessTokenUrl">resetAccessTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetResource">resetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetSessionToken">resetSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetTokenApiAuthentication">resetTokenApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetWorkstation">resetWorkstation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetAccessTokenUrl` <a name="resetAccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAccessTokenUrl"></a>

```typescript
public resetAccessTokenUrl(): void
```

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetSessionToken` <a name="resetSessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetSessionToken"></a>

```typescript
public resetSessionToken(): void
```

##### `resetTokenApiAuthentication` <a name="resetTokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetTokenApiAuthentication"></a>

```typescript
public resetTokenApiAuthentication(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetWorkstation` <a name="resetWorkstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetWorkstation"></a>

```typescript
public resetWorkstation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessTokenUrlInput">accessTokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.sessionTokenInput">sessionTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.tokenApiAuthenticationInput">tokenApiAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.workstationInput">workstationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessTokenUrl">accessTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.sessionToken">sessionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.tokenApiAuthentication">tokenApiAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.workstation">workstation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `accessTokenUrlInput`<sup>Optional</sup> <a name="accessTokenUrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessTokenUrlInput"></a>

```typescript
public readonly accessTokenUrlInput: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `sessionTokenInput`<sup>Optional</sup> <a name="sessionTokenInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.sessionTokenInput"></a>

```typescript
public readonly sessionTokenInput: string;
```

- *Type:* string

---

##### `tokenApiAuthenticationInput`<sup>Optional</sup> <a name="tokenApiAuthenticationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.tokenApiAuthenticationInput"></a>

```typescript
public readonly tokenApiAuthenticationInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `workstationInput`<sup>Optional</sup> <a name="workstationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.workstationInput"></a>

```typescript
public readonly workstationInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `accessTokenUrl`<sup>Required</sup> <a name="accessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessTokenUrl"></a>

```typescript
public readonly accessTokenUrl: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `sessionToken`<sup>Required</sup> <a name="sessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.sessionToken"></a>

```typescript
public readonly sessionToken: string;
```

- *Type:* string

---

##### `tokenApiAuthentication`<sup>Required</sup> <a name="tokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.tokenApiAuthentication"></a>

```typescript
public readonly tokenApiAuthentication: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `workstation`<sup>Required</sup> <a name="workstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.workstation"></a>

```typescript
public readonly workstation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStepRequestBasicauth;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a>

---


### SyntheticsTestApiStepRequestClientCertificateCertOutputReference <a name="SyntheticsTestApiStepRequestClientCertificateCertOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resetFilename">resetFilename</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resetFilename"></a>

```typescript
public resetFilename(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStepRequestClientCertificateCert;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a>

---


### SyntheticsTestApiStepRequestClientCertificateKeyOutputReference <a name="SyntheticsTestApiStepRequestClientCertificateKeyOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resetFilename">resetFilename</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resetFilename"></a>

```typescript
public resetFilename(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStepRequestClientCertificateKey;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a>

---


### SyntheticsTestApiStepRequestClientCertificateOutputReference <a name="SyntheticsTestApiStepRequestClientCertificateOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putCert">putCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putKey">putKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCert` <a name="putCert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putCert"></a>

```typescript
public putCert(value: SyntheticsTestApiStepRequestClientCertificateCert): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putCert.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a>

---

##### `putKey` <a name="putKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putKey"></a>

```typescript
public putKey(value: SyntheticsTestApiStepRequestClientCertificateKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.cert">cert</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference">SyntheticsTestApiStepRequestClientCertificateCertOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.key">key</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference">SyntheticsTestApiStepRequestClientCertificateKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.certInput">certInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.keyInput">keyInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.cert"></a>

```typescript
public readonly cert: SyntheticsTestApiStepRequestClientCertificateCertOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference">SyntheticsTestApiStepRequestClientCertificateCertOutputReference</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.key"></a>

```typescript
public readonly key: SyntheticsTestApiStepRequestClientCertificateKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference">SyntheticsTestApiStepRequestClientCertificateKeyOutputReference</a>

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.certInput"></a>

```typescript
public readonly certInput: SyntheticsTestApiStepRequestClientCertificateCert;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: SyntheticsTestApiStepRequestClientCertificateKey;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStepRequestClientCertificate;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a>

---


### SyntheticsTestApiStepRequestDefinitionOutputReference <a name="SyntheticsTestApiStepRequestDefinitionOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetAllowInsecure">resetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetBodyType">resetBodyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetCallType">resetCallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetCertificateDomains">resetCertificateDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetDnsServer">resetDnsServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetDnsServerPort">resetDnsServerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetFollowRedirects">resetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetNoSavingResponseBody">resetNoSavingResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetNumberOfPackets">resetNumberOfPackets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetServername">resetServername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetShouldTrackHops">resetShouldTrackHops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowInsecure` <a name="resetAllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetAllowInsecure"></a>

```typescript
public resetAllowInsecure(): void
```

##### `resetBody` <a name="resetBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetBodyType` <a name="resetBodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetBodyType"></a>

```typescript
public resetBodyType(): void
```

##### `resetCallType` <a name="resetCallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetCallType"></a>

```typescript
public resetCallType(): void
```

##### `resetCertificateDomains` <a name="resetCertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetCertificateDomains"></a>

```typescript
public resetCertificateDomains(): void
```

##### `resetDnsServer` <a name="resetDnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetDnsServer"></a>

```typescript
public resetDnsServer(): void
```

##### `resetDnsServerPort` <a name="resetDnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetDnsServerPort"></a>

```typescript
public resetDnsServerPort(): void
```

##### `resetFollowRedirects` <a name="resetFollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetFollowRedirects"></a>

```typescript
public resetFollowRedirects(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetNoSavingResponseBody` <a name="resetNoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetNoSavingResponseBody"></a>

```typescript
public resetNoSavingResponseBody(): void
```

##### `resetNumberOfPackets` <a name="resetNumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetNumberOfPackets"></a>

```typescript
public resetNumberOfPackets(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetServername` <a name="resetServername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetServername"></a>

```typescript
public resetServername(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetShouldTrackHops` <a name="resetShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetShouldTrackHops"></a>

```typescript
public resetShouldTrackHops(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.allowInsecureInput">allowInsecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyTypeInput">bodyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.callTypeInput">callTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.certificateDomainsInput">certificateDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerInput">dnsServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerPortInput">dnsServerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.followRedirectsInput">followRedirectsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.noSavingResponseBodyInput">noSavingResponseBodyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.numberOfPacketsInput">numberOfPacketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.servernameInput">servernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.shouldTrackHopsInput">shouldTrackHopsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.allowInsecure">allowInsecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyType">bodyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.callType">callType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.certificateDomains">certificateDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServer">dnsServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerPort">dnsServerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.followRedirects">followRedirects</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.noSavingResponseBody">noSavingResponseBody</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.numberOfPackets">numberOfPackets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.servername">servername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.shouldTrackHops">shouldTrackHops</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowInsecureInput`<sup>Optional</sup> <a name="allowInsecureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.allowInsecureInput"></a>

```typescript
public readonly allowInsecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `bodyTypeInput`<sup>Optional</sup> <a name="bodyTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyTypeInput"></a>

```typescript
public readonly bodyTypeInput: string;
```

- *Type:* string

---

##### `callTypeInput`<sup>Optional</sup> <a name="callTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.callTypeInput"></a>

```typescript
public readonly callTypeInput: string;
```

- *Type:* string

---

##### `certificateDomainsInput`<sup>Optional</sup> <a name="certificateDomainsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.certificateDomainsInput"></a>

```typescript
public readonly certificateDomainsInput: string[];
```

- *Type:* string[]

---

##### `dnsServerInput`<sup>Optional</sup> <a name="dnsServerInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerInput"></a>

```typescript
public readonly dnsServerInput: string;
```

- *Type:* string

---

##### `dnsServerPortInput`<sup>Optional</sup> <a name="dnsServerPortInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerPortInput"></a>

```typescript
public readonly dnsServerPortInput: number;
```

- *Type:* number

---

##### `followRedirectsInput`<sup>Optional</sup> <a name="followRedirectsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.followRedirectsInput"></a>

```typescript
public readonly followRedirectsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `noSavingResponseBodyInput`<sup>Optional</sup> <a name="noSavingResponseBodyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.noSavingResponseBodyInput"></a>

```typescript
public readonly noSavingResponseBodyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numberOfPacketsInput`<sup>Optional</sup> <a name="numberOfPacketsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.numberOfPacketsInput"></a>

```typescript
public readonly numberOfPacketsInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `servernameInput`<sup>Optional</sup> <a name="servernameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.servernameInput"></a>

```typescript
public readonly servernameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `shouldTrackHopsInput`<sup>Optional</sup> <a name="shouldTrackHopsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.shouldTrackHopsInput"></a>

```typescript
public readonly shouldTrackHopsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.allowInsecure"></a>

```typescript
public readonly allowInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `bodyType`<sup>Required</sup> <a name="bodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyType"></a>

```typescript
public readonly bodyType: string;
```

- *Type:* string

---

##### `callType`<sup>Required</sup> <a name="callType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.callType"></a>

```typescript
public readonly callType: string;
```

- *Type:* string

---

##### `certificateDomains`<sup>Required</sup> <a name="certificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.certificateDomains"></a>

```typescript
public readonly certificateDomains: string[];
```

- *Type:* string[]

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServer"></a>

```typescript
public readonly dnsServer: string;
```

- *Type:* string

---

##### `dnsServerPort`<sup>Required</sup> <a name="dnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerPort"></a>

```typescript
public readonly dnsServerPort: number;
```

- *Type:* number

---

##### `followRedirects`<sup>Required</sup> <a name="followRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.followRedirects"></a>

```typescript
public readonly followRedirects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `noSavingResponseBody`<sup>Required</sup> <a name="noSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.noSavingResponseBody"></a>

```typescript
public readonly noSavingResponseBody: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numberOfPackets`<sup>Required</sup> <a name="numberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.numberOfPackets"></a>

```typescript
public readonly numberOfPackets: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `servername`<sup>Required</sup> <a name="servername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.servername"></a>

```typescript
public readonly servername: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `shouldTrackHops`<sup>Required</sup> <a name="shouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.shouldTrackHops"></a>

```typescript
public readonly shouldTrackHops: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStepRequestDefinition;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a>

---


### SyntheticsTestApiStepRequestProxyOutputReference <a name="SyntheticsTestApiStepRequestProxyOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStepRequestProxy;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a>

---


### SyntheticsTestApiStepRetryOutputReference <a name="SyntheticsTestApiStepRetryOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestApiStepRetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resetInterval">resetInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestApiStepRetry;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a>

---


### SyntheticsTestAssertionList <a name="SyntheticsTestAssertionList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestAssertionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.get"></a>

```typescript
public get(index: number): SyntheticsTestAssertionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion">SyntheticsTestAssertion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsTestAssertion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion">SyntheticsTestAssertion</a>[]

---


### SyntheticsTestAssertionOutputReference <a name="SyntheticsTestAssertionOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestAssertionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetjsonpath">putTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetxpath">putTargetxpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetProperty">resetProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTargetjsonpath">resetTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTargetxpath">resetTargetxpath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetjsonpath` <a name="putTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetjsonpath"></a>

```typescript
public putTargetjsonpath(value: SyntheticsTestAssertionTargetjsonpath): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetjsonpath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a>

---

##### `putTargetxpath` <a name="putTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetxpath"></a>

```typescript
public putTargetxpath(value: SyntheticsTestAssertionTargetxpath): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetxpath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a>

---

##### `resetProperty` <a name="resetProperty" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetProperty"></a>

```typescript
public resetProperty(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTargetjsonpath` <a name="resetTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTargetjsonpath"></a>

```typescript
public resetTargetjsonpath(): void
```

##### `resetTargetxpath` <a name="resetTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTargetxpath"></a>

```typescript
public resetTargetxpath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetjsonpath">targetjsonpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference">SyntheticsTestAssertionTargetjsonpathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetxpath">targetxpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference">SyntheticsTestAssertionTargetxpathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.propertyInput">propertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetjsonpathInput">targetjsonpathInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetxpathInput">targetxpathInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.property">property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion">SyntheticsTestAssertion</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetjsonpath`<sup>Required</sup> <a name="targetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetjsonpath"></a>

```typescript
public readonly targetjsonpath: SyntheticsTestAssertionTargetjsonpathOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference">SyntheticsTestAssertionTargetjsonpathOutputReference</a>

---

##### `targetxpath`<sup>Required</sup> <a name="targetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetxpath"></a>

```typescript
public readonly targetxpath: SyntheticsTestAssertionTargetxpathOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference">SyntheticsTestAssertionTargetxpathOutputReference</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.propertyInput"></a>

```typescript
public readonly propertyInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `targetjsonpathInput`<sup>Optional</sup> <a name="targetjsonpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetjsonpathInput"></a>

```typescript
public readonly targetjsonpathInput: SyntheticsTestAssertionTargetjsonpath;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a>

---

##### `targetxpathInput`<sup>Optional</sup> <a name="targetxpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetxpathInput"></a>

```typescript
public readonly targetxpathInput: SyntheticsTestAssertionTargetxpath;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestAssertion | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion">SyntheticsTestAssertion</a> | cdktf.IResolvable

---


### SyntheticsTestAssertionTargetjsonpathOutputReference <a name="SyntheticsTestAssertionTargetjsonpathOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.jsonpathInput">jsonpathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.targetvalueInput">targetvalueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.jsonpath">jsonpath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.targetvalue">targetvalue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonpathInput`<sup>Optional</sup> <a name="jsonpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.jsonpathInput"></a>

```typescript
public readonly jsonpathInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `targetvalueInput`<sup>Optional</sup> <a name="targetvalueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.targetvalueInput"></a>

```typescript
public readonly targetvalueInput: string;
```

- *Type:* string

---

##### `jsonpath`<sup>Required</sup> <a name="jsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.jsonpath"></a>

```typescript
public readonly jsonpath: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `targetvalue`<sup>Required</sup> <a name="targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.targetvalue"></a>

```typescript
public readonly targetvalue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestAssertionTargetjsonpath;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a>

---


### SyntheticsTestAssertionTargetxpathOutputReference <a name="SyntheticsTestAssertionTargetxpathOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.targetvalueInput">targetvalueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.xpathInput">xpathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.targetvalue">targetvalue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.xpath">xpath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `targetvalueInput`<sup>Optional</sup> <a name="targetvalueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.targetvalueInput"></a>

```typescript
public readonly targetvalueInput: string;
```

- *Type:* string

---

##### `xpathInput`<sup>Optional</sup> <a name="xpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.xpathInput"></a>

```typescript
public readonly xpathInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `targetvalue`<sup>Required</sup> <a name="targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.targetvalue"></a>

```typescript
public readonly targetvalue: string;
```

- *Type:* string

---

##### `xpath`<sup>Required</sup> <a name="xpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.xpath"></a>

```typescript
public readonly xpath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestAssertionTargetxpath;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a>

---


### SyntheticsTestBrowserStepList <a name="SyntheticsTestBrowserStepList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestBrowserStepList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.get"></a>

```typescript
public get(index: number): SyntheticsTestBrowserStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep">SyntheticsTestBrowserStep</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsTestBrowserStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep">SyntheticsTestBrowserStep</a>[]

---


### SyntheticsTestBrowserStepOutputReference <a name="SyntheticsTestBrowserStepOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestBrowserStepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetAllowFailure">resetAllowFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetForceElementUpdate">resetForceElementUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetIsCritical">resetIsCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParams` <a name="putParams" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.putParams"></a>

```typescript
public putParams(value: SyntheticsTestBrowserStepParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a>

---

##### `resetAllowFailure` <a name="resetAllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetAllowFailure"></a>

```typescript
public resetAllowFailure(): void
```

##### `resetForceElementUpdate` <a name="resetForceElementUpdate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetForceElementUpdate"></a>

```typescript
public resetForceElementUpdate(): void
```

##### `resetIsCritical` <a name="resetIsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetIsCritical"></a>

```typescript
public resetIsCritical(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.params">params</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference">SyntheticsTestBrowserStepParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.allowFailureInput">allowFailureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.forceElementUpdateInput">forceElementUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.isCriticalInput">isCriticalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.allowFailure">allowFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.forceElementUpdate">forceElementUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.isCritical">isCritical</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep">SyntheticsTestBrowserStep</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.params"></a>

```typescript
public readonly params: SyntheticsTestBrowserStepParamsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference">SyntheticsTestBrowserStepParamsOutputReference</a>

---

##### `allowFailureInput`<sup>Optional</sup> <a name="allowFailureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.allowFailureInput"></a>

```typescript
public readonly allowFailureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceElementUpdateInput`<sup>Optional</sup> <a name="forceElementUpdateInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.forceElementUpdateInput"></a>

```typescript
public readonly forceElementUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isCriticalInput`<sup>Optional</sup> <a name="isCriticalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.isCriticalInput"></a>

```typescript
public readonly isCriticalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.paramsInput"></a>

```typescript
public readonly paramsInput: SyntheticsTestBrowserStepParams;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `allowFailure`<sup>Required</sup> <a name="allowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.allowFailure"></a>

```typescript
public readonly allowFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceElementUpdate`<sup>Required</sup> <a name="forceElementUpdate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.forceElementUpdate"></a>

```typescript
public readonly forceElementUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isCritical`<sup>Required</sup> <a name="isCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.isCritical"></a>

```typescript
public readonly isCritical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestBrowserStep | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep">SyntheticsTestBrowserStep</a> | cdktf.IResolvable

---


### SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference <a name="SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resetFailTestOnCannotLocate">resetFailTestOnCannotLocate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.putValue"></a>

```typescript
public putValue(value: SyntheticsTestBrowserStepParamsElementUserLocatorValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a>

---

##### `resetFailTestOnCannotLocate` <a name="resetFailTestOnCannotLocate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resetFailTestOnCannotLocate"></a>

```typescript
public resetFailTestOnCannotLocate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference">SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.failTestOnCannotLocateInput">failTestOnCannotLocateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.failTestOnCannotLocate">failTestOnCannotLocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.value"></a>

```typescript
public readonly value: SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference">SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference</a>

---

##### `failTestOnCannotLocateInput`<sup>Optional</sup> <a name="failTestOnCannotLocateInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.failTestOnCannotLocateInput"></a>

```typescript
public readonly failTestOnCannotLocateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: SyntheticsTestBrowserStepParamsElementUserLocatorValue;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a>

---

##### `failTestOnCannotLocate`<sup>Required</sup> <a name="failTestOnCannotLocate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.failTestOnCannotLocate"></a>

```typescript
public readonly failTestOnCannotLocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestBrowserStepParamsElementUserLocator;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a>

---


### SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference <a name="SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestBrowserStepParamsElementUserLocatorValue;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a>

---


### SyntheticsTestBrowserStepParamsOutputReference <a name="SyntheticsTestBrowserStepParamsOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putElementUserLocator">putElementUserLocator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putVariable">putVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetCheck">resetCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetClickType">resetClickType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetDelay">resetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetElement">resetElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetElementUserLocator">resetElementUserLocator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetFiles">resetFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetModifiers">resetModifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetPlayingTabId">resetPlayingTabId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetSubtestPublicId">resetSubtestPublicId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetVariable">resetVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetWithClick">resetWithClick</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetX">resetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetY">resetY</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putElementUserLocator` <a name="putElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putElementUserLocator"></a>

```typescript
public putElementUserLocator(value: SyntheticsTestBrowserStepParamsElementUserLocator): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putElementUserLocator.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a>

---

##### `putVariable` <a name="putVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putVariable"></a>

```typescript
public putVariable(value: SyntheticsTestBrowserStepParamsVariable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putVariable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a>

---

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetCheck` <a name="resetCheck" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetCheck"></a>

```typescript
public resetCheck(): void
```

##### `resetClickType` <a name="resetClickType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetClickType"></a>

```typescript
public resetClickType(): void
```

##### `resetCode` <a name="resetCode" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetDelay"></a>

```typescript
public resetDelay(): void
```

##### `resetElement` <a name="resetElement" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetElement"></a>

```typescript
public resetElement(): void
```

##### `resetElementUserLocator` <a name="resetElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetElementUserLocator"></a>

```typescript
public resetElementUserLocator(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetFile` <a name="resetFile" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetFile"></a>

```typescript
public resetFile(): void
```

##### `resetFiles` <a name="resetFiles" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetFiles"></a>

```typescript
public resetFiles(): void
```

##### `resetModifiers` <a name="resetModifiers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetModifiers"></a>

```typescript
public resetModifiers(): void
```

##### `resetPlayingTabId` <a name="resetPlayingTabId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetPlayingTabId"></a>

```typescript
public resetPlayingTabId(): void
```

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetRequest"></a>

```typescript
public resetRequest(): void
```

##### `resetSubtestPublicId` <a name="resetSubtestPublicId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetSubtestPublicId"></a>

```typescript
public resetSubtestPublicId(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetVariable"></a>

```typescript
public resetVariable(): void
```

##### `resetWithClick` <a name="resetWithClick" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetWithClick"></a>

```typescript
public resetWithClick(): void
```

##### `resetX` <a name="resetX" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetX"></a>

```typescript
public resetX(): void
```

##### `resetY` <a name="resetY" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetY"></a>

```typescript
public resetY(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementUserLocator">elementUserLocator</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference">SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference">SyntheticsTestBrowserStepParamsVariableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.checkInput">checkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.clickTypeInput">clickTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.codeInput">codeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.delayInput">delayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementInput">elementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementUserLocatorInput">elementUserLocatorInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.filesInput">filesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.modifiersInput">modifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.playingTabIdInput">playingTabIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.requestInput">requestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.subtestPublicIdInput">subtestPublicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.variableInput">variableInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.withClickInput">withClickInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.xInput">xInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.yInput">yInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.check">check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.clickType">clickType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.delay">delay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.element">element</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.files">files</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.modifiers">modifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.playingTabId">playingTabId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.subtestPublicId">subtestPublicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.withClick">withClick</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.x">x</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.y">y</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementUserLocator`<sup>Required</sup> <a name="elementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementUserLocator"></a>

```typescript
public readonly elementUserLocator: SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference">SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.variable"></a>

```typescript
public readonly variable: SyntheticsTestBrowserStepParamsVariableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference">SyntheticsTestBrowserStepParamsVariableOutputReference</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `checkInput`<sup>Optional</sup> <a name="checkInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.checkInput"></a>

```typescript
public readonly checkInput: string;
```

- *Type:* string

---

##### `clickTypeInput`<sup>Optional</sup> <a name="clickTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.clickTypeInput"></a>

```typescript
public readonly clickTypeInput: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: string;
```

- *Type:* string

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.delayInput"></a>

```typescript
public readonly delayInput: number;
```

- *Type:* number

---

##### `elementInput`<sup>Optional</sup> <a name="elementInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementInput"></a>

```typescript
public readonly elementInput: string;
```

- *Type:* string

---

##### `elementUserLocatorInput`<sup>Optional</sup> <a name="elementUserLocatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementUserLocatorInput"></a>

```typescript
public readonly elementUserLocatorInput: SyntheticsTestBrowserStepParamsElementUserLocator;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.filesInput"></a>

```typescript
public readonly filesInput: string;
```

- *Type:* string

---

##### `modifiersInput`<sup>Optional</sup> <a name="modifiersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.modifiersInput"></a>

```typescript
public readonly modifiersInput: string[];
```

- *Type:* string[]

---

##### `playingTabIdInput`<sup>Optional</sup> <a name="playingTabIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.playingTabIdInput"></a>

```typescript
public readonly playingTabIdInput: string;
```

- *Type:* string

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.requestInput"></a>

```typescript
public readonly requestInput: string;
```

- *Type:* string

---

##### `subtestPublicIdInput`<sup>Optional</sup> <a name="subtestPublicIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.subtestPublicIdInput"></a>

```typescript
public readonly subtestPublicIdInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: SyntheticsTestBrowserStepParamsVariable;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a>

---

##### `withClickInput`<sup>Optional</sup> <a name="withClickInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.withClickInput"></a>

```typescript
public readonly withClickInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `xInput`<sup>Optional</sup> <a name="xInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.xInput"></a>

```typescript
public readonly xInput: number;
```

- *Type:* number

---

##### `yInput`<sup>Optional</sup> <a name="yInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.yInput"></a>

```typescript
public readonly yInput: number;
```

- *Type:* number

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.check"></a>

```typescript
public readonly check: string;
```

- *Type:* string

---

##### `clickType`<sup>Required</sup> <a name="clickType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.clickType"></a>

```typescript
public readonly clickType: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

---

##### `element`<sup>Required</sup> <a name="element" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.element"></a>

```typescript
public readonly element: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.files"></a>

```typescript
public readonly files: string;
```

- *Type:* string

---

##### `modifiers`<sup>Required</sup> <a name="modifiers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.modifiers"></a>

```typescript
public readonly modifiers: string[];
```

- *Type:* string[]

---

##### `playingTabId`<sup>Required</sup> <a name="playingTabId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.playingTabId"></a>

```typescript
public readonly playingTabId: string;
```

- *Type:* string

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `subtestPublicId`<sup>Required</sup> <a name="subtestPublicId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.subtestPublicId"></a>

```typescript
public readonly subtestPublicId: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `withClick`<sup>Required</sup> <a name="withClick" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.withClick"></a>

```typescript
public readonly withClick: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.x"></a>

```typescript
public readonly x: number;
```

- *Type:* number

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.y"></a>

```typescript
public readonly y: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestBrowserStepParams;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a>

---


### SyntheticsTestBrowserStepParamsVariableOutputReference <a name="SyntheticsTestBrowserStepParamsVariableOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resetExample">resetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExample` <a name="resetExample" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resetExample"></a>

```typescript
public resetExample(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.exampleInput">exampleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.example">example</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exampleInput`<sup>Optional</sup> <a name="exampleInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.exampleInput"></a>

```typescript
public readonly exampleInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.example"></a>

```typescript
public readonly example: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestBrowserStepParamsVariable;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a>

---


### SyntheticsTestBrowserVariableList <a name="SyntheticsTestBrowserVariableList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestBrowserVariableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.get"></a>

```typescript
public get(index: number): SyntheticsTestBrowserVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable">SyntheticsTestBrowserVariable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsTestBrowserVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable">SyntheticsTestBrowserVariable</a>[]

---


### SyntheticsTestBrowserVariableOutputReference <a name="SyntheticsTestBrowserVariableOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestBrowserVariableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetExample">resetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetPattern">resetPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExample` <a name="resetExample" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetExample"></a>

```typescript
public resetExample(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetPattern"></a>

```typescript
public resetPattern(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.exampleInput">exampleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.example">example</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable">SyntheticsTestBrowserVariable</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exampleInput`<sup>Optional</sup> <a name="exampleInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.exampleInput"></a>

```typescript
public readonly exampleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.example"></a>

```typescript
public readonly example: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestBrowserVariable | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable">SyntheticsTestBrowserVariable</a> | cdktf.IResolvable

---


### SyntheticsTestConfigVariableList <a name="SyntheticsTestConfigVariableList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestConfigVariableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.get"></a>

```typescript
public get(index: number): SyntheticsTestConfigVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable">SyntheticsTestConfigVariable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsTestConfigVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable">SyntheticsTestConfigVariable</a>[]

---


### SyntheticsTestConfigVariableOutputReference <a name="SyntheticsTestConfigVariableOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestConfigVariableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetExample">resetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetSecure">resetSecure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExample` <a name="resetExample" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetExample"></a>

```typescript
public resetExample(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetSecure` <a name="resetSecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetSecure"></a>

```typescript
public resetSecure(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.exampleInput">exampleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.secureInput">secureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.example">example</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.secure">secure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable">SyntheticsTestConfigVariable</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exampleInput`<sup>Optional</sup> <a name="exampleInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.exampleInput"></a>

```typescript
public readonly exampleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `secureInput`<sup>Optional</sup> <a name="secureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.secureInput"></a>

```typescript
public readonly secureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.example"></a>

```typescript
public readonly example: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.secure"></a>

```typescript
public readonly secure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestConfigVariable | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable">SyntheticsTestConfigVariable</a> | cdktf.IResolvable

---


### SyntheticsTestOptionsListCiOutputReference <a name="SyntheticsTestOptionsListCiOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestOptionsListCiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resetExecutionRule">resetExecutionRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionRule` <a name="resetExecutionRule" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resetExecutionRule"></a>

```typescript
public resetExecutionRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.executionRuleInput">executionRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.executionRule">executionRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionRuleInput`<sup>Optional</sup> <a name="executionRuleInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.executionRuleInput"></a>

```typescript
public readonly executionRuleInput: string;
```

- *Type:* string

---

##### `executionRule`<sup>Required</sup> <a name="executionRule" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.executionRule"></a>

```typescript
public readonly executionRule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestOptionsListCi;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a>

---


### SyntheticsTestOptionsListMonitorOptionsOutputReference <a name="SyntheticsTestOptionsListMonitorOptionsOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resetRenotifyInterval">resetRenotifyInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRenotifyInterval` <a name="resetRenotifyInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resetRenotifyInterval"></a>

```typescript
public resetRenotifyInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyIntervalInput">renotifyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyInterval">renotifyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `renotifyIntervalInput`<sup>Optional</sup> <a name="renotifyIntervalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyIntervalInput"></a>

```typescript
public readonly renotifyIntervalInput: number;
```

- *Type:* number

---

##### `renotifyInterval`<sup>Required</sup> <a name="renotifyInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyInterval"></a>

```typescript
public readonly renotifyInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestOptionsListMonitorOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a>

---


### SyntheticsTestOptionsListOutputReference <a name="SyntheticsTestOptionsListOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestOptionsListOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putCi">putCi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putMonitorOptions">putMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRumSettings">putRumSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetAcceptSelfSigned">resetAcceptSelfSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetAllowInsecure">resetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetCheckCertificateRevocation">resetCheckCertificateRevocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetCi">resetCi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetDisableCors">resetDisableCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetDisableCsp">resetDisableCsp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetFollowRedirects">resetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetHttpVersion">resetHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetIgnoreServerCertificateError">resetIgnoreServerCertificateError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetInitialNavigationTimeout">resetInitialNavigationTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMinFailureDuration">resetMinFailureDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMinLocationFailed">resetMinLocationFailed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorName">resetMonitorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorOptions">resetMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorPriority">resetMonitorPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetNoScreenshot">resetNoScreenshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRestrictedRoles">resetRestrictedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRumSettings">resetRumSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCi` <a name="putCi" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putCi"></a>

```typescript
public putCi(value: SyntheticsTestOptionsListCi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putCi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a>

---

##### `putMonitorOptions` <a name="putMonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putMonitorOptions"></a>

```typescript
public putMonitorOptions(value: SyntheticsTestOptionsListMonitorOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putMonitorOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a>

---

##### `putRetry` <a name="putRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRetry"></a>

```typescript
public putRetry(value: SyntheticsTestOptionsListRetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a>

---

##### `putRumSettings` <a name="putRumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRumSettings"></a>

```typescript
public putRumSettings(value: SyntheticsTestOptionsListRumSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRumSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a>

---

##### `resetAcceptSelfSigned` <a name="resetAcceptSelfSigned" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetAcceptSelfSigned"></a>

```typescript
public resetAcceptSelfSigned(): void
```

##### `resetAllowInsecure` <a name="resetAllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetAllowInsecure"></a>

```typescript
public resetAllowInsecure(): void
```

##### `resetCheckCertificateRevocation` <a name="resetCheckCertificateRevocation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetCheckCertificateRevocation"></a>

```typescript
public resetCheckCertificateRevocation(): void
```

##### `resetCi` <a name="resetCi" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetCi"></a>

```typescript
public resetCi(): void
```

##### `resetDisableCors` <a name="resetDisableCors" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetDisableCors"></a>

```typescript
public resetDisableCors(): void
```

##### `resetDisableCsp` <a name="resetDisableCsp" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetDisableCsp"></a>

```typescript
public resetDisableCsp(): void
```

##### `resetFollowRedirects` <a name="resetFollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetFollowRedirects"></a>

```typescript
public resetFollowRedirects(): void
```

##### `resetHttpVersion` <a name="resetHttpVersion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetHttpVersion"></a>

```typescript
public resetHttpVersion(): void
```

##### `resetIgnoreServerCertificateError` <a name="resetIgnoreServerCertificateError" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetIgnoreServerCertificateError"></a>

```typescript
public resetIgnoreServerCertificateError(): void
```

##### `resetInitialNavigationTimeout` <a name="resetInitialNavigationTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetInitialNavigationTimeout"></a>

```typescript
public resetInitialNavigationTimeout(): void
```

##### `resetMinFailureDuration` <a name="resetMinFailureDuration" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMinFailureDuration"></a>

```typescript
public resetMinFailureDuration(): void
```

##### `resetMinLocationFailed` <a name="resetMinLocationFailed" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMinLocationFailed"></a>

```typescript
public resetMinLocationFailed(): void
```

##### `resetMonitorName` <a name="resetMonitorName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorName"></a>

```typescript
public resetMonitorName(): void
```

##### `resetMonitorOptions` <a name="resetMonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorOptions"></a>

```typescript
public resetMonitorOptions(): void
```

##### `resetMonitorPriority` <a name="resetMonitorPriority" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorPriority"></a>

```typescript
public resetMonitorPriority(): void
```

##### `resetNoScreenshot` <a name="resetNoScreenshot" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetNoScreenshot"></a>

```typescript
public resetNoScreenshot(): void
```

##### `resetRestrictedRoles` <a name="resetRestrictedRoles" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRestrictedRoles"></a>

```typescript
public resetRestrictedRoles(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetRumSettings` <a name="resetRumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRumSettings"></a>

```typescript
public resetRumSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ci">ci</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference">SyntheticsTestOptionsListCiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorOptions">monitorOptions</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference">SyntheticsTestOptionsListMonitorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference">SyntheticsTestOptionsListRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.rumSettings">rumSettings</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference">SyntheticsTestOptionsListRumSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.acceptSelfSignedInput">acceptSelfSignedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.allowInsecureInput">allowInsecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.checkCertificateRevocationInput">checkCertificateRevocationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ciInput">ciInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCorsInput">disableCorsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCspInput">disableCspInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.followRedirectsInput">followRedirectsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.httpVersionInput">httpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ignoreServerCertificateErrorInput">ignoreServerCertificateErrorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.initialNavigationTimeoutInput">initialNavigationTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minFailureDurationInput">minFailureDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minLocationFailedInput">minLocationFailedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorNameInput">monitorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorOptionsInput">monitorOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorPriorityInput">monitorPriorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.noScreenshotInput">noScreenshotInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.restrictedRolesInput">restrictedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.retryInput">retryInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.rumSettingsInput">rumSettingsInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.tickEveryInput">tickEveryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.acceptSelfSigned">acceptSelfSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.allowInsecure">allowInsecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.checkCertificateRevocation">checkCertificateRevocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCors">disableCors</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCsp">disableCsp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.followRedirects">followRedirects</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.httpVersion">httpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ignoreServerCertificateError">ignoreServerCertificateError</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.initialNavigationTimeout">initialNavigationTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minFailureDuration">minFailureDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minLocationFailed">minLocationFailed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorName">monitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorPriority">monitorPriority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.noScreenshot">noScreenshot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.restrictedRoles">restrictedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.tickEvery">tickEvery</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ci`<sup>Required</sup> <a name="ci" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ci"></a>

```typescript
public readonly ci: SyntheticsTestOptionsListCiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference">SyntheticsTestOptionsListCiOutputReference</a>

---

##### `monitorOptions`<sup>Required</sup> <a name="monitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorOptions"></a>

```typescript
public readonly monitorOptions: SyntheticsTestOptionsListMonitorOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference">SyntheticsTestOptionsListMonitorOptionsOutputReference</a>

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.retry"></a>

```typescript
public readonly retry: SyntheticsTestOptionsListRetryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference">SyntheticsTestOptionsListRetryOutputReference</a>

---

##### `rumSettings`<sup>Required</sup> <a name="rumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.rumSettings"></a>

```typescript
public readonly rumSettings: SyntheticsTestOptionsListRumSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference">SyntheticsTestOptionsListRumSettingsOutputReference</a>

---

##### `acceptSelfSignedInput`<sup>Optional</sup> <a name="acceptSelfSignedInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.acceptSelfSignedInput"></a>

```typescript
public readonly acceptSelfSignedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowInsecureInput`<sup>Optional</sup> <a name="allowInsecureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.allowInsecureInput"></a>

```typescript
public readonly allowInsecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkCertificateRevocationInput`<sup>Optional</sup> <a name="checkCertificateRevocationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.checkCertificateRevocationInput"></a>

```typescript
public readonly checkCertificateRevocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ciInput`<sup>Optional</sup> <a name="ciInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ciInput"></a>

```typescript
public readonly ciInput: SyntheticsTestOptionsListCi;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a>

---

##### `disableCorsInput`<sup>Optional</sup> <a name="disableCorsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCorsInput"></a>

```typescript
public readonly disableCorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableCspInput`<sup>Optional</sup> <a name="disableCspInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCspInput"></a>

```typescript
public readonly disableCspInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `followRedirectsInput`<sup>Optional</sup> <a name="followRedirectsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.followRedirectsInput"></a>

```typescript
public readonly followRedirectsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpVersionInput`<sup>Optional</sup> <a name="httpVersionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.httpVersionInput"></a>

```typescript
public readonly httpVersionInput: string;
```

- *Type:* string

---

##### `ignoreServerCertificateErrorInput`<sup>Optional</sup> <a name="ignoreServerCertificateErrorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ignoreServerCertificateErrorInput"></a>

```typescript
public readonly ignoreServerCertificateErrorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `initialNavigationTimeoutInput`<sup>Optional</sup> <a name="initialNavigationTimeoutInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.initialNavigationTimeoutInput"></a>

```typescript
public readonly initialNavigationTimeoutInput: number;
```

- *Type:* number

---

##### `minFailureDurationInput`<sup>Optional</sup> <a name="minFailureDurationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minFailureDurationInput"></a>

```typescript
public readonly minFailureDurationInput: number;
```

- *Type:* number

---

##### `minLocationFailedInput`<sup>Optional</sup> <a name="minLocationFailedInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minLocationFailedInput"></a>

```typescript
public readonly minLocationFailedInput: number;
```

- *Type:* number

---

##### `monitorNameInput`<sup>Optional</sup> <a name="monitorNameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorNameInput"></a>

```typescript
public readonly monitorNameInput: string;
```

- *Type:* string

---

##### `monitorOptionsInput`<sup>Optional</sup> <a name="monitorOptionsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorOptionsInput"></a>

```typescript
public readonly monitorOptionsInput: SyntheticsTestOptionsListMonitorOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a>

---

##### `monitorPriorityInput`<sup>Optional</sup> <a name="monitorPriorityInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorPriorityInput"></a>

```typescript
public readonly monitorPriorityInput: number;
```

- *Type:* number

---

##### `noScreenshotInput`<sup>Optional</sup> <a name="noScreenshotInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.noScreenshotInput"></a>

```typescript
public readonly noScreenshotInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictedRolesInput`<sup>Optional</sup> <a name="restrictedRolesInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.restrictedRolesInput"></a>

```typescript
public readonly restrictedRolesInput: string[];
```

- *Type:* string[]

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.retryInput"></a>

```typescript
public readonly retryInput: SyntheticsTestOptionsListRetry;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a>

---

##### `rumSettingsInput`<sup>Optional</sup> <a name="rumSettingsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.rumSettingsInput"></a>

```typescript
public readonly rumSettingsInput: SyntheticsTestOptionsListRumSettings;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a>

---

##### `tickEveryInput`<sup>Optional</sup> <a name="tickEveryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.tickEveryInput"></a>

```typescript
public readonly tickEveryInput: number;
```

- *Type:* number

---

##### `acceptSelfSigned`<sup>Required</sup> <a name="acceptSelfSigned" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.acceptSelfSigned"></a>

```typescript
public readonly acceptSelfSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.allowInsecure"></a>

```typescript
public readonly allowInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkCertificateRevocation`<sup>Required</sup> <a name="checkCertificateRevocation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.checkCertificateRevocation"></a>

```typescript
public readonly checkCertificateRevocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableCors`<sup>Required</sup> <a name="disableCors" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCors"></a>

```typescript
public readonly disableCors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableCsp`<sup>Required</sup> <a name="disableCsp" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCsp"></a>

```typescript
public readonly disableCsp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `followRedirects`<sup>Required</sup> <a name="followRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.followRedirects"></a>

```typescript
public readonly followRedirects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpVersion`<sup>Required</sup> <a name="httpVersion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.httpVersion"></a>

```typescript
public readonly httpVersion: string;
```

- *Type:* string

---

##### `ignoreServerCertificateError`<sup>Required</sup> <a name="ignoreServerCertificateError" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ignoreServerCertificateError"></a>

```typescript
public readonly ignoreServerCertificateError: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `initialNavigationTimeout`<sup>Required</sup> <a name="initialNavigationTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.initialNavigationTimeout"></a>

```typescript
public readonly initialNavigationTimeout: number;
```

- *Type:* number

---

##### `minFailureDuration`<sup>Required</sup> <a name="minFailureDuration" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minFailureDuration"></a>

```typescript
public readonly minFailureDuration: number;
```

- *Type:* number

---

##### `minLocationFailed`<sup>Required</sup> <a name="minLocationFailed" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minLocationFailed"></a>

```typescript
public readonly minLocationFailed: number;
```

- *Type:* number

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

---

##### `monitorPriority`<sup>Required</sup> <a name="monitorPriority" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorPriority"></a>

```typescript
public readonly monitorPriority: number;
```

- *Type:* number

---

##### `noScreenshot`<sup>Required</sup> <a name="noScreenshot" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.noScreenshot"></a>

```typescript
public readonly noScreenshot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictedRoles`<sup>Required</sup> <a name="restrictedRoles" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.restrictedRoles"></a>

```typescript
public readonly restrictedRoles: string[];
```

- *Type:* string[]

---

##### `tickEvery`<sup>Required</sup> <a name="tickEvery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.tickEvery"></a>

```typescript
public readonly tickEvery: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestOptionsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a>

---


### SyntheticsTestOptionsListRetryOutputReference <a name="SyntheticsTestOptionsListRetryOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestOptionsListRetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resetInterval">resetInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestOptionsListRetry;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a>

---


### SyntheticsTestOptionsListRumSettingsOutputReference <a name="SyntheticsTestOptionsListRumSettingsOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resetClientTokenId">resetClientTokenId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetClientTokenId` <a name="resetClientTokenId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resetClientTokenId"></a>

```typescript
public resetClientTokenId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenIdInput">clientTokenIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenId">clientTokenId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `clientTokenIdInput`<sup>Optional</sup> <a name="clientTokenIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenIdInput"></a>

```typescript
public readonly clientTokenIdInput: number;
```

- *Type:* number

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `clientTokenId`<sup>Required</sup> <a name="clientTokenId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenId"></a>

```typescript
public readonly clientTokenId: number;
```

- *Type:* number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestOptionsListRumSettings;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a>

---


### SyntheticsTestRequestBasicauthOutputReference <a name="SyntheticsTestRequestBasicauthOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestRequestBasicauthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAccessTokenUrl">resetAccessTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetResource">resetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetSessionToken">resetSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetTokenApiAuthentication">resetTokenApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetWorkstation">resetWorkstation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetAccessTokenUrl` <a name="resetAccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAccessTokenUrl"></a>

```typescript
public resetAccessTokenUrl(): void
```

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetSessionToken` <a name="resetSessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetSessionToken"></a>

```typescript
public resetSessionToken(): void
```

##### `resetTokenApiAuthentication` <a name="resetTokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetTokenApiAuthentication"></a>

```typescript
public resetTokenApiAuthentication(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetWorkstation` <a name="resetWorkstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetWorkstation"></a>

```typescript
public resetWorkstation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessTokenUrlInput">accessTokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.sessionTokenInput">sessionTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.tokenApiAuthenticationInput">tokenApiAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.workstationInput">workstationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessTokenUrl">accessTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.sessionToken">sessionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.tokenApiAuthentication">tokenApiAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.workstation">workstation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `accessTokenUrlInput`<sup>Optional</sup> <a name="accessTokenUrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessTokenUrlInput"></a>

```typescript
public readonly accessTokenUrlInput: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `sessionTokenInput`<sup>Optional</sup> <a name="sessionTokenInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.sessionTokenInput"></a>

```typescript
public readonly sessionTokenInput: string;
```

- *Type:* string

---

##### `tokenApiAuthenticationInput`<sup>Optional</sup> <a name="tokenApiAuthenticationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.tokenApiAuthenticationInput"></a>

```typescript
public readonly tokenApiAuthenticationInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `workstationInput`<sup>Optional</sup> <a name="workstationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.workstationInput"></a>

```typescript
public readonly workstationInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `accessTokenUrl`<sup>Required</sup> <a name="accessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessTokenUrl"></a>

```typescript
public readonly accessTokenUrl: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `sessionToken`<sup>Required</sup> <a name="sessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.sessionToken"></a>

```typescript
public readonly sessionToken: string;
```

- *Type:* string

---

##### `tokenApiAuthentication`<sup>Required</sup> <a name="tokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.tokenApiAuthentication"></a>

```typescript
public readonly tokenApiAuthentication: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `workstation`<sup>Required</sup> <a name="workstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.workstation"></a>

```typescript
public readonly workstation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestRequestBasicauth;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a>

---


### SyntheticsTestRequestClientCertificateCertOutputReference <a name="SyntheticsTestRequestClientCertificateCertOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resetFilename">resetFilename</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resetFilename"></a>

```typescript
public resetFilename(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestRequestClientCertificateCert;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a>

---


### SyntheticsTestRequestClientCertificateKeyOutputReference <a name="SyntheticsTestRequestClientCertificateKeyOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resetFilename">resetFilename</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resetFilename"></a>

```typescript
public resetFilename(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestRequestClientCertificateKey;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a>

---


### SyntheticsTestRequestClientCertificateOutputReference <a name="SyntheticsTestRequestClientCertificateOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putCert">putCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putKey">putKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCert` <a name="putCert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putCert"></a>

```typescript
public putCert(value: SyntheticsTestRequestClientCertificateCert): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putCert.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a>

---

##### `putKey` <a name="putKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putKey"></a>

```typescript
public putKey(value: SyntheticsTestRequestClientCertificateKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.cert">cert</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference">SyntheticsTestRequestClientCertificateCertOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.key">key</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference">SyntheticsTestRequestClientCertificateKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.certInput">certInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.keyInput">keyInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.cert"></a>

```typescript
public readonly cert: SyntheticsTestRequestClientCertificateCertOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference">SyntheticsTestRequestClientCertificateCertOutputReference</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.key"></a>

```typescript
public readonly key: SyntheticsTestRequestClientCertificateKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference">SyntheticsTestRequestClientCertificateKeyOutputReference</a>

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.certInput"></a>

```typescript
public readonly certInput: SyntheticsTestRequestClientCertificateCert;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: SyntheticsTestRequestClientCertificateKey;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestRequestClientCertificate;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a>

---


### SyntheticsTestRequestDefinitionOutputReference <a name="SyntheticsTestRequestDefinitionOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestRequestDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetBodyType">resetBodyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetCallType">resetCallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetCertificateDomains">resetCertificateDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetDnsServer">resetDnsServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetDnsServerPort">resetDnsServerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetNoSavingResponseBody">resetNoSavingResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetNumberOfPackets">resetNumberOfPackets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetServername">resetServername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetShouldTrackHops">resetShouldTrackHops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBody` <a name="resetBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetBodyType` <a name="resetBodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetBodyType"></a>

```typescript
public resetBodyType(): void
```

##### `resetCallType` <a name="resetCallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetCallType"></a>

```typescript
public resetCallType(): void
```

##### `resetCertificateDomains` <a name="resetCertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetCertificateDomains"></a>

```typescript
public resetCertificateDomains(): void
```

##### `resetDnsServer` <a name="resetDnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetDnsServer"></a>

```typescript
public resetDnsServer(): void
```

##### `resetDnsServerPort` <a name="resetDnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetDnsServerPort"></a>

```typescript
public resetDnsServerPort(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetNoSavingResponseBody` <a name="resetNoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetNoSavingResponseBody"></a>

```typescript
public resetNoSavingResponseBody(): void
```

##### `resetNumberOfPackets` <a name="resetNumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetNumberOfPackets"></a>

```typescript
public resetNumberOfPackets(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetServername` <a name="resetServername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetServername"></a>

```typescript
public resetServername(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetShouldTrackHops` <a name="resetShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetShouldTrackHops"></a>

```typescript
public resetShouldTrackHops(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyTypeInput">bodyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.callTypeInput">callTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.certificateDomainsInput">certificateDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerInput">dnsServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerPortInput">dnsServerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.noSavingResponseBodyInput">noSavingResponseBodyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.numberOfPacketsInput">numberOfPacketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.servernameInput">servernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.shouldTrackHopsInput">shouldTrackHopsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyType">bodyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.callType">callType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.certificateDomains">certificateDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServer">dnsServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerPort">dnsServerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.noSavingResponseBody">noSavingResponseBody</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.numberOfPackets">numberOfPackets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.servername">servername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.shouldTrackHops">shouldTrackHops</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `bodyTypeInput`<sup>Optional</sup> <a name="bodyTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyTypeInput"></a>

```typescript
public readonly bodyTypeInput: string;
```

- *Type:* string

---

##### `callTypeInput`<sup>Optional</sup> <a name="callTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.callTypeInput"></a>

```typescript
public readonly callTypeInput: string;
```

- *Type:* string

---

##### `certificateDomainsInput`<sup>Optional</sup> <a name="certificateDomainsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.certificateDomainsInput"></a>

```typescript
public readonly certificateDomainsInput: string[];
```

- *Type:* string[]

---

##### `dnsServerInput`<sup>Optional</sup> <a name="dnsServerInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerInput"></a>

```typescript
public readonly dnsServerInput: string;
```

- *Type:* string

---

##### `dnsServerPortInput`<sup>Optional</sup> <a name="dnsServerPortInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerPortInput"></a>

```typescript
public readonly dnsServerPortInput: number;
```

- *Type:* number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `noSavingResponseBodyInput`<sup>Optional</sup> <a name="noSavingResponseBodyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.noSavingResponseBodyInput"></a>

```typescript
public readonly noSavingResponseBodyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numberOfPacketsInput`<sup>Optional</sup> <a name="numberOfPacketsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.numberOfPacketsInput"></a>

```typescript
public readonly numberOfPacketsInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `servernameInput`<sup>Optional</sup> <a name="servernameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.servernameInput"></a>

```typescript
public readonly servernameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `shouldTrackHopsInput`<sup>Optional</sup> <a name="shouldTrackHopsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.shouldTrackHopsInput"></a>

```typescript
public readonly shouldTrackHopsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `bodyType`<sup>Required</sup> <a name="bodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyType"></a>

```typescript
public readonly bodyType: string;
```

- *Type:* string

---

##### `callType`<sup>Required</sup> <a name="callType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.callType"></a>

```typescript
public readonly callType: string;
```

- *Type:* string

---

##### `certificateDomains`<sup>Required</sup> <a name="certificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.certificateDomains"></a>

```typescript
public readonly certificateDomains: string[];
```

- *Type:* string[]

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServer"></a>

```typescript
public readonly dnsServer: string;
```

- *Type:* string

---

##### `dnsServerPort`<sup>Required</sup> <a name="dnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerPort"></a>

```typescript
public readonly dnsServerPort: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `noSavingResponseBody`<sup>Required</sup> <a name="noSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.noSavingResponseBody"></a>

```typescript
public readonly noSavingResponseBody: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numberOfPackets`<sup>Required</sup> <a name="numberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.numberOfPackets"></a>

```typescript
public readonly numberOfPackets: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `servername`<sup>Required</sup> <a name="servername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.servername"></a>

```typescript
public readonly servername: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `shouldTrackHops`<sup>Required</sup> <a name="shouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.shouldTrackHops"></a>

```typescript
public readonly shouldTrackHops: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestRequestDefinition;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a>

---


### SyntheticsTestRequestProxyOutputReference <a name="SyntheticsTestRequestProxyOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer"></a>

```typescript
import { syntheticsTest } from '@cdktf/provider-datadog'

new syntheticsTest.SyntheticsTestRequestProxyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsTestRequestProxy;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a>

---


