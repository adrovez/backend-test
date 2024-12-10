import request from 'supertest';
import express from 'express';
import mainRouter from '../../src/routes/main-route';

const app = express();
app.use(mainRouter);

describe('mainRouter', () => {
    test('GET / - debe retornar un mensaje de saludo con el usuario de configuración', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Hola mundo al usuario'); // Asegúrate de que la configuración sea correcta para este test.
    });

    test('GET /api-key - debe retornar la API key de la configuración', async () => {
        const response = await request(app).get('/api-key');
        expect(response.status).toBe(200);
        expect(response.text).toContain('la apikey de mi aplicacion es:'); // Comprueba que la apikey esté configurada.
    });

    test('GET /validar-rut - debe validar un RUT válido correctamente', async () => {
        const response = await request(app).get('/validar-rut').query({ rut: '12.345.678-5' });
        expect(response.status).toBe(200);
        expect(response.text).toContain('El rut suministrado (12.345.678-5) es : valido');
    });

    test('GET /validar-rut - debe invalidar un RUT incorrecto', async () => {
        const response = await request(app).get('/validar-rut').query({ rut: '12.345.678-4' });
        expect(response.status).toBe(200);
        expect(response.text).toContain('El rut suministrado (12.345.678-4) es : invalido');
    });

    test('GET /buscar-subcadena - debe contar correctamente las repeticiones de una subcadena', async () => {
        const response = await request(app).get('/buscar-subcadena').query({
            cadena: 'abcabcabc',
            subcadena: 'abc'
        });
        expect(response.status).toBe(200);
        expect(response.text).toContain('La cadeja "abcabcabc" tiene 3 repeticiones de la subcadena "abc"');
    });

    test('GET /buscar-subcadena - debe manejar correctamente cuando no hay coincidencias', async () => {
        const response = await request(app).get('/buscar-subcadena').query({
            cadena: 'abcdef',
            subcadena: 'xyz'
        });
        expect(response.status).toBe(200);
        expect(response.text).toContain('La cadeja "abcdef" tiene 0 repeticiones de la subcadena "xyz"');
    });

    test('GET /buscar-subcadena - debe retornar un error si falta un parámetro', async () => {
        const response = await request(app).get('/buscar-subcadena').query({
            cadena: 'abcabcabc'
        });
        expect(response.status).toBe(500); // Dependerá de cómo el servidor maneja errores en este caso.
    });
});
