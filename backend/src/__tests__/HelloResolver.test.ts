import { HelloResolver } from '../resolvers/HelloResolver'

test('returns hello world', () => {
  const resolver = new HelloResolver()
  expect(resolver.hello()).toBe('Hello, world!')
})
