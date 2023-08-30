type setErrorHandlerTypes = {
    type: string;
    message: string;
}

  type DataTypes = {
    email: string;
    password: string;
}

  export type loginHandlerProps = {
    data: DataTypes;
    setErrorHandler: ({ type, message }: setErrorHandlerTypes) => void;
    navigateHandler: () => void;
}

  export type RefreshTokenHandlerTypes = {
    tokenIsExpired: boolean;
    setTokenExpiredHandler: () => void;
}

  export interface DecodedAccessToken {
    iss: string;
    iat: number;
    exp: number;
    aud: string;
    sub: string;
    GivenName: string;
    Surname: string;
    Email: string;
    Role: string[];
}