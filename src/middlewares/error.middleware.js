function notFound(request, response, next) {
  const error = new Error(`Route not found: ${request.method} ${request.originalUrl}`);
  error.status = 404;
  next(error);
}

function errorHandler(error, request, response, next) {
  const status = error.status || 500;
  const message = status === 500 ? 'Ocorreu um erro interno.' : 'Página não encontrada.';

  if (response.headersSent) {
    return next(error);
  }

  if (request.path.startsWith('/api/')) {
    return response.status(status).json({
      success: false,
      error: {
        code: status === 404 ? 'NOT_FOUND' : 'INTERNAL_ERROR',
        message,
      },
    });
  }

  return response.status(status).render('layouts/main', {
    page: 'error',
    title: `Erro ${status} | SorriMed`,
    error: { status, message },
  });
}

module.exports = { notFound, errorHandler };