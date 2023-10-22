import { FastifyPluginAsync } from 'fastify';

import { avatarSchema, avatarType } from 'routes/player/schema';

export default <FastifyPluginAsync>(async (fastify) => {
  fastify.post<avatarType>('/avatar', { schema: avatarSchema }, async () => {
    return { root: true };
  });
});
