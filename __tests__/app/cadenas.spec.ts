import { contarCoincidenciasEnCadena} from "../../src/app/cadenas";
import { describe, test, expect } from "@jest/globals";

describe('contarCoincidenciasEnCadena', () => {
    test('debe contar correctamente las coincidencias de una subcadena en una cadena', () => {
        const cadena = 'abcabcabc';
        const subcadena = 'abc';
        const resultado = contarCoincidenciasEnCadena(cadena, subcadena);
        expect(resultado).toBe(3);
    });

    test('debe devolver 0 si la subcadena no se encuentra en la cadena', () => {
        const cadena = 'abcdef';
        const subcadena = 'xyz';
        const resultado = contarCoincidenciasEnCadena(cadena, subcadena);
        expect(resultado).toBe(0);
    });

    test('debe devolver 0 si la cadena está vacía', () => {
        const cadena = '';
        const subcadena = 'abc';
        const resultado = contarCoincidenciasEnCadena(cadena, subcadena);
        expect(resultado).toBe(0);
    });

    test('debe devolver 0 si la subcadena está vacía', () => {
        const cadena = 'abcabcabc';
        const subcadena = '';
        const resultado = contarCoincidenciasEnCadena(cadena, subcadena);
        expect(resultado).toBe(0);
    });

    test('debe manejar casos donde la subcadena es más larga que la cadena', () => {
        const cadena = 'abc';
        const subcadena = 'abcdef';
        const resultado = contarCoincidenciasEnCadena(cadena, subcadena);
        expect(resultado).toBe(0);
    });

    test('debe contar correctamente las coincidencias de subcadenas solapadas', () => {
        const cadena = 'aaaa';
        const subcadena = 'aa';
        const resultado = contarCoincidenciasEnCadena(cadena, subcadena);
        expect(resultado).toBe(3);
    });

    test('debe manejar cadenas y subcadenas de un solo carácter', () => {
        const cadena = 'aaaaa';
        const subcadena = 'a';
        const resultado = contarCoincidenciasEnCadena(cadena, subcadena);
        expect(resultado).toBe(5);
    });
});