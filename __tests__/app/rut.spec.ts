import { validarRUT} from "../../src/app/rut";
import { describe, test, expect } from "@jest/globals";

describe('validarRUT', () => {
    test('debe retornar true para un RUT válido con formato', () => {
        const rut = '12.345.678-5';
        const resultado = validarRUT(rut);
        expect(resultado).toBe(true);
    });

    test('debe retornar true para un RUT válido sin puntos ni guión', () => {
        const rut = '123456785';
        const resultado = validarRUT(rut);
        expect(resultado).toBe(true);
    });

    test('debe retornar false para un RUT inválido con formato', () => {
        const rut = '12.345.678-4';
        const resultado = validarRUT(rut);
        expect(resultado).toBe(false);
    });

    test('debe retornar true para un RUT válido con dígito verificador "K"', () => {
        const rut = '20.123.456-K';
        const resultado = validarRUT(rut);
        expect(resultado).toBe(true);
    });

    test('debe retornar false para un RUT inválido con dígito verificador "K"', () => {
        const rut = '20.123.456-0';
        const resultado = validarRUT(rut);
        expect(resultado).toBe(false);
    });

    test('debe retornar true para un RUT válido con dígito verificador "0"', () => {
        const rut = '10.123.456-0';
        const resultado = validarRUT(rut);
        expect(resultado).toBe(true);
    });

    test('debe retornar false si el RUT tiene caracteres no válidos', () => {
        const rut = '12.345.67A-5';
        const resultado = validarRUT(rut);
        expect(resultado).toBe(false);
    });

    test('debe retornar false si el RUT tiene menos de 2 caracteres', () => {
        const rut = '5';
        const resultado = validarRUT(rut);
        expect(resultado).toBe(false);
    });

    test('debe retornar false si el RUT está vacío', () => {
        const rut = '';
        const resultado = validarRUT(rut);
        expect(resultado).toBe(false);
    });

    test('debe manejar correctamente RUTs con ceros al inicio', () => {
        const rut = '00012345-6';
        const resultado = validarRUT(rut);
        expect(resultado).toBe(false); // Ejemplo: RUT inválido
    });
});