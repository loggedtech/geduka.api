export type HttpCode = 200 | 201 | 204 | 400 | 401 | 404 | 409 | 500

export const HttpCode = {
  OK: 200 as HttpCode,
  CREATED: 201 as HttpCode,
  NO_CONTENT: 204 as HttpCode,
  BAD_REQUEST: 400 as HttpCode,
  UNAUTHORIZED: 401 as HttpCode,
  NOT_FOUND: 404 as HttpCode,
  CONFLICT: 409 as HttpCode,
  INTERNAL_SERVER_ERROR: 500 as HttpCode,
}
