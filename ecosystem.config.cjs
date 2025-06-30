module.exports = {
  apps: [{
    name: 'proyecto-chiozzi',
    script: '/var/www/proyecto_chiozzi/.next/standalone/server.js',
    cwd: '/var/www/proyecto_chiozzi',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      PRISMA_GENERATE_SKIP_AUTOINSTALL: 'true'
    },
    error_file: '/var/www/proyecto_chiozzi/logs/err.log',
    out_file: '/var/www/proyecto_chiozzi/logs/out.log',
    log_file: '/var/www/proyecto_chiozzi/logs/combined.log',
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
    restart_delay: 4000
  }]
};
