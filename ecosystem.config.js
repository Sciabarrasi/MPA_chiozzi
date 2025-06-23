module.exports = {
  apps: [{
    name: 'proyecto-chiozzi',
    script: 'npm',
    args: 'run start:prod',
    cwd: '/var/www/proyecto_chiozzi', // Ajusta esta ruta según donde subas tu proyecto
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      PRISMA_GENERATE_SKIP_AUTOINSTALL: 'true',
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
    restart_delay: 4000,
  }]
}