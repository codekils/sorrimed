function getHealth(request, response) {
  response.json({
    success: true,
    data: {
      status: 'ok',
      service: 'sorrimed',
      environment: process.env.NODE_ENV || 'development',
    },
  });
}

module.exports = { getHealth };