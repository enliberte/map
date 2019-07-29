export const required = value => value ? undefined : 'Обязательное поле';

export const numeric = value => isFinite(value) ? undefined : 'Числовое поле';
