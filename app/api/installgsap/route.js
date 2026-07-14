import { execSync } from 'child_process';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const cwd = process.cwd();
    const output = execSync('npm install gsap --legacy-peer-deps', { cwd });
    return NextResponse.json({ success: true, output: output.toString() });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message, stderr: error.stderr?.toString() });
  }
}
