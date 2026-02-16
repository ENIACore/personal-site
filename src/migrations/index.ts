import * as migration_20260216_002430_init from './20260216_002430_init';

export const migrations = [
  {
    up: migration_20260216_002430_init.up,
    down: migration_20260216_002430_init.down,
    name: '20260216_002430_init'
  },
];
