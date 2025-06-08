declare const ENV_PREFIX = "GIGACHAT_";
interface Settings {
    /** Адрес относительно которого выполняются запросы */
    baseUrl: string;
    /** Адрес для запроса токена доступа OAuth 2.0 */
    authUrl: string;
    /** Авторизационные данные */
    credentials?: string;
    /** Версия API, к которой предоставляется доступ */
    scope: string;
    /** JWE токен */
    accessToken?: string;
    /** Название модели, от которой нужно получить ответ */
    model?: string;
    /** Параметр цензуры */
    profanityCheck?: boolean;
    /** Имя пользователя */
    user?: string;
    /** Пароль */
    password?: string;
    /** Таймаут в секундах */
    timeout: number;
    /** Детализация запросов в консоли */
    verbose: boolean;
    /** Флаги, включающие особенные фичи */
    flags?: string[];
    /** HTTPS Agent, который прокидывается в Axios клиент */
    httpsAgent?: any;
    /** Включает работу библиотеку в браузере */
    dangerouslyAllowBrowser?: boolean;
}
declare function getDefaultSettings(): Settings;
export type { Settings };
export { getDefaultSettings, ENV_PREFIX };
//# sourceMappingURL=settings.d.ts.map