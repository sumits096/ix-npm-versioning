export const customerMetaStatusResponse = {
  success: true,
  totalCount: 4,
  returned: 4,
  pages: 1,
  results: {
    '0': 'Inactive',
    '1': 'Active',
    '2': 'Subscribed',
    '99': 'Deleted',
  },
  current_server_time: '2022-02-08T06:15:13+0000',
};

export const customerMetaIndustriesResponse = {
  success: true,
  totalCount: 10,
  returned: 10,
  pages: 1,
  results: [
    'Other',
    'Restaurant',
    'Medical / Dental',
    'Health & Beauty',
    'National Retail',
    'National Restaurant',
    'Mid-Market Retail',
    'Mid-Market Restaurant',
    'Retail',
    'Other',
  ],
  current_server_time: '2022-02-08T06:17:33+0000',
};

export const metaCustomFormResponse = {
  success: true,
  totalCount: 1,
  returned: 1,
  pages: 1,
  results: [
    {
      id: '4T3Q3F',
      name: 'API test form',
      type: 5,
      created: '2021-11-10 12:18:27',
      updated: '2021-11-10 12:18:27',
      fields: [
        {
          id: '4T3Q3F-GNG',
          type: 'checkbox',
          name: 'field_1',
          label: 'Field 1',
          default_value: ''
        }
      ],
      org_team_ids: [
        'UZT-LWW'
      ]
    }
  ],
  current_server_time: Date.now().toString()
};
