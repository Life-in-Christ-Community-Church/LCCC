import barba from '@barba/core';

barba.init({
    cacheFirstPage: false,
    cacheIgnore: false,
    debug: false,
    logLevel: 'off',
    prefetchIgnore: false,
    prevent: null,
    preventRunning: false,
    schema: {
        prefix: 'data-router',
    },
    timeout: 2e3,
    transitions: [],
    views: [],
  })