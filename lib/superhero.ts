import type { SuperheroSearchResponse, CharacterAPIResponse } from '@/types/character';

export async function searchSuperheroByName(
    name: string
): Promise<CharacterAPIResponse[]> {
    const token = process.env.PRIVATE_API_TOKEN;
    
    if (!token) throw new Error('Missing API token');

    const url = `https://superheroapi.com/api/${token}/search/${encodeURIComponent(
        name
    )}`;

    const res = await fetch(url);
    
    if (!res.ok) throw new Error('Failed to fetch from Superhero API');

    const data: SuperheroSearchResponse = await res.json();

    if (data.response === 'error' || !data.results) {
        throw new Error(data.error || 'No results');
    }

    return data.results;
}