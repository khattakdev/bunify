import { describe, expect, test } from "bun:test";
import { matchRoute } from "../../src/core/router";

describe("Basic URL", () => {
  test("should return true for empty pattern", () => {
    const result = matchRoute("", "/");
    expect(result).toBe(true);
  });

  test("should return true for '/'", () => {
    const result = matchRoute("/", "/");
    expect(result).toBe(true);
  });

  test("/ should not match with /abcd", () => {
    const result = matchRoute("/", "/abcd");
    expect(result).toBe(false);
  });

  test("/about should match with /about", () => {
    const result = matchRoute("/about", "/about");
    expect(result).toBe(true);
  });
});

describe("RegEx", () => {
  test("/ab+cd should return true for abbcd", () => {
    const result = matchRoute("ab+cd", "/abcd");
    expect(result).toBe(true);
  });

  test("/ab+cd should return true for abbbcd", () => {
    const result = matchRoute("ab+cd", "/abbbcd");
    expect(result).toBe(true);
  });

  test("/ab?cd should return true for abcd", () => {
    const result = matchRoute("ab?cd", "/abcd");
    expect(result).toBe(true);
  });

  test("/ab?cd should return true for abcd", () => {
    const result = matchRoute("ab?cd", "/acd");
    expect(result).toBe(true);
  });

  test("/a(bc)?d should return true for ad", () => {
    const result = matchRoute("a(bc)?d", "/ad");
    expect(result).toBe(true);
  });

  test("/a(bc)?d should return true for abcd", () => {
    const result = matchRoute("a(bc)?d", "/abcd");
    expect(result).toBe(true);
  });
});
