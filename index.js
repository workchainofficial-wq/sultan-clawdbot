#!/usr/bin/env node

/**
 * Sultan's Clawdbot Instance
 * Minimal bootstrap - Clawdbot handles everything
 */

const { spawn } = require('child_process');
const path = require('path');

console.log('🔥 Starting Sultan\'s Clawdbot...');

// Start Clawdbot gateway
const clawdbot = spawn('npx', ['clawdbot', 'gateway', 'start'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    CLAWDBOT_CONFIG: path.join(__dirname, 'config.yml'),
    CLAWDBOT_WORKSPACE: process.env.WORKSPACE || '/app/workspace'
  }
});

clawdbot.on('error', (err) => {
  console.error('❌ Failed to start Clawdbot:', err);
  process.exit(1);
});

clawdbot.on('exit', (code) => {
  console.log(`Clawdbot exited with code ${code}`);
  process.exit(code);
});

// Handle shutdown gracefully
process.on('SIGTERM', () => {
  console.log('Shutting down...');
  clawdbot.kill('SIGTERM');
});
