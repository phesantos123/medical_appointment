import winston from 'winston'

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'DD/MM/YYYY HH:mm:ss' }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/app.log'
    }),
    new winston.transports.File({
      filename: 'logs/erro.log',
      level: 'error'
    })
  ]
})

export { logger }
