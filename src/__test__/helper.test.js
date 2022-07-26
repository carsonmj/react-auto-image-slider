import { generateKeys } from "../utils/helper";

test("Helper function test", () => {
  const keys = generateKeys(4);
  const set = new Set(keys);

  expect(keys.length).toBe(4);
  expect(keys.length).toBe(set.size);
});
