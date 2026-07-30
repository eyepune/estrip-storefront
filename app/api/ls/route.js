import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const dir = path.join(process.cwd(), 'public');
  const files = fs.readdirSync(dir);
  return NextResponse.json(files.filter(f => f.endsWith('.mp4')));
}
