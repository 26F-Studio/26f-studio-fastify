export const avatarSchema = {
  headers: {
    type: 'object',
    properties: {
      'x-access-token': {
        type: 'string',
      },
    },
  },
  params: {
    type: 'object',
    properties: {
      id: {
        default: -1,
        type: 'number',
      },
    },
  },
};

export interface avatarType {
  Headers: {
    'x-access-token'?: string;
  };
  Params: {
    id: number;
  };
}
