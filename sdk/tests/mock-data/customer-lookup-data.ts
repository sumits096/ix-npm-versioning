export const customerLookupList = {
  customers_id: 'C8J8AE',
  customers_users_id: 'C8J8AE-UEU',
  customers_locations_id: 'C8J8AE-T2Q',
  customer: {
    id: 'C8J8AE',
    name: null,
    name_legal: null,
    street_1: '',
    street_2: '',
    city: '',
    state: null,
    zipcode: '',
    latitude: 0,
    longitude: 0,
    industry: 'Other',
    created: '2021-10-11 15:05:37',
    email: '123abc@boop.com',
    phone: null,
    status: 'Active',
    external_id: 'C8J8AE-00Y'
  },
  customer_user: {
    id: 'C8J8AE-UEU',
    first_name: 'test',
    last_name: null,
    full_name: 'test',
    email: '123abc@boop.com',
    sms_number: null,
    lang: 'EN',
    status: 'Active',
    external_id: null,
    customer_id: 'C8J8AE',
    customer_location_id: 'C8J8AE-T2Q'
  },
  customer_location: {
    id: 'C8J8AE-T2Q',
    street_1: '',
    street_2: '',
    city: '',
    state: null,
    zipcode: '',
    latitude: 0,
    longitude: 0,
    phone: null,
    site_name: '',
    notes: '',
    merchant_ids: '',
    status: 'Deleted',
    external_id: null,
    customer_id: 'C8J8AE',
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
};

export const customerLookupResponse = {
  success: true,
  totalCount: 1,
  returned: 1,
  pages: 0,
  results: JSON.parse(JSON.stringify(customerLookupList)),
  current_server_time: Date.now().toString()
};

export const customerLookupErrorResponse = {
  success: false,
  errorType: 'FileNotFoundException',
  message: 'Member user not found',
  current_server_time: '2022-02-13T13:36:42+0000'
};


