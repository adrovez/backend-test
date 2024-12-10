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

   

});