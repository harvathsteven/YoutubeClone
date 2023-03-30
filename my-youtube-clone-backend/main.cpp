#include <crow.h>
#include <sqlite3.h>

int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/")
        ([]() {
        return "Welcome to My YouTube Clone!";
            });

    app.port(8080).run();

    return 0;
}
