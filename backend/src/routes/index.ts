import { FastifyInstance } from 'fastify';
import { authRoutes } from './auth.routes';
import { carRoutes } from './car.routes';
import { categoryRoutes } from './category.routes';
import { statsRoutes } from './stats.routes';
import { favoriteRoutes } from './favorite.routes';

export async function registerRoutes(fastify: FastifyInstance) {
  fastify.register(authRoutes, { prefix: '/api/auth' });
  fastify.register(carRoutes, { prefix: '/api/cars' });
  fastify.register(categoryRoutes, { prefix: '/api/categories' });
  fastify.register(statsRoutes, { prefix: '/api/stats' });
  fastify.register(favoriteRoutes, { prefix: '/api/favorites' });

  // Health check
  fastify.get('/health', async () => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  });
}

