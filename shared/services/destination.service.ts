import { IDestination } from "../types/types";
import { API_URL } from "../config/api";

class DestinationService {
  private BASE_URL = API_URL;

  async getAll(hubSlug?: string): Promise<IDestination[]> {
    try {
      const url = hubSlug
        ? `${this.BASE_URL}/destinations?hub=${hubSlug}`
        : `${this.BASE_URL}/destinations`;

      const response = await fetch(url, {
        next: { revalidate: 3600 }
      });

      if (!response.ok) throw new Error('Failed to fetch destinations');

      return response.json();
    } catch (error) {
      console.error('Error fetching destinations:', error);
      return [];
    }
  }

  async getBySlug(slug: string): Promise<IDestination | null> {
    try {
      const response = await fetch(`${this.BASE_URL}/destinations/${slug}`, {
        next: { revalidate: 3600 }
      });

      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Failed to fetch destination');
      }

      return response.json();
    } catch (error) {
      console.error('Error fetching destination:', error);
      return null;
    }
  }

  async search(query: string): Promise<IDestination[]> {
    try {
      const response = await fetch(`${this.BASE_URL}/destinations/search?q=${encodeURIComponent(query)}`, {
        next: { revalidate: 300 }
      });

      if (!response.ok) throw new Error('Failed to search destinations');

      return response.json();
    } catch (error) {
      console.error('Error searching destinations:', error);
      return [];
    }
  }
}

export const destinationService = new DestinationService();
