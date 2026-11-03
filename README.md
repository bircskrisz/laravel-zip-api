# Irányítószám REST API

| Metódus | Végpont | Leírás | Token |
|---|---|---|:---:|
| POST | `/api/login` | Bejelentkezés, token kérése | – |
| GET | `/api/counties` | Megyék listája | – |
| POST | `/api/counties` | Új megye | ✔ |
| PUT | `/api/counties/{id}` | Megye módosítása | ✔ |
| DELETE | `/api/counties/{id}` | Megye törlése | ✔ |
| GET | `/api/cities` | Települések listája (`?search=`, `?county_id=`) | – |
| POST | `/api/cities` | Új település | ✔ |
| PUT | `/api/cities/{id}` | Település módosítása | ✔ |
| DELETE | `/api/cities/{id}` | Település törlése | ✔ |
