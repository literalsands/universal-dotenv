// Clear pre-existing NODE_ENV variable
delete process.env.NODE_ENV

const snapshotOpts = {
  APP_ROOT: expect.any(String),
  APP_SOURCE: expect.any(String)
}

/* eslint-disable import/no-commonjs */
// We can't use ESM when relying on the fact the the env from the top is correctly respected.
const api = require(".")

test("Defaults to development for NODE_ENV", () => {
  const { raw, stringified, webpack } = api.getEnvironment()
  expect(raw).toMatchSnapshot(snapshotOpts)
  expect(stringified).toMatchSnapshot(snapshotOpts)
  expect(webpack).toBeDefined()
})

