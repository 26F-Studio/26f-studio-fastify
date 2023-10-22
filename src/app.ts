import { FastifyPluginAsync } from 'fastify';

import AuthRoute from 'routes/auth';
import PlayerRoute from 'routes/player';

const app: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.register(AuthRoute, { ...opts, prefix: '/auth' });
  fastify.register(PlayerRoute, { ...opts, prefix: '/player' });
};

export default app;
