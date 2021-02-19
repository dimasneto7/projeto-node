import { container } from 'tsyringe';

import ICacheProvider from './models/ICacheProvider';

import RedisCaheProvider from './implementations/RedisCacheProvider';

const providers = {
    redis: RedisCaheProvider,
};

container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);
