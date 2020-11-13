![npm (scoped)](https://img.shields.io/npm/v/@akp-13/greetings)

# Multi Language Greeting App

Find out how to say 'hello' in a range of different languages.

Users can generate

-   a random language's greeting
    -   `greet` or `greet --lang`
-   the greeting for a language of their choice
    -   `greet --lang ISO-Code`

![CLI Interface](https://res.cloudinary.com/de8a23w1z/image/upload/v1605203258/greetings/Screenshot_2020-11-12_at_17.47.23_dyqchf.png "CLI Interface")

## Installation & Usage

### Global Installation

-   `npm i -g @akp-13/greetings`
-   This will allow you to then run `greet` and generate a random language's greeting translation from anywhere in you terminal

### Local Installation

-   `npm i @akp-13/greetings`
-   To use locally, you will need to add in scripts into the package.json.
-   ```javascript
            {
            "scripts": {
                "greet-es": "greet --lang es"
            }
        }
    ```
    Will allow you to run `greet --lang es` in the terminal and recieve `Hola!`

## Supported Languages

More coming soon!

|  Language  | ISO-Code |
| :--------: | :------: |
|  Croatian  |    hr    |
|   Czech    |    cs    |
|   Danish   |    da    |
|   Dutch    |    nl    |
|  English   |    en    |
|  Estonian  |    et    |
|  Finnish   |    fi    |
|   French   |    fr    |
|   German   |    de    |
| Hungarian  |    hu    |
| Icelandic  |    is    |
|  Italian   |    it    |
| Lithuanian |    lt    |
| Portuguese |    pt    |
|  Spanish   |    es    |
|  Swedish   |    sv    |
|  Turkish   |    tr    |

### Aknowledgements

-   [Uday Hiwarale's](https://medium.com/@thatisuday) article [Creating CLI Executable global npm module](https://medium.com/jspoint/creating-cli-executable-global-npm-module-5ef734febe32)

-   Translations from [Google Translate](https://translate.google.co.uk/)

-   ISO Codes from [Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
