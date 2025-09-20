module.exports = {
  fakeRestApi: {
    input: "./swaggers/fake-api.yml",
    output: {
      target: "./app/generated/fakeRestApi.ts",
      client: "react-query", // generate TanStack Query hooks
      //   prettier: true,
      override: {
        mutator: {
          path: "./lib/axios-instance.ts",
          name: "customInstance",
        },
      },
    },
  },
};
