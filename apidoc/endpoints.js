/**
 * @api {post} /api/login Bejelentkezés
 * @apiName Login
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiBody {String} email E-mail cím.
 * @apiBody {String} password Jelszó.
 *
 * @apiSuccess {Object} user Felhasználó.
 * @apiSuccess {String} token Bearer token.
 * @apiSuccessExample {json} Válasz:
 *     HTTP/1.1 200 OK
 *     { "user": { "id": 1, "name": "user", "email": "user@example.com", "email_verified_at": null }, "token": "1|AbC..." }
 *
 * @apiError (401) Unauthorized Hibás e-mail cím vagy jelszó.
 * @apiErrorExample {json} Hibás adatok:
 *     HTTP/1.1 401 Unauthorized
 *     { "message": "Invalid email or password" }
 */

/**
 * @api {get} /api/counties Megyék listája
 * @apiName GetCounties
 * @apiGroup Counties
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object[]} counties Megyék a településeikkel.
 * @apiSuccess {Number} counties.id Azonosító.
 * @apiSuccess {String} counties.name Megye neve.
 * @apiSuccess {Object[]} counties.cities A megye települései.
 * @apiSuccessExample {json} Válasz:
 *     HTTP/1.1 200 OK
 *     { "counties": [ { "id": 9, "name": "Hajdú-Bihar", "cities": [ { "id": 65, "county_id": 9, "name": "Debrecen", "zip_code": "4024" } ] } ] }
 */

/**
 * @api {post} /api/counties Új megye
 * @apiName CreateCounty
 * @apiGroup Counties
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization Bearer token.
 * @apiBody {String{..255}} name Megye neve.
 *
 * @apiSuccessExample {json} Válasz:
 *     HTTP/1.1 201 Created
 *     { "county": { "id": 22, "name": "Új megye" } }
 *
 * @apiError (401) Unauthenticated Hiányzó vagy érvénytelen token.
 * @apiError (422) ValidationError Hibás adatok.
 */

/**
 * @api {put} /api/counties/:id Megye módosítása
 * @apiName UpdateCounty
 * @apiGroup Counties
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization Bearer token.
 * @apiParam {Number} id Megye azonosító.
 * @apiBody {String{..255}} name Megye neve.
 *
 * @apiSuccessExample {json} Válasz:
 *     HTTP/1.1 200 OK
 *     { "county": { "id": 22, "name": "Módosított megye" } }
 *
 * @apiError (401) Unauthenticated Hiányzó vagy érvénytelen token.
 * @apiError (404) NotFound Nincs ilyen megye.
 * @apiError (422) ValidationError Hibás adatok.
 */

/**
 * @api {delete} /api/counties/:id Megye törlése
 * @apiDescription A megye településeit is törli.
 * @apiName DeleteCounty
 * @apiGroup Counties
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization Bearer token.
 * @apiParam {Number} id Megye azonosító.
 *
 * @apiSuccessExample {json} Válasz:
 *     HTTP/1.1 200 OK
 *     { "message": "County deleted" }
 *
 * @apiError (401) Unauthenticated Hiányzó vagy érvénytelen token.
 * @apiError (404) NotFound Nincs ilyen megye.
 */

/**
 * @api {get} /api/cities Települések listája
 * @apiName GetCities
 * @apiGroup Cities
 * @apiVersion 1.0.0
 *
 * @apiQuery {String} [search] Keresés településnévre (részlet) vagy irányítószámra (eleje).
 * @apiQuery {Number} [county_id] Szűrés megyére.
 *
 * @apiSuccess {Object[]} cities Települések.
 * @apiSuccess {Number} cities.id Azonosító.
 * @apiSuccess {Number} cities.county_id Megye azonosító.
 * @apiSuccess {String} cities.name Település neve.
 * @apiSuccess {String} cities.zip_code Irányítószám.
 * @apiSuccess {Object} cities.county Megye.
 * @apiSuccessExample {json} Válasz:
 *     HTTP/1.1 200 OK
 *     { "cities": [ { "id": 65, "county_id": 9, "name": "Debrecen", "zip_code": "4024", "county": { "id": 9, "name": "Hajdú-Bihar" } } ] }
 */

/**
 * @api {post} /api/cities Új település
 * @apiName CreateCity
 * @apiGroup Cities
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization Bearer token.
 * @apiBody {String{..255}} name Település neve.
 * @apiBody {String} zip_code Irányítószám (4 számjegy).
 * @apiBody {Number} county_id Megye azonosító.
 *
 * @apiSuccessExample {json} Válasz:
 *     HTTP/1.1 201 Created
 *     { "city": { "id": 151, "county_id": 7, "name": "Ráckeresztúr", "zip_code": "2465", "county": { "id": 7, "name": "Fejér" } } }
 *
 * @apiError (401) Unauthenticated Hiányzó vagy érvénytelen token.
 * @apiError (422) ValidationError Hibás adatok.
 */

/**
 * @api {put} /api/cities/:id Település módosítása
 * @apiName UpdateCity
 * @apiGroup Cities
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization Bearer token.
 * @apiParam {Number} id Település azonosító.
 * @apiBody {String{..255}} name Település neve.
 * @apiBody {String} zip_code Irányítószám (4 számjegy).
 * @apiBody {Number} county_id Megye azonosító.
 *
 * @apiSuccessExample {json} Válasz:
 *     HTTP/1.1 200 OK
 *     { "city": { "id": 151, "county_id": 7, "name": "Ráckeresztúr", "zip_code": "2465", "county": { "id": 7, "name": "Fejér" } } }
 *
 * @apiError (401) Unauthenticated Hiányzó vagy érvénytelen token.
 * @apiError (404) NotFound Nincs ilyen település.
 * @apiError (422) ValidationError Hibás adatok.
 */

/**
 * @api {delete} /api/cities/:id Település törlése
 * @apiName DeleteCity
 * @apiGroup Cities
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization Bearer token.
 * @apiParam {Number} id Település azonosító.
 *
 * @apiSuccessExample {json} Válasz:
 *     HTTP/1.1 200 OK
 *     { "message": "City deleted" }
 *
 * @apiError (401) Unauthenticated Hiányzó vagy érvénytelen token.
 * @apiError (404) NotFound Nincs ilyen település.
 */
