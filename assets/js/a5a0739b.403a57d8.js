"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[1953],{9875:function(e){e.exports=JSON.parse('{"type":"object","content":{"openapi":"3.0.0","info":{"title":"viagogo Account API","version":"2.249.0.0","x-logo":{"url":"https://img.vggcdn.net/img/assets/logo/viagogo_logo_apidocs.png","backgroundColor":"#222222"}},"servers":[{"url":"https://api.viagogo.net/v2","description":"Production"},{"url":"https://sandbox.api.viagogo.net/v2","description":"Sandbox"}],"paths":{"/addresses":{"get":{"tags":["Addresses"],"summary":"List addresses","description":"List addresses for the current user.","operationId":"Addressess_GetUserAddresses","parameters":[{"name":"page","in":"query","description":"Specifies which page of data to retrieve.","schema":{"type":"integer","format":"int32"}},{"name":"page_size","in":"query","description":"Set custom page sizes on response.","schema":{"type":"integer","format":"int32"}},{"name":"sort","in":"query","description":"Determines the ordering of items. A comma-separated string containing `default`, or`id`.","schema":{"type":"string"}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Addresss"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"404":{"$ref":"#/components/responses/not_found","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:user"]}]},"post":{"tags":["Addresses"],"summary":"Create an address","operationId":"Addressess_Post","requestBody":{"x-name":"body","content":{"application/json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PostAddressRequest"}]}}}},"responses":{"201":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Address"}}}},"400":{"$ref":"#/components/responses/validation_failed","description":null},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["write:user"]}]}},"/addresses/{addressId}":{"get":{"tags":["Addresses"],"summary":"Get an address","operationId":"Addressess_Get","parameters":[{"name":"addressId","in":"path","required":true,"schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Address"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"404":{"$ref":"#/components/responses/not_found","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:user"]}]},"patch":{"tags":["Addresses"],"summary":"Update an address","operationId":"Addressess_Patch","parameters":[{"name":"addressId","in":"path","required":true,"schema":{"type":"integer","format":"int32"}}],"requestBody":{"x-name":"body","content":{"application/json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PatchAddressRequest"}]}}}},"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Address"}}}},"400":{"$ref":"#/components/responses/validation_failed","description":null},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["write:user"]}]},"delete":{"tags":["Addresses"],"summary":"Delete an address","operationId":"Addressess_Delete","parameters":[{"name":"addressId","in":"path","required":true,"schema":{"type":"integer","format":"int32"}}],"responses":{"204":{"description":null},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["write:user"]}]}},"/paymentmethods":{"get":{"tags":["PaymentMethods"],"summary":"List payment methods","description":"List payment methods for the authenticated user.","operationId":"PaymentMethods_GetPaymentMethods","parameters":[{"name":"buyer_method","in":"query","schema":{"type":"boolean","nullable":true}},{"name":"seller_method","in":"query","schema":{"type":"boolean","nullable":true}},{"name":"page","in":"query","description":"Specifies which page of data to retrieve.","schema":{"type":"integer","format":"int32"}},{"name":"page_size","in":"query","description":"Set custom page sizes on response.","schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/PaymentMethodss"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"404":{"$ref":"#/components/responses/not_found","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:user"]}]}},"/paymentmethods/{paymentMethodId}":{"get":{"tags":["PaymentMethods"],"summary":"Get a payment method","operationId":"PaymentMethods_GetPaymentMethod","parameters":[{"name":"paymentMethodId","in":"path","required":true,"schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/PaymentMethod"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"404":{"$ref":"#/components/responses/not_found","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:user"]}]}},"/listings/{listingId}/paymentmethods":{"put":{"tags":["PaymentMethods"],"summary":"List payment methods for a listing","operationId":"PaymentMethods_GetListingPaymentMethods","parameters":[{"name":"listingId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"page","in":"query","description":"Specifies which page of data to retrieve.","schema":{"type":"integer","format":"int32"}},{"name":"page_size","in":"query","description":"Set custom page sizes on response.","schema":{"type":"integer","format":"int32"}}],"requestBody":{"x-name":"body","content":{"application/json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PutListingPaymentMethodsRequest"}]}}}},"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/PaymentMethods"}}}},"400":{"$ref":"#/components/responses/validation_failed","description":null},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:user"]}]}},"/user":{"get":{"tags":["User"],"summary":"Get the authenticated user","operationId":"User_Get","responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/User"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"404":{"$ref":"#/components/responses/not_found","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:user"]}]},"patch":{"tags":["User"],"summary":"Update the authenticated user","operationId":"User_Patch","requestBody":{"x-name":"body","content":{"application/json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PatchUserRequest"}]}}}},"responses":{"200":{"description":"","content":{"application/octet-stream":{"schema":{"type":"string","format":"binary"}}}},"400":{"$ref":"#/components/responses/validation_failed","description":null},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["write:user"]}]}}},"components":{"schemas":{"Addresss":{"type":"object","additionalProperties":false,"properties":{"total_items":{"type":"integer","format":"int32","nullable":true},"page":{"type":"integer","format":"int32","nullable":true},"page_size":{"type":"integer","format":"int32","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/AddresssLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/AddresssEmbeddedResources"}]}}},"AddresssLinks":{"title":"AddresssLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"first":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"last":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"next":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"prev":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"Link":{"type":"object","additionalProperties":false,"properties":{"href":{"type":"string","nullable":true},"title":{"type":"string","nullable":true},"templated":{"type":"boolean"}}},"AddresssEmbeddedResources":{"title":"AddresssEmbeddedResources","type":"object","properties":{"items":{"type":"array","nullable":true,"items":{"$ref":"#/components/schemas/Address"}}}},"Address":{"type":"object","description":"An address is a delivery, pickup or billing address associated with the current user.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The address identifier.","format":"int32","nullable":true},"full_name":{"type":"string","description":"The full name of the recipient.","nullable":true},"default":{"type":"boolean","description":"True if the address is the user\u2019s default address; Otherwise, false.","nullable":true},"address_1":{"type":"string","description":"The first line of the address.","nullable":true},"address_2":{"type":"string","description":"The second line of the address.","nullable":true},"address_3":{"type":"string","description":"The third line of the address.","nullable":true},"city":{"type":"string","description":"The name of the city where the address is located.","nullable":true},"state_province":{"type":"string","description":"The name of the State or Province where the address is located.","nullable":true},"postal_code":{"type":"string","description":"The postal code for the address.","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/AddressLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/AddressEmbeddedResources"}]}}},"AddressLinks":{"title":"AddressLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"address:carrier":{"description":"The pickup windows available for Carrier collection.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"address:delete":{"description":"Delete the current user\u2019s address.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"address:update":{"description":"Update the details of the current user\u2019s address.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"AddressEmbeddedResources":{"title":"AddressEmbeddedResources","type":"object","properties":{"country":{"description":"The Country where the address is located.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Country"}]}}},"Country":{"type":"object","additionalProperties":false,"properties":{"code":{"type":"string","description":"The two-letter ISO 3166 code for the country.","nullable":true},"name":{"type":"string","description":"The name of the country.","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/CountryLinks"}]}}},"CountryLinks":{"title":"CountryLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"country:events":{"description":"The events taking place in a country.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"country:localwebpage":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"Error":{"type":"object","additionalProperties":false,"properties":{"code":{"type":"string","nullable":true},"message":{"type":"string","nullable":true},"errors":{"type":"object","nullable":true,"additionalProperties":{"type":"array","items":{"type":"string"}}}}},"PostAddressRequest":{"type":"object","description":"An address is a delivery, pickup or billing address associated with the current user.","additionalProperties":false,"properties":{"full_name":{"type":"string","description":"The full name of the recipient.","nullable":true},"default":{"type":"boolean","description":"True if the address is the current user\'s default address; Otherwise, false.","nullable":true},"address_1":{"type":"string","description":"The first line of the address.","nullable":true},"address_2":{"type":"string","description":"The second line of the address.","nullable":true},"address_3":{"type":"string","description":"The third line of the address.","nullable":true},"city":{"type":"string","description":"The name of the city where the address is located.","nullable":true},"state_province":{"type":"string","description":"The name of the State or Province where the address is located.","nullable":true},"postal_code":{"type":"string","description":"The postal code for the address.","nullable":true},"country_code":{"type":"string","description":"The 2 character ISO code that identifies the country in which the address is located.","nullable":true}}},"PatchAddressRequest":{"type":"object","description":"An address is a delivery, pickup or billing address associated with the current user.","additionalProperties":false,"properties":{"full_name":{"type":"string","description":"The full name of the recipient.","nullable":true},"default":{"type":"boolean","description":"True if the address is the current user\'s default address; Otherwise, false.","nullable":true},"address_1":{"type":"string","description":"The first line of the address.","nullable":true},"address_2":{"type":"string","description":"The second line of the address.","nullable":true},"address_3":{"type":"string","description":"The third line of the address.","nullable":true},"city":{"type":"string","description":"The name of the city where the address is located.","nullable":true},"state_province":{"type":"string","description":"The name of the State or Province where the address is located.","nullable":true},"postal_code":{"type":"string","description":"The postal code for the address.","nullable":true},"country_code":{"type":"string","description":"The 2 character ISO code that identifies the country in which the address is located.","nullable":true}}},"PaymentMethodss":{"type":"object","additionalProperties":false,"properties":{"total_items":{"type":"integer","format":"int32","nullable":true},"page":{"type":"integer","format":"int32","nullable":true},"page_size":{"type":"integer","format":"int32","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PaymentMethodssLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PaymentMethodssEmbeddedResources"}]}}},"PaymentMethodssLinks":{"title":"PaymentMethodssLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"first":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"last":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"next":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"prev":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"PaymentMethodssEmbeddedResources":{"title":"PaymentMethodssEmbeddedResources","type":"object","properties":{"items":{"type":"array","nullable":true,"items":{"$ref":"#/components/schemas/PaymentMethods"}}}},"PaymentMethods":{"type":"object","description":"The PaymentMethods resource is a collection resource that contains zero\\nor more references to a set of payment methods, and links that guide you\\non ways to interact with the payment methods. The collection offers a\\npaginated view of payment methods.","additionalProperties":false,"properties":{"total_items":{"type":"integer","format":"int32","nullable":true},"page":{"type":"integer","format":"int32","nullable":true},"page_size":{"type":"integer","format":"int32","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PaymentMethodsLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PaymentMethodsEmbeddedResources"}]}}},"PaymentMethodsLinks":{"title":"PaymentMethodsLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"first":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"last":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"next":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"paymentmethod:createcreditcard":{"description":"Adds a new credit card for the current user.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"paymentmethod:createpaypal":{"description":"Adds a new PayPal account for the current user.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"prev":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"PaymentMethodsEmbeddedResources":{"title":"PaymentMethodsEmbeddedResources","type":"object","properties":{"items":{"type":"array","nullable":true,"items":{"$ref":"#/components/schemas/PaymentMethod"}}}},"PaymentMethod":{"type":"object","description":"A method to send or receive payment.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The payment method identifier.","format":"int32","nullable":true},"details":{"type":"string","description":"The obfuscated details of the payment method.","nullable":true},"type":{"type":"string","description":"The type of the payment method.","nullable":true},"type_description":{"type":"string","description":"A localised string describing the type of payment method.","nullable":true},"buyer_method":{"type":"boolean","description":"True if the payment method can be used for purchasing listings; otherwise, false.","nullable":true},"default_buyer_method":{"type":"boolean","description":"True if the payment method is the user\u2019s default payment method for purchasing listings.","nullable":true},"seller_method":{"type":"boolean","description":"True if the payment method can be used for receiving payments; otherwise, false.","nullable":true},"default_seller_method":{"type":"boolean","description":"True if the payment method is the user\u2019s default payment method for receiving payments.","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PaymentMethodLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PaymentMethodEmbeddedResources"}]}}},"PaymentMethodLinks":{"title":"PaymentMethodLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"paymentmethod:delete":{"description":"Delete the current user\u2019s payment method.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"paymentmethod:updatecreditcard":{"description":"Update the current user\u2019s credit card details.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"paymentmethod:updatedefaults":{"description":"Update the default payment methods for the current user.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"paymentmethod:updatepaypal":{"description":"Update the current user\u2019s PayPal details.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"PaymentMethodEmbeddedResources":{"title":"PaymentMethodEmbeddedResources","type":"object","properties":{"billing_address":{"description":"The billing address for this payment method.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Address"}]},"type_details":{"type":"object","description":"The type details for this payment method.","nullable":true,"additionalProperties":{}}}},"PutListingPaymentMethodsRequest":{"type":"object","additionalProperties":false,"properties":{"number_of_tickets":{"type":"integer","format":"int32","nullable":true},"delivery_address_id":{"type":"integer","format":"int32","nullable":true},"delivery_method_id":{"type":"integer","format":"int32","nullable":true},"coupons":{"type":"array","nullable":true,"items":{"type":"string"}},"pickup_full_name":{"type":"string","nullable":true}}},"User":{"type":"object","description":"An authenticated user.","additionalProperties":false,"properties":{"full_name":{"type":"string","description":"The full name of the user.","nullable":true},"email":{"type":"string","description":"The email address of the user.","nullable":true},"primary_phone":{"type":"string","description":"The primary phone number of the user.","nullable":true},"email_optin":{"type":"boolean","description":"True if the user is signed up for the viagogo email newsletter; otherwise, false."},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/UserLinks"}]}}},"UserLinks":{"title":"UserLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"user:addresses":{"description":"The collection of Addresses associated with this user.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"user:paymentmethods":{"description":"The collection of PaymentMethods associated with this user.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"user:sales":{"description":"The collection of Sales associated with this user.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"user:salesaggregates":{"description":"The aggregated sales data associated with this user.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"user:sellerlistings":{"description":"The collection of SellerListings associated with this user.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"user:update":{"description":"Update the settings for this user.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"user:webhooks":{"description":"The collection of Webhooks associated with this user.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"PatchUserRequest":{"type":"object","description":"An authenticated user.","additionalProperties":false,"properties":{"full_name":{"type":"string","description":"The full name of the user.","nullable":true},"email_optin":{"type":"boolean","description":"True if the user is signed up for the viagogo email newsletter; otherwise, false.","nullable":true}}}},"responses":{"requires_authentication":{"description":"Authentication credentials were missing or incorrect.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"not_found":{"description":"The URI requested is invalid or the resource requested, such as an event, does not exist.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"forbidden":{"description":"The request is understood, but it has been refused or access is not allowed. An accompanying error message will explain why.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"internal_server_error":{"description":"Internal server error","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"validation_failed":{"description":"The request data is not valid. errors will contain an object with a localized message that describes the validation error for each property of the data.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}}},"parameters":{"fields":{"in":"query","description":"A comma-separated list of the name(s) of the field(s) to be returned."},"embed":{"in":"query","description":"Optional embedded resources are only included in a resource when your application includes the embedded property name(s) as a comma-separated value in the embed parameter."}},"headers":{"Content-Language":{"schema":{"type":"string"},"example":"en-US"},"Content-Type":{"schema":{"type":"string"},"example":"application/hal+json"},"VGG-Topic":{"description":"Name of the topic that triggered this delivery","schema":{"type":"string"},"example":"Ping"},"VGG-DeliveryId":{"description":"Unique identifier for this delivery","schema":{"type":"string"},"example":"1993433"}},"securitySchemes":{"OAuth2":{"type":"oauth2","bearerFormat":"JWT","flows":{"implicit":{"authorizationUrl":"https://account.viagogo.com/authorize","tokenUrl":"https://account.viagogo.com/oauth2/token","refreshUrl":"https://account.viagogo.com/oauth2/token"},"clientCredentials":{"tokenUrl":"https://account.viagogo.com/oauth2/token"},"authorizationCode":{"authorizationUrl":"https://account.viagogo.com/authorize","tokenUrl":"https://account.viagogo.com/oauth2/token","refreshUrl":"https://account.viagogo.com/oauth2/token"}}}}},"security":[{"OAuth2":["read:user","write:brokerage","write:user"]}],"tags":[{"name":"Addresses"},{"name":"PaymentMethods"},{"name":"Resource_Address","description":"An address is a delivery, pickup or billing address associated with the current user.\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Address\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Address"},{"name":"Resource_Addresss","description":"\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Addresss\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Addresss"},{"name":"Resource_PaymentMethod","description":"A method to send or receive payment.\\n<SchemaDefinition schemaRef=\\"#/components/schemas/PaymentMethod\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"PaymentMethod"},{"name":"Resource_PaymentMethods","description":"The PaymentMethods resource is a collection resource that contains zero\\nor more references to a set of payment methods, and links that guide you\\non ways to interact with the payment methods. The collection offers a\\npaginated view of payment methods.\\n<SchemaDefinition schemaRef=\\"#/components/schemas/PaymentMethods\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"PaymentMethods"},{"name":"Resource_PaymentMethodss","description":"\\n<SchemaDefinition schemaRef=\\"#/components/schemas/PaymentMethodss\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"PaymentMethodss"},{"name":"Resource_User","description":"An authenticated user.\\n<SchemaDefinition schemaRef=\\"#/components/schemas/User\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"User"},{"name":"User"}],"x-tagGroups":[{"name":"Endpoints","tags":["Addresses","PaymentMethods","User"]},{"name":"Resources","tags":["Resource_Address","Resource_Addresss","Resource_PaymentMethod","Resource_PaymentMethods","Resource_PaymentMethodss","Resource_User"]}]}}')}}]);