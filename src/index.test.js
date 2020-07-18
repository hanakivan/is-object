import isObject from './index';

test('tests variables', () => {
    expect(isObject({})).toBeTruthy();
    expect(isObject({name: "Ivan"})).toBeTruthy();
    expect(isObject([])).toBeFalsy();
    expect(isObject(null)).toBeFalsy();
    expect(isObject(false)).toBeFalsy();
    expect(isObject(true)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
    expect(isObject("string")).toBeFalsy();
    expect(isObject(1)).toBeFalsy();
    expect(isObject(Date)).toBeFalsy();
    expect(isObject(isNaN)).toBeFalsy();
    expect(isObject(isNaN())).toBeFalsy();
    expect(isObject(Infinity)).toBeFalsy();
    expect(isObject(function () {})).toBeFalsy();
});