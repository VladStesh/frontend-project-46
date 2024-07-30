### Hexlet tests and linter status:
[![Actions Status](https://github.com/VladStesh/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/VladStesh/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/edcb5ff58d4c3300c39d/maintainability)](https://codeclimate.com/github/VladStesh/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/edcb5ff58d4c3300c39d/test_coverage)](https://codeclimate.com/github/VladStesh/frontend-project-46/test_coverage)

# Программа "Вычислитель отличий" // DiffChecker CLI tool

## Описание

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

### Возможности утилиты:
* Обращение к файлам через абсолютный и относительный пути
* Поддержка разных входных форматов: yaml, json
* Генерация отчета в виде plain text, stylish и json

## Установка:
* Установите последнюю версию [Node.js](https://nodejs.org/en/download/).
* Скопируйте [этот репозиторий](https://github.com/VladStesh/frontend-project-46) себе на компьютер.
* Добавьте зависимости командой ``make install`` или ``npm install``.

### Cравнение плоских объектов .json

[![asciicast](https://asciinema.org/a/8gn4vb5LbGKH1kgMy78OnFw3r.svg)](https://asciinema.org/a/8gn4vb5LbGKH1kgMy78OnFw3r)sudo apt install asciinema

### Cравнение плоских объектов .yaml

[![asciicast](https://asciinema.org/a/R45vEyvLEcsQnWO1vdbe5wxpd.svg)](https://asciinema.org/a/R45vEyvLEcsQnWO1vdbe5wxpd)sudo apt install asciinema

### Пример запуска утилиты (сравнение json файлов с вложенными структурами) с выводом результатов в формате stylish
[![asciicast](https://asciinema.org/a/C2sYiacel8W1d0BTkKkrAcxtJ.svg)](https://asciinema.org/a/C2sYiacel8W1d0BTkKkrAcxtJ)sudo apt install asciinema

### Пример запуска утилиты (сравнение json файлов с вложенными структурами) с выводом результатов в формате plain
[![asciicast](https://asciinema.org/a/jwkFWGpYHstbZmyeOOJC3O3mx.svg)](https://asciinema.org/a/jwkFWGpYHstbZmyeOOJC3O3mx)sudo apt install asciinema