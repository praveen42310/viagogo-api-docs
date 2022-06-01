"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[2917],{2155:function(e){e.exports=JSON.parse('{"type":"object","content":{"openapi":"3.0.0","info":{"title":"viagogo Webhooks API","version":"2.249.0.0","x-logo":{"url":"https://img.vggcdn.net/img/assets/logo/viagogo_logo_apidocs.png","backgroundColor":"#222222"}},"servers":[{"url":"https://api.viagogo.net/v2","description":"Production"},{"url":"https://sandbox.api.viagogo.net/v2","description":"Sandbox"}],"paths":{"/webhooks":{"get":{"tags":["Webhooks"],"summary":"List webhooks","description":"List webhooks for the authenticated user.","operationId":"Webhooks_Get","parameters":[{"name":"page","in":"query","description":"Specifies which page of data to retrieve.","schema":{"type":"integer","format":"int32"}},{"name":"page_size","in":"query","description":"Set custom page sizes on response.","schema":{"type":"integer","format":"int32"}},{"name":"sort","in":"query","description":"Determines the ordering of items. A comma-separated string containing `created_at`.","schema":{"type":"string"}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Webhooks"}]}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:webhooks"]}]},"post":{"tags":["Webhooks"],"summary":"Create a webhook","operationId":"Webhooks_Post","requestBody":{"x-name":"body","content":{"application/json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PostWebhookRequest"}]}}}},"responses":{"201":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Webhook"}}}},"400":{"$ref":"#/components/responses/validation_failed","description":null},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["write:webhooks"]}]}},"/webhooks/{webhookId}":{"get":{"tags":["Webhooks"],"summary":"Get a webhook","operationId":"Webhooks_Get2","parameters":[{"name":"webhookId","in":"path","required":true,"schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Webhook"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"404":{"$ref":"#/components/responses/not_found","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:webhooks"]}]},"patch":{"tags":["Webhooks"],"summary":"Update a webhook","operationId":"Webhooks_Patch","parameters":[{"name":"webhookId","in":"path","required":true,"schema":{"type":"integer","format":"int32"}}],"requestBody":{"x-name":"body","content":{"application/json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PatchWebhookRequest"}]}}}},"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Webhook"}}}},"400":{"$ref":"#/components/responses/validation_failed","description":null},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["write:webhooks"]}]},"delete":{"tags":["Webhooks"],"summary":"Delete a webhook","operationId":"Webhooks_Delete","parameters":[{"name":"webhookId","in":"path","required":true,"schema":{"type":"integer","format":"int32"}}],"responses":{"204":{"description":null},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["write:webhooks"]}]}},"/webhooks/{webhookId}/ping":{"post":{"tags":["Webhooks"],"summary":"Ping a webhook","description":"Triggers a request to be sent to your webhook. Call this endpoint to test your webhook.","operationId":"Webhooks_PingWebhook","parameters":[{"name":"webhookId","in":"path","required":true,"schema":{"type":"integer","format":"int32"}}],"responses":{"202":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Webhook"}}}},"400":{"$ref":"#/components/responses/validation_failed","description":null},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["write:webhooks"]}]}}},"components":{"schemas":{"Webhooks":{"type":"object","additionalProperties":false,"properties":{"total_items":{"type":"integer","format":"int32","nullable":true},"page":{"type":"integer","format":"int32","nullable":true},"page_size":{"type":"integer","format":"int32","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/WebhooksLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/WebhooksEmbeddedResources"}]}}},"WebhooksLinks":{"title":"WebhooksLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"first":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"last":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"next":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"prev":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"webhook:create":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"Link":{"type":"object","additionalProperties":false,"properties":{"href":{"type":"string","nullable":true},"title":{"type":"string","nullable":true},"templated":{"type":"boolean"}}},"WebhooksEmbeddedResources":{"title":"WebhooksEmbeddedResources","type":"object","properties":{"items":{"type":"array","nullable":true,"items":{"$ref":"#/components/schemas/Webhook"}}}},"Webhook":{"type":"object","description":"A webhook is a subscription from a server application to certain topics\\non the viagogo platform. When an occurrence of a topic is triggered,\\nwe\u2019ll POST a payload to the webhook\u2019s configured url.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The webhook identifier.","format":"int32","nullable":true},"name":{"type":"string","description":"The name of the webhook.","nullable":true},"created_at":{"type":"string","description":"The date when the webhook was created.","format":"date-time"},"topics":{"type":"array","description":"An array of the topics the webhook is trigger for.","nullable":true,"items":{"type":"string"}},"url":{"type":"string","description":"The server endpoint that will receive the webhook payload.","nullable":true},"authorization_header":{"type":"string","description":"The Authorization header value that should be included in requests to the webhook.","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/WebhookLinks"}]}}},"WebhookLinks":{"title":"WebhookLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"webhook:delete":{"description":"Delete a webhook.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"webhook:ping":{"description":"Ping a webhook.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"webhook:update":{"description":"Update the details of a webhook.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"Error":{"type":"object","additionalProperties":false,"properties":{"code":{"type":"string","nullable":true},"message":{"type":"string","nullable":true},"errors":{"type":"object","nullable":true,"additionalProperties":{"type":"array","items":{"type":"string"}}}}},"PostWebhookRequest":{"type":"object","additionalProperties":false,"properties":{"name":{"type":"string","description":"The name of the webhook.","nullable":true},"url":{"type":"string","description":"The server endpoint that will receive the webhook payload.","nullable":true},"authorization_header":{"type":"string","description":"The Authorization header value that should be included in requests to the webhook.","nullable":true},"topics":{"type":"array","description":"An array of the topics the webhook is trigger for.","nullable":true,"items":{"type":"string"}}}},"PatchWebhookRequest":{"type":"object","additionalProperties":false,"properties":{"name":{"type":"string","description":"The name of the webhook.","nullable":true},"url":{"type":"string","description":"The server endpoint that will receive the webhook payload.","nullable":true},"authorization_header":{"type":"string","description":"The Authorization header value that should be included in requests to the webhook.","nullable":true},"topics":{"type":"array","description":"An array of the topics the webhook is trigger for.","nullable":true,"items":{"type":"string"}}}},"SalesTopic":{"type":"object","description":"Triggered when something happens that affects a sale (e.g. you sell one or more tickets).","additionalProperties":false,"properties":{"topic":{"type":"string","description":"The topic of the webhook.","nullable":true},"action":{"type":"string","description":"The action that triggered this webhook. ","nullable":true},"barcodes":{"type":"array","description":"The barcodes that are linked to the sale.","nullable":true,"items":{"$ref":"#/components/schemas/BarcodeInformation"}},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/SalesTopicLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/SalesTopicEmbeddedResources"}]}}},"SalesTopicLinks":{"title":"SalesTopicLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"SalesTopicEmbeddedResources":{"title":"SalesTopicEmbeddedResources","type":"object","properties":{"event":{"description":"The event for this sale.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedEvent"}]},"sale":{"description":"The affected sale.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedSale"}]},"seller_listing":{"description":"The listing from which the tickets were sold.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedSellerListing"}]},"venue":{"description":"The venue where the event is taking place.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenue"}]},"webhook":{"description":"The subscribed webhook.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Webhook"}]}}},"BarcodeInformation":{"type":"object","description":"A set of barcodes for a seat.","additionalProperties":false,"properties":{"seat_ordinal":{"type":"integer","description":"An ordinal number for a seat.","format":"int32","nullable":true},"seat":{"type":"string","description":"Seat number.","nullable":true},"row":{"type":"string","description":"Row of ticket.","nullable":true},"status":{"type":"string","description":"Status of the barcode. Can be `Received` or `FailedValidation`","nullable":true},"barcode_values":{"type":"array","description":"Barcode(s) values for this seat.","nullable":true,"items":{"type":"string"}}}},"EmbeddedEvent":{"type":"object","description":"An event on the viagogo platform.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The event identifier.","format":"int32","nullable":true},"name":{"type":"string","description":"The name of the event.","nullable":true},"start_date":{"type":"string","description":"The date when the event starts.","format":"date-time","nullable":true},"end_date":{"type":"string","description":"The date when the event ends.","format":"date-time","nullable":true},"on_sale_date":{"type":"string","description":"The date when tickets for the event will go onsale.","format":"date-time","nullable":true},"date_confirmed":{"type":"boolean","description":"True if the event start and end date have been confirmed; Otherwise, false.","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedEventLinks"}]}}},"EmbeddedEventLinks":{"title":"EmbeddedEventLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"EmbeddedSale":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The sale identifier.","format":"int32","nullable":true},"created_at":{"type":"string","description":"The date when the sale was created.","format":"date-time","nullable":true},"seating":{"description":"The seating information for the ticket(s) that have been sold.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Seating"}]},"proceeds":{"description":"The total amount that the seller will receive for the sale.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Money"}]},"number_of_tickets":{"type":"integer","description":"The number of tickets that have been sold.","format":"int32","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedSaleLinks"}]}}},"Seating":{"type":"object","description":"Represents the seating information for a ticket(s) in a Venue.","additionalProperties":false,"required":["section"],"properties":{"section":{"type":"string","description":"The section of the ticket(s).","nullable":true},"row":{"type":"string","description":"The row of the ticket(s).","nullable":true},"seat_from":{"type":"string","description":"The first in a contiguous block of seats to which the tickets have been allocated.","nullable":true},"seat_to":{"type":"string","description":"The last in a contiguous block of seats to which the tickets have been allocated.","nullable":true}}},"Money":{"type":"object","description":"Returned for monetary values, such as ticket prices, fees charged and tax amounts.","additionalProperties":false,"required":["amount","currency_code"],"properties":{"amount":{"type":"number","description":"The decimal amount of the money.","format":"decimal","nullable":true},"currency_code":{"type":"string","description":"The ISO 4217 currency code that the monetary value is represented in.","nullable":true},"display":{"type":"string","description":"A user-friendly string representing the monetary value.","nullable":true}}},"EmbeddedSaleLinks":{"title":"EmbeddedSaleLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"EmbeddedSellerListing":{"type":"object","description":"A set of tickets for sale on the viagogo marketplace that belong to the currently authenticated user.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The listing identifier.","format":"int64","nullable":true},"created_at":{"type":"string","description":"The date when the listing was created.","format":"date-time","nullable":true},"number_of_tickets":{"type":"integer","description":"The number of tickets available for purchase.","format":"int32","nullable":true},"seating":{"description":"The seating information for the ticket(s) in this listing.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Seating"}]},"display_seating":{"description":"The seating information that will be displayed to buyers for the ticket(s) in this listing.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Seating"}]},"ticket_price":{"description":"The price of each ticket in the listing.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Money"}]},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedSellerListingLinks"}]}}},"EmbeddedSellerListingLinks":{"title":"EmbeddedSellerListingLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"EmbeddedVenue":{"type":"object","description":"A venue is a location where an event takes place.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The venue identifier.","format":"int32","nullable":true},"name":{"type":"string","description":"The name of the venue.","nullable":true},"city":{"type":"string","description":"The name of the city where the venue is located.","nullable":true},"state_province":{"type":"string","description":"The name of the State or Province where the venue is located.","nullable":true},"latitude":{"type":"number","description":"The latitude for the venue.","format":"double","nullable":true},"longitude":{"type":"number","description":"The longitude for the venue.","format":"double","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenueLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenueEmbeddedResources"}]}}},"EmbeddedVenueLinks":{"title":"EmbeddedVenueLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"EmbeddedVenueEmbeddedResources":{"title":"EmbeddedVenueEmbeddedResources","type":"object","properties":{"country":{"description":"The Country where the venue is located.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Country"}]}}},"Country":{"type":"object","additionalProperties":false,"properties":{"code":{"type":"string","description":"The two-letter ISO 3166 code for the country.","nullable":true},"name":{"type":"string","description":"The name of the country.","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/CountryLinks"}]}}},"CountryLinks":{"title":"CountryLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"country:events":{"description":"The events taking place in a country.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"country:localwebpage":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"ProvisionalSaleTopic":{"type":"object","description":"Triggered when a provisional sale occurs. The normal `SalesTopic` webhook will confirm the provisional sale. If you want to reject the provisional sale, ignore it and reject the sale when it comes through as normal.","additionalProperties":false,"properties":{"topic":{"type":"string","description":"The topic of the webhook.","nullable":true},"action":{"type":"string","description":"The action that triggered this webhook. ","nullable":true},"barcodes":{"type":"array","description":"The barcodes that are linked to the sale.","nullable":true,"items":{"$ref":"#/components/schemas/BarcodeInformation"}},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/ProvisionalSaleTopicLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/ProvisionalSaleTopicEmbeddedResources"}]}}},"ProvisionalSaleTopicLinks":{"title":"ProvisionalSaleTopicLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"ProvisionalSaleTopicEmbeddedResources":{"title":"ProvisionalSaleTopicEmbeddedResources","type":"object","properties":{"event":{"description":"The event for this sale.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedEvent"}]},"sale":{"description":"The affected sale.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedSale"}]},"seller_listing":{"description":"The listing from which the tickets were sold.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedSellerListing"}]},"venue":{"description":"The venue where the event is taking place.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenue"}]},"webhook":{"description":"The subscribed webhook.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Webhook"}]}}},"CancelProvisionalSaleTopic":{"type":"object","description":"Triggered when a provisional sale is cancelled.","additionalProperties":false,"properties":{"topic":{"type":"string","description":"The topic of the webhook.","nullable":true},"action":{"type":"string","description":"The action that triggered this webhook. ","nullable":true},"barcodes":{"type":"array","description":"The barcodes that are linked to the sale.","nullable":true,"items":{"$ref":"#/components/schemas/BarcodeInformation"}},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/CancelProvisionalSaleTopicLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/CancelProvisionalSaleTopicEmbeddedResources"}]}}},"CancelProvisionalSaleTopicLinks":{"title":"CancelProvisionalSaleTopicLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"CancelProvisionalSaleTopicEmbeddedResources":{"title":"CancelProvisionalSaleTopicEmbeddedResources","type":"object","properties":{"event":{"description":"The event for this sale.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedEvent"}]},"sale":{"description":"The affected sale.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedSale"}]},"seller_listing":{"description":"The listing from which the tickets were sold.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedSellerListing"}]},"venue":{"description":"The venue where the event is taking place.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenue"}]},"webhook":{"description":"The subscribed webhook.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Webhook"}]}}},"SaleUpdatesTopic":{"type":"object","description":"Triggered when an update is made to a sale that you did not initiate. You will need to filter by the action that you are interested in. The currently support action is `FailedBarcodeValidation` which will tell you if validation of a set of barcodes uploaded against an order has failed, and barcodes need re-uploading.","additionalProperties":false,"properties":{"topic":{"type":"string","description":"The topic of the webhook.","nullable":true},"action":{"type":"string","description":"The action that trigger this webhook. Can be `FailedBarcodeValidation`","nullable":true},"barcodes":{"type":"array","description":"The barcodes that are linked to the sale.","nullable":true,"items":{"$ref":"#/components/schemas/BarcodeInformation"}},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/SaleUpdatesTopicLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/SaleUpdatesTopicEmbeddedResources"}]}}},"SaleUpdatesTopicLinks":{"title":"SaleUpdatesTopicLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"SaleUpdatesTopicEmbeddedResources":{"title":"SaleUpdatesTopicEmbeddedResources","type":"object","properties":{"event":{"description":"The event for this sale.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedEvent"}]},"sale":{"description":"The affected sale.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedSale"}]},"seller_listing":{"description":"The listing from which the tickets were sold.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedSellerListing"}]},"venue":{"description":"The venue where the event is taking place.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenue"}]},"webhook":{"description":"The subscribed webhook.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Webhook"}]}}},"SellerListingUpdatesTopic":{"type":"object","description":"Triggered when an update is made to a listing that you did not initiate. You will need to filter by the action that you are interested in. The currently support actions are `FailedBarcodeValidation` and `ListingDeliverabilityExpired`. `FailedBarcodeValidation` will tell you if validation of a set of barcodes uploaded against a listing has failed, and barcodes need re-uploading. `ListingDeliverabilityExpired` will tell you that a listing is not longer deliverable to a customer. To increase the deliverability of electronic type tickets, preupload them (e.g. pre-upload barcodes or PDF files.) To increase deliverability of paper tickets, opt your tickets into our LMS program.","additionalProperties":false,"properties":{"topic":{"type":"string","description":"The topic of the webhook.","nullable":true},"action":{"type":"string","description":"The action that trigger this webhook. Can be `FailedBarcodeValidation` or `ListingDeliverabilityExpired`","nullable":true},"barcodes":{"type":"array","description":"The barcodes that are linked to the listing.","nullable":true,"items":{"$ref":"#/components/schemas/BarcodeInformation2"}},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/SellerListingUpdatesTopicLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/SellerListingUpdatesTopicEmbeddedResources"}]}}},"SellerListingUpdatesTopicLinks":{"title":"SellerListingUpdatesTopicLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"SellerListingUpdatesTopicEmbeddedResources":{"title":"SellerListingUpdatesTopicEmbeddedResources","type":"object","properties":{"event":{"description":"The event for this listing.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedEvent"}]},"seller_listing":{"description":"The affected listing.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedSellerListing"}]},"venue":{"description":"The venue where the event is taking place.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenue"}]},"webhook":{"description":"The subscribed webhook.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Webhook"}]}}},"BarcodeInformation2":{"type":"object","description":"A set of barcodes for a seat.","additionalProperties":false,"properties":{"seat_ordinal":{"type":"integer","description":"An ordinal number for a seat.","format":"int32","nullable":true},"seat":{"type":"string","description":"Seat number.","nullable":true},"row":{"type":"string","description":"Row of ticket.","nullable":true},"status":{"type":"string","description":"Status of the barcode. Can be `Received` or `FailedValidation`","nullable":true},"barcode_values_sha256_hashed":{"type":"array","description":"SHA256-hashed barcode(s) for this seat.","nullable":true,"items":{"type":"string"}}}},"PingTopic":{"type":"object","description":"Triggered any time a Webhook is pinged.","additionalProperties":false,"properties":{"topic":{"type":"string","description":"The topic of the webhook.","nullable":true},"action":{"type":"string","description":"The action that triggered this webhook. ","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PingTopicLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PingTopicEmbeddedResources"}]}}},"PingTopicLinks":{"title":"PingTopicLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"PingTopicEmbeddedResources":{"title":"PingTopicEmbeddedResources","type":"object","properties":{"webhook":{"description":"The subscribed webhook.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Webhook"}]}}}},"responses":{"requires_authentication":{"description":"Authentication credentials were missing or incorrect.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"not_found":{"description":"The URI requested is invalid or the resource requested, such as an event, does not exist.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"forbidden":{"description":"The request is understood, but it has been refused or access is not allowed. An accompanying error message will explain why.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"internal_server_error":{"description":"Internal server error","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"validation_failed":{"description":"The request data is not valid. errors will contain an object with a localized message that describes the validation error for each property of the data.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}}},"parameters":{"fields":{"in":"query","description":"A comma-separated list of the name(s) of the field(s) to be returned."},"embed":{"in":"query","description":"Optional embedded resources are only included in a resource when your application includes the embedded property name(s) as a comma-separated value in the embed parameter."}},"headers":{"Content-Language":{"schema":{"type":"string"},"example":"en-US"},"Content-Type":{"schema":{"type":"string"},"example":"application/hal+json"},"VGG-Topic":{"description":"Name of the topic that triggered this delivery","schema":{"type":"string"},"example":"Ping"},"VGG-DeliveryId":{"description":"Unique identifier for this delivery","schema":{"type":"string"},"example":"1993433"}},"securitySchemes":{"OAuth2":{"type":"oauth2","bearerFormat":"JWT","flows":{"implicit":{"authorizationUrl":"https://account.viagogo.com/authorize","tokenUrl":"https://account.viagogo.com/oauth2/token","refreshUrl":"https://account.viagogo.com/oauth2/token"},"clientCredentials":{"tokenUrl":"https://account.viagogo.com/oauth2/token"},"authorizationCode":{"authorizationUrl":"https://account.viagogo.com/authorize","tokenUrl":"https://account.viagogo.com/oauth2/token","refreshUrl":"https://account.viagogo.com/oauth2/token"}}}}},"security":[{"OAuth2":["read:webhooks","write:webhooks"]}],"tags":[{"name":"BasicType_Money","description":"Returned for monetary values, such as ticket prices, fees charged and tax amounts.\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Money\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Money"},{"name":"BasicType_Seating","description":"Represents the seating information for a ticket(s) in a Venue.\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Seating\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Seating"},{"name":"Resource_Webhook","description":"A webhook is a subscription from a server application to certain topics\\non the viagogo platform. When an occurrence of a topic is triggered,\\nwe\u2019ll POST a payload to the webhook\u2019s configured url.\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Webhook\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Webhook"},{"name":"Resource_Webhooks","description":"\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Webhooks\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Webhooks"},{"name":"Topics","description":"When configuring a webhook, you can choose the topics you would like to receive payloads for. You should only subscribe to the specific topics that you plan on handling so that you can limit the number of HTTP requests to your server."},{"name":"Webhooks"}],"x-webhooks":{"sales":{"post":{"tags":["Topics"],"summary":"Sales","description":"Triggered when something happens that affects a sale (e.g. you sell one or more tickets).","parameters":[{"description":"Name of the topic that triggered this delivery","schema":{"type":"string"},"example":"Ping"},{"description":"Unique identifier for this delivery","schema":{"type":"string"},"example":"1993433"}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Triggered when something happens that affects a sale (e.g. you sell one or more tickets).","additionalProperties":false,"properties":{"topic":{"type":"string","description":"The topic of the webhook.","nullable":true},"action":{"type":"string","description":"The action that triggered this webhook. ","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/SalesTopicLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/SalesTopicEmbeddedResources"}]}}}}}},"responses":{"200":{"description":"The data was received successfully."}}}},"provisional-sale":{"post":{"tags":["Topics"],"summary":"ProvisionalSale","description":"Triggered when a provisional sale occurs. The normal `SalesTopic` webhook will confirm the provisional sale. If you want to reject the provisional sale, ignore it and reject the sale when it comes through as normal.","parameters":[{"description":"Name of the topic that triggered this delivery","schema":{"type":"string"},"example":"Ping"},{"description":"Unique identifier for this delivery","schema":{"type":"string"},"example":"1993433"}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Triggered when a provisional sale occurs. The normal `SalesTopic` webhook will confirm the provisional sale. If you want to reject the provisional sale, ignore it and reject the sale when it comes through as normal.","additionalProperties":false,"properties":{"topic":{"type":"string","description":"The topic of the webhook.","nullable":true},"action":{"type":"string","description":"The action that triggered this webhook. ","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/ProvisionalSaleTopicLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/ProvisionalSaleTopicEmbeddedResources"}]}}}}}},"responses":{"200":{"description":"The data was received successfully."}}}},"cancel-provisional-sale":{"post":{"tags":["Topics"],"summary":"CancelProvisionalSale","description":"Triggered when a provisional sale is cancelled.","parameters":[{"description":"Name of the topic that triggered this delivery","schema":{"type":"string"},"example":"Ping"},{"description":"Unique identifier for this delivery","schema":{"type":"string"},"example":"1993433"}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Triggered when a provisional sale is cancelled.","additionalProperties":false,"properties":{"topic":{"type":"string","description":"The topic of the webhook.","nullable":true},"action":{"type":"string","description":"The action that triggered this webhook. ","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/CancelProvisionalSaleTopicLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/CancelProvisionalSaleTopicEmbeddedResources"}]}}}}}},"responses":{"200":{"description":"The data was received successfully."}}}},"sale-updates":{"post":{"tags":["Topics"],"summary":"SaleUpdates","description":"Triggered when an update is made to a sale that you did not initiate. You will need to filter by the action that you are interested in. The currently support action is `FailedBarcodeValidation` which will tell you if validation of a set of barcodes uploaded against an order has failed, and barcodes need re-uploading.","parameters":[{"description":"Name of the topic that triggered this delivery","schema":{"type":"string"},"example":"Ping"},{"description":"Unique identifier for this delivery","schema":{"type":"string"},"example":"1993433"}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Triggered when an update is made to a sale that you did not initiate. You will need to filter by the action that you are interested in. The currently support action is `FailedBarcodeValidation` which will tell you if validation of a set of barcodes uploaded against an order has failed, and barcodes need re-uploading.","additionalProperties":false,"properties":{"topic":{"type":"string","description":"The topic of the webhook.","nullable":true},"action":{"type":"string","description":"The action that trigger this webhook. Can be `FailedBarcodeValidation`","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/SaleUpdatesTopicLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/SaleUpdatesTopicEmbeddedResources"}]}}}}}},"responses":{"200":{"description":"The data was received successfully."}}}},"sellerlisting-updates":{"post":{"tags":["Topics"],"summary":"SellerListingUpdates","description":"Triggered when an update is made to a listing that you did not initiate. You will need to filter by the action that you are interested in. The currently support actions are `FailedBarcodeValidation` and `ListingDeliverabilityExpired`. `FailedBarcodeValidation` will tell you if validation of a set of barcodes uploaded against a listing has failed, and barcodes need re-uploading. `ListingDeliverabilityExpired` will tell you that a listing is not longer deliverable to a customer. To increase the deliverability of electronic type tickets, preupload them (e.g. pre-upload barcodes or PDF files.) To increase deliverability of paper tickets, opt your tickets into our LMS program.","parameters":[{"description":"Name of the topic that triggered this delivery","schema":{"type":"string"},"example":"Ping"},{"description":"Unique identifier for this delivery","schema":{"type":"string"},"example":"1993433"}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Triggered when an update is made to a listing that you did not initiate. You will need to filter by the action that you are interested in. The currently support actions are `FailedBarcodeValidation` and `ListingDeliverabilityExpired`. `FailedBarcodeValidation` will tell you if validation of a set of barcodes uploaded against a listing has failed, and barcodes need re-uploading. `ListingDeliverabilityExpired` will tell you that a listing is not longer deliverable to a customer. To increase the deliverability of electronic type tickets, preupload them (e.g. pre-upload barcodes or PDF files.) To increase deliverability of paper tickets, opt your tickets into our LMS program.","additionalProperties":false,"properties":{"topic":{"type":"string","description":"The topic of the webhook.","nullable":true},"action":{"type":"string","description":"The action that trigger this webhook. Can be `FailedBarcodeValidation` or `ListingDeliverabilityExpired`","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/SellerListingUpdatesTopicLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/SellerListingUpdatesTopicEmbeddedResources"}]}}}}}},"responses":{"200":{"description":"The data was received successfully."}}}},"ping":{"post":{"tags":["Topics"],"summary":"Ping","description":"Triggered any time a Webhook is pinged.","parameters":[{"description":"Name of the topic that triggered this delivery","schema":{"type":"string"},"example":"Ping"},{"description":"Unique identifier for this delivery","schema":{"type":"string"},"example":"1993433"}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Triggered any time a Webhook is pinged.","additionalProperties":false,"properties":{"topic":{"type":"string","description":"The topic of the webhook.","nullable":true},"action":{"type":"string","description":"The action that triggered this webhook. ","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PingTopicLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/PingTopicEmbeddedResources"}]}}}}}},"responses":{"200":{"description":"The data was received successfully."}}}}},"x-tagGroups":[{"name":"Endpoints","tags":["Topics","Webhooks"]},{"name":"Basic Types","tags":["BasicType_Money","BasicType_Seating"]},{"name":"Resources","tags":["Resource_Webhook","Resource_Webhooks"]}]}}')}}]);