import { FastifyInstance, onRequestHookHandler } from 'fastify';

export default (fastify: FastifyInstance) => {
  return <onRequestHookHandler>(async (request) => {
    if (request.protocol === 'http') {
      throw fastify.httpErrors.imateapot('HTTPS is required');
    }
  });
}; 