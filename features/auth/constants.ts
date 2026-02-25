export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^\+?[\d\s\-()]{9,15}$/;

export const emailRules = {
    required: 'Podaj adres e-mail lub numer telefonu',
    validate: (value: string) =>
        EMAIL_REGEX.test(value) || PHONE_REGEX.test(value)
            ? true
            : 'Podaj poprawny adres e-mail lub numer telefonu',
};

export const passwordRules = {
    required: 'Podaj hasło',
    minLength: { value: 8, message: 'Hasło musi mieć co najmniej 8 znaków' },
};
