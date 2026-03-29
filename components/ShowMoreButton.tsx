'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/lib/store';
import { setCharacterDetails, setLoading } from '@/lib/features/charactersDetailsSlice';
import Button from '@mui/material/Button';

type ShowMoreButtonProps = {
    heroName: string;
};

export const ShowMoreButton = ({ heroName }: ShowMoreButtonProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state: RootState) => state.charactersDetails.loading);
    const charactersDetails = useSelector((state: RootState) => state.charactersDetails);

    const fetchMoreDetails = async (heroName: string) => {
        try {
            dispatch(setLoading(true));

            const res = await fetch(`/api/search?name=${encodeURIComponent(heroName)}`);
            const data = await res.json();

            dispatch(setCharacterDetails(data[0]));
            
        } catch (error) {
            console.log('There was an error, when fetching the data!');
            console.error(error);
        } finally {
            console.log('charactersDetails: ', charactersDetails);
            dispatch(setLoading(false));
        }
    };

    return (
        <Button
            variant="outlined"
            onClick={() => fetchMoreDetails(heroName)}
            loading={loading}
        >
            Show more
        </Button>
    );
};