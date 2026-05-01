'use client';

import { useState, useMemo, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import classes from '@/app/page.module.css';
import { LocalCharacter } from '@/types/character';
import { ShowMoreButton } from '@/components/ShowMoreButton';
import { useDebounce } from '@/hooks/useDebounce';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';
import Image from 'next/image';

type Props = {
  characters: LocalCharacter[];
};

export const CharactersList = ({ characters }: Props) => {
  const [filter, setFilter] = useState('');

  const debouncedSearch = useDebounce(filter, 300);

  const selectedCharacterDetails = useSelector(
    (state: RootState) => state.charactersDetails.selectedCharacter
  );

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) =>
      character.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch, characters]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          label="Filter character"
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Box>

      <Grid container spacing={2}>
        {filteredCharacters.map((character) => (
          <Grid size={{ xs: 12, sm: 4, md: 2 }} key={character.name}>
            <div className={classes.card}>

              <h2>{character.name}</h2>
              <p>Score: {character.score}</p>
              <p>Type: {character.type}</p>
              {character.weakness && (
                <p>Weakness: {character.weakness}</p>
              )}
              <ShowMoreButton heroName={character.name} />
              {selectedCharacterDetails &&
                selectedCharacterDetails.name === character.name &&
                selectedCharacterDetails.image?.url && (
                  <div style={{ marginTop: '2rem' }}>
                    <Image
                      src={selectedCharacterDetails.image.url.replace('httpss', 'https')}
                      width={250}
                      height={250}
                      alt={`${selectedCharacterDetails.name} image`}
                    />
                  </div>
                )}
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};