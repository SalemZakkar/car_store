import * as FS from 'fs';
import * as r from 'get-root-path';
import path from 'path';

function readFiles(): Array<Object> {
    const base = r.rootPath;
    const full = path.join(base, "/data/data.json");
    let data = FS.readFileSync(full, { encoding: 'utf8', flag: 'r' });
    if (data) {
        return JSON.parse(data);
    }
    return [];

}

function insertData(data: Object) {
    let old = readFiles();
    old.push(data);
    const base = r.rootPath;
    const full = path.join(base, "/data/data.json");
    FS.writeFileSync(full, JSON.stringify(old));
}

export { readFiles, insertData };