import { IHub, IDestination } from "../types/types";
import { API_URL } from "../config/api";

class HubService {
  private BASE_URL = API_URL;

  async getAll(): Promise<IHub[]> {
    try {
      const response = await fetch(`${this.BASE_URL}/hubs`, {
        next: { revalidate: 3600 }
      });

      if (!response.ok) throw new Error('Failed to fetch hubs');

      return response.json();
    } catch (error) {
      console.error('Error fetching hubs:', error);
      return [];
    }
  }

  async getBySlug(slug: string): Promise<IHub | null> {
    try {
      const response = await fetch(`${this.BASE_URL}/hubs/${slug}`, {
        next: { revalidate: 3600 }
      });

      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Failed to fetch hub');
      }

      return response.json();
    } catch (error) {
      console.error('Error fetching hub:', error);
      return null;
    }
  }

  async getFeaturedDestinations(): Promise<IDestination[]> {
    try {
      const response = await fetch(`${this.BASE_URL}/hubs/featured`, {
        next: { revalidate: 3600 }
      });

      if (!response.ok) throw new Error('Failed to fetch featured destinations');

      return response.json();
    } catch (error) {
      console.error('Error fetching featured destinations:', error);
      return [];
    }
  }
}

export const hubService = new HubService();
