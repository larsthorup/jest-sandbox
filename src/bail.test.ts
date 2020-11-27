let error = null;

const that = (name, body) => {
  it(name, async () => {
    if (error) {
      throw new Error("skipped because of previous error");
    }
    try {
      console.log(`→ ${name}`);
      await body();
      console.log(`√ ${name}`);
    } catch (err) {
      console.log(`× ${name}`);
      error = err;
      throw err;
    }
  });
};

describe("bail", () => {
  that("should pass", async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(2 + 2).toEqual(4);
  });

  that("should fail", async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(2 + 3).toEqual(4);
  });

  that("should never run", async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(2 + 3).toEqual(5);
  });
});
