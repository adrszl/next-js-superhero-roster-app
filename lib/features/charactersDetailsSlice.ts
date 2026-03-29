import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CharacterAPIResponse } from '@/types/character';

type CharactersState = {
    selectedCharacter: CharacterAPIResponse | null;
    loading: boolean;
};

const initialState: CharactersState = {
    selectedCharacter: null,
    loading: false,
};

const charactersDetailsSlice = createSlice({
    name: 'charactersDetails',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setCharacterDetails: (state, action: PayloadAction<CharacterAPIResponse>) => {
            state.selectedCharacter = action.payload;
        },
    },
});

export const { setLoading, setCharacterDetails } = charactersDetailsSlice.actions;
export default charactersDetailsSlice.reducer;