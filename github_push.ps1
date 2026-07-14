param (
    [string]$RepoUrl = "https://github.com/eyepune/estrip-storefront.git"
)

Write-Host "Starting automated GitHub push..." -ForegroundColor Cyan

# 1. Initialize git if not already initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing new git repository..."
    git init
}

# 2. Add all optimized files
Write-Host "Adding files..."
git add .

# 3. Commit the changes
Write-Host "Committing changes..."
git commit -m "fix: resolve Next.js unused imports and restore native scroll"

# 4. Set the remote repository
Write-Host "Linking to GitHub repository: $RepoUrl"
git remote remove origin 2>$null
git remote add origin $RepoUrl

# 5. Set main branch
git branch -M main

# 6. Push to GitHub
Write-Host "Pushing code to GitHub... (This might prompt for login)" -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed code to GitHub!" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to push. Make sure you are logged into GitHub Desktop or CLI." -ForegroundColor Red
}
