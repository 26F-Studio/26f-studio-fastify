import { FastifyPluginAsync } from 'fastify';

import { oauthSchema, oauthType } from 'routes/auth/schema';
import checkSecure from 'app/src/filters/checkSecure';

export default <FastifyPluginAsync>(async (fastify) => {
  fastify.post<oauthType>(
    '/oauth',
    {
      onRequest: checkSecure(fastify),
      schema: oauthSchema,
    },
    async (request) => {
      const accessToken = request.headers['x-access-token'];
      console.log(accessToken);
      return { root: true };
    },
  );
});
