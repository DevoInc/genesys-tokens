import type { Filter } from 'style-dictionary/types';

export const filter: Filter['filter'] = (token) => !!token.attributes?.group;
