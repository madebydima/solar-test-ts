// eslint-disable-next-line
const regString = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;

export default function (json) {
    json = JSON.stringify(json, undefined, 4);
    json = json
        .replace(/&/g, "&")
        .replace(/</g, "<")
        .replace(/>/g, ">");
    return json.replace(regString, match => {
        let cls = "number";
        let color = "";

        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = "key";
            } else {
                cls = "string";
                if (/#/.test(match)) {
                    color =
                        '<span class="color" style="background-color: ' +
                        match.replace('"', "") +
                        "></span>";
                }
            }
        } else if (/true|false/.test(match)) {
            cls = "boolean";
        } else if (/null/.test(match)) {
            cls = "null";
        }
        return '<span class="' + cls + '">' + color + match + "</span>";
    });
}
