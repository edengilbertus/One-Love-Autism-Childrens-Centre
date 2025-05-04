/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Asynchronously retrieves directions between two locations.
 *
 * @param origin The starting location.
 * @param destination The destination location.
 * @returns A promise that resolves to a URL containing directions.
 */
export async function getDirectionsUrl(origin: Location, destination: Location): Promise<string> {
  // TODO: Implement this by calling an API.

  return `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}`;
}
