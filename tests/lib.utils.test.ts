import { cn } from '../lib/utils'

describe('cn utility', () => {
  it('returns a concatenated string excluding undefined values', () => {
    expect(cn('a', undefined, 'b')).toBe('a b')
  })
})
