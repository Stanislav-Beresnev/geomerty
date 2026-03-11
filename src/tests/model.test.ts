import { describe, expect, it } from "vitest";
import { Model, type } from "../model";

describe("model", () => {
  it("define unexpectable", () => {
    const model = new Model();
    expect(() =>
      model.define({ absurd: {} } as any),
    ).toThrowErrorMatchingSnapshot();

    expect(() =>
      model.define({ repository: "absurd" } as any),
    ).toThrowErrorMatchingSnapshot();
  });

  it("define type", () => {
    const model = new Model();
    model.define(type("Test"));
    expect(model.typeRepository.getItemDefinitions("Test")).toEqual([]);
  });
});
