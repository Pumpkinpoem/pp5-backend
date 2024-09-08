
### **Bug Report: 401 Unauthorized Error on `/api/dj-rest-auth/user/` and Token Refresh**

**Date:** 08/Sep/2024  
**Status:** Still being worked on

#### **Description:**
When making API requests to the `/api/dj-rest-auth/user/` endpoint or attempting to refresh the JWT token at `/api/dj-rest-auth/token/refresh/`, the API responds with a `401 Unauthorized` error. This occurs despite the proper authentication setup in the backend Django project, which utilizes `dj-rest-auth` and JWT tokens.

#### **Steps to Reproduce:**
1. Attempt to fetch authenticated user data by sending a GET request to `/api/dj-rest-auth/user/` with the correct JWT token in the Authorization header.
2. Attempt to refresh the token by sending a POST request to `/api/dj-rest-auth/token/refresh/` with the refresh token.
3. Observe the `401` responses in both cases.

#### **Expected Behavior:**
- The `/api/dj-rest-auth/user/` endpoint should return user data when provided with a valid JWT access token.
- The `/api/dj-rest-auth/token/refresh/` endpoint should successfully issue a new access token when provided with a valid refresh token.

#### **Actual Behavior:**
- Both endpoints return `401 Unauthorized` errors, despite the authentication setup and valid token being sent.

#### **Relevant Logs:**
```plaintext
GET /api/dj-rest-auth/user/ HTTP/1.1 401 58  
POST /api/dj-rest-auth/token/refresh/ HTTP/1.1 401 67
```

#### **Current Investigation:**
- JWT settings in `settings.py` have been verified to use cookies with `JWT_AUTH_COOKIE` and `JWT_AUTH_REFRESH_COOKIE`.
- Environment configurations have been reviewed for token rotation and expiration settings via `SIMPLE_JWT`.
- Further investigation into token handling in requests (whether the token is missing or malformed) is ongoing.

#### **Next Steps:**
- Investigating if tokens are being correctly passed in Authorization headers.
- Verifying that the JWT refresh token mechanism works as expected.
- Monitoring detailed logs for more clues on the root cause of the issue.
