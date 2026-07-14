import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const cwd = process.cwd();
    const filesToMove = [
      'Ananya_Rao_uses_detergent_strip_202607150056.mp4',
      'Detergent_strip_in_studio_1080p_202607150048.mp4',
      'Fabric_fibers_with_stains_and_202607150050.mp4',
      'Woman_walking_through_laundry_1080p_202607150051.mp4'
    ];
    
    const moved = [];
    const missing = [];

    filesToMove.forEach(file => {
      const source = path.join(cwd, file);
      const dest = path.join(cwd, 'public', file);
      if (fs.existsSync(source)) {
        fs.renameSync(source, dest);
        moved.push(file);
      } else {
        missing.push(file);
      }
    });

    return NextResponse.json({ success: true, moved, missing });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
