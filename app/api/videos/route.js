import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const dir = path.join(process.cwd(), 'public');
  const files = fs.readdirSync(dir);
  return NextResponse.json(files.filter(f => f.includes('232') || f.includes('1080p')));
}
