# `provider`

Refer to the Terraform Registory for docs: [`datadog`](https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-datadog.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogProvider <a name="DatadogProvider" id="@cdktf/provider-datadog.provider.DatadogProvider"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs datadog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-datadog'

new provider.DatadogProvider(scope: Construct, id: string, config?: DatadogProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig">DatadogProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.provider.DatadogProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig">DatadogProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetAppKey">resetAppKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffBase">resetHttpClientRetryBackoffBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffMultiplier">resetHttpClientRetryBackoffMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryEnabled">resetHttpClientRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryMaxRetries">resetHttpClientRetryMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryTimeout">resetHttpClientRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.resetValidate">resetValidate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.provider.DatadogProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.provider.DatadogProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.provider.DatadogProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.provider.DatadogProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.provider.DatadogProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.provider.DatadogProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.provider.DatadogProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.provider.DatadogProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.provider.DatadogProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-datadog.provider.DatadogProvider.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetApiUrl` <a name="resetApiUrl" id="@cdktf/provider-datadog.provider.DatadogProvider.resetApiUrl"></a>

```typescript
public resetApiUrl(): void
```

##### `resetAppKey` <a name="resetAppKey" id="@cdktf/provider-datadog.provider.DatadogProvider.resetAppKey"></a>

```typescript
public resetAppKey(): void
```

##### `resetHttpClientRetryBackoffBase` <a name="resetHttpClientRetryBackoffBase" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffBase"></a>

```typescript
public resetHttpClientRetryBackoffBase(): void
```

##### `resetHttpClientRetryBackoffMultiplier` <a name="resetHttpClientRetryBackoffMultiplier" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffMultiplier"></a>

```typescript
public resetHttpClientRetryBackoffMultiplier(): void
```

##### `resetHttpClientRetryEnabled` <a name="resetHttpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryEnabled"></a>

```typescript
public resetHttpClientRetryEnabled(): void
```

##### `resetHttpClientRetryMaxRetries` <a name="resetHttpClientRetryMaxRetries" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryMaxRetries"></a>

```typescript
public resetHttpClientRetryMaxRetries(): void
```

##### `resetHttpClientRetryTimeout` <a name="resetHttpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProvider.resetHttpClientRetryTimeout"></a>

```typescript
public resetHttpClientRetryTimeout(): void
```

##### `resetValidate` <a name="resetValidate" id="@cdktf/provider-datadog.provider.DatadogProvider.resetValidate"></a>

```typescript
public resetValidate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.provider.DatadogProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-datadog'

provider.DatadogProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.provider.DatadogProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-datadog'

provider.DatadogProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-datadog'

provider.DatadogProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.provider.DatadogProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrlInput">apiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.appKeyInput">appKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBaseInput">httpClientRetryBackoffBaseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplierInput">httpClientRetryBackoffMultiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabledInput">httpClientRetryEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetriesInput">httpClientRetryMaxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeoutInput">httpClientRetryTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.validateInput">validateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.appKey">appKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBase">httpClientRetryBackoffBase</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplier">httpClientRetryBackoffMultiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabled">httpClientRetryEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetries">httpClientRetryMaxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeout">httpClientRetryTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.validate">validate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.provider.DatadogProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.provider.DatadogProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.provider.DatadogProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.provider.DatadogProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-datadog.provider.DatadogProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.provider.DatadogProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.provider.DatadogProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-datadog.provider.DatadogProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-datadog.provider.DatadogProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrlInput"></a>

```typescript
public readonly apiUrlInput: string;
```

- *Type:* string

---

##### `appKeyInput`<sup>Optional</sup> <a name="appKeyInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.appKeyInput"></a>

```typescript
public readonly appKeyInput: string;
```

- *Type:* string

---

##### `httpClientRetryBackoffBaseInput`<sup>Optional</sup> <a name="httpClientRetryBackoffBaseInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBaseInput"></a>

```typescript
public readonly httpClientRetryBackoffBaseInput: number;
```

- *Type:* number

---

##### `httpClientRetryBackoffMultiplierInput`<sup>Optional</sup> <a name="httpClientRetryBackoffMultiplierInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplierInput"></a>

```typescript
public readonly httpClientRetryBackoffMultiplierInput: number;
```

- *Type:* number

---

##### `httpClientRetryEnabledInput`<sup>Optional</sup> <a name="httpClientRetryEnabledInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabledInput"></a>

```typescript
public readonly httpClientRetryEnabledInput: string;
```

- *Type:* string

---

##### `httpClientRetryMaxRetriesInput`<sup>Optional</sup> <a name="httpClientRetryMaxRetriesInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetriesInput"></a>

```typescript
public readonly httpClientRetryMaxRetriesInput: number;
```

- *Type:* number

---

##### `httpClientRetryTimeoutInput`<sup>Optional</sup> <a name="httpClientRetryTimeoutInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeoutInput"></a>

```typescript
public readonly httpClientRetryTimeoutInput: number;
```

- *Type:* number

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktf/provider-datadog.provider.DatadogProvider.property.validateInput"></a>

```typescript
public readonly validateInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-datadog.provider.DatadogProvider.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `appKey`<sup>Optional</sup> <a name="appKey" id="@cdktf/provider-datadog.provider.DatadogProvider.property.appKey"></a>

```typescript
public readonly appKey: string;
```

- *Type:* string

---

##### `httpClientRetryBackoffBase`<sup>Optional</sup> <a name="httpClientRetryBackoffBase" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBase"></a>

```typescript
public readonly httpClientRetryBackoffBase: number;
```

- *Type:* number

---

##### `httpClientRetryBackoffMultiplier`<sup>Optional</sup> <a name="httpClientRetryBackoffMultiplier" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplier"></a>

```typescript
public readonly httpClientRetryBackoffMultiplier: number;
```

- *Type:* number

---

##### `httpClientRetryEnabled`<sup>Optional</sup> <a name="httpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabled"></a>

```typescript
public readonly httpClientRetryEnabled: string;
```

- *Type:* string

---

##### `httpClientRetryMaxRetries`<sup>Optional</sup> <a name="httpClientRetryMaxRetries" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetries"></a>

```typescript
public readonly httpClientRetryMaxRetries: number;
```

- *Type:* number

---

##### `httpClientRetryTimeout`<sup>Optional</sup> <a name="httpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeout"></a>

```typescript
public readonly httpClientRetryTimeout: number;
```

- *Type:* number

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.provider.DatadogProvider.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.provider.DatadogProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogProviderConfig <a name="DatadogProviderConfig" id="@cdktf/provider-datadog.provider.DatadogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-datadog'

const datadogProviderConfig: provider.DatadogProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiKey">apiKey</a></code> | <code>string</code> | (Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiUrl">apiUrl</a></code> | <code>string</code> | The API URL. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.appKey">appKey</a></code> | <code>string</code> | (Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffBase">httpClientRetryBackoffBase</a></code> | <code>number</code> | The HTTP request retry back off base. Defaults to 2. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffMultiplier">httpClientRetryBackoffMultiplier</a></code> | <code>number</code> | The HTTP request retry back off multiplier. Defaults to 2. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryEnabled">httpClientRetryEnabled</a></code> | <code>string</code> | Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryMaxRetries">httpClientRetryMaxRetries</a></code> | <code>number</code> | The HTTP request maximum retry number. Defaults to 3. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryTimeout">httpClientRetryTimeout</a></code> | <code>number</code> | The HTTP request retry timeout period. Defaults to 60 seconds. |
| <code><a href="#@cdktf/provider-datadog.provider.DatadogProviderConfig.property.validate">validate</a></code> | <code>string</code> | Enables validation of the provided API key during provider initialization. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs#alias DatadogProvider#alias}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

(Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs#api_key DatadogProvider#api_key}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

The API URL.

This can also be set via the DD_HOST environment variable. Note that this URL must not end with the `/api/` path. For example, `https://api.datadoghq.com/` is a correct value, while `https://api.datadoghq.com/api/` is not. And if you're working with "EU" version of Datadog, use `https://api.datadoghq.eu/`. Other Datadog region examples: `https://api.us5.datadoghq.com/`, `https://api.us3.datadoghq.com/` and `https://api.ddog-gov.com/`. See https://docs.datadoghq.com/getting_started/site/ for all available regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs#api_url DatadogProvider#api_url}

---

##### `appKey`<sup>Optional</sup> <a name="appKey" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.appKey"></a>

```typescript
public readonly appKey: string;
```

- *Type:* string

(Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs#app_key DatadogProvider#app_key}

---

##### `httpClientRetryBackoffBase`<sup>Optional</sup> <a name="httpClientRetryBackoffBase" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffBase"></a>

```typescript
public readonly httpClientRetryBackoffBase: number;
```

- *Type:* number

The HTTP request retry back off base. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs#http_client_retry_backoff_base DatadogProvider#http_client_retry_backoff_base}

---

##### `httpClientRetryBackoffMultiplier`<sup>Optional</sup> <a name="httpClientRetryBackoffMultiplier" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffMultiplier"></a>

```typescript
public readonly httpClientRetryBackoffMultiplier: number;
```

- *Type:* number

The HTTP request retry back off multiplier. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs#http_client_retry_backoff_multiplier DatadogProvider#http_client_retry_backoff_multiplier}

---

##### `httpClientRetryEnabled`<sup>Optional</sup> <a name="httpClientRetryEnabled" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryEnabled"></a>

```typescript
public readonly httpClientRetryEnabled: string;
```

- *Type:* string

Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs#http_client_retry_enabled DatadogProvider#http_client_retry_enabled}

---

##### `httpClientRetryMaxRetries`<sup>Optional</sup> <a name="httpClientRetryMaxRetries" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryMaxRetries"></a>

```typescript
public readonly httpClientRetryMaxRetries: number;
```

- *Type:* number

The HTTP request maximum retry number. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs#http_client_retry_max_retries DatadogProvider#http_client_retry_max_retries}

---

##### `httpClientRetryTimeout`<sup>Optional</sup> <a name="httpClientRetryTimeout" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryTimeout"></a>

```typescript
public readonly httpClientRetryTimeout: number;
```

- *Type:* number

The HTTP request retry timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs#http_client_retry_timeout DatadogProvider#http_client_retry_timeout}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.provider.DatadogProviderConfig.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

Enables validation of the provided API key during provider initialization.

Valid values are [`true`, `false`]. Default is true. When false, api_key won't be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs#validate DatadogProvider#validate}

---



