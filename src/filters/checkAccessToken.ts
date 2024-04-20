import { FastifyInstance, onRequestHookHandler } from 'fastify';

export default (fastify: FastifyInstance): onRequestHookHandler =>
  async (request) => {
    if (request.protocol === 'http') {
      throw fastify.httpErrors.imateapot('HTTPS is required');
    }
  };
