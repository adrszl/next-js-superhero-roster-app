import { CharactersList } from '@/components/CharactersList';
import { LocalCharacter } from '@/types/character';

async function getLocalCharacters(): Promise<LocalCharacter[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/characters`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch local characters');
  }

  return res.json();
}

export default async function Page() {
  const characters = await getLocalCharacters();

  return <CharactersList characters={characters} />;
}