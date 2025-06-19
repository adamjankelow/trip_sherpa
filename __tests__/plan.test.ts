import { planTrip } from "../lib/plan"

test("returns at least one stop", async () => {
  const itin = await planTrip({
    destination: "Madeira",
    days: 2,
    interests: ["adventure"]
  })
  expect(itin.stops.length).toBeGreaterThan(0)
})
