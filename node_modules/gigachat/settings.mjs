const ENV_PREFIX = 'GIGACHAT_';
function getDefaultSettings() {
    const BASE_URL = process?.env[`${ENV_PREFIX}BASE_URL`] || 'https://gigachat.devices.sberbank.ru/api/v1';
    const AUTH_URL = process?.env[`${ENV_PREFIX}AUTH_URL`] || 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth';
    const SCOPE = process?.env[`${ENV_PREFIX}SCOPE`] || 'GIGACHAT_API_PERS';
    return {
        baseUrl: BASE_URL,
        authUrl: AUTH_URL,
        scope: SCOPE,
        timeout: parseFloat(process?.env[`${ENV_PREFIX}TIMEOUT`] || '30.0'),
        verbose: process?.env[`${ENV_PREFIX}VERBOSE`] === 'true',
        credentials: process?.env[`${ENV_PREFIX}CREDENTIALS`] || undefined,
        accessToken: process?.env[`${ENV_PREFIX}ACCESS_TOKEN`] || undefined,
        model: process?.env[`${ENV_PREFIX}MODEL`] || undefined,
        profanityCheck: process?.env[`${ENV_PREFIX}PROFANITY_CHECK`] === 'true',
        user: process?.env[`${ENV_PREFIX}USER`] || undefined,
        password: process?.env[`${ENV_PREFIX}PASSWORD`] || undefined,
        keyPassword: process?.env[`${ENV_PREFIX}KEY_PASSWORD`] || undefined,
        flags: process?.env[`${ENV_PREFIX}FLAGS`] ? process.env[`${ENV_PREFIX}FLAGS`]?.split(',') : undefined,
    };
}
export { getDefaultSettings, ENV_PREFIX };
//# sourceMappingURL=settings.mjs.map