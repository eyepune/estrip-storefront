@echo off
echo Installing required packages (fluent-ffmpeg and @ffmpeg-installer/ffmpeg)...
call npm install fluent-ffmpeg @ffmpeg-installer/ffmpeg --no-save

echo.
echo Running video compression...
node compress_video.js

echo.
pause
