import { execSync } from 'child_process';
import { existsSync, cpSync, rmSync, mkdirSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';

const projectDir = process.cwd();
const distDir = join(projectDir, 'dist');
const tmpDir = join(tmpdir(), 'hamasah-gh-pages-' + Date.now());

console.log('Copying dist to temp directory...');
mkdirSync(tmpDir, { recursive: true });
cpSync(distDir, tmpDir, { recursive: true });

console.log('Initializing git in temp directory...');
execSync('git init', { cwd: tmpDir, stdio: 'pipe' });
execSync('git checkout -b gh-pages', { cwd: tmpDir, stdio: 'pipe' });

try {
  execSync('git config user.email "deploy-bot@example.com"', { cwd: tmpDir, stdio: 'pipe' });
  execSync('git config user.name "Deploy Bot"', { cwd: tmpDir, stdio: 'pipe' });
} catch {}

console.log('Adding and committing...');
execSync('git add -A', { cwd: tmpDir, stdio: 'pipe' });
execSync('git commit -m "deploy"', { cwd: tmpDir, stdio: 'pipe' });

console.log('Pushing to gh-pages branch...');
execSync(`git push https://github.com/ayato1110/HamasahGallery.git gh-pages --force`, {
  cwd: tmpDir,
  stdio: 'inherit',
});

console.log('Cleaning up...');
rmSync(tmpDir, { recursive: true, force: true });
console.log('Deploy complete!');
