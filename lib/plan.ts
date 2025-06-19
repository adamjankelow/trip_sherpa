export type TripInput = {
    destination: string
    days: number
    interests: string[]
  }
  
  export type Stop = { title: string; description: string }
  
  export type Itinerary = {
    destination: string
    stops: Stop[]
  }
  
  export async function planTrip(
    input: TripInput
  ): Promise<Itinerary> {
    // stub - replace with OpenAI later
    const stops: Stop[] = [
      { title: "Old Town", description: "Historic walk" },
      { title: "Viewpoint", description: "Sunset lookout" },
      { title: "Local Market", description: "Food & crafts" }
    ]
    return {
      destination: input.destination,
      stops: stops.slice(0, input.days)
    }
  }
  