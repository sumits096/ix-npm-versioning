import { CustomerLocation, CustomerLocationCreateRequest } from '../../src/core/entity'
import { BaseResponseModel } from '../../src/core/models'

export const customerLocationList = [
  {
    id: '86CW23-D5W',
    street_1: '74 Orin Crossing',
    street_2: 'Mcguire',
    city: 'Suffolk',
    state: null,
    zipcode: '23436',
    latitude: 0,
    longitude: 0,
    phone: '+1 (702) 703-3121',
    site_name: 'Automation-yfvq058',
    notes: '',
    merchant_ids: '',
    status: 'Active',
    external_id: '86CW23-1234',
    customer_id: '86CW23',
    org_team_ids: [
      'UZT-LWW'
    ],
    metadata_values: {
      location_technology_notes: '',
      unique_aspects_that_affect_connectivity: '',
      terminal_identification_number: ''
    },
    custom_forms: [],
    files: [],
    technology: []
  }
]

export const getCustomerMetaStatusResponse = {
  success: true,
  totalCount: 1,
  returned: 1,
  pages: 1,
  results: JSON.parse(JSON.stringify(customerLocationList)),
  current_server_time: Date.now().toString()
}

export const getCustomerLocationByIDResponse = {
  success: true,
  totalCount: 1,
  returned: 1,
  pages: 1,
  results: JSON.parse(JSON.stringify(customerLocationList)),
  current_server_time: Date.now().toString()
}

export const createPayload = {
  id: '',
  customerId: '86CW23',
  street1: '74 Orin Crossing',
  street2: 'Mcguire',
  city: 'Suffolk',
  state: null,
  zipcode: '23436',
  latitude: 0,
  longitude: 0,
  phone: '+1 (702) 703-3121',
  siteName: 'Automation-yfvq058',
  orgTeamIds: ['UZT-LWW'],
  externalId: '',
  notes: '',
  status: 'Active',
  customForms: [],
  files: [],
  merchantIds: '',
  metadataValues: {
    location_technology_notes: '',
    unique_aspects_that_affect_connectivity: '',
    terminal_identification_number: ''
  }
}

export const customerLocationCreatePayLoad = {
  customerLocation: JSON.parse(JSON.stringify(createPayload))
} as CustomerLocationCreateRequest;

export const updatePayload = {
  id: '86CW23-D5W',
  customerId: '86CW23',
  street1: '74 Orin Crossing',
  street2: 'Mcguire',
  city: 'Suffolk',
  state: null,
  zipcode: '23436',
  latitude: 0,
  longitude: 0,
  phone: '+1 (702) 703-3121',
  siteName: 'Automation-yfvq058',
  orgTeamIds: ['UZT-LWW'],
  externalId: '',
  notes: '',
  status: 'Active',
  customForms: [],
  files: [],
  merchantIds: '',
  metadataValues: {
    location_technology_notes: '',
    unique_aspects_that_affect_connectivity: '',
    terminal_identification_number: ''
  }
}
export const customerLocationUpdatePayLoad = {
  customerLocation: JSON.parse(JSON.stringify(updatePayload))
} as CustomerLocationCreateRequest;

export const UpdateWithValidPayLoad = {
  id: 'sdved',
  customerId: '86CW23',
  street1: '74 Orin Crossing',
  street2: 'Mcguire',
  city: 'Suffolk',
  state: null,
  zipcode: '23436',
  latitude: 0,
  longitude: 0,
  phone: '+1 (702) 703-3121',
  siteName: 'Automation-yfvq058',
  orgTeamIds: ['UZT-LWW'],
  externalId: '',
  notes: '',
  status: 'Active',
  customForms: [],
  files: [],
  merchantIds: '',
  metadataValues: {
    location_technology_notes: '',
    unique_aspects_that_affect_connectivity: '',
    terminal_identification_number: ''
  }
}

export const customerLocationUpdateWithValidPayLoad = {
  customerLocation: JSON.parse(JSON.stringify(UpdateWithValidPayLoad))
} as CustomerLocationCreateRequest;

export const customerLocationCreateResponse = {
  success: true,
  totalCount: 1,
  returned: 1,
  pages: 0,
  results: [] as CustomerLocation[],
  current_server_time: Date.now().toString()
}

export const customerLocationErrorResponse = {
  success: false,
  errorType: 'FileNotFoundException',
  message: 'Member user not found',
  current_server_time: '2022-02-13T13:36:42+0000'
}

export const customerLocationDeleteResponse: BaseResponseModel = {
  success: true,
  current_server_time: Date.now().toString()
}

export const createCustomerLocationErrorResponse = {
  success: false,
  errorType: 'FileNotFoundException',
  message: 'No match found for customer id/external_id parameter',
  current_server_time: Date.now().toString()
};

export const getCustomerLocationLookupByExternalIdResponse = {
  success: true,
  totalCount: 1,
  returned: 1,
  pages: 0,
  results: JSON.parse(JSON.stringify(customerLocationList)),
  current_server_time: Date.now().toString()
}

export const customerLocationContactList = [
  {
    id: '339WGC-JQ3',
    first_name: 'Breanne',
    last_name: 'Minchinton',
    full_name: 'Breanne Minchinton',
    email: 'bminchinton13@w3.org',
    sms_number: '+1 (305) 394-8670',
    lang: 'EN',
    status: 'Active',
    external_id: null,
    customer_id: '86CW23',
    customer_location_id: '86CW23-D5W'
  },
  {
    id: '339WGC-JQ3',
    first_name: 'Shubham',
    last_name: 'John',
    full_name: 'Shubham John',
    email: 'sjohn@w3.org',
    sms_number: '+1 (305) 493-8670',
    lang: 'EN',
    status: 'Active',
    external_id: null,
    customer_id: '86CW23',
    customer_location_id: '86CW23-D5W'
  }
]

export const customerLocationContactCreateResponse = {
  success: true,
  totalCount: 2,
  returned: 1,
  pages: 0,
  results: JSON.parse(JSON.stringify(customerLocationContactList)),
  current_server_time: Date.now().toString()
}
