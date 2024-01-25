/**
 * @typedef {null|boolean|number|string|JSONValue[]|{ [key: string]: JSONValue }} JSONValue
 * @typedef {Record<string, JSONValue>|Array<JSONValue>} Obj
 * 
 * @param {Obj} obj
 * @returns {Obj}
 */
function compactObject(obj) {
  return dfs(obj);
}

/**
 * @param {JSONValue} value
 * @returns {JSONValue}
 */
function dfs(value) {
  if (value === null) {
    return null;
  }
  if (Array.isArray(value)) {
    return value.filter(Boolean).map(dfs);
  }
  if (typeof value === 'object') {
    for (const key of Object.keys(value)) {
      if (Boolean(value[key])) {
        value[key] = dfs(value[key]);
      } else {
        delete value[key];
      }
    }
  }
  return value;
}