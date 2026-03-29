import { NextResponse } from 'next/server';
import { searchSuperheroByName } from '@/lib/superhero';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');

    if (!name) return NextResponse.json({ error: 'Missing name' }, { status: 400 });

    try {
        const results = await searchSuperheroByName(name);
        return NextResponse.json(results);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}