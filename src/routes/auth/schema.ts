export const oauthSchema = {
  headers: {
    type: 'object',
    required: ['x-access-token'],
    properties: {
      'x-access-token': {
        type: 'string',
      },
    },
  },
  body: {
    type: 'object',
    required: ['product', 'recaptcha'],
    properties: {
      product: {
        type: 'string',
      },
      recaptcha: {
        type: 'string',
      },
    },
  },
};

export interface oauthType {
  Headers: {
    'x-access-token': string;
  }
  Body: {
    product: string;
    recaptcha: string;
  };
}
