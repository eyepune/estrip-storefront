import { execSync } from 'child_process';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  try {
    const cwd = process.cwd();
    // Windows 10+ has tar built-in, which can extract zip files!
    const output = execSync('tar -xf scroll-site-generator.skill', { cwd });
    return NextResponse.json({ success: true, output: output.toString() });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message, stderr: error.stderr?.toString() });
  }
}
