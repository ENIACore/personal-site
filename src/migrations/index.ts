import * as migration_20260215_201306 from './20260215_201306';

export const migrations = [
  {
    up: migration_20260215_201306.up,
    down: migration_20260215_201306.down,
    name: '20260215_201306'
  },
];
